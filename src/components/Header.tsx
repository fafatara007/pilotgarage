"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Kurumsal",
    href: "#",
    submenu: [
      { label: "Hakkımızda", href: "#about" },
      { label: "Tanıtım Videomuz", href: "#gallery" },
    ],
  },
  {
    label: "Hizmetler",
    href: "#services",
    submenu: [
      { label: "Motor Performans Test", href: "#services" },
      { label: "Arıza Tespit", href: "#services" },
      { label: "Boya Kaporta Tespit", href: "#services" },
      { label: "Süspansiyon Test", href: "#services" },
      { label: "Alt Kontrol Test", href: "#services" },
      { label: "Fren Testi", href: "#services" },
    ],
  },
  { label: "Paketler & Fiyatlar", href: "#pricing" },
  {
    label: "Sorgulamalar",
    href: "#",
    submenu: [
      { label: "Araç KM Sorgulama", href: "https://hgs.pttavm.com/arac-km-sorgula" },
      { label: "Tramer Sorgulama", href: "https://www.sigortam360.com/" },
      { label: "Nöbetci Noter", href: "https://portal.tnb.org.tr/Sayfalar/NobetciNoterBul.aspx" },
    ],
  },
  { label: "Blog", href: "#blog" },
  { label: "İletişim", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://ext.same-assets.com/1880888334/2545416576.png"
              alt="Pilot Garage Şaşmaz"
              width={160}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E54C4C] transition-colors flex items-center"
                  onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {item.label}
                  {item.submenu && (
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {item.submenu && (
                  <div
                    className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseEnter={() => setOpenSubmenu(item.label)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E54C4C]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="https://goo.gl/maps/UevnxA6dxpuZLH5u5"
            target="_blank"
            className="hidden lg:block btn-primary text-sm"
          >
            Yol Tarifi Al
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {menuItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E54C4C]"
                  onClick={() => !item.submenu && setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-8">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-500 hover:text-[#E54C4C]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="https://goo.gl/maps/UevnxA6dxpuZLH5u5"
              target="_blank"
              className="block mx-4 mt-4 btn-primary text-sm text-center"
            >
              Yol Tarifi Al
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
