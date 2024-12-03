"use client";
import { TiDeleteOutline } from "react-icons/ti";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavHeader";
import AnimatedLogo from "./Animatedlogo";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open); // Toggle the menu visibility
  };

  return (
    <header className="z-50 justify-center fixed w-screen bg-[#2051E5] px-12 py-6">
      <div>
        <nav className="flex items-center justify-between">
          <div className="absolute left-0 w-full h-full overflow-hidden">
            <img
              src="/layeeer.png"
              className="object-cover w-full md:w-[60%] h-full"
              alt="Layer"
            />
          </div>

          <div className="flex md:left-0 md:ml-[80px] md:w-[163px] w-[250px] ml-[-40px] items-center">
            <span className="text-2xl flex w-[250px] font-bold items-center text-white">
              <div>
                <AnimatedLogo />
              </div>
              <NavItem href="#home" delay={0.1}>
                <img
                  src="/-Account.png"
                  className="w-[250px] h-[40px]"
                  alt=""
                />
              </NavItem>
            </span>
          </div>

          {/* Button to toggle the mobile menu */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu} // Toggle the menu visibility on click
          >
            {open ? (
              <TiDeleteOutline size={30} />
            ) : (
              <span className="text-white">☰</span> // Hamburger icon when menu is closed
            )}
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-white/90 z-50 hover:text-white font-bold text-lg transition-colors hover:border-b"
              href="/"
            >
              Эхлэл
            </Link>
            <Link
              className="text-white/90 z-50 hover:text-white font-bold text-lg transition-colors hover:border-b"
              href="/product"
            >
              Бүтээгдэхүүн
            </Link>
            <Link
              className="text-white/90 z-50 hover:text-white font-bold text-lg transition-colors hover:border-b"
              href="/interlocutor"
            >
              Харилцагч
            </Link>
            <Link
              className="text-white/90 z-50 hover:text-white text-lg font-bold transition-colors hover:border-b"
              href="/servic"
            >
              Үйлчилгээ
            </Link>
            <a
              href="http://www.e-account.mn/LoginPage?ReturnUrl=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 z-50 hover:text-white font-bold text-lg transition-colors hover:border-b"
            >
              Нэвтрэх
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-[#2051E5] pt-16 px-6 md:hidden">
          <div className="flex flex-col items-start gap-6">
            <Link
              className="text-white/90 hover:text-white font-bold text-lg transition-colors"
              href="/"
            >
              Эхлэл
            </Link>
            <Link
              className="text-white/90 hover:text-white font-bold text-lg transition-colors"
              href="/product"
            >
              Бүтээгдэхүүн
            </Link>
            <Link
              className="text-white/90 hover:text-white font-bold text-lg transition-colors"
              href="/interlocutor"
            >
              Харилцагч
            </Link>
            <Link
              className="text-white/90 hover:text-white font-bold text-lg transition-colors"
              href="/servic"
            >
              Үйлчилгээ
            </Link>
            <a
              href="http://www.e-account.mn/LoginPage?ReturnUrl=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white font-bold text-lg transition-colors"
            >
              Нэвтрэх
            </a>
          </div>

          {/* Close button inside mobile menu */}
          <button className="text-white mt-6" onClick={toggleMenu}>
            <TiDeleteOutline size={30} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
