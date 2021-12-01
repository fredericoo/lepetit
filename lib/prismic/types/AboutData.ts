import { RichTextBlock } from 'prismic-reactjs';
import { Image } from './prismic';
import SEO from './SEO';

type AboutData = {
  about_title: RichTextBlock[];
  about_text: RichTextBlock[];
  about_team: { team_name: RichTextBlock[]; team_bio: RichTextBlock[]; team_image: Image }[];
} & SEO;

export default AboutData;
