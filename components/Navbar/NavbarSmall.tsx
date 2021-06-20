import {
  Container,
  HStack,
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import DocLink from 'app/components/DocLink';
import Logo from '../Logo';
import { MenuProps } from './types';
import { useEffect } from 'react';
import IconClose from '../Icon/IconClose';
import IconMenu from '../Icon/IconMenu';

const NavbarSmall: React.FC<MenuProps> = ({ menu, currentPath }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => onClose(), [currentPath, onClose]);

  return (
    <Box as="nav" data-testid="navbar-small" position="sticky" top={0} bg="cream" zIndex="sticky">
      <Container maxW="container.lg">
        <HStack spacing={4} py={3}>
          <Box flex="1">
            <Button p={2} data-testid="toggle-menu" onClick={onOpen}>
              <IconMenu w="1.5rem" />
            </Button>
          </Box>
          <Box maxW="81px">
            <Logo />
          </Box>
          <Box display="flex" flex="1"></Box>
        </HStack>
      </Container>
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay bg="orange" transform={isOpen ? 'none' : 'translateY(-100%)'} />
        <DrawerContent bg="cream" boxShadow="none" zIndex="docked">
          <DrawerHeader p={3}>
            <Button p={2} onClick={onClose}>
              <IconClose w="1.5rem" />
            </Button>
          </DrawerHeader>
          <DrawerBody p={3}>
            {menu?.map(({ header_name, header_page }) => (
              <DocLink key={header_name} doc={header_page} passHref>
                <Box
                  display="block"
                  as="a"
                  p={3}
                  bg="orange"
                  mb="2px"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  color="cream"
                  fontWeight="bold"
                >
                  {header_name}
                </Box>
              </DocLink>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarSmall;
