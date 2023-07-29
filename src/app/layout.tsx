"use client";
import "./globals.scss";
import { ReactNode, useMemo } from "react";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ColorContext } from "@/context/color-context";
import clsx from "clsx";
import { useToggle } from "usehooks-ts";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isLightMode, toggleLightMode] = useToggle(false);

  const colorContextValue = useMemo(() => {
    return {
      isLightMode,
      toggleLightMode,
    };
  }, [isLightMode, toggleLightMode]);

  return (
    <html lang="en">
      <body
        className={clsx(inter.className, {
          "body--light-mode": isLightMode,
        })}
      >
        <ColorContext.Provider value={colorContextValue}>
          <Header />
          {children}
          <Footer />
        </ColorContext.Provider>
      </body>
    </html>
  );
}
