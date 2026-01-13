import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    title: "Sel Hasarlı Araçlar Satın Alınabilir mi?",
    excerpt: "Sel felaketleri, araçların zarar görmesine neden olabilir ve bu da potansiyel olarak satın alma sürecinde...",
    image: "https://ext.same-assets.com/1880888334/1970099305.jpeg",
    category: "Sel",
    date: "8 Haziran 2023",
  },
  {
    title: "Lastiğin Ömrü Kaç Yıldır, Ne Zaman Değiştirilir?",
    excerpt: "Araç lastikleri, güvenli ve verimli bir sürüş deneyimi sağlamak için düzenli olarak değiştirilmelidir.",
    image: "https://ext.same-assets.com/1880888334/2005200450.jpeg",
    category: "Lastik",
    date: "8 Haziran 2023",
  },
  {
    title: "Chip Tuning Nedir? Ekspertizde Çıkar Mı?",
    excerpt: "Motor performansı, bir aracın performansını, gücünü ve verimliliğini belirleyen önemli bir faktördür. Motor...",
    image: "https://ext.same-assets.com/1880888334/2858463642.jpeg",
    category: "Chip Tuning",
    date: "7 Haziran 2023",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-[#E54C4C]" />
            <span className="section-subtitle">Pilot Garage Şaşmaz</span>
            <div className="w-12 h-0.5 bg-[#E54C4C]" />
          </div>
          <h2 className="section-title">Güncel Yazılar</h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center gap-4 text-white text-xs">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-[#E54C4C] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#E54C4C] font-medium text-sm hover:gap-3 transition-all"
                >
                  DEVAMINI OKU
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
