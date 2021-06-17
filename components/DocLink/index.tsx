import { default as NextLink, LinkProps } from 'next/link';
import { hrefResolver } from 'lib/prismic';
import { Document } from '@prismicio/client/types/documents';

type DocLinkProps = {
  doc: Document;
} & Omit<LinkProps, 'href'>;

const DocLink: React.FC<DocLinkProps> = ({ doc, ...props }) => {
  const href = hrefResolver(doc);
  return <NextLink href={href} {...props} />;
};

export default DocLink;
