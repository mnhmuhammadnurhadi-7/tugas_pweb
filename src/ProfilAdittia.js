import React from 'react';
import fotoProfil from './img_Adittia/kemejaPutih.jpg'; 

export default function ProfilAdittia() {
  const profile = {
    namaLengkap: "Adittia Dwi Kurniawan",
    nim: "253140701111036", 
    headline: "Mahasiswa IT | Web Developer | UI/UX Enthusiast",
    kelas: "T2C",
    jurusan: "D3 Teknologi Informasi",
    domisili: "Kota Malang, Jawa Timur",
    foto: fotoProfil, 
    tentang: "Perkenalkan, saya Adittia Dwi Kurniawan, mahasiswa program studi D3 Teknologi Informasi yang menaruh minat besar pada persilangan antara dunia teknologi dan bisnis. Sebagai mahasiswa IT, saya menyadari bahwa teknologi tidak hanya sebatas penulisan kode, tetapi tentang meracik teknologi menjadi solusi bisnis yang nyata.",
    email: "adittiadwikurniawan@gmail.com",
    telepon: "+62 812-3456-7890",
    linkedin: "linkedin.com/in/adittiadwi",
    github: "github.com/adittia-dev",
    warnaTema: "#3B82F6", 
  };

  const keahlian = ["Java", "Html", "Css","JavaScript", "React JS", "Tailwind CSS", "Node.js", "UI/UX Design"];
  
  const pendidikan = [
    { tahun: "2022 - 2025", institusi: "SMKN 11 Malang", jurusan: "Desain Komunikasi Visual" },
    { tahun: "2022 - Sekarang", institusi: "Universitas Brawijaya", jurusan: "D3 Teknologi Informasi" }
  ];

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-extrabold text-slate-800 tracking-tight">
            Portfolio <span style={{ color: profile.warnaTema }}>.</span>
          </h1>
        </div>

        {/* Layout Utama Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* KOLOM KIRI */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 flex flex-col items-center text-center shadow-sm">
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-slate-50 bg-slate-100">
                {profile.foto ? (
                  // <-- object-top dipakai di sini biar kepala nggak kepotong
                  <img src={profile.foto} alt="Profil" className="w-full h-full object-cover object-top" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-4xl text-slate-300 font-bold">?</div>
                )}
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-1">{profile.namaLengkap}</h2>
              <p className="text-sm font-medium text-slate-500 mb-6">{profile.headline}</p>
              
              <div className="w-full pt-6 border-t border-slate-100 flex gap-2 justify-center flex-wrap">
                {keahlian.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 space-y-6 shadow-sm">
              <div>
                <h3 className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Informasi Akademik</h3>
                <div className="space-y-3">
            
                  <div className="flex justify-between"><span className="text-sm text-slate-500">NIM</span><span className="text-sm font-bold text-slate-800">{profile.nim}</span></div>
                  <div className="flex justify-between"><span className="text-sm text-slate-500">Kelas</span><span className="text-sm font-bold text-slate-800">{profile.kelas}</span></div>
                  <div className="flex justify-between"><span className="text-sm text-slate-500">Prodi</span><span className="text-sm font-bold text-slate-800">{profile.jurusan}</span></div>
                  <div className="flex justify-between"><span className="text-sm text-slate-500">Domisili</span><span className="text-sm font-bold text-slate-800">{profile.domisili}</span></div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-slate-100">
                <h3 className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Kontak & Sosial</h3>
                <div className="space-y-4">
                  <div className="text-sm text-slate-600 font-medium truncate">📧 {profile.email}</div>
                  <div className="text-sm text-slate-600 font-medium">📞 {profile.telepon}</div>
                  <div className="text-sm text-slate-600 font-medium truncate">🔗 {profile.linkedin}</div>
                  <div className="text-sm text-slate-600 font-medium truncate">💻 {profile.github}</div>
                </div>
              </div>
            </div>
          </div>

 
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-extrabold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 rounded-full" style={{ background: profile.warnaTema }}></span> Tentang Saya
              </h2>
              <p className="text-slate-600 leading-relaxed text-[15px] text-justify">{profile.tentang}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-6">Pendidikan</h3>
                <div className="space-y-6">
                  {pendidikan.map((item, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-slate-100">
                      <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white" style={{ background: profile.warnaTema }}></span>
                      <p className="text-sm font-bold text-slate-400 mb-1">{item.tahun}</p>
                      <h4 className="text-base font-bold text-slate-800 mb-1">{item.jurusan}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.institusi}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}