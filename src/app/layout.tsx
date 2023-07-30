"use client";
import "./globals.scss";
import { ReactNode, useMemo, useState } from "react";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ColorContext } from "@/context/color-context";
import clsx from "clsx";
import { useToggle } from "usehooks-ts";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [isLightMode, toggleLightMode] = useToggle(false);

  const handleOpenDialog = () => {
    const dialogEl = document.getElementById(
      "menu-dialog",
    ) as HTMLDialogElement;

    if (dialogIsOpen) {
      setDialogIsOpen(false);
      dialogEl.close();
    } else {
      setDialogIsOpen(true);
      dialogEl.show();
    }
  };

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
          "body--locked": dialogIsOpen,
        })}
      >
        <ColorContext.Provider value={colorContextValue}>
          <Header
            dialogIsOpen={dialogIsOpen}
            handleOpenDialog={handleOpenDialog}
          />
          {children}
          <Footer />
        </ColorContext.Provider>
      </body>
    </html>
  );
}
