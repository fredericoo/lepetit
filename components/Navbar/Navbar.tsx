import { Document } from '@prismicio/client/types/documents';
import useSWR from 'swr';
import { client } from 'app/lib/prismic';
import { useMediaQuery } from '@chakra-ui/react';
import NavbarLarge from './NavbarLarge';
import NavbarSmall from './NavbarSmall';
import { useRouter } from 'next/router';

const fetcher = async (): Promise<Document> => await client.getSingle('cabecalho_rodape', {});

const Navbar: React.FC = () => {
  const [isLarge] = useMediaQuery('(min-width: 768px)');
  const { data: config } = useSWR('config', fetcher);
  const { asPath } = useRouter();

  const Component = isLarge ? NavbarLarge : NavbarSmall;

  return <Component menu={config?.data?.menu} currentPath={asPath} />;
};

export default Navbar;
