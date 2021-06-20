import ProjectData from 'app/lib/prismic/types/ProjectDocument';
import { LinkBox, Box, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import Picture from 'app/components/Picture';

type ProjectThumbProps = {
  data: Pick<ProjectData, 'project_name' | 'project_cover' | 'cat_a' | 'cat_b' | 'cat_c'>;
};

const categoryNames = ['Produção Editorial', 'Produção Audiovisual', 'Mostra de Cinema'];

const ProjectThumb: React.FC<ProjectThumbProps> = ({ data }) => {
  const categories = [data.cat_a, data.cat_b, data.cat_c].map((isActive, index) => ({
    isActive,
    name: categoryNames[index],
  }));

  return (
    <LinkBox bg="cream">
      <Picture
        width={1080}
        height={1080 * 1.6787439614}
        src={data.project_cover.url}
        alt={data.project_cover.alt}
        objectFit="cover"
        layout="responsive"
        bg="pink"
      />
      <Box color="charcoal" p={6}>
        <Text fontSize="xs" textTransform="uppercase" letterSpacing="wider" fontWeight="700">
          {categories
            .filter((cat) => cat.isActive)
            .map((cat) => cat.name)
            .join(', ')}
        </Text>
        <LinkOverlay>
          <Heading fontWeight="400" size="lg" as="h3" letterSpacing="tight">
            {RichText.asText(data.project_name)}
          </Heading>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
};

export default ProjectThumb;
