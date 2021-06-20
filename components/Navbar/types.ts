import HeaderFooterData from 'app/lib/prismic/types/HeaderFooterData';

export type MenuProps = {
  currentPath: string;
  menu: HeaderFooterData['header_link'];
};
