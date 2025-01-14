import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Bagaimana cara mendaftar sebagai mitra driver?",
      answer: "Untuk mendaftar sebagai mitra driver, Anda perlu menyiapkan dokumen seperti KTP, SIM, STNK, dan dokumen pendukung lainnya. Kemudian kunjungi kantor Gojek terdekat atau daftar melalui aplikasi."
    },
    {
      question: "Bagaimana cara top up GoPay?",
      answer: "Anda dapat melakukan top up GoPay melalui berbagai metode seperti transfer bank, minimarket, atau driver Gojek. Pilih menu Top Up di aplikasi dan ikuti instruksi yang diberikan."
    },
    {
      question: "Apa yang harus dilakukan jika pesanan tidak sesuai?",
      answer: "Jika pesanan tidak sesuai, Anda dapat melaporkannya melalui fitur bantuan di aplikasi. Tim kami akan menindaklanjuti laporan Anda dalam waktu 1x24 jam."
    },
    {
      question: "Bagaimana cara mengubah nomor telepon?",
      answer: "Untuk mengubah nomor telepon, masuk ke menu Pengaturan > Akun > Ubah Nomor Telepon. Ikuti verifikasi keamanan dan masukkan nomor baru Anda."
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-green-500" />
                ) : (
                  <Plus className="w-5 h-5 text-green-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 py-4 rounded-b-lg shadow-md -mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
