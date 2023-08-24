export default function useRoundUp(num: number, digits: number): number {
  const multiplier = 10 * digits;
  return Math.round(num * multiplier) / multiplier;
}
