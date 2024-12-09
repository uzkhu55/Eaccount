"use client";
import { TiDeleteOutline } from "react-icons/ti";
import React, { useState } from "react";
import Link from "next/link";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="z-50 fixed w-full bg-[#2051E5] px-6 py-4">
      <nav className="flex justify-between items-center">
        {/* Left Section */}
        <div className="flex items-center">
          <AnimatedLogo />
          <Link href="#home" className="ml-4">
            <img src="/-Account.png" alt="Account" className="w-[200px]" />
          </Link>
        </div>

        {/* Button */}
        <button
          className="md:hidden text-white z-50 flex items-center justify-center"
          onClick={toggleMenu}
        >
          {open ? (
            <TiDeleteOutline
              size={30}
              className="transition-all duration-300"
            />
          ) : (
            <span className="text-xl font-bold transition-all duration-300">
              ☰
            </span>
          )}
        </button>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-white font-bold hover:border-b">
            Эхлэл
          </Link>
          <Link href="/product" className="text-white font-bold hover:border-b">
            Бүтээгдэхүүн
          </Link>
          <Link
            href="/interlocutor"
            className="text-white font-bold hover:border-b"
          >
            Харилцагч
          </Link>
          <Link href="/servic" className="text-white font-bold hover:border-b">
            Үйлчилгээ
          </Link>
          <a
            href="http://www.e-account.mn/LoginPage?ReturnUrl=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold hover:border-b"
          >
            Нэвтрэх
          </a>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 bg-[#2051E5] pt-16 px-6 md:hidden z-40">
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-white font-bold">
              Эхлэл
            </Link>
            <Link href="/product" className="text-white font-bold">
              Бүтээгдэхүүн
            </Link>
            <Link href="/interlocutor" className="text-white font-bold">
              Харилцагч
            </Link>
            <Link href="/servic" className="text-white font-bold">
              Үйлчилгээ
            </Link>
            <a
              href="http://www.e-account.mn/LoginPage?ReturnUrl=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold"
            >
              Нэвтрэх
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
