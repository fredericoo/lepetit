import ProjectData from 'app/lib/prismic/types/ProjectDocument';
import { LinkBox, Box, Text, Heading, LinkOverlay } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import Picture from 'app/components/Picture';
import Link from 'next/link';

type ProjectThumbProps = {
  href: string;
  data: Pick<ProjectData, 'project_name' | 'project_cover' | 'cat_a' | 'cat_b' | 'cat_c'>;
};

const categoryNames = ['Produção Editorial', 'Produção Audiovisual', 'Mostra de Cinema'];

const ProjectThumb: React.FC<ProjectThumbProps> = ({ data, href = '/' }) => {
  const categories = [data.cat_a, data.cat_b, data.cat_c].map((isActive, index) => ({
    isActive,
    name: categoryNames[index],
  }));

  return (
    <Box bg="orange">
      <LinkBox bg="cream" _hover={{ transform: 'rotate(4deg)' }} h="100%">
        <Picture
          width={1080}
          height={1080 * 1.6787439614}
          src={data.project_cover.url}
          alt={data.project_cover.alt}
          objectFit="cover"
          layout="responsive"
          bg="pink"
        />
        <Box color="charcoal" p={{ base: 4, md: 6 }}>
          <Text fontSize="xs" textTransform="uppercase" letterSpacing="wider" fontWeight="700">
            {categories
              .filter((cat) => cat.isActive)
              .map((cat) => cat.name)
              .join(', ')}
          </Text>
          <Link href={href} passHref>
            <LinkOverlay>
              <Heading fontWeight="400" size="lg" as="h3" letterSpacing="tight" lineHeight="1">
                {RichText.asText(data.project_name)}
              </Heading>
            </LinkOverlay>
          </Link>
        </Box>
      </LinkBox>
    </Box>
  );
};

export default ProjectThumb;
