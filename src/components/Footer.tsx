import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Tentang Gojek</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-500">Tentang Kami</Link></li>
              <li><Link to="/careers" className="hover:text-green-500">Karir</Link></li>
              <li><Link to="/blog" className="hover:text-green-500">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-500">GoRide</Link></li>
              <li><Link to="/" className="hover:text-green-500">GoFood</Link></li>
              <li><Link to="/" className="hover:text-green-500">GoMart</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Bantuan</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-green-500">Pusat Bantuan</Link></li>
              <li><Link to="/contact" className="hover:text-green-500">Hubungi Kami</Link></li>
              <li><Link to="/faq" className="hover:text-green-500">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com/gojek" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <Facebook />
              </a>
              <a href="https://twitter.com/gojek" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <Twitter />
              </a>
              <a href="https://instagram.com/gojek" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <Instagram />
              </a>
              <a href="https://youtube.com/gojek" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">© 2024 Gojek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
