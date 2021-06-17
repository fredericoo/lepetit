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
      mixBlendMode="multiply"
      drag={drag}
      cursor="grab"
      _active={{ cursor: 'grabbing' }}
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
      borderTopRadius={rounded != 'bottom' ? 'full' : 'none'}
      borderBottomRadius={rounded != 'top' ? 'full' : 'none'}
      bg={color}
      w="100%"
      h="0px"
      pb={`${100 / ratio}%`}
    />
  );
};

export default DecoShape;
