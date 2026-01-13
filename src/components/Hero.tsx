"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "https://ext.same-assets.com/1880888334/1945557258.jpeg",
    title: "Tarafsız Ve Güvenilir",
    subtitle: "Oto Ekspertiz",
    description: "Türkiye'de ikinci el araç alım-satım işlemlerinde güvenilir bir firma olarak öncelikli odak noktamız, muayene hizmeti vererek alım satım sürecinde ortaya çıkabilecek sorunları ele almaktır.",
  },
  {
    image: "https://ext.same-assets.com/1880888334/2289187556.jpeg",
    title: "İkinci El Araç Alırken",
    subtitle: "Daha Güvendesiniz",
    description: "2. El araç alırken karşılanabilecek sıkıntıları daha önceden farkedebilmek için, son teknoloji ekspertiz cihazlarıyla bilgisayar kontrollü oto testleri gerçekleştiriyoruz.",
  },
  {
    image: "https://ext.same-assets.com/1880888334/279518262.jpeg",
    title: "TSE Belgeli Oto",
    subtitle: "Ekspertiz Hizmeti",
    description: "Müşterilerimize sağladığımız TSE belgeli oto ekspertiz hizmeti sayesinde, araçların gerçek değerini ve potansiyel problemlerini tespit etmek için güvenilir bir kaynağa sahip olursunuz.",
  },
  {
    image: "https://ext.same-assets.com/1880888334/3768219038.jpeg",
    title: "Binlerce Araç",
    subtitle: "Binlerce Tecrübe",
    description: "Müşterilerimize sunduğumuz oto ekspertiz hizmetiyle binlerce araç üzerinde edindiğimiz binlerce tecrübeyi sizinle paylaşıyoruz.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-raleway">
                {slide.title}
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-raleway">
                {slide.subtitle}
              </h3>
              <p className="text-sm md:text-base mb-8 opacity-90 max-w-lg">
                {slide.description}
              </p>
              <Link
                href="#contact"
                className="inline-block bg-gray-800/80 hover:bg-gray-800 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Bizimle İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
