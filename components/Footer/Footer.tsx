import { Container, Grid, Text, Box } from '@chakra-ui/react';
import Logo from '../Logo';
import HeaderFooterData from 'app/lib/prismic/types/HeaderFooterData';
import { RichTextBlock, RichText } from 'prismic-reactjs';

type FooterProps = { data: HeaderFooterData };
const Footer: React.FC<FooterProps> = ({ data }) => {
  if (!data) return null;
  return (
    <>
      <Container maxW="container.lg" py={8}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 3fr', lg: '1fr 2fr 3fr' }} gap={8}>
          <Box maxW={{ base: '100px', md: '200px' }} justifySelf={{ base: 'center', md: 'start' }}>
            <Logo />
          </Box>
          <Grid as="dl" templateColumns="1fr 3fr" gap={8}>
            {data.footer_info.map((info) => (
              <InfoRow
                key={info.footer_contact}
                label={info.footer_contact}
                content={info.footer_detail}
              />
            ))}
          </Grid>
        </Grid>
      </Container>
      <Box
        bg="charcoal"
        color="cream"
        sx={{ a: { borderBottom: '1px solid', borderBottomColor: 'pink' } }}
      >
        <Container maxW="container.lg" py={2} textAlign="center">
          <RichText render={data.footer_text} />
        </Container>
      </Box>
    </>
  );
};

type InfoRowProps = {
  label: string;
  content: RichTextBlock[];
};
const InfoRow: React.FC<InfoRowProps> = ({ label, content }) => {
  return (
    <>
      <Text
        textAlign="right"
        fontSize="xs"
        fontWeight="700"
        textTransform="uppercase"
        as="dt"
        lineHeight="1.5rem"
      >
        {label}
      </Text>
      <Box fontSize="lg" lineHeight="1.5rem">
        <RichText render={content} />
      </Box>
    </>
  );
};

export default Footer;
