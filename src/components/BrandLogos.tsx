import Image from "next/image";

const brands = [
  { name: "Audi", logo: "https://ext.same-assets.com/1880888334/1365731712.png" },
  { name: "BMW", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/bmw.png" },
  { name: "Chevrolet", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/chevrolet.png" },
  { name: "Mercedes", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/mercedesbenz.png" },
  { name: "Volkswagen", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/volkswagen.png" },
  { name: "Toyota", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/toyota.png" },
  { name: "Honda", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/honda.png" },
  { name: "Ford", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/ford.png" },
  { name: "Renault", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/renault.png" },
  { name: "Peugeot", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/peugeot.png" },
  { name: "Fiat", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/fiat.png" },
  { name: "Hyundai", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/hyundai.png" },
  { name: "Kia", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/kia.png" },
  { name: "Opel", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/opel.png" },
  { name: "Nissan", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/nissan.png" },
  { name: "Mazda", logo: "https://pilotgaragesasmaz.com/wp-content/uploads/2023/06/mazda.png" },
];

export default function BrandLogos() {
  return (
    <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
      <div className="relative">
        <div className="flex animate-slide">
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-32 h-20 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={60}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
