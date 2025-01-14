import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

export default function HelpCenter() {
  const categories = [
    {
      title: "Akun & Keamanan",
      topics: ["Reset Password", "Verifikasi Akun", "Keamanan Akun"]
    },
    {
      title: "Pembayaran",
      topics: ["Metode Pembayaran", "Gopay", "Refund"]
    },
    {
      title: "Layanan",
      topics: ["GoRide", "GoFood", "GoMart"]
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Pusat Bantuan</h1>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Cari bantuan..."
              className="w-full py-3 px-12 rounded-full text-gray-800"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <ul className="space-y-3">
                {category.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>
                    <a href="#" className="flex items-center justify-between text-gray-600 hover:text-green-500">
                      {topic}
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
