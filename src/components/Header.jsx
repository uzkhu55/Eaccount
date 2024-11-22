import React from "react";
import { GrLanguage } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className=" z-50 fixed w-screen bg-[#2B4B8C] px-12 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-[30px] h-[30px]" src="/logo.png" alt="" />
          <span className="text-2xl font-bold text-white">E-Account</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-white/90 hover:text-white transition-colors hover:border-b "
            href="/"
          >
            Эхлэл
          </Link>
          <Link
            className="text-white/90 hover:text-white transition-colors hover:border-b "
            href="/product"
          >
            Бүтээгдэхүүн
          </Link>
          <Link
            className="text-white/90 hover:text-white transition-colors hover:border-b "
            href="/interlocutor"
          >
            Харилцагч
          </Link>
          <Link
            className="text-white/90 hover:text-white transition-colors hover:border-b "
            href="/servic"
          >
            Үйлчилгээ
          </Link>
          {/* <Link
            className="text-white/90 hover:text-white transition-colors hover:border-b gap-2"
            href="/contact"
          >
            Холбоо барих
          </Link> */}

          <a
            href="http://www.e-account.mn/LoginPage?ReturnUrl=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 hover:text-white transition-colors hover:border-b gap-2"
          >
            Нэвтрэх
          </a>
        </div>

        <button className="flex items-center gap-2 rounded-md border border-white/20 px-3 py-1">
          <GrLanguage />
          <span className="text-sm text-white">EN</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
