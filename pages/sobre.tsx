import { Box, Circle, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import Picture from 'app/components/Picture';
import SEO from 'app/components/SEO';
import { getHeaderAndFooter, client } from 'app/lib/prismic';
import AboutData from 'app/lib/prismic/types/AboutData';
import PrismicDocument from 'app/lib/prismic/types/Document';
import HeaderFooterData from 'app/lib/prismic/types/HeaderFooterData';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-reactjs';
import { Fragment } from 'react';

type AboutPageProps = {
  headerAndFooter: PrismicDocument<HeaderFooterData>;
  aboutPage: PrismicDocument<AboutData>;
};

const AboutPage: React.VFC<AboutPageProps> = ({ aboutPage }) => {
  return (
    <Container maxW="container.lg" py={16}>
      <SEO
        title={aboutPage.data.seo_title}
        imageUrl={aboutPage.data.seo_img.url}
        desc={aboutPage.data.seo_desc}
      />
      <Heading
        as="h1"
        size="3xl"
        fontFamily="display"
        letterSpacing="tight"
        fontWeight="400"
        lineHeight="1"
        textAlign="center"
        mb={8}
      >
        {RichText.asText(aboutPage.data.about_title)}
      </Heading>

      <Grid gap={8} templateColumns="repeat(12, 1fr)">
        <GridItem
          fontSize="xl"
          fontFamily="heading"
          gridColumn={{ base: '1/13', md: '4/11' }}
          gridRow={{ md: '1/3' }}
          zIndex="2"
        >
          <RichText render={aboutPage.data.about_text} />
        </GridItem>
        <Circle
          gridColumn={{ base: '1/13', md: '2/7' }}
          bg="pink"
          pb="100%"
          h="0"
          gridRow={{ base: '1', md: '2/4' }}
        />
        {aboutPage.data.about_team?.map((member) => (
          <Fragment key={RichText.asText(member.team_name)}>
            <GridItem gridColumn={{ base: '1/13', md: '1/5' }} gridRow={{ md: '3/4' }}>
              {member && (
                <Picture
                  src={member.team_image.url}
                  width={member.team_image.dimensions.width}
                  height={member.team_image.dimensions.height}
                  alt={member.team_image.alt}
                />
              )}
            </GridItem>
            <GridItem gridColumn={{ base: '1/13', md: '5/10' }} gridRow={{ md: '3/4' }}>
              <Heading
                fontFamily="body"
                textTransform="uppercase"
                size="sm"
                fontWeight="300"
                letterSpacing="wider"
                as="h2"
                mb={2}
              >
                {RichText.asText(member.team_name)}
              </Heading>
              <Box fontFamily="heading" sx={{ 'p+p': { mt: '1em' } }}>
                <RichText render={member.team_bio} />
              </Box>
            </GridItem>
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const headerAndFooter = await getHeaderAndFooter();
  const aboutPage = await client.getSingle('sobre', {});

  return { props: { headerAndFooter, aboutPage }, revalidate: 600 };
};

export default AboutPage;
