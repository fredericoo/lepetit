import { RichTextBlock } from 'prismic-reactjs';
import SEO from './SEO';

type HomeData = {
  home_title: RichTextBlock[];
  home_text: RichTextBlock[];
  title: RichTextBlock[];
  text: RichTextBlock[];
} & SEO;

export default HomeData;
