import { Grid, GridItem, Container, Heading, Text, Box, Button } from '@chakra-ui/react';
import DecoShape from '../components/DecoShape/DecoShape';
import AnimateWords from '../components/AnimateWords/AnimateWords';
import { useRef, useState } from 'react';

type Roundness = 'top' | 'bottom' | 'full';
const roundnesses: Roundness[] = ['top', 'bottom', 'full'];
const colours = ['orange', 'pink', 'blue', 'yellow'];

const Home: React.FC = () => {
  const dragConstraints = useRef(null);
  const [seed, setSeed] = useState(0);

  return (
    <Box overflow="hidden" ref={dragConstraints}>
      <Container maxW="container.lg">
        <Grid
          gap={8}
          templateColumns={{ md: 'repeat(12, 1fr)' }}
          templateRows="80vh min-content 1fr"
        >
          <GridItem gridColumn="1 / 4" gridRow="1 / 4">
            <DecoShape
              drag
              dragConstraints={dragConstraints}
              ratio={1 / (3 - (seed % 3))}
              color={colours[seed % colours.length]}
            />
          </GridItem>
          <GridItem gridColumn="4 / 7" gridRow="1/4">
            {new Array(4).fill(0).map((_, key) => (
              <DecoShape
                key={key}
                drag
                dragConstraints={dragConstraints}
                ratio={1 + ((seed * key + 1) % 2)}
                color={colours[(seed * key + seed + 1) % colours.length]}
                rounded={roundnesses[(seed * key + seed + 1) % roundnesses.length]}
              />
            ))}
          </GridItem>
          <GridItem gridColumn="7 / -1" gridRow="1" alignSelf="center" pointerEvents="none">
            <Heading
              as="h1"
              size="4xl"
              fontFamily="display"
              letterSpacing="tight"
              fontWeight="400"
              lineHeight="1"
              mb={6}
            >
              <AnimateWords>Produção cultural sensível & com afeto</AnimateWords>
            </Heading>
            <Text fontFamily="heading" letterSpacing="-.01em" fontSize="lg" fontWeight="400" mb={4}>
              Texto de exemplo pra preencher linguiça Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet.
            </Text>
            <Button pointerEvents="all" onClick={() => setSeed(~~(Math.random() * 100))}>
              Sortear formas
            </Button>
          </GridItem>
          <GridItem gridColumn="3 / -1" gridRow="2">
            <Heading
              size="4xl"
              fontFamily="display"
              letterSpacing="tight"
              fontWeight="400"
              lineHeight="1"
              as="h2"
            >
              Sobre
            </Heading>
          </GridItem>
          <GridItem gridColumn="4 / 11" gridRow="3">
            <Text fontSize="xl" fontFamily="heading">
              A Le Petit foi fundada em 2011 em Minas Gerais. A empresa é voltada para assessoria de
              projetos na área cultural, produção editorial, desenvolvimento e acompanhamento
              estratégicos de marcas e identidades visuais. É signatária da WEPs da ONU Mulheres,
              comprometendo a fazer diferença na igualdade de gênero e no empoderamento das mulheres
              no local de trabalho onde atua.{' '}
            </Text>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
