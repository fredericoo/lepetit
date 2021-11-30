import { Container, Grid, Heading, Text } from '@chakra-ui/react';
import { getHeaderAndFooter } from 'app/lib/prismic';
import { GetStaticProps } from 'next';

const AboutPage: React.VFC = () => {
  return (
    <Container maxW="container.lg" py={16}>
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
          Contato
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

  return { props: { headerAndFooter }, revalidate: 600 };
};

export default AboutPage;
