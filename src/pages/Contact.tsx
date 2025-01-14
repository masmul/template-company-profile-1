import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center">Hubungi Kami</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-200"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Informasi Kontak</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-green-500 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Alamat</h3>
                  <p className="text-gray-600">
                    Pasaraya Blok M Gedung B Lt. 6<br />
                    Jl. Iskandarsyah II No.7<br />
                    Jakarta Selatan 12160
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-green-500 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Telepon</h3>
                  <p className="text-gray-600">021-1234567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-green-500 mr-4" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-600">help@gojek.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Jam Operasional</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-600">
                  Senin - Jumat: 09:00 - 18:00<br />
                  Sabtu: 09:00 - 15:00<br />
                  Minggu: Tutup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
