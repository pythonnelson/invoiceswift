"use client";

import React from "react";
import Logo from "../Logo";
import { Navigation } from "@/constants";
import Link from "next/link";
import { Lock, MoveRight, Menu } from "lucide-react";
import CustomButton from "../CustomButton";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1b6a88] text-[#f1f1f1] fixed top-0 right-0 w-full left-0 h-16 flex items-center justify-between px-4 sm:px-8 md:px-16">
      <Logo />

      <nav className="hidden md:flex items-center gap-3">
        {Navigation.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-2 text-[#f1f1f1] hover:text-fuchsia-500 duration-300 transition-all"
            >
              <Icon className="w-5 h-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="hidden md:flex items-center gap-3">
        <Link
          href="/authentication/sign-in"
          className="flex items-center hover:text-fuchsia-500 duration-300 transition-all"
        >
          <Lock className="w-5 h-5 mr-1" />
          LogIn
        </Link>
        <CustomButton
          title="Get Started"
          icon={<MoveRight className="w-4 h-4" />}
          href="/authentication/sign-up"
          className="flex items-center gap-2 bg-sky-950 text-white py-2 px-4 rounded-md hover:bg-fuchsia-500 hover:text-white duration-300 transition-all"
        />
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-[#f1f1f1]" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#1b6a88] flex flex-col items-start px-4 gap-3 py-4 md:hidden">
          {Navigation.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="flex items-center gap-2 text-[#f1f1f1] hover:text-fuchsia-500 duration-300 transition-all"
              >
                <Icon className="w-5 h-5" />
                {item.title}
              </Link>
            );
          })}

          <Link
            href="/authentication/sign-in"
            className="flex items-center hover:text-fuchsia-500 duration-300 transition-all"
          >
            <Lock className="w-5 h-5 mr-1" />
            LogIn
          </Link>
          <CustomButton
            title="Get Started"
            icon={<MoveRight className="w-4 h-4" />}
            href="/authentication/sign-up"
            className="flex items-center gap-2 bg-sky-950 text-white py-2 px-4 rounded-md hover:bg-fuchsia-500 hover:text-white duration-300 transition-all"
          />
        </div>
      )}
    </header>
  );
};

export default Navbar;
