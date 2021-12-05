import { Container, HStack, Box, Button, useDisclosure, Flex } from '@chakra-ui/react';
import DocLink from 'app/components/DocLink';
import Logo from '../Logo';
import { MenuProps } from './types';
import { useEffect, useRef } from 'react';
import IconClose from '../Icon/IconClose';
import IconMenu from '../Icon/IconMenu';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDimensions } from 'app/lib/hooks/useDimensions';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2}px at 36px 28px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at 36px 28px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const MotionBox = motion(Box);

const NavbarSmall: React.FC<MenuProps> = ({ menu, currentPath }) => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const containerRef = useRef<HTMLElement | null>(null);
  const { height } = useDimensions(containerRef);
  useEffect(() => onClose(), [currentPath, onClose]);

  return (
    <Box as="nav" data-testid="navbar-small" position="sticky" top={0} bg="cream" zIndex="popover">
      <MotionBox
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        pos="absolute"
        left={0}
        h="100vh"
        w="300px"
        pointerEvents="none"
      >
        <MotionBox pos="absolute" left={0} top={0} w="100%" h="100%" bg="yellow" variants={sidebar}>
          <Container maxW="container.lg" py="8px">
            <Button p={2} data-testid="toggle-menu" onClick={onToggle} pointerEvents="all">
              {isOpen ? <IconClose w="1.5rem" /> : <IconMenu w="1.5rem" />}
            </Button>
            <Flex direction="column" pointerEvents="all">
              <Link href="/" passHref>
                <Box
                  alignSelf="flex-start"
                  as="a"
                  p={3}
                  fontFamily="display"
                  letterSpacing="tight"
                  fontWeight="400"
                  fontSize="4xl"
                >
                  Home
                </Box>
              </Link>
              {menu?.map(({ header_name, header_page }) => (
                <DocLink key={header_name} doc={header_page} passHref>
                  <Box
                    alignSelf="flex-start"
                    as="a"
                    p={3}
                    fontFamily="display"
                    letterSpacing="tight"
                    fontWeight="400"
                    fontSize="4xl"
                  >
                    {header_name}
                  </Box>
                </DocLink>
              ))}
            </Flex>
          </Container>
        </MotionBox>
      </MotionBox>
      <Container maxW="container.lg">
        <HStack spacing={4} py={3} justify="center">
          <Link href="/" passHref>
            <Box w="81px">
              <Logo />
            </Box>
          </Link>
        </HStack>
      </Container>
    </Box>
  );
};

export default NavbarSmall;
