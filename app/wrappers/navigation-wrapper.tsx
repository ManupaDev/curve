"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { useState } from "react";
import Navigation from "../components/navigation";
import Link from "next/link";
import NavOverlay from "../components/nav-overlay";

function NavigationWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuControlClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navigation handleMenuControlClick={handleMenuControlClick} />
      {children}
      <NavOverlay isOpen={isOpen} handleMenuControlClick={handleMenuControlClick}/>  
    </>
  );
}

export default NavigationWrapper;
