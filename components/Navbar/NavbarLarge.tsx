import { Container, HStack, Box, Button } from '@chakra-ui/react';
import DocLink from 'app/components/DocLink';
import Logo from '../Logo';
import { MenuProps } from './types';

const NavbarLarge: React.FC<MenuProps> = ({ menu }) => (
  <Box
    as="nav"
    data-testid="navbar-large"
    position="sticky"
    top={0}
    zIndex="sticky"
    _before={{
      bg: 'cream',
      content: '""',
      display: 'block',
      position: 'absolute',
      w: '100%',
      h: '100%',
      transform: 'translateY(-100%)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      zIndex: -1,
    }}
    _hover={{ _before: { transform: 'none' } }}
  >
    <Container maxW="container.lg">
      <HStack spacing={4} py={3} justifyContent="space-between">
        <Box w="81px">
          <Logo />
        </Box>

        <HStack as="ul" spacing={4}>
          {menu?.map(({ header_name, header_page }) => (
            <DocLink key={header_name} doc={header_page} passHref>
              <Button variant="link" as="a">
                {header_name}
              </Button>
            </DocLink>
          ))}
        </HStack>
      </HStack>
    </Container>
  </Box>
);

export default NavbarLarge;
