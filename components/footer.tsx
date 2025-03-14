import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1440px]">
        {/* Social Media and Newsletter (Inverted Colors) */}
        <div className="bg-white text-black flex flex-col md:flex-row justify-between items-start md:items-center pb-[33px] gap-6 px-[120px]">
        <div className="flex gap-4">
          <Link href="#" className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="#" className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-full hover:bg-white hover:text-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.56 10.23c2.29 2.9 4.71 5.74 7.16 8.51.64.72 1.32 1.41 2.06 2.04.31.27.72.48 1.14.47.41-.02.83-.27.94-.68.15-.53-.25-1.02-.56-1.4-1.98-2.51-3.99-5.01-5.91-7.56 2.19-2.08 4.37-4.19 6.55-6.3.37-.36.77-.77.89-1.29a1.02 1.02 0 0 0-.48-1.11c-.46-.25-1.04-.11-1.44.23a2277.6 2277.6 0 0 1-6.7 6.49c-2.13-2.3-4.26-4.61-6.41-6.89-.45-.47-1.08-.96-1.81-.84-.55.1-1.02.51-1.1 1.08-.12.71.34 1.31.78 1.8 1.98 2.19 3.95 4.39 5.9 6.61-2.34 2.28-4.67 4.57-6.98 6.87-.4.4-.83.84-.96 1.42-.15.64.22 1.38.91 1.56.53.15 1.1-.06 1.51-.42a2555.6 2555.6 0 0 0 6.99-7.06z"/>
            </svg>
          </Link>
        </div>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-transparent border border-black px-3 py-2 min-w-[250px] max-h-[54px] text-black"
            />
            <button className="bg-black text-white px-16 py-[10px]">Join</button>
          </div>
        </div>

        <div className="flex flex-wrap justify-evenly bg-black text-white py-[48px]">
        {/* PRODUCTS */}
        <div>
          <h3 className="mb-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            PRODUCTS
          </h3>
          <ul className="space-y-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%] whitespace-nowrap">
            <li>
              <Link href="#" className="hover:underline">DRINKING WATER STATIONS</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">DRINKING WATER DISPENSER</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">DRINKING WATER FAUCETS</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">WATER COOLERS & FOUNTAINS</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">PUBLIC UTILITY SYSTEMS</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">COMMERCIAL/INDUSTRIAL PLANTS</Link>
            </li>
          </ul>
        </div>

        {/* ABOUT US */}
        <div>
          <h3 className="mb-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            ABOUT US
          </h3>
          <ul className="space-y-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            <li>
              <Link href="#" className="hover:underline">COMPANY</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">BRAND</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">SUSTAINABILITY</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">PRODUCT & SERVICES</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">WORK CULTURE</Link>
            </li>
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="mb-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            LEGAL
          </h3>
          <ul className="space-y-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            <li>
              <Link href="#" className="hover:underline">TERMS & CONDITIONS</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">PRIVACY POLICY</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">REFUND POLICY</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">SHIPPING POLICY</Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="mb-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            SOCIAL
          </h3>
          <ul className="space-y-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            <li>
              <Link href="#" className="hover:underline">FACEBOOK</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">INSTAGRAM</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">LINKEDIN</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">TWITTER</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            CONTACT
          </h3>
          <ul className="space-y-4 text-[14px] font-[400] uppercase tracking-wide leading-[140%]">
            <li>
              <Link href="#" className="hover:underline">CUSTOMER SERVICE</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">LOCATIONS</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">NEWS</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">WISHLIST</Link>
            </li>
          </ul>
        </div>
      </div>


        {/* Bottom Logo and Copyright (Updated Colors) */}
        <div className="bg-white flex flex-col md:flex-row justify-between items-center py-4 border-t border-gray-300 mx-[120px]">
          <Link href="/" className="mb-4 md:mb-0">
            <Image
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/df470715-8b49-4d9d-b83b-7249a328b100/public"
              alt="WAE Logo"
              width={100}
              height={40}
              className="w-auto h-auto max-h-[40px]"
            />
          </Link>

          <p className="text-sm text-black">© 2023 WAE Ltd.</p>
        </div>
      </div>
    </footer>
  )
}