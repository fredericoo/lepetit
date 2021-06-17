import { Document } from '@prismicio/client/types/documents';
import { Container, HStack, Box } from '@chakra-ui/react';
import DocLink from 'app/components/DocLink';
import Logo from './Logo';
import { MenuProps } from './types';

const NavbarLarge: React.FC<MenuProps> = ({ menu }) => (
  <Box as="nav" data-testid="navbar-large" position="fixed" w="100%" top={0} zIndex="sticky">
    <Container maxW="container.lg">
      <HStack spacing={4} py={3}>
        <Box>
          <Logo />
        </Box>

        <Box ml="auto" as="ul">
          {menu?.map(({ label, link }: { label: string; link: Document }) => (
            <li key={label}>
              <DocLink doc={link}>{label}</DocLink>
            </li>
          ))}
        </Box>
      </HStack>
    </Container>
  </Box>
);

export default NavbarLarge;
