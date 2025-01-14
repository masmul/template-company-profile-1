import React from 'react';

export default function About() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Tentang Kami</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Visi Kami</h2>
            <p className="text-gray-600 mb-6">
              Membantu memperbaiki kehidupan melalui teknologi, dengan memberikan akses ke layanan yang lebih baik dan menciptakan dampak sosial yang positif di seluruh Asia Tenggara.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Misi Kami</h2>
            <p className="text-gray-600">
              Menjadi platform on-demand terdepan yang menghubungkan jutaan pengguna dengan layanan yang mereka butuhkan, sambil memberdayakan mitra dan UMKM untuk tumbuh bersama.
            </p>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-xl">
            <h2 className="text-2xl font-semibold mb-6">Nilai-Nilai Kami</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold mb-1">Integritas</h3>
                  <p className="text-gray-600">Selalu bertindak dengan kejujuran dan transparansi</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold mb-1">Inovasi</h3>
                  <p className="text-gray-600">Terus berinovasi untuk solusi yang lebih baik</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold mb-1">Kolaborasi</h3>
                  <p className="text-gray-600">Bekerja sama untuk mencapai tujuan bersama</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
