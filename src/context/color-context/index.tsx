import { createContext, useContext } from "react";

export type ColorContextProps = {
  isLightMode: boolean;
  toggleLightMode(): void;
};

export const ColorContext = createContext<ColorContextProps>({
  isLightMode: false,
  toggleLightMode() {
    throw new Error("Color Context toggleLightMode not implemented");
  },
});

export const useColorContext = () => {
  return useContext(ColorContext);
};
