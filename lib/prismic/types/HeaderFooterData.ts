import { Image } from './prismic';
import type { Document } from '@prismicio/client/types/documents';
import type { RichTextBlock } from 'prismic-reactjs';

type HeaderFooterData = {
  header_logo: Image;
  header_link: { header_name: string; header_page: Document }[];
  footer_logo: Image;
  footer_info: { footer_contact: string; footer_detail: string }[];
  footer_text: RichTextBlock[];
};

export default HeaderFooterData;
