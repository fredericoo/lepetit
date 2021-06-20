import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Ref } from 'react';

type DecoShapeProps = {
  ratio: number;
  color: string;
  rounded?: 'full' | 'top' | 'bottom';
  drag?: boolean;
  dragConstraints?: Ref<HTMLElement>;
};

const MotionBox = motion(Box);

const DecoShape: React.FC<DecoShapeProps> = ({
  ratio,
  color,
  rounded = 'full',
  drag = false,
  dragConstraints,
}) => {
  return (
    <MotionBox
      drag={drag}
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
    >
      <Box
        cursor="grab"
        _active={{ cursor: 'grabbing' }}
        borderTopRadius={rounded != 'bottom' ? 'full' : 'none'}
        borderBottomRadius={rounded != 'top' ? 'full' : 'none'}
        css={{ transition: '.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        bg={color}
        w="100%"
        h="0px"
        pb={`${100 / ratio}%`}
      />
    </MotionBox>
  );
};

export default DecoShape;
