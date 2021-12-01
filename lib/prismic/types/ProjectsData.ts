import { RichTextBlock } from 'prismic-reactjs';
import SEO from './SEO';

type ProjectsData = {
  title: RichTextBlock[];
} & SEO;

export default ProjectsData;
