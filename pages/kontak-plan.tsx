import Image from "next/image"
import logoutama from '../public/logo-smarthealth.png'
import darurat_ils from '../public/darurat-ils.svg'
import apotek_ils from '../public/apotek-ils.jpg'
import alur_fogging from '../public/alur-fogging.png'
import dengue from '../public/dengue.svg'
import smart_icon from '../public/smart.svg'
import pest_icon from '../public/pest.svg'
import vaksin_icon from '../public/vaksin.svg'
import fogging_icon from '../public/fogging.svg'
import pengaduan_icon from '../public/pengaduan.svg'
import apotek_icon from '../public/apotek.svg'
import maklumat from '../public/maklumat.jpeg'
import aplikasi_icon from '../public/aplikasi.svg'
import nongkrong_icon from '../public/no-smoking.svg'
import galeri_icon from '../public/galeri.png'

import { FaAmbulance, FaArrowLeft, FaBuilding, FaChalkboardTeacher, FaChartBar, FaChartLine, FaCodeBranch, FaEnvelope, FaFacebook, FaFilePdf, FaGripHorizontal, FaInstagram, FaPhoneAlt, FaRegHandshake, FaSchool, FaTwitter, FaUserTie, FaUsers, FaWhatsapp } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import Link from "next/link";
import 'flowbite';



import { Tab } from '@headlessui/react'


export default function nomorDarurat() {

    

  return(
    // Menubar
    <>
<div className="w-full md:h-[90px] relative bg-slate-500">
    <div className="w-full h-auto md:pb-0 md:pt-0 relative z-30">
      <div className="flex flex-col h-auto items-center">

<nav className="w-full bg-white relative md:fixed shadow-lg border-b-[5px] border-b-yellow-300">
  <div className="w-full bg-sky-700 py-2 hidden md:block">
    <div className="container-custom mx-auto flex flex-row justify-center text-sm text-white">
      <div className="inline-flex items-center mx-2"><FaPhoneAlt className="mr-1" /> 0251 8331753</div>
      <div className="inline-flex items-center mx-2"><FaEnvelope className="mr-1" /> dinkes@kotabogor.go.id</div>
      <div className="inline-flex items-center mx-2 border-l border-l-white px-4">Media Sosial :</div>
      <Link href="">
        <div className="inline-flex items-center mx-2 hover:text-yellow-400 hover:cursor-pointer"><FaFacebook className="" /></div>
      </Link>
      <Link href="">
        <div className="inline-flex items-center mx-2 hover:text-yellow-400 hover:cursor-pointer"><FaInstagram className="" /></div>
      </Link>
      <Link href="">
        <div className="inline-flex items-center mx-2 hover:text-yellow-400 hover:cursor-pointer"><FaTwitter className="" /></div>
      </Link>
    </div>
  </div>
  <div className="container-custom flex flex-wrap items-center justify-between mx-auto ">
    <div className="w-full md:w-[15%] flex md:justify-start justify-center">
      <div className="w-[50%] md:w-[100%] my-1 flex flex-col justify-center bg-white rounded-lg p-2"><Image src={logoutama} className="rounded-lg" alt=""   /></div>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul className="flex flex-col p-6 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                <Link href="/">
                <li>
                    <div className="uppercase cursor-pointer block px-2 py-2 text-black font-regular  hover:bg-sky-800 hover:text-white rounded-md">Beranda</div>
                </li>
                </Link>
                <Link href="/publikasi-data">
                <li>
                    <div  className="uppercase cursor-pointer block px-2 py-2 text-black font-regular  hover:bg-sky-800 hover:text-white rounded-md">Publikasi Data</div>
                </li>
                </Link>
                <Link href="/layanan">
                <li>
                    <div  className="uppercase cursor-pointer block px-2 py-2 text-black font-regular  hover:bg-sky-800 hover:text-white rounded-md">Layanan</div>
                </li>
                </Link>
                <Link href="/fasilitas-kesehatan">
                <li>
                    <div className="uppercase cursor-pointer block px-2 py-2 text-black font-regular  hover:bg-sky-800 hover:text-white rounded-md">Fasilitas Kesehatan</div>
                </li>
                </Link>
                <Link href="/berita">
                <li>
                    <div className="uppercase cursor-pointer block px-2 py-2 text-black font-regular  hover:bg-sky-800 hover:text-white rounded-md">Berita</div>
                </li>
                </Link>
                <Link href="/penelitian">
                <li>
                    <div className="uppercase cursor-pointer block px-2 py-2 text-black font-regular  hover:bg-sky-800 hover:text-white rounded-md">Penelitian</div>
                </li>
                
                </Link>
                <Link href="/produk">
                <li>
                    <div className="uppercase cursor-pointer block px-2 py-2 text-black font-regular  hover:bg-sky-800 hover:text-white rounded-md">Produk</div>
                </li>
                
                </Link>
                <Link href="/dashboard">
                <li>
                    <div className="uppercase cursor-pointer block px-2 py-2 text-black font-regular  hover:bg-sky-800 hover:text-white rounded-md">Dashboard</div>
                </li>
                
                </Link>
                
            </ul>
    </div>
  </div>
</nav>
        
      </div>
    </div>
    
      
        
    </div>
<div className="w-full h-[15px] md:h-[100px] bg-sky-700"></div>
<div className="w-full h-auto md:h-[200px] bg-sky-700 flex flex-col justify-center items-center">
<h3 className="container-custom mx-auto text-center text-xl md:text-4xl font-bold mb-5 text-white inline-flex items-center justify-center">Nomor Darurat</h3>
</div>

   
<div className="container-custom mx-auto p-5 mt-5 mb-5 rounded-xl flex flex-col items-center md:flex-row flex-wrap" data-aos="fade-up">
            
      <div className="w-full md:w-[50%]">
      <div className="w-full bg-white rounded-xl shadow-lg mb-3 p-2 flex flex-row flex-wrap">
        <div className="w-[10%] rounded-xl bg-green-400 text-xl text-white flex items-center justify-center"><FaWhatsapp /></div>
        <div className="w-[90%] px-3">
            <p className="text-sm">Kontak WhatsApp</p>
            <a href="" className="text-xl font-bold">08 11111 6093</a>
        </div>
      </div>
      <div className="w-full bg-white rounded-xl shadow-lg mb-3 p-2 flex flex-row flex-wrap">
        <div className="w-[10%] rounded-xl bg-yellow-400 text-xl text-white flex items-center justify-center"><FaPhoneAlt /></div>
        <div className="w-[90%] px-3">
            <p className="text-sm">Call Center</p>
            <a href="" className="text-xl font-bold">0251 8331753</a>
        </div>
      </div>
      <div className="w-full bg-white rounded-xl shadow-lg mb-3 p-2 flex flex-row flex-wrap">
        <div className="w-[10%] rounded-xl bg-yellow-400 text-xl text-white flex items-center justify-center"><FaEnvelope /></div>
        <div className="w-[90%] px-3">
            <p className="text-sm">Email</p>
            <a href="" className="text-xl font-bold">dinkes@kotabogor.go.id</a>
        </div>
      </div>
      <div className="w-full bg-white rounded-xl shadow-lg mb-3 p-2 flex flex-row flex-wrap">
        <div className="w-[10%] rounded-xl bg-red-500 text-xl text-white flex items-center justify-center"><FaAmbulance /></div>
        <div className="w-[90%] px-3">
            <p className="text-sm">Emergency</p>
            <a href="" className="text-xl font-bold">119</a>
        </div>
      </div>
      </div>

      <div className="w-full md:w-[50%] rounded-xl">
      <div className="p-2 flex items-center justify-center">
        <Image src={darurat_ils}  className="rounded-xl" alt=""   />
        </div>
      </div>
      
    </div>
    

    


    

    

    
    


   

    

    

    


    {/* footer */}
    <div className="bg-slate-100" data-aos="fade-up">
      <div className="container-custom mx-auto py-10 flex flex-col items-center justify-center">
        <div>
          <Image src={logoutama} className="rounded-xl" alt="" width={200} height={130} />
        </div>
        <div>
          <p className="text-black text-sm">Copyright 2024 Dinas Kesehatan Kota Bogor</p>
        </div>
      </div>
    </div>
    </>
  )
}