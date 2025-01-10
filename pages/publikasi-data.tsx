import Image from "next/image"
import logoutama from '../public/logo-smarthealth.png'
import regulasi_icon from '../public/regulasi-kes.svg'
import profil_icon from '../public/profil.png'
import logosmk3 from '../public/smkn1gunungputri.png'
import logosmk4 from '../public/smkn1cileungsi.jpg'
import logosmk5 from '../public/smkn1leuwiliang.png'
import logosmk6 from '../public/smkn1bojonggede.png'
import logosmk7 from '../public/smkn1gunungsindur.jpg'
import logosmk8 from '../public/smkn2cibinong.jpg'

import { FaBuilding, FaChalkboardTeacher, FaChartBar, FaChartLine, FaCodeBranch, FaEnvelope, FaFacebook, FaFilePdf, FaInstagram, FaPhoneAlt, FaRegHandshake, FaSchool, FaTwitter, FaUserTie, FaUsers } from 'react-icons/fa';
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


export default function publikasiData() {

    

  return(
    // Menubar
    <>
<div className="w-full h-auto md:h-[90px] relative bg-slate-500">
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
<h3 className="container-custom mx-auto text-center text-xl md:text-4xl font-bold mb-5 text-white inline-flex items-center justify-center">Publikasi Data</h3>
</div>

    
    <div className="container-custom mx-auto" data-aos="fade-up">
    <Tab.Group>
      <Tab.List className="w-full flex flex-col md:flex-row justify-around my-2 flex-wrap">
        <Tab className="w-full md:w-[48%] rounded-xl bg-white shadow-lg py-3 text-center hover:bg-yellow-400 border-2 border-slate-100 hover:cursor-pointer hover:text-white flex flex-col items-center p-5 m-2"><Image src={regulasi_icon} width={64} height={64} alt=""   /> <p className="mt-3">Regulasi Kesehatan</p></Tab>
        <Tab className="w-full md:w-[48%] rounded-xl bg-white shadow-lg py-3 text-center hover:bg-yellow-400 border-2 border-slate-100 hover:cursor-pointer hover:text-white flex flex-col items-center p-5 m-2"><Image src={profil_icon} width={64} height={64} alt=""   /> <p className="mt-3">Profil Kesehatan</p></Tab>
        
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="my-3 p-3">
        
        <div className="my-7">
            <h3 className="text-2xl font-bold mb-1 text-black w-full text-center">Regulasi Kesehatan</h3>
            
            <div className="mt-14">
            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-sky-700">
            <tr>
                <th scope="col" className="px-3 py-3">
                    No
                </th>
                <th scope="col" className="px-6 py-3">
                    Judul
                </th>
                <th scope="col" className="px-6 py-3">
                    Dibuat Oleh
                </th>
                <th scope="col" className="px-6 py-3">
                    Kategori
                </th>
                <th scope="col" className="px-6 py-3">
                    Aksi
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white even:bg-gray-100 border-b">
                <td className="px-3 py-4">
                    1
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    SK Tim Kerja Dinas Kesehatan Tahun 2023
                </th>
                <td className="px-6 py-4">
                    Dinkes Bogor
                </td>
                <td className="px-6 py-4">
                    Regulasi Kesehatan
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium bg-yellow-400 text-white py-1 px-2 rounded-lg shadow-lg hover:underline inline-flex items-center"><FaFilePdf /> Lihat</a>
                </td>
            </tr>
           <tr className="odd:bg-white even:bg-gray-100 border-b">
                <td className="px-3 py-4">
                    2
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    SK Perubahan Tim Kerja Dinas Kesehatan Tahun 2023
                </th>
                <td className="px-6 py-4">
                    Dinkes Bogor
                </td>
                <td className="px-6 py-4">
                    Regulasi Kesehatan
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium bg-yellow-400 text-white py-1 px-2 rounded-lg shadow-lg hover:underline inline-flex items-center"><FaFilePdf /> Lihat</a>
                </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b">
                <td className="px-3 py-4">
                    3
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    PERWALI Nomor 18 Tahun 2023 tentang Rencana Aksi Daerah Percepatan Eliminasi Tuberkulosis Tahun 2023 - 2024	
                </th>
                <td className="px-6 py-4">
                    Dinkes Bogor
                </td>
                <td className="px-6 py-4">
                    Regulasi Kesehatan
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium bg-yellow-400 text-white py-1 px-2 rounded-lg shadow-lg hover:underline inline-flex items-center"><FaFilePdf /> Lihat</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        
        </div>
            
            
        </div>

       

        </Tab.Panel>
        <Tab.Panel className="my-3 p-3">
        
        <div className="my-7">
            <h3 className="text-2xl font-bold mb-1 text-black w-full text-center">Profil Kesehatan</h3>
            
            <div className="mt-14">
            

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-white uppercase bg-sky-700">
            <tr>
                <th scope="col" className="px-3 py-3">
                    No
                </th>
                <th scope="col" className="px-6 py-3">
                    Judul
                </th>
                <th scope="col" className="px-6 py-3">
                    Dibuat Oleh
                </th>
                <th scope="col" className="px-6 py-3">
                    Kategori
                </th>
                <th scope="col" className="px-6 py-3">
                    Aksi
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white even:bg-gray-100 border-b">
                <td className="px-3 py-4">
                    1
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Profil Kesehatan Tahun 2022
                </th>
                <td className="px-6 py-4">
                    Dinkes Bogor
                </td>
                <td className="px-6 py-4">
                    Profil Kesehatan
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium bg-yellow-400 text-white py-1 px-2 rounded-lg shadow-lg hover:underline inline-flex items-center"><FaFilePdf /> Lihat</a>
                </td>
            </tr>
           <tr className="odd:bg-white even:bg-gray-100 border-b">
                <td className="px-3 py-4">
                    2
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Profil Kesehatan Tahun 2021
                </th>
                <td className="px-6 py-4">
                    Dinkes Bogor
                </td>
                <td className="px-6 py-4">
                    Profil Kesehatan
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium bg-yellow-400 text-white py-1 px-2 rounded-lg shadow-lg hover:underline inline-flex items-center"><FaFilePdf /> Lihat</a>
                </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-100 border-b">
                <td className="px-3 py-4">
                    3
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Profil Kesehatan Tahun 2019
                </th>
                <td className="px-6 py-4">
                    Dinkes Bogor
                </td>
                <td className="px-6 py-4">
                    Profil Kesehatan
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium bg-yellow-400 text-white py-1 px-2 rounded-lg shadow-lg hover:underline inline-flex items-center"><FaFilePdf /> Lihat</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

        
        </div>
            
            
        </div>

       

        </Tab.Panel>
        
        
       
       
      </Tab.Panels>
    </Tab.Group>
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