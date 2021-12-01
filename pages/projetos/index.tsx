import { Container, Heading, Box, SimpleGrid } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { client, getHeaderAndFooter } from 'app/lib/prismic';
import PrismicDocument from 'app/lib/prismic/types/Document';
import HeaderFooterData from 'app/lib/prismic/types/HeaderFooterData';
import ProjectData from 'app/lib/prismic/types/ProjectDocument';
import ProjectThumb from 'app/components/ProjectThumb';
import SEO from 'app/components/SEO';
import { resolveHref } from 'app/lib/prismic';
import ProjectsData from 'app/lib/prismic/types/ProjectsData';
import { RichText } from 'prismic-reactjs';

type ProjectsPageProps = {
  projects: PrismicDocument<ProjectData>[];
  projectsPage: PrismicDocument<ProjectsData>;
  headerAndFooter: PrismicDocument<HeaderFooterData>;
};

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, projectsPage }) => {
  return (
    <Box bg="charcoal" color="cream">
      <SEO
        title={projectsPage.data.seo_title}
        imageUrl={projectsPage.data.seo_img.url}
        desc={projectsPage.data.seo_desc}
      />

      <Container maxW="container.lg" py={6}>
        <Heading
          size="4xl"
          fontFamily="display"
          letterSpacing="tight"
          fontWeight="400"
          lineHeight="1"
          as="h2"
          mb={8}
        >
          {RichText.asText(projectsPage.data.title)}
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 3 }} gap={{ base: 4, lg: 8 }} zIndex={2}>
          {projects.map((project) => (
            <ProjectThumb key={project.id} data={project.data} href={resolveHref(project)} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await client.query('[at(document.type, "projeto")]', { pageSize: 100 });
  const headerAndFooter = await getHeaderAndFooter();
  const projectsPage = await client.getSingle('projetos', {});

  return {
    props: { projects: projects.results || [], headerAndFooter, projectsPage },
    revalidate: 600,
  };
};

export default ProjectsPage;
