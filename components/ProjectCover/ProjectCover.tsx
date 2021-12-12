type Props = {
  seed: string;
};

const getColorFromIndex = (index: number, colors: string[]): string => {
  const wrappedIndex = index % colors.length;
  colors.sort((a, b) => {
    const aDistance = Math.abs(wrappedIndex - colors.findIndex((c) => c === a));
    const bDistance = Math.abs(wrappedIndex - colors.findIndex((c) => c === b));
    return aDistance - bDistance;
  });

  return `var(--chakra-colors-${colors.pop()})`;
};

const ProjectCover: React.VFC<Props> = ({ seed }) => {
  const colors = ['blue', 'pink', 'charcoal', 'yellow', 'orange', 'cream'];
  const shapeCount = (seed.charCodeAt(4) % 2) + 2;
  const shapes = new Array(shapeCount).fill(0).map((_, index) => {
    const color = getColorFromIndex(seed.charCodeAt(index * 2 + 2), colors);
    const shape = (seed.charCodeAt(index * 3) % 3) + 1;
    return { color, shape };
  });

  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill={getColorFromIndex(seed.charCodeAt(2), colors)} />
      {shapes.map(({ color, shape }, index) => {
        switch (shape) {
          case 1:
            return <circle key={index} cx="256" cy={148 + 108 * index} r="128" fill={color} />;
          case 2:
            return (
              <rect
                key={index}
                x="256.049"
                y={11 + 125 * index}
                width="256"
                height="256"
                transform={`rotate(45 256.049 ${11 + 125 * index})`}
                fill={color}
              />
            );
          case 3:
            return (
              <path
                key={index}
                d={`M256 ${11 + 128 * index}L383.306 ${231 + 128 * index}.5H128.694L256 ${
                  11 + 128 * index
                }Z`}
                fill={color}
              />
            );
        }
      })}
    </svg>
  );
};

export default ProjectCover;
