import { Image, LinkField } from './prismic';
import { RichTextBlock } from 'prismic-reactjs';
import SEO from './SEO';

export type CarouselSlice = {
  slice_type: 'image_gallery';
  items: {
    gallery_image: Image;
    image_captions: RichTextBlock[];
  }[];
};

export type TextSlice = {
  slice_type: 'texto';
  primary: {
    title: RichTextBlock[];
    text: RichTextBlock[];
  };
};

export type ImageSlice = {
  slice_type: 'imagem';
  primary: {
    image: Image;
    caption: string;
  };
};

export type ImageTextSlice = {
  slice_type: 'imagem + texto';
  primary: {
    image: Image;
    card_title: RichTextBlock[];
    text: RichTextBlock[];
    cta: RichTextBlock[];
    button_link: LinkField;
  };
};

export type VideoSlice = {
  slice_type: 'vinheta';
  primary: {
    movie: LinkField;
    caption: string;
  };
};

type ProjectData = {
  project_cover: Image;
  project_name: RichTextBlock[];
  project_details: RichTextBlock[];
  cat_a: boolean;
  cat_b: boolean;
  cat_c: boolean;
  project_link: { link_name: string; link_url: LinkField; link_text: RichTextBlock[] };
  body: (CarouselSlice | TextSlice | ImageSlice | ImageTextSlice | VideoSlice)[];
} & SEO;

export default ProjectData;
