import { useLayoutEffect, useState, MutableRefObject } from 'react';

type UseDimensionsHook = (ref: MutableRefObject<HTMLElement | null>) => {
  width: number;
  height: number;
};

export const useDimensions: UseDimensionsHook = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    ref.current &&
      setDimensions({ width: ref?.current.offsetWidth, height: ref?.current.offsetHeight });
  }, [ref]);

  return dimensions;
};
