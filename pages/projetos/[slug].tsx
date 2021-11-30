import { client } from 'app/lib/prismic';
import PrismicDocument from 'app/lib/prismic/types/Document';
import ProjectData from 'app/lib/prismic/types/ProjectDocument';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Box, Container, Text, SimpleGrid } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';

type ProjectPageProps = {
  project?: PrismicDocument<ProjectData>;
};
const colors = ['blue', 'pink', 'yellow', 'orange', 'cream'];
const getColorFromIndex = (index: number): string => colors[Math.floor(index % colors.length)];
const rightSideStyles = {
  content: '""',
  display: { base: 'none', md: 'block' },
  position: 'absolute',
  right: '0',
  top: '0',
  height: '100%',
  width: '50%',
};

const ProjectPage: React.VFC<ProjectPageProps> = ({ project }) => {
  if (!project) return null;

  const rightSideColor = getColorFromIndex(project.id.charCodeAt(5));
  const shapeCount = Math.floor(project.id.charCodeAt(4) % 2) + 2;

  return (
    <>
      <Box
        bg={getColorFromIndex(project.id.charCodeAt(3))}
        py={32}
        position="relative"
        _before={{ ...rightSideStyles, bg: rightSideColor }}
      >
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box pr={{ base: 0, md: 8 }} alignSelf="center">
              <Text as="h1" fontSize="5xl" lineHeight="1.1" fontFamily="display" mb={8}>
                {RichText.asText(project.data.project_name)}
              </Text>
              <Text fontFamily="heading">
                <RichText render={project.data.project_details} />
              </Text>
            </Box>
            <Box
              bg={{ base: rightSideColor, md: 'transparent' }}
              zIndex={1}
              position={{ base: 'relative', md: 'static' }}
              pb="100%"
            >
              {new Array(shapeCount).fill(0).map((_, index) => (
                <Box
                  key={index}
                  top={`${25 + (index - shapeCount + 3) * 12.5 - 50 / shapeCount / 2}%`}
                  right={`${25 - 50 / shapeCount / 2}%`}
                  borderRadius="full"
                  pb={`${50 / shapeCount}%`}
                  w={`${50 / shapeCount}%`}
                  bg={getColorFromIndex(project.id.charCodeAt(index + 3) + index)}
                  position="absolute"
                  transform={
                    project.id.charCodeAt(index + 1) % 2 === 0 ? 'rotate(45deg)' : undefined
                  }
                  borderTopRadius={project.id.charCodeAt(index + 2) % 2 === 0 ? 'full' : 0}
                  borderBottomRadius={project.id.charCodeAt(index + 3) % 2 === 0 ? 'full' : 0}
                  mixBlendMode={project.id.charCodeAt(index) % 5 === 0 ? 'normal' : 'multiply'}
                />
              ))}
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Container maxW="container.lg">{project.data.cat_a}</Container>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await client.query('[at(document.type, "projeto")]');
  return {
    paths: projects.results
      .map((project) => ({
        params: { slug: project.uid },
      }))
      .filter(Boolean),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== 'string') return { props: {} };

  const project = await client.getByUID('projeto', params.slug, {});

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
