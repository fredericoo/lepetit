import { Box, HStack, Center, Button } from '@chakra-ui/react';
import { styled } from '@chakra-ui/system';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

type CarouselProps = {
  width?: string | number;
  height?: string | number;
};

const Controls = styled(HStack, {
  baseStyle: {
    position: 'absolute',
    h: '100%',
    w: '100%',
    top: 0,
    left: 0,
    justifyContent: 'space-between',
    px: { base: 2, md: 4 },
  },
});

const Carousel: React.FC<CarouselProps> = ({ children, width, height }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideCount = Array.isArray(children) ? children.length : 1;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const handleScroll = (): void => {
        const midPoint = carousel.scrollLeft + carousel.getBoundingClientRect().width / 2;
        const slideIndex = Math.floor((midPoint / carousel.scrollWidth) * slideCount);
        setCurrentIndex(slideIndex);
      };
      carousel.addEventListener('scroll', handleScroll);
      return () => {
        carousel.removeEventListener('scroll', handleScroll);
      };
    }
  }, [slideCount]);

  const scrollToIndex = (index: number): void => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft = (index * carousel.scrollWidth) / slideCount;
    }
  };

  if (!Array.isArray(children)) return null;

  return (
    <Box w={width || '100%'} minH={height} overflow="hidden" pos="relative">
      <Controls>
        <Button
          aria-label="Previous slide"
          variant="solid"
          w={{ base: 10, md: 12 }}
          h={{ base: 10, md: 12 }}
          p={0}
          onClick={() => scrollToIndex(currentIndex - 1)}
          zIndex="2"
          opacity={{ base: 0.5, md: 1 }}
          isDisabled={currentIndex < 1}
        >
          <AiOutlineArrowLeft />
        </Button>
        <Button
          aria-label="Next slide"
          variant="solid"
          w={{ base: 10, md: 12 }}
          h={{ base: 10, md: 12 }}
          p={0}
          onClick={() => scrollToIndex(currentIndex + 1)}
          zIndex="2"
          opacity={{ base: 0.7, md: 1 }}
          isDisabled={currentIndex >= children.length - 1}
        >
          <AiOutlineArrowRight />
        </Button>
      </Controls>
      <HStack
        borderRadius="lg"
        overflowX="auto"
        sx={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollSnapType: 'x mandatory',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
        ref={carouselRef}
        spacing={8}
      >
        {children.map((child, index) => (
          <Center
            borderRadius="lg"
            overflow="hidden"
            minH={height}
            maxW={width}
            key={index}
            sx={{ scrollSnapAlign: 'center', flexShrink: 0 }}
          >
            {child}
          </Center>
        ))}
      </HStack>
      <Box textAlign="center" fontSize="xl">
        {currentIndex + 1} / {children.length}
      </Box>
    </Box>
  );
};

export default Carousel;
