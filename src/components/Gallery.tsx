import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#E54C4C]" />
            <span className="section-subtitle">Pilot Garage Şaşmaz</span>
            <div className="w-12 h-0.5 bg-[#E54C4C]" />
          </div>
          <h2 className="section-title">Çalışmalarımızdan Kareler</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Photo Gallery */}
          <Link
            href="#"
            className="relative group rounded-lg overflow-hidden h-72"
          >
            <Image
              src="https://ext.same-assets.com/1880888334/3018705808.jpeg"
              alt="Foto Galeri"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-2 border-white rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold tracking-wider">FOTO GALERİ</h3>
            </div>
          </Link>

          {/* Video Gallery */}
          <Link
            href="#"
            className="relative group rounded-lg overflow-hidden h-72"
          >
            <Image
              src="https://ext.same-assets.com/1880888334/644912103.jpeg"
              alt="Video Galeri"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-[#E54C4C] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold tracking-wider">VİDEO GALERİ</h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
