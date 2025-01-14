import React from 'react';
import { Globe, Users, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen bg-black text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&q=80")',
          opacity: '0.4'
        }}
      />
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            3 negara.<br />
            20+ layanan.<br />
            1 platform on-demand terkemuka.
          </h1>
          <p className="text-xl mb-8">
            Membangun masa depan yang lebih baik melalui inovasi teknologi
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
