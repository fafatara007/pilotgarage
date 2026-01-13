import Image from "next/image";
import Link from "next/link";

const services = [
  "Motor Performans Test",
  "Arıza Tespit",
  "Boya Kaporta Tespit",
  "Süspansiyon Test",
  "Alt Kontrol Test",
  "Fren Testi",
  "Yanal Kayma Testi",
  "İç / Dış Ekspertiz",
  "Sonuç Rapor",
  "Mobil Oto Ekspertiz",
];

const blogPosts = [
  { title: "Sel Hasarlı Araçlar Satın Alına...", date: "8 Haz 2023" },
  { title: "Lastiğin Ömrü Kaç Yıldır, Ne...", date: "8 Haz 2023" },
  { title: "Chip Tuning Nedir? Ekspertizde Çı...", date: "7 Haz 2023" },
];

const quickLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "İletişim", href: "#contact" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetler", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Video Galeri", href: "#gallery" },
  { label: "Foto Galeri", href: "#gallery" },
  { label: "Paketler & Fiyatlar", href: "#pricing" },
  { label: "Tanıtım Videomuz", href: "#gallery" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <Image
              src="https://ext.same-assets.com/1880888334/2545416576.png"
              alt="Pilot Garage Şaşmaz"
              width={160}
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed opacity-80">
              Pilot Garage Oto Ekspertiz, 2011 yılında kurulmuş olup, genişleyen bayi ağı ile Türkiye'deki müşterilerine güvenli araç alım satım deneyimi yaşatmayı, yılların birikimini ve tecrübesini kullanarak hayata geçirmeyi hedeflemektedir. Pilot Garage, araç muayeneleri alanında son teknoloji cihazlarla araç muayenesi yapan konusunda uzman sertifikalı teknisyenler ile hizmet vermektedir.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Hizmetler</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-[#E54C4C] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Posts */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Güncel Yazılar</h4>
            <ul className="space-y-4">
              {blogPosts.map((post) => (
                <li key={post.title}>
                  <Link href="#blog" className="group">
                    <p className="text-sm opacity-80 group-hover:opacity-100 group-hover:text-[#E54C4C] transition-colors">
                      {post.title}
                    </p>
                    <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.date}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Hızlı Linkler</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-[#E54C4C] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 17l5-5-5-5v10z" />
                    </svg>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>Copyright 2023 Pilot Garage Şaşmaz. Her Hakkı Saklıdır.</p>
            <p>Web Tasarım : EVD Dijital</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
