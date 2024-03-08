export function hasDecimalPart(number) {
  const result = number - Math.floor(number) !== 0;
  return result ? 1 : 0;
}
