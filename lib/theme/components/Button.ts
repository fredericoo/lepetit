const Button = {
  defaultProps: {
    variant: 'primary',
  },
  baseStyle: {
    borderRadius: 'full',
  },
  sizes: {
    md: {
      px: 6,
      py: 4,
      fontSize: 'lg',
      h: 'auto',
    },
  },
  variants: {
    primary: {
      bg: 'yellow',
      color: 'charcoal',
      _hover: {
        bg: 'orange',
        color: 'cream',
      },
    },
    link: {
      color: 'inherit',
      textTransform: 'uppercase',
      fontSize: 'sm',
      letterSpacing: 'wider',
      fontWeight: 400,
      _hover: {
        color: 'orange',
        textDecoration: 'none',
      },
    },
  },
};

export default Button;
