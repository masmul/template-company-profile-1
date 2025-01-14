import React from 'react';
import { ShoppingBag, Car, Coffee } from 'lucide-react';

const services = [
  {
    icon: <Car className="w-8 h-8" />,
    title: 'GoRide',
    description: 'Transportasi yang aman dan nyaman',
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: 'GoMart',
    description: 'Belanja kebutuhan sehari-hari',
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: 'GoFood',
    description: 'Pesan makanan favorit Anda',
  },
];

export default function Services() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:border-green-500 transition"
            >
              <div className="text-green-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
