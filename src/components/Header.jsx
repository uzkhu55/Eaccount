import React from "react";

import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className=" z-10 fixed w-screen bg-[#2B4B8C] mx-auto py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/public/logo.png" alt="" />
          <span className="text-2xl font-bold text-white">E-Account</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-white/90 hover:text-white transition-colors"
            href="/"
          >
            Эхлэл
          </Link>
          <Link
            className="text-white/90 hover:text-white transition-colors"
            href="/product"
          >
            Бүтээгдэхүүн
          </Link>
          <Link
            className="text-white/90 hover:text-white transition-colors"
            href="/interlocutor"
          >
            Харилцагч
          </Link>
          <Link
            className="text-white/90 hover:text-white transition-colors"
            href="/servic"
          >
            Үйлчилгээ
          </Link>
          <Link
            className="text-white/90 hover:text-white transition-colors"
            href="/contact"
          >
            Холбоо барих
          </Link>
        </div>

        <button className="flex items-center gap-2 rounded-md border border-white/20 px-3 py-1">
          <Image
            src="/placeholder.svg"
            alt="English language"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <span className="text-sm text-white">EN</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
