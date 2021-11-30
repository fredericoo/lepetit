import { Box, Circle, Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import { getHeaderAndFooter } from 'app/lib/prismic';
import { GetStaticProps } from 'next';

const AboutPage: React.VFC = () => {
  return (
    <Container maxW="container.lg" py={16}>
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
        Produção cultural sensível & com afeto
      </Heading>

      <Grid gap={8} templateColumns="repeat(12, 1fr)">
        <GridItem gridColumn={{ base: '1/13', md: '4/11' }} gridRow={{ md: '1/3' }} zIndex="2">
          <Text fontSize="xl" fontFamily="heading">
            A Le Petit foi fundada em 2011 em Minas Gerais. A empresa é voltada para assessoria de
            projetos na área cultural, produção editorial, desenvolvimento e acompanhamento
            estratégicos de marcas e identidades visuais. É signatária da WEPs da ONU Mulheres,
            comprometendo a fazer diferença na igualdade de gênero e no empoderamento das mulheres
            no local de trabalho onde atua.
          </Text>
        </GridItem>
        <Circle
          gridColumn={{ base: '1/13', md: '2/7' }}
          bg="pink"
          pb="100%"
          h="0"
          gridRow={{ md: '2/4' }}
        />
        <GridItem gridColumn={{ base: '1/13', md: '1/5' }} gridRow={{ md: '3/4' }}>
          <Box w="100%" h="0px" pb="110%" bg="gray.200" />
        </GridItem>
        <GridItem gridColumn={{ base: '1/13', md: '5/9' }} gridRow={{ md: '3/4' }}>
          <Heading
            fontFamily="body"
            textTransform="uppercase"
            size="sm"
            fontWeight="300"
            letterSpacing="wider"
            as="h2"
            mb={2}
          >
            Daniela Fernandes
          </Heading>
          <Text fontFamily="heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis.
            Iaculis urna id volutpat lacus laoreet. Mauris vitae ultricies leo integer malesuada. Ac
            odio tempor orci dapibus ultrices in. Egestas diam in arcu cursus euismod. Dictum fusce
            ut placerat orci nulla. Tincidunt ornare massa eget egestas purus viverra accumsan in
            nisl. Tempor id eu nisl nunc mi ipsum faucibus. Fusce id velit ut tortor pretium. Massa
            ultricies mi quis hendrerit dolor magna eget. Nullam eget felis eget nunc lobortis.
            Faucibus ornare
          </Text>
        </GridItem>
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const headerAndFooter = await getHeaderAndFooter();

  return { props: { headerAndFooter }, revalidate: 600 };
};

export default AboutPage;
