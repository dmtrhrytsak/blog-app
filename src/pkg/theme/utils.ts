type PxUnit = `${number}px`;

const rem = (px: PxUnit) => {
  const pxValue = parseInt(px, 10);
  return `${pxValue / 16}rem`;
};

export const utils = {
  rem,
};
