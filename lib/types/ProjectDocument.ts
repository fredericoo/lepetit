import { Image, LinkField } from './prismic';
import { RichTextBlock } from 'prismic-reactjs';
import SEO from './SEO';

export type CarouselSlice = {
  gallery_image: Image;
  image_captions: RichTextBlock[];
};

export type TextSlice = {
  title: RichTextBlock[];
  text: RichTextBlock[];
};

export type ImageSlice = {
  image: Image;
  caption: string;
};

export type ImageTextSlice = {
  image: Image;
  card_title: RichTextBlock[];
  text: RichTextBlock[];
  cta: RichTextBlock[];
  button_link: LinkField;
};

export type VideoSlice = {
  movie: LinkField;
  caption: string;
};

type ProjectData = {
  project_cover: Image;
  project_name: RichTextBlock[];
  project_details: RichTextBlock[];
  cat_a: boolean;
  cat_b: boolean;
  cat_c: boolean;
  project_link: { link_name: string; link_url: LinkField; link_text: RichTextBlock[] };
} & SEO;

export default ProjectData;
