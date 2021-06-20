import { Document } from '@prismicio/client/types/documents';
import useSWR from 'swr';
import { client } from 'app/lib/prismic';
import { useMediaQuery } from '@chakra-ui/react';
import NavbarLarge from './NavbarLarge';
import NavbarSmall from './NavbarSmall';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { MenuProps } from './types';

const fetcher = async (): Promise<Document> => await client.getSingle('cabecalho_rodape', {});

const Navbar: React.FC = () => {
  const [isLarge] = useMediaQuery('(min-width: 768px)');
  const NavbarComponent = useRef<React.FC<MenuProps> | null>(null);
  useEffect(() => {
    if (typeof window !== 'undefined')
      NavbarComponent.current = isLarge ? NavbarLarge : NavbarSmall;
  }, [isLarge]);

  const { data: config } = useSWR('config', fetcher);
  const { asPath } = useRouter();

  if (!NavbarComponent.current) return null;
  return <NavbarComponent.current menu={config?.data?.menu} currentPath={asPath} />;
};

export default Navbar;
