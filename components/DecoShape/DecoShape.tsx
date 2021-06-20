import { Box, Center } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Ref } from 'react';

type DecoShapeProps = {
  ratio: number;
  color: string;
  rounded?: 'full' | 'top' | 'bottom';
  drag?: boolean;
  dragConstraints?: Ref<HTMLElement>;
  label?: string;
};

const MotionBox = motion(Box);

const DecoShape: React.FC<DecoShapeProps> = ({
  ratio,
  color,
  rounded = 'full',
  drag = false,
  dragConstraints,
  label,
}) => {
  return (
    <MotionBox
      drag={drag}
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
    >
      <Box
        cursor={drag ? 'grab' : 'auto'}
        _active={{ cursor: drag ? 'grabbing' : 'auto' }}
        borderTopRadius={rounded != 'bottom' ? 'full' : 'none'}
        borderBottomRadius={rounded != 'top' ? 'full' : 'none'}
        css={{ transition: '.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        bg={color}
        w="100%"
        h="0px"
        pb={`${100 / ratio}%`}
        pos="relative"
      >
        {label && (
          <Center
            textTransform="uppercase"
            letterSpacing="wider"
            color="cream"
            pos="absolute"
            w="100%"
            h="100%"
          >
            {label}
          </Center>
        )}
      </Box>
    </MotionBox>
  );
};

export default DecoShape;
