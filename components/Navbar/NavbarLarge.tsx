import { Container, HStack, Box } from '@chakra-ui/react';
import DocLink from 'app/components/DocLink';
import Logo from '../Logo';
import { MenuProps } from './types';

const NavbarLarge: React.FC<MenuProps> = ({ menu }) => (
  <Box as="nav" data-testid="navbar-large" position="sticky" top={0} zIndex="sticky">
    <Container maxW="container.lg">
      <HStack spacing={4} py={3}>
        <Box w="81px">
          <Logo />
        </Box>

        <Box ml="auto" as="ul">
          {menu?.map(({ header_name, header_page }) => (
            <li key={header_name}>
              <DocLink doc={header_page}>{header_name}</DocLink>
            </li>
          ))}
        </Box>
      </HStack>
    </Container>
  </Box>
);

export default NavbarLarge;
