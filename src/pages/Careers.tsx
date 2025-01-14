import React from 'react';
import { Briefcase, Users, Trophy, Heart } from 'lucide-react';

export default function Careers() {
  const positions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Jakarta",
      type: "Full Time"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Jakarta",
      type: "Full Time"
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Jakarta",
      type: "Full Time"
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-green-500" />,
      title: "Kesehatan",
      description: "Asuransi kesehatan kelas A untuk karyawan dan keluarga"
    },
    {
      icon: <Trophy className="w-8 h-8 text-green-500" />,
      title: "Pengembangan",
      description: "Program pengembangan karir dan pelatihan berkala"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "Flexible",
      description: "Kebijakan kerja yang fleksibel dan work-life balance"
    }
  ];

  return (
    <div className="pt-16">
      <div className="bg-green-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Karir di Gojek</h1>
          <p className="text-xl">Bergabunglah dengan kami untuk membuat perubahan</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Posisi yang Tersedia</h2>
        <div className="grid gap-6">
          {positions.map((position, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <p className="text-gray-600">{position.department}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{position.location}</p>
                  <p className="text-green-500">{position.type}</p>
                </div>
              </div>
              <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-md">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
