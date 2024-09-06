"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Tracks the current route

  return (
    <AnimatePresence mode="wait" initial={false}>
      <div key={pathname}>{children}</div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
