import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Motor Performans Test",
    description: "Dinamometre, düz vitesli, otomatik şanzımanlı, önden çekili veya arkadan çekili araçların motor gücünü ve torkunu ölçmek için kullanılır.",
    image: "https://ext.same-assets.com/1880888334/1359654142.jpeg",
  },
  {
    title: "Arıza Tespit",
    description: "Arıza Tespit cihazıyla her model araç için bilgisayarlı arıza tespit cihazı kullanarak arızaları tespit ediyoruz.",
    image: "https://ext.same-assets.com/1880888334/484963144.jpeg",
  },
  {
    title: "Boya Kaporta Test",
    description: "Araç alım satım işlemlerinde en kritik hususlardan biri, aracın kaporta ve boyasının daha önceden herhangi bir işlem görmüş olup olmadığıdır.",
    image: "https://ext.same-assets.com/1880888334/1192745687.jpeg",
  },
  {
    title: "Süspansiyon Test",
    description: "Araç alım satımı sırasında test sürüşleriyle anlaşılamayacak sorunlardan birtaneside süspansiyon sisteminin durumudur.",
    image: "https://ext.same-assets.com/1880888334/3232891058.jpeg",
  },
  {
    title: "Alt Kontrol Test",
    description: "Alt kısmından bir darbeye maruz kalıp kalmadığı, ön takımında bir problem olup olmadığı, oto lifti ile araç kaldırılarak alt kısmı gözle incelenir.",
    image: "https://ext.same-assets.com/1880888334/940419702.jpeg",
  },
  {
    title: "Fren Test",
    description: "Araç fren test cihazlarıyla hassas ölçümler sayesinde araç fren sistemindeki sorunlar grafik halinde rapor edilebilmektedir.",
    image: "https://ext.same-assets.com/1880888334/4121443908.jpeg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#E54C4C]" />
            <span className="section-subtitle">Pilot Garage Şaşmaz</span>
            <div className="w-12 h-0.5 bg-[#E54C4C]" />
          </div>
          <h2 className="section-title">Hizmetlerimiz</h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="flex items-center justify-between text-sm font-medium text-gray-800 hover:text-[#E54C4C] transition-colors"
                >
                  <span>Detaylı İncele</span>
                  <span className="w-10 h-10 bg-[#E54C4C] text-white rounded flex items-center justify-center service-arrow transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="#services"
            className="btn-outline inline-flex items-center gap-2"
          >
            Tüm Hizmetleri Görmek İçin Tıklayınız
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
