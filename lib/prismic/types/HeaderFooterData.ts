import { Image } from './prismic';
import type { Document } from '@prismicio/client/types/documents';
import type { RichTextBlock } from 'prismic-reactjs';

export type MenuItem = { header_name: string; header_page: Document };

type HeaderFooterData = {
  header_logo: Image;
  header_link: MenuItem[];
  footer_logo: Image;
  footer_info: { footer_contact: string; footer_detail: RichTextBlock[] }[];
  footer_text: RichTextBlock[];
};

export default HeaderFooterData;
