"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const previous = scrollY.getPrevious() || 0;

    if (latestValue > previous) {
      setHidden(true);
    } else if (latestValue < previous) {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="z-40 sticky top-0 bg-background"
    >
      <div className="absolute bottom-0 linear-gradient w-full h-[0.3px]" />

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href={"/"}
            className="group font-medium font-syne text-lg hover:text-primary transition-colors"
          >
            vitordepaula
            <span className="text-primary group-hover:text-foreground">.</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-base leading-6 hover:text-primary transition-colors"
          >
            Sobre
          </Link>
          <Link
            href="#"
            className="text-sm font-base leading-6 hover:text-primary transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="#"
            className="text-sm font-base leading-6 hover:text-primary transition-colors"
          >
            Contato
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
