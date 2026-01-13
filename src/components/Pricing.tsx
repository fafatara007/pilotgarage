import Link from "next/link";

const pricingPlans = [
  {
    name: "Dyno Motor Performans Paketi",
    subtitle: "Mini Pratik Kontroller",
    price: "3.500",
    features: [
      "Koltuk Minderi Hava Yastığı",
      "Emniyet Kemeri Hava Yastığı",
      "Sürücü Diz Hava Yastığı",
      "Yolcu Diz Hava Yastığı",
    ],
    color: "bg-gray-900",
  },
  {
    name: "Hava Yastığı Kontrolleri",
    subtitle: "Mini Pratik Kontroller",
    price: "4.000",
    features: [
      "Turbo Basınç Kontrolü",
      "Debriyaj Baskı Balataları",
      "Yakıt Kaçağı",
      "Krank Keçeleri",
    ],
    color: "bg-[#E54C4C]",
  },
  {
    name: "Mini Ekspertiz Kaporta Paketi",
    subtitle: "Mini Pratik Kontroller",
    price: "4.500",
    features: [
      "Boya Kaporta Kontrolleri",
      "Amortisör Kulesi Sağ",
      "Amortisör Kulesi Sol",
      "Arka Panel",
      "Arka Tampon",
      "Bagaj İç Havuz Sacı",
      "Çizik/Gamze/Göçükler",
      "Ön Panel",
      "Ön Tampon",
      "Podye Sağ",
      "Podye Sol",
    ],
    color: "bg-gray-900",
  },
  {
    name: "Mini Ekspertiz Motor Paketi",
    subtitle: "Mini Pratik Kontroller",
    price: "4.500",
    features: [
      "Motor Mekanik Kontroller",
      "Mekanik Alt Kontrolleri",
      "Dyno Motor Performans Testi",
    ],
    color: "bg-[#E54C4C]",
  },
  {
    name: "Eko Class",
    subtitle: "Ekonomik ve Net Sonuçlar",
    price: "5.500",
    features: [
      "Boya Kaporta Kontrolleri",
      "Mekanik Alt Kontroller",
      "İç Kontroller",
      "Dış Kontroller",
      "Boya Kaporta Kontrolleri",
      "Dyno Motor Performans Testi",
    ],
    color: "bg-[#E54C4C]",
  },
  {
    name: "Bold Class",
    subtitle: "Bakış Açını Değiştir, Daha Geniş ve Detaylı!",
    price: "6.500",
    features: [
      "Motor Mekanik Kontroller",
      "Mekanik Alt Kontrolleri",
      "İç Kontroller",
      "Dış Kontroller",
      "Boya Kaporta Kontrolleri",
      "Obd Elektronik Kontrol Sonucu",
      "Dyno Motor Test Sonucu",
      "Süspansiyon Test Sonucu",
      "Fren Test Sonucu",
      "Yanal Kayma Değerleri",
      "Tramer Sorgusu",
    ],
    color: "bg-[#E54C4C]",
  },
  {
    name: "Business",
    subtitle: "Kaliteli ve Güvenilir Hizmet",
    price: "8.000",
    features: [
      "Motor Mekanik Kontroller",
      "Mekanik Alt Kontrolleri",
      "İç Kontroller",
      "Dış Kontroller",
      "Boya Kaporta Kontrolleri",
      "Obd Elektronik Kontrol Sonucu",
      "Dyno Motor Test Sonucu",
      "Fren Test Kontrol",
      "Süspansiyon Test Sonucu",
      "Hasar ve Km Sorgusu",
    ],
    color: "bg-[#E54C4C]",
  },
  {
    name: "First Class",
    subtitle: "Kaliteli Seçim, Ayrıcalıklı Hizmet",
    price: "9.500",
    features: [
      "Motor Mekanik Kontroller",
      "Mekanik Alt Kontrolleri",
      "Boya Kaporta Kontrolleri",
      "Dyno Motor Test Sonucu",
      "Obd Elektronik Kontrol Sonucu",
      "İç Kontroller",
      "Dış Kontroller",
      "Fren Test Sonucu",
      "Hasar ve KM Sorgulama",
    ],
    color: "bg-[#E54C4C]",
  },
  {
    name: "Black Box",
    subtitle: "Yüksek Kalite, Ayrıcalıklı Hizmet",
    price: "13.500",
    features: [
      "Ekspertiz Öncesi Araç Durumu",
      "Boya Kaporta Kontrolleri",
      "Dış Kontroller",
      "İç Kontroller",
      "Dyno Motor Performans Test",
      "Fren Test kontrolleri",
      "Süspansiyon Test Kontrolleri",
      "Yanal Kayma Test Kontrolleri",
      "Lastik Kontrolleri",
      "Hava Yastığı Kontrolleri",
      "Motor Mekanik Kontroller",
      "Mekanik Alt Kontroller",
      "OBD Elektronik Kontroller",
      "Conta Yanık Testi",
      "Sorgulamalar",
    ],
    color: "bg-gray-900",
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#E54C4C]" />
            <span className="section-subtitle">Pilot Garage Şaşmaz</span>
            <div className="w-12 h-0.5 bg-[#E54C4C]" />
          </div>
          <h2 className="section-title">Paketler & Fiyatlar</h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                plan.featured ? "ring-2 ring-[#E54C4C]" : ""
              }`}
            >
              {/* Header */}
              <div className={`${plan.color} text-white p-6 text-center relative`}>
                {/* Decorative circles */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full border border-white/20" />
                <div className="absolute top-8 left-12 w-4 h-4 rounded-full border border-white/20" />
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-white/20" />
                <div className="absolute bottom-8 right-12 w-4 h-4 rounded-full border border-white/20" />

                <h3 className="text-xl font-bold mb-1">{plan.name.split(" ").slice(0, 2).join(" ")}</h3>
                <h4 className="text-lg font-semibold mb-2">{plan.name.split(" ").slice(2).join(" ")}</h4>
                <p className="text-sm opacity-80 mb-4">{plan.subtitle}</p>
                <div className="w-12 h-0.5 bg-white/30 mx-auto mb-4" />
                <div className="text-4xl font-bold">
                  {plan.price}<span className="text-lg">₺</span>
                </div>
                {/* Car icon */}
                <div className="mt-4 w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-800" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white p-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="block text-center px-6 py-3 border border-gray-800 text-gray-800 rounded font-medium hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Randevu Alın
                </Link>
                <p className="text-xs text-gray-500 text-center mt-3">*Fiyata KDV Dahildir</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
