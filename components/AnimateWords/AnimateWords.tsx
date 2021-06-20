import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const motionBlock = {
  hidden: {},
  visible: {
    transition: {
      delay: 1,
      staggerChildren: 0.08,
    },
  },
};
const motionWord = {
  hidden: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 130,
      damping: 10,
    },
  },
};

const MotionBox = motion(Box);

const AnimateWords: React.FC = ({ children }) => {
  if (typeof children !== 'string') return null;
  const words = children.split(' ');
  return (
    <MotionBox variants={motionBlock} initial="hidden" animate="visible">
      {words.map((word, key) => (
        <Box as="span" key={key} overflow="hidden" display="inline-block" py=".2em" my="-.3em">
          <MotionBox as="span" display="inline-block" variants={motionWord} mr=".2em">
            {word}
          </MotionBox>
        </Box>
      ))}
    </MotionBox>
  );
};

export default AnimateWords;
