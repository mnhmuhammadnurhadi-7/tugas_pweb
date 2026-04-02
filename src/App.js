import './App.css';

import ProfilAdittia from './ProfilAdittia';
import ProfilHadi from './ProfilHadi';
import ProfilAndra from './ProfilAndra';

export default function App() {
  
  const path = window.location.pathname;

  
  if (path === "/adittia-dwi-kurniawan") {
    
    return <ProfilAdittia />;
  } 
  else if (path === "/muhammad-nur-hadi") {
    
    return <ProfilHadi />;
  } 
  else if (path === "/paundra-bayu-aji") {
    
    return <ProfilAndra />;
  }
  else {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold mb-6 text-slate-800">Tugas Portfolio Kelompok</h1>
        <p className="mb-8 text-slate-600">Pilih profil yang ingin dilihat:</p>
        <div className="flex gap-4">
          <a href="/adittia-dwi-kurniawan" className="px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition">
            Profil Adittia
          </a>
          <a href="/muhammad-nur-hadi" className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-600 transition">
            Profil Hadi
          </a>
          <a href="/paundra-bayu-aji" className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-bold hover:bg-indigo-600 transition">
            Profil Andra
          </a>
        </div>
      </div>
    );
  }
}