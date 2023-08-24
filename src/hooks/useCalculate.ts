import useRoundUp from "./useRoundUp";

export interface useCalculatorReturn {
  type: "Volumetric" | "Physical";
  weight: number;
  priceInGEL: number;
  priceInUSD: number;
}

export default function useCalculate(width: number, length: number, height: number, weight: number): useCalculatorReturn {
  const priceInGEL = 24; // Default
  const priceInUSD = 9; // Default
  const divisor = 5000; // default

  const physicalWeight = weight;
  const volumetricWeight = (width * length * height) / divisor;

  if (physicalWeight >= volumetricWeight) {
    return {
      type: "Physical",
      weight: useRoundUp(physicalWeight, 2),
      priceInGEL: useRoundUp(physicalWeight * priceInGEL, 2),
      priceInUSD: useRoundUp(physicalWeight * priceInUSD, 2),
    };
  } else {
    return {
      type: "Volumetric",
      weight: useRoundUp(volumetricWeight, 2),
      priceInGEL: useRoundUp(volumetricWeight * priceInGEL, 2),
      priceInUSD: useRoundUp(volumetricWeight * priceInUSD, 2),
    };
  }
}
