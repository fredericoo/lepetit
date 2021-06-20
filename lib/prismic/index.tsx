import Prismic from '@prismicio/client';
import { Document } from '@prismicio/client/types/documents';
import { Link } from 'prismic-reactjs';

export const apiEndpoint = 'https://lepetit.cdn.prismic.io/api/v2';

export const hrefResolver = (doc: Document | Link): string => {
  if ('link_type' in doc && doc.link_type === 'Web' && doc.url) return doc.url;
  switch (doc.type) {
    case 'home':
      return `/`;
    case 'membro':
      return `/equipe/${doc.uid}`;
    case 'post':
      return `/posts/${doc.uid}`;
    default:
      return `/${doc.uid}`;
  }
};

export const client = Prismic.client(apiEndpoint);

export const getHeaderAndFooter = async (): Promise<Document> => {
  return await client.getSingle('cabecalho_rodape', {});
};
