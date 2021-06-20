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
  CloseButton,
} from '@chakra-ui/react';
import DocLink from 'app/components/DocLink';
import Logo from '../Logo';
import { MenuProps } from './types';
import { useEffect } from 'react';

const NavbarSmall: React.FC<MenuProps> = ({ menu, currentPath }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => onClose(), [currentPath, onClose]);

  return (
    <Box as="nav" data-testid="navbar-small" position="sticky" top={0} bg="cream" zIndex="sticky">
      <Container maxW="container.lg">
        <HStack spacing={4} py={3}>
          <Box flex="1">
            <Button data-testid="toggle-menu" variant="outline" size="sm" onClick={onOpen}>
              Menu
            </Button>
          </Box>
          <Box>
            <Logo />
          </Box>
          <Box display="flex" flex="1"></Box>
        </HStack>
      </Container>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader p={3}>
            <CloseButton onClick={onClose} />
          </DrawerHeader>
          <DrawerBody p={3}>
            <Box borderRadius="md" overflow="hidden">
              {menu?.map(({ header_name, header_page }) => (
                <DocLink key={header_name} doc={header_page} passHref>
                  <Box display="block" as="a" p={3} bg="gray.100" mb="1px">
                    {header_name}
                  </Box>
                </DocLink>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavbarSmall;
