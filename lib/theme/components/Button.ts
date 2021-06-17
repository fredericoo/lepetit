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
  },
};

export default Button;
