import React from 'react';

export default function Blog() {
  const posts = [
    {
      title: "Inovasi Teknologi Gojek untuk Masa Depan Transportasi",
      excerpt: "Bagaimana Gojek menggunakan AI dan machine learning untuk meningkatkan layanan transportasi",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      date: "5 Mar 2024",
      category: "Teknologi"
    },
    {
      title: "Dampak Sosial Gojek di Indonesia",
      excerpt: "Melihat bagaimana Gojek membantu meningkatkan kehidupan masyarakat Indonesia",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80",
      date: "3 Mar 2024",
      category: "Sosial"
    },
    {
      title: "Tips Sukses Menjadi Mitra Driver",
      excerpt: "Panduan lengkap untuk memaksimalkan penghasilan sebagai mitra driver",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80",
      date: "1 Mar 2024",
      category: "Tips"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Blog Gojek</h1>
          <p className="text-xl">Cerita inspiratif dan update terbaru dari Gojek</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-green-500">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-green-500 font-semibold hover:text-green-600">
                  Baca Selengkapnya →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
