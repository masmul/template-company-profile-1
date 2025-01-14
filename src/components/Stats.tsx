import React from 'react';

const stats = [
  { number: '150 juta+', label: 'Unduhan aplikasi' },
  { number: '2 juta+', label: 'Mitra driver' },
  { number: '900.000+', label: 'Merchant partner' },
  { number: '2.448x', label: 'Pertumbuhan transaksi' },
];

export default function Stats() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skala Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-4xl font-bold text-green-500 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
