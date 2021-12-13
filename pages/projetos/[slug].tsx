import { client } from 'app/lib/prismic';
import PrismicDocument from 'app/lib/prismic/types/Document';
import ProjectData from 'app/lib/prismic/types/ProjectDocument';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Box, Container, Text, SimpleGrid } from '@chakra-ui/react';
import { RichText } from 'prismic-reactjs';
import ProjectCover from 'app/components/ProjectCover';
import Carousel from 'app/components/Carousel';
import Picture from 'app/components/Picture';

type ProjectPageProps = {
  project?: PrismicDocument<ProjectData>;
};

const ProjectPage: React.VFC<ProjectPageProps> = ({ project }) => {
  if (!project) return null;

  return (
    <>
      <Box position="relative">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="0">
          <Box
            px={4}
            py={8}
            alignSelf="center"
            justifySelf="end"
            maxW="calc(var(--chakra-sizes-container-lg) / 2)"
          >
            <Text as="h1" fontSize="5xl" lineHeight="1.1" fontFamily="display" mb={8}>
              {RichText.asText(project.data.project_name)}
            </Text>
            <Text fontFamily="heading">
              <RichText render={project.data.project_details} />
            </Text>
          </Box>
          <ProjectCover seed={project.id} />
        </SimpleGrid>
      </Box>
      <Container maxW="container.lg">
        {project.data.body.map((block, index) => {
          switch (block.slice_type) {
            case 'image_gallery':
              return (
                <Box key={index} py={8}>
                  <Carousel width="100%" height="300px">
                    {block.items.map((item, index) => {
                      return (
                        <Box key={index} bg="white">
                          <Picture
                            objectFit="contain"
                            src={item.gallery_image.url}
                            alt={item.gallery_image.alt}
                            width={1000}
                            height={1000}
                            layout="intrinsic"
                          />

                          <Text textAlign="center">
                            <RichText render={item.image_captions} />
                          </Text>
                        </Box>
                      );
                    })}
                  </Carousel>
                </Box>
              );
            case 'texto':
              return (
                <Box key={index} py={8} fontSize="xl" maxW="77ch" margin="auto">
                  <RichText render={block.primary.text} />
                </Box>
              );
            case 'imagem':
              return (
                <Box key={index} py={8}>
                  <Picture
                    src={block.primary.image.url}
                    alt={block.primary.image.alt}
                    width={block.primary.image.dimensions.width}
                    height={block.primary.image.dimensions.height}
                  />
                </Box>
              );
            default:
              return null;
          }
        })}
      </Container>
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
