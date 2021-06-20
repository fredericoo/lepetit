import type PrismicDocument from 'app/lib/prismic/types/Document';
import type HeaderFooterData from 'app/lib/prismic/types/HeaderFooterData';
import type { MenuProps } from './types';

import useSWR from 'swr';
import { client } from 'app/lib/prismic';
import { useMediaQuery } from '@chakra-ui/react';
import NavbarLarge from './NavbarLarge';
import NavbarSmall from './NavbarSmall';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

const fetcher = async (): Promise<PrismicDocument<HeaderFooterData>> =>
  await client.getSingle('cabecalho_rodape', {});

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
  return <NavbarComponent.current menu={config?.data?.header_link} currentPath={asPath} />;
};

export default Navbar;
