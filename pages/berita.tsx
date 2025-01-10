import Image from "next/image"
import logoutama from '../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'
import regulasi_icon from '../public/regulasi-kes.svg'
import profil_icon from '../public/profil.png'
import map_icon from '../public/peta.png'
import berita1 from '../public/Hani-Purnawanti.jpg'
import berita2 from '../public/IMG_4383-2048x1536.jpg'
import berita3 from '../public/IMG_5577-2048x1365.jpg'
import berita4 from '../public/unis3.jpg'
import berita5 from '../public/Hani-Purnawanti.jpg'
import berita6 from '../public/unis3.jpg'
import berita7 from '../public/IMG_5577-2048x1365.jpg'
import berita8 from '../public/IMG_5577-2048x1365.jpg'

import { FaBuilding, FaCalendarAlt, FaChalkboardTeacher, FaChartBar, FaChartLine, FaCodeBranch, FaEnvelope, FaEye, FaFacebook, FaFilePdf, FaInstagram, FaMapMarkerAlt, FaNewspaper, FaPhoneAlt, FaRegHandshake, FaSchool, FaTag, FaTwitter, FaUser, FaUserTie, FaUsers } from 'react-icons/fa';
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
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Autoplay, Pagination, Navigation } from "swiper"


export default function publikasiData() {

    

  return(
    // Menubar
    <>
<div className="w-full md:h-[90px] relative">
    <div className="w-full h-auto md:pb-0 md:pt-0 relative z-30">
      <div className="flex flex-col h-auto items-center">

<nav className="w-full bg-white relative md:fixed shadow-lg border-b-[5px] border-b-red-600">
<div className="w-full bg-blue-800 py-2 hidden md:block">
    <div className="container-custom mx-auto flex flex-row justify-center text-sm text-white">
      <div className="inline-flex items-center mx-2"><FaMapMarkerAlt className="mr-1" /> Plaza Indah Bogor, Blok B2, Jl. Saleh Iskandar, Kedung Badak, Kota Bogor</div>
      <div className="inline-flex items-center mx-2"><FaEnvelope className="mr-1" /> humas@relawantik.or.id</div>
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
                    <div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular  hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Beranda</div>
                </li>
                </Link>
                <Link href="/profil">
                <li>
                    <div  className="uppercase cursor-pointer block px-5 py-2 text-black font-regular  hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Profil</div>
                </li>
                </Link>
                <Link href="/program">
                <li>
                    <div  className="uppercase cursor-pointer block px-5 py-2 text-black font-regular  hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Program</div>
                </li>
                </Link>
                <Link href="/mitra">
                <li>
                    <div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular  hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Mitra</div>
                </li>
                </Link>
                <Link href="/kontak">
                <li>
                    <div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular  hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Kontak</div>
                </li>
                </Link>
                
                
                
                
            </ul>
    </div>
  </div>
</nav>
        
      </div>
    </div>
    
      
        
</div>
{/* <div className="w-full h-[15px] md:h-[100px] bg-blue-800"></div> */}
<div className="w-full h-auto md:h-[200px] bg-blue-800 flex flex-col justify-center items-center">
<h3 className="container-custom mx-auto text-center text-xl md:text-4xl font-bold mb-5 text-white inline-flex items-center justify-center">Berita RTIK Indonesia</h3>
</div>

    
<div className="container-custom mx-auto mb-14" data-aos="fade-up">

<div className="w-full h-[500px] -mt-14 mb-3">
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[500px] shadow-md rounded-xl"
      >
        <SwiperSlide className="w-full h-[500px] bg-white rounded-lg relative">
          <Image
            src={berita1} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            <div className="absolute backdrop-blur-sm bg-black/70 h-[500px] z-9 w-full md:w-[40%] right-0 p-3 flex flex-col items-center justify-center" data-aos="fade-up">
              <div className="w-full flex flex-col md:flex-row justify-start mb-3">
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Senin, 20 Mei 2024</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 14</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaTag className="mr-1"/> Berita RTIK</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> Administrastor</h6>
                
              </div>
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-2xl font-bold text-slate-100 hover:text-yellow-300 hover:cursor-pointer">Hari Ibu, Ketua Umum RTIK Ajak Ibu Cerdas Lingdungi Keluarga di Era Digital</h1>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-[500px] bg-white rounded-lg relative">
          <Image
            src={berita2} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            <div className="absolute backdrop-blur-sm bg-black/70 h-[500px] z-9 w-full md:w-[40%] right-0 p-3 flex flex-col items-center justify-center" data-aos="fade-up">
              <div className="w-full flex flex-col md:flex-row justify-start mb-3">
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Senin, 20 Mei 2024</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 16</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaTag className="mr-1"/> Berita RTIK</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> Administrator</h6>
              </div>
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-2xl font-bold text-slate-100 hover:text-yellow-300 hover:cursor-pointer">Pengurus Relawan TIK Provinsi Banten Dilantik, Langkah Awal Melanjutkan Perjuangan Mewujudkan Banten Makin Cakap Digital</h1>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-[500px] bg-white rounded-lg relative">
          <Image
            src={berita3} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            <div className="absolute backdrop-blur-sm bg-black/70 h-[500px] z-9 w-full md:w-[40%] right-0 p-3 flex flex-col items-center justify-center" data-aos="fade-up">
              <div className="w-full flex flex-col md:flex-row justify-start mb-3">
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Senin, 20 Mei 2024</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 13</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaTag className="mr-1"/> Berita RTIK</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> Administrator</h6>
              </div>
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-2xl font-bold text-slate-100 hover:text-yellow-300 hover:cursor-pointer">Relawan TIK Resmi Umumkan Kepengurusan Periode 2024–2028</h1>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          
          
       
        
       
      </Swiper>
          
        </div>



      <div className="w-full p-5 bg-slate-800 rounded-xl h-auto flex flex-col flex-wrap items-center justify-center mb-5 relative z-20">
        
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-around">
            <div className="w-full md:w-[32%] pr-1"><label htmlFor="website-admin" className="block mb-2 text-xs font-medium text-white">Cari Informasi Berdasarkan Kata Kunci</label>
                <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                    <BiSearchAlt/>
                </span>
                <input type="text" id="website-admin" className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm p-2.5 " placeholder="Masukkan Kata Kunci Disini ..." />
                </div>
            </div>
            <div className="w-full md:w-[32%] pr-1"><label htmlFor="website-admin" className="block mb-2 text-xs font-medium text-white">Cari Informasi Berdasarkan Kategori</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Pilih Sumber Berita</option>
              <option value="US">Berita RTIK</option>
              <option value="CA">Berita Wilayah</option>
            </select>
            </div>
            <div className="w-full md:w-[32%] pr-1"><label htmlFor="website-admin" className="block mb-2 text-xs font-medium text-white">Pilih Wilayah</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
              <option selected>Pilih Sub Kategori</option>
              <option value="US">RTIK A</option>
              <option value="CA">RTIK B</option>
              
            </select>
            </div>
            
        </div>
       
      </div>
      <div className="w-full flex flex-col md:flex-row flex-wrap justify-around items-start">
        <div className="w-full md:w-[24%] h-auto bg-white rounded-xl shadow-md mx-1 my-1 mb-5">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita1} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
              <div className="w-full flex flex-col my-3">
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaTag className="mr-1"/>Berita RTIK</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaEye className="mr-1"/>100</h4>
              </div>
              <h2 className="mb-3">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-2 rounded-lg bg-yellow-400 shadow-sm mx-3 text-xs text-white text-center font-medium cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[24%] h-auto bg-white rounded-xl shadow-md mx-1 my-1 mb-5">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita2} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
            <div className="w-full flex flex-col my-3">
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaTag className="mr-1"/>Berita RTIK</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaEye className="mr-1"/>100</h4>
              </div>
              <h2 className="mb-3">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-2 rounded-lg bg-yellow-400 shadow-sm mx-3 text-xs text-white text-center font-medium cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[24%] h-auto bg-white rounded-xl shadow-md mx-1 my-1 mb-5">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita3} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
            <div className="w-full flex flex-col my-3">
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaTag className="mr-1"/>Berita RTIK</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaEye className="mr-1"/>100</h4>
              </div>
              <h2 className="mb-3">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-2 rounded-lg bg-yellow-400 shadow-sm mx-3 text-xs text-white text-center font-medium cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[24%] h-auto bg-white rounded-xl shadow-md mx-1 my-1 mb-5">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita4} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
            <div className="w-full flex flex-col my-3">
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaTag className="mr-1"/>Berita RTIK</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaEye className="mr-1"/>100</h4>
              </div>
              <h2 className="mb-3">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-2 rounded-lg bg-yellow-400 shadow-sm mx-3 text-xs text-white text-center font-medium cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[24%] h-auto bg-white rounded-xl shadow-md mx-1 my-1 mb-5">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita5} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
            <div className="w-full flex flex-col my-3">
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaTag className="mr-1"/>Berita RTIK</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaEye className="mr-1"/>100</h4>
              </div>
              <h2 className="mb-3">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-2 rounded-lg bg-yellow-400 shadow-sm mx-3 text-xs text-white text-center font-medium cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[24%] h-auto bg-white rounded-xl shadow-md mx-1 my-1 mb-5">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita6} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
            <div className="w-full flex flex-col my-3">
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaTag className="mr-1"/>Berita RTIK</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaEye className="mr-1"/>100</h4>
              </div>
              <h2 className="mb-3">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-2 rounded-lg bg-yellow-400 shadow-sm mx-3 text-xs text-white text-center font-medium cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[24%] h-auto bg-white rounded-xl shadow-md mx-1 my-1 mb-5">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita7} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
            <div className="w-full flex flex-col my-3">
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaTag className="mr-1"/>Berita RTIK</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaEye className="mr-1"/>100</h4>
              </div>
              <h2 className="mb-3">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-2 rounded-lg bg-yellow-400 shadow-sm mx-3 text-xs text-white text-center font-medium cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-[24%] h-auto bg-white rounded-xl shadow-md mx-1 my-1 mb-5">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita8} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
            <div className="w-full flex flex-col my-3">
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaTag className="mr-1"/>Berita RTIK</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500"><FaEye className="mr-1"/>100</h4>
              </div>
              <h2 className="mb-3">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-2 rounded-lg bg-yellow-400 shadow-sm mx-3 text-xs text-white text-center font-medium cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
       
        
        
       
        
        
       
        
        
      </div>
    </div>
    

    


    

    

    
    


   

    

    

    


    {/* footer */}
    <div className="bg-slate-100" data-aos="fade-up">
      <div className="container-custom mx-auto py-10 flex flex-col items-center justify-center">
        <div>
          <Image src={logoutama} className="rounded-xl" alt="" width={200} height={50} />
        </div>
        <div>
          <p className="text-black text-sm">Copyright 2025 RTIK Indonesia</p>
        </div>
      </div>
    </div>
    </>
  )
}