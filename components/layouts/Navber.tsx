import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navber = () => {
  return (
    <header>
      <nav className="container flex justify-between items-center">
        <Logo />

        <div>
          <ul className="flex">
            <li>
              <Button variant="link">
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link href="/country">Country</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link href="/destinations">Destination</Link>
              </Button>
            </li>
            <li>
              <Button variant="link">
                <Link href="/hotels">Hotel</Link>
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navber;
