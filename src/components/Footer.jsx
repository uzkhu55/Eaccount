import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full items-center h-[400px] md:h-[339px] justify-center">
      <footer className="bg-[#2051E5] text-white">
        <img
          src="footer.png"
          className="absolute right-0 overflow-auto h-[339px]"
          alt=""
        />
        <div className="container mx-auto px-4 py-12 flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-white" />
                <div>
                  <h3 className="text-xl font-bold">FINANCIAL</h3>
                  <p className="text-sm">CONSULTATION</p>
                </div>
              </div>
              <p className="text-gray-300">
                Contact us today and we'll help you get started. Most people
                start with an About page that introduces them to potential site
                visitors.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gray-300">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="hover:text-gray-300">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="hidden md:flex md:flex-col ">
              <h3 className="text-lg font-semibold mb-4">Shortcuts</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Resource Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Business Tools
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Lead Generators
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Resource Library
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex md:flex-col ">
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Control Panel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Dedicated Hosting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Domain Transfer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex md:flex-col ">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    General
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-300 hover:text-white">
                    Free Consultation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <p>Copyright © 2024 Xtra Theme. All Rights Reserved</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
