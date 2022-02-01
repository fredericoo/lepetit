import {
  Grid,
  GridItem,
  Container,
  Heading,
  Text,
  Box,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import DecoShape from '../components/DecoShape/DecoShape';
import { useRef, useState } from 'react';
import { GetStaticProps } from 'next';
import { client, getHeaderAndFooter } from 'app/lib/prismic';
import PrismicDocument from 'app/lib/prismic/types/Document';
import HeaderFooterData from 'app/lib/prismic/types/HeaderFooterData';
import ProjectData from 'app/lib/prismic/types/ProjectDocument';
import ProjectThumb from 'app/components/ProjectThumb';
import SEO from 'app/components/SEO';
import { resolveHref } from 'app/lib/prismic';
import IconShuffle from 'app/components/Icon/IconShuffle';
import ApiSearchResponse from '@prismicio/client/types/ApiSearchResponse';
import Link from 'next/link';
import HomeData from 'app/lib/prismic/types/HomeData';
import { RichText } from 'prismic-reactjs';

type HomeProps = {
  projects: Omit<ApiSearchResponse, 'results'> & { results: PrismicDocument<ProjectData>[] };
  headerAndFooter: PrismicDocument<HeaderFooterData>;
  homePage: PrismicDocument<HomeData> | null;
};

type Roundness = 'top' | 'bottom' | 'full';
const roundnesses: Roundness[] = ['top', 'bottom', 'full'];
const colours = ['orange', 'pink', 'blue', 'yellow'];

const Home: React.FC<HomeProps> = ({ projects, homePage }) => {
  const dragConstraints = useRef(null);
  const [seed, setSeed] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  if (!homePage?.data) return null;

  return (
    <Box overflow="hidden" ref={dragConstraints}>
      <SEO
        title={homePage.data.seo_title}
        imageUrl={homePage.data.seo_img.url}
        desc={homePage.data.seo_desc}
      />
      <Container maxW="container.lg" py={8}>
        <Grid gap={8} templateColumns="repeat(12, 1fr)" templateRows="80vh min-content 1fr">
          <GridItem
            gridColumn={{ base: '1 / 8', lg: '1 / 4' }}
            gridRow="1 / 4"
            zIndex="docked"
            mixBlendMode="multiply"
            pos="relative"
            onMouseDown={() => setHasInteracted(true)}
          >
            <DecoShape
              drag
              dragConstraints={dragConstraints}
              ratio={1 / (3 - (seed % 3))}
              color={colours[seed % colours.length]}
            />
          </GridItem>
          <GridItem
            gridColumn={{ base: '8 / -1', lg: '4 / 7' }}
            gridRow="1 / 4"
            mixBlendMode="multiply"
            zIndex="docked"
            alignSelf={{ base: 'end', lg: 'start' }}
            onMouseDown={() => setHasInteracted(true)}
          >
            {new Array(4).fill(0).map((_, key) => (
              <Box key={key}>
                <DecoShape
                  drag
                  dragConstraints={dragConstraints}
                  ratio={1 + ((seed * key + 1) % 2)}
                  color={colours[(seed * key + seed + 1) % colours.length]}
                  rounded={roundnesses[(seed * key + seed + 1) % roundnesses.length]}
                  label={!hasInteracted && key === 0 ? 'arraste-me' : undefined}
                />
              </Box>
            ))}
          </GridItem>
          <GridItem
            gridColumn={{ base: '4 / -1', lg: '7 / -1' }}
            gridRow="1"
            alignSelf="center"
            pointerEvents="none"
          >
            <Heading
              as="h1"
              size="3xl"
              fontFamily="display"
              letterSpacing="tight"
              fontWeight="400"
              lineHeight="1"
              mb={6}
            >
              <RichText render={homePage.data.home_title} />
            </Heading>
            <Text fontFamily="heading" letterSpacing="-.01em" fontSize="lg" fontWeight="400" mb={4}>
              <RichText render={homePage.data.home_text} />
            </Text>
            <Button
              p={4}
              pointerEvents="all"
              onClick={() => setSeed(~~(Math.random() * 1000))}
              zIndex="docked"
            >
              <IconShuffle w="1rem" />
            </Button>
          </GridItem>
          <GridItem gridColumn={{ base: '1 / 9', lg: '3 / -1' }} gridRow="2">
            <Heading
              size="4xl"
              fontFamily="display"
              letterSpacing="tight"
              fontWeight="400"
              lineHeight="1"
              as="h2"
            >
              <RichText render={homePage.data.title} />
            </Heading>
          </GridItem>
          <GridItem gridColumn={{ base: '1 / 9', lg: '4 / 11' }} gridRow="3">
            <Text fontSize={{ base: 'lg', lg: 'xl' }} fontFamily="heading">
              <RichText render={homePage.data.text} />
            </Text>
          </GridItem>
        </Grid>
      </Container>
      <Box bg="charcoal" color="cream">
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
            Projetos
          </Heading>
          <Box
            pointerEvents="none"
            zIndex={0}
            display="flex"
            flexDirection="column"
            w="100vw"
            position="absolute"
            left="0"
            overflow="hidden"
          >
            <Box w="33%">
              <DecoShape ratio={1} color={colours[(seed + 2) % colours.length]} />
            </Box>
            <Box w="99%" alignSelf="flex-end" transform="translateX(33%)">
              <DecoShape ratio={3} color={colours[seed % colours.length]} />
            </Box>
          </Box>
          <SimpleGrid columns={{ base: 2, md: 3 }} gap={{ base: 4, lg: 8 }} zIndex={2}>
            {projects.results.map((project) => (
              <ProjectThumb key={project.id} data={project.data} href={resolveHref(project)} />
            ))}
            {projects.total_pages > 1 && (
              <Link href="projetos" passHref>
                <Button as="a" gridColumn="1/-1">
                  Ver todos os {projects.total_results_size} projetos
                </Button>
              </Link>
            )}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const projects = await client.query('[at(document.type, "projeto")]', { pageSize: 6 });
  const homePage = await client.getSingle('home', {});
  const headerAndFooter = await getHeaderAndFooter();

  return {
    props: { projects: projects || [], headerAndFooter, homePage: homePage || null },
    revalidate: 600,
  };
};

export default Home;
