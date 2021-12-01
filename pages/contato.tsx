import { Container, Grid, Heading, Text } from '@chakra-ui/react';
import SEO from 'app/components/SEO';
import { client, getHeaderAndFooter } from 'app/lib/prismic';
import ContactData from 'app/lib/prismic/types/contato';
import PrismicDocument from 'app/lib/prismic/types/Document';
import HeaderFooterData from 'app/lib/prismic/types/HeaderFooterData';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-reactjs';

type AboutPageProps = {
  headerAndFooter: PrismicDocument<HeaderFooterData>;
  contactPage: PrismicDocument<ContactData>;
};

const AboutPage: React.VFC<AboutPageProps> = ({ contactPage }) => {
  return (
    <Container maxW="container.lg" py={16}>
      <SEO
        title={contactPage.data.seo_title}
        imageUrl={contactPage.data.seo_img.url}
        desc={contactPage.data.seo_desc}
      />
      <Grid gap={8} templateColumns="repeat(12, 1fr)">
        <Heading
          as="h1"
          size="3xl"
          fontFamily="display"
          letterSpacing="tight"
          fontWeight="400"
          lineHeight="1"
          mb={8}
          fontStyle="italic"
          gridColumn={{ base: '1/13', md: '3/7' }}
        >
          {RichText.asText(contactPage.data.title)}
        </Heading>

        <Text gridColumn={{ base: '1/13', md: '3/7' }} fontFamily="heading">
          A Le Petit foi fundada em 2011 em Minas Gerais. A empresa é voltada para assessoria de
          projetos na área cultural, produção editorial, desenvolvimento e acompanhamento
          estratégicos de marcas e identidades visuais. É signatária da WEPs da ONU Mulheres,
          comprometendo a fazer diferença na igualdade de gênero e no empoderamento das mulheres no
          local de trabalho onde atua.
        </Text>
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const headerAndFooter = await getHeaderAndFooter();
  const contactPage = await client.getSingle('contato', {});
  return { props: { headerAndFooter, contactPage }, revalidate: 600 };
};

export default AboutPage;
