import Image from "next/image"
import logoutama from '../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'
import slider1 from '../public/Hani-Purnawanti.jpg'
import slider2 from '../public/IMG_5577-2048x1365.jpg'
import berita1 from '../public/Hani-Purnawanti.jpg'
import berita2 from '../public/IMG_5577-2048x1365.jpg'
import berita3 from '../public/foto-bersama.jpg'
import berita4 from '../public/litdig-tgbf24-01.jpg'
import berita5 from '../public/unis3.jpg'
import berita6 from '../public/IMG_4383-2048x1536.jpg'
import berita7 from '../public/unis3.jpg'
import berita8 from '../public/IMG_4383-2048x1536.jpg'
import dashboard_icon from '../public/dashboard.svg'
import faskes_icon from '../public/faskes.svg'
import regulasi_icon from '../public/regulasi-kes.svg'
import publikasi_icon from '../public/publikasi.svg'
import news_icon from '../public/news.svg'
import emergency_icon from '../public/emergency.png'
import layanan_icon from '../public/layanan-kes.svg'
import penelitian_icon from '../public/penelitian.svg'
import agenda_icon from '../public/agenda.svg'
import organisasi_icon from '../public/oganisasi.svg'
import aplikasi_icon from '../public/aplikasi.svg'
import nongkrong_icon from '../public/no-smoking.svg'
import galeri_icon from '../public/galeri.png'
import info1 from '../public/info-1.jpeg'
import info2 from '../public/info-2.jpeg'
import info3 from '../public/info-3.jpg'
import info4 from '../public/info-4.jpeg'
import info5 from '../public/info-5.png'
import bjb from '../public/bjb.png'
import tefa4 from '../public/tefa4.png'
import tefa5 from '../public/tefa5.png'
import imageplaceholder from '../public/placeholder-image.jpg'
import smkawards from '../public/smkawards.webp'
import cactlogo from '../public/cact-logo.png'
import lkslogo from '../public/logo-lks.jpeg'
import album1 from '../public/album1.jpg'
import album2 from '../public/album2.jpg'
import spw1 from '../public/spw1.webp'
import spw2 from '../public/spw2.webp'
import tefapub1 from '../public/tefapub1.webp'
import tefapub2 from '../public/tefapub2.webp'
import kadis from '../public/kepala-dinas.jpg'
import ext1 from '../public/4.png'
import ext2 from '../public/3.png'
import ext3 from '../public/Mitra-RTIK.png'
import ext4 from '../public/1.png'
import ext5 from '../public/Mitra-RTIK-1.png'
import ext6 from '../public/Bonet-1-scaled.jpg'
import ext7 from '../public/Ict-Watch-2-scaled.jpg'
import ext8 from '../public/Pandu-Digital-2-scaled.jpg'
import ext9 from '../public/Mitra-RTIK-2.png'
import ext10 from '../public/2-1.png'
//import kadis from '../public/welcome-kadis.png'
import rilis2 from '../public/artkl2.jpg'
import rilis3 from '../public/artkl3.jpg'
import rilis4 from '../public/artkl4.jpg'
import rilis5 from '../public/artkl5.webp'
import siswa1 from '../public/siswa1.webp'
import siswa2 from '../public/siswa2.jpg'
import siswa3 from '../public/siswa3.jpg'
import siswa4 from '../public/siswa4.jpeg'
import siswa5 from '../public/siswa5.jpg'
import carisertifikat from '../public/search.png'
import webinar from '../public/webinar.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { FaArrowAltCircleRight, FaBeer, FaBookReader, FaBuffer, FaBuilding, FaBullseye, FaCalendar, FaCalendarAlt, FaCalendarTimes, FaChevronCircleRight, FaChevronLeft, FaChevronRight, FaClinicMedical, FaClock, FaCommentDots, FaEnvelope, FaEye, FaFacebook, FaFemale, FaFileVideo, FaGenderless, FaGripHorizontal, FaInfoCircle, FaInstagram, FaKeyboard, FaLink, FaMale, FaMapMarker, FaMapMarkerAlt, FaMousePointer, FaNewspaper, FaPager, FaPhoneAlt, FaPhotoVideo, FaQuestion, FaRegLightbulb, FaRegUserCircle, FaSchool, FaSearch, FaTag, FaTags, FaThLarge, FaTransgender, FaTrophy, FaTwitter, FaUser, FaUserTie, FaUsers, FaVideo } from 'react-icons/fa';
import { BiChevronLeftSquare, BiChevronRightSquare, BiSearchAlt } from 'react-icons/bi'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import 'flowbite';


export default function Home() {
  
  return(
    // Menubar
    <>
    
  

<div className="w-full h-auto md:h-[730px] relative bg-blue-800">
    <div className="w-full h-auto pt-5 pb-5 md:pb-0 md:pt-0 relative z-30">
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
    
      <div className="w-full h-[400px] md:h-[730px] absolute bg-gradient-to-t from-blue-800/50 to-black/90 z-10">
        
      <div className="container-custom mx-auto z-20 flex justify-center items-center h-[300px] md:h-[730px]">
          <div className="w-full md:w-[80%] mt-2 md:mt-[50px] text-center">
            
            <h1 className="text-lg md:text-6xl text-red-600 font-bold drop-shadow-lg mb-5"><span className=" px-6 py-1 rounded-3xl text-white">RELAWAN TIK</span> INDONESIA</h1>
            <h1 className="text-lg md:text-xl text-white font-regular drop-shadow-lg inline-block">Organisasi pegiat TIK terbesar di Indonesia, edukasi, sosialisasi dan kompetensi untuk rakyat hingga pelosok negeri wujudkan Indonesia Digital Nation</h1>
          <div className="mt-5 w-[70%] mx-auto">
            
            {/* <form>   
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Cari Informasi..." required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Cari</button>
                </div>
            </form> */}

          </div>
          </div>
        </div>
        
      </div>
        <div className="flex flex-row flex-wrap">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-[400px] md:h-[730px]"
        >
          <SwiperSlide>
            <div className="w-full h-auto rounded-lg flex flex-col justify-center items-center">
              <div className="w-full h-auto md:h-[730px] flex items-center justify-center shadow-lg">
                <Image
                  src={slider1} className="rounded-lg" layout="fill" objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-auto rounded-lg flex flex-col justify-center items-center">
              <div className="w-full h-auto md:h-[720px] flex items-center justify-center shadow-lg">
                <Image
                  src={slider2} className="rounded-lg" layout="fill" objectFit="cover"
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
    </div>


    <div className="w-full mx-auto container-custom flex flex-col md:flex-row flex-wrap items-start justify-around relative z-20 -mt-[100px]">

    <div className="w-full md:w-[24%] h-[200px] flex flex-col items-center justify-center bg-white mx-auto p-8 text-center mb-5 rounded-3xl shadow-md" data-aos="fade-up">
      <h1 className="text-lg font-bold mb-5 text-blue-800">20 Pengurus Provinsi</h1>
      <p>Memiliki kepengurusan aktif dengan program yang beragam di tiap provinsi</p>
    </div>

    <div className="w-full md:w-[24%] h-[200px] flex flex-col items-center justify-center bg-white mx-auto p-8 text-center mb-5 rounded-3xl shadow-md" data-aos="fade-up">
      <h1 className="text-lg font-bold mb-5 text-blue-800">80 Pengurus Kota/Kabupaten</h1>
      <p>Menjadi penggerak utama yang berkolaborasi dengan Pemerintah Daerah</p>
    </div>

    <div className="w-full md:w-[24%] h-[200px] flex flex-col items-center justify-center bg-white mx-auto p-8 text-center mb-5 rounded-3xl shadow-md" data-aos="fade-up">
      <h1 className="text-lg font-bold mb-5 text-blue-800">30 Pengurus Komisariat</h1>
      <p>Ada di Kampus, Desa hingga Sekolah Tingkat Atas dan sederajat hingga pelosok</p>
    </div>

    <Link href="/">
    <div className="w-full md:w-[24%] h-[200px] flex flex-col items-center justify-center bg-blue-800 mx-auto p-8 text-center mb-5 rounded-3xl shadow-md hover:bg-blue-600 hover:text-black hover:cursor-pointer transition duration-300" data-aos="fade-up">
      <h1 className="text-lg font-bold mb-5 text-cyan-400">Mari Bergabung!</h1>
      <p className="text-white">Kami mengundang anda untuk ikut terlibat aktiv sebagai penggerak Relawan TIK</p>
      <span className="text-xl text-white"><FaChevronCircleRight /></span>
    </div>
    </Link>

    </div>


    {/* Rilis Media & Informasi Terkini */}
    <div className="bg-sky-50 py-5" data-aos="fade-up">
    <div className="container-custom mx-auto">
      <h1 className="text-3xl text-center font-bold mt-5 text-black">Publikasi Kegiatan RTIK</h1>
      <p className="w-[70%] text-center text-black mb-7 mx-auto">Informasi Terkini Terkait Kegiatan Relawan TIK di seluruh Wilayah </p>
      
      <div className="w-full flex flex-col md:flex-row justify-start md:justify-between mb-5">
        <div className="w-full md:w-[50%] h-[500px] mb-3">
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
            <div className="absolute backdrop-blur-sm bg-black/70 bottom-0 h-auto z-9 w-full rounded-b-lg p-3" data-aos="fade-up">
              <div className="w-full flex flex-col md:flex-row justify-start mb-3">
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Senin, 20 Mei 2024</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 14</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> Administrastor</h6>
                
              </div>
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg font-bold text-slate-100 hover:text-yellow-300 hover:cursor-pointer">Hari Ibu, Ketua Umum RTIK Ajak Ibu Cerdas Lingdungi Keluarga di Era Digital</h1>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-[500px] bg-white rounded-lg relative">
          <Image
            src={berita2} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            <div className="absolute backdrop-blur-sm bg-black/70 bottom-0 h-auto z-9 w-full rounded-b-lg p-3" data-aos="fade-up">
              <div className="w-full flex flex-col md:flex-row justify-start mb-3">
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Senin, 20 Mei 2024</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 16</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> Administrator</h6>
              </div>
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg font-bold text-slate-100 hover:text-yellow-300 hover:cursor-pointer">Pengurus Relawan TIK Provinsi Banten Dilantik, Langkah Awal Melanjutkan Perjuangan Mewujudkan Banten Makin Cakap Digital</h1>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-[500px] bg-white rounded-lg relative">
          <Image
            src={berita3} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            <div className="absolute backdrop-blur-sm bg-black/70 bottom-0 h-auto z-9 w-full rounded-b-lg p-3" data-aos="fade-up">
              <div className="w-full flex flex-col md:flex-row justify-start mb-3">
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Senin, 20 Mei 2024</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 13</h6>
                <h6 className="text-xs text-slate-300 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> Administrator</h6>
              </div>
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg font-bold text-slate-100 hover:text-yellow-300 hover:cursor-pointer">Relawan TIK Resmi Umumkan Kepengurusan Periode 2024–2028</h1>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          
          
       
        
       
      </Swiper>
          
        </div>
        <div className="w-full md:w-[50%] flex flex-col pl-0 md:pl-3">
          {/* List Berita */}
          <div className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg justify-between mb-3">
            <div className="w-full md:w-[30%] min-h-[150px] rounded-sm relative">
            <Image
            src={berita4} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            </div>
            <div className="w-full md:w-[69%] p-3 flex flex-col justify-center">
              <div className="w-full flex flex-col md:flex-row justify-start mb-1">
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Jumat, 17 Mei 2024</h6>
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 100</h6>
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> RTIK Banten</h6>
              </div>
              
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg text-slate-800 hover:text-sky-500 hover:cursor-pointer">Edukasi Literasi Digital Tangerang Gemilang Books Fair 2024 Sukses Menginspirasi Penerapan Detoksifikasi Kecanduan Digital</h1>
                </Link>
              </div>
            </div>
          </div>
          {/* List Berita */}
          <div className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg justify-between mb-3">
            <div className="w-full md:w-[30%] min-h-[150px] rounded-sm relative">
            <Image
            src={berita7} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            </div>
            <div className="w-full md:w-[69%] p-3 flex flex-col justify-center">
              <div className="w-full flex flex-col md:flex-row justify-start mb-1">
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Jumat, 17 Mei 2024</h6>
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 100</h6>
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> RTIK Banten</h6>
              </div>
              
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg text-slate-800 hover:text-sky-500 hover:cursor-pointer">Universitas Islam Syekh Yusuf Kota Tangerang Jajaki Kerja Sama dengan Relawan TIK Provinsi Banten di Bidang Literasi Digital</h1>
                </Link>
              </div>
            </div>
          </div>
          {/* List Berita */}
          <div className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg justify-between mb-3">
            <div className="w-full md:w-[30%] min-h-[150px] rounded-sm relative">
            <Image
            src={berita8} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            </div>
            <div className="w-full md:w-[69%] p-3 flex flex-col justify-center">
              <div className="w-full flex flex-col md:flex-row justify-start mb-1">
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Rabu, 08 Mei 2024</h6>
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 100</h6>
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaUser className="mr-1"/> Administrator</h6>
              </div>
              
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg text-slate-800 hover:text-sky-500 hover:cursor-pointer">Munas Berjalan Lancar dan Ideal, Relawan TIK Kian Matang dalam Berorganisasi</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justifycenter">
      <Link href="/berita">
        <div className="px-3 py-1 rounded-full mx-3 text-blue-800 text-center font-semibold cursor-pointer inline-flex items-center hover:text-blue-200"><BiChevronRightSquare className="mr-1"/>Lihat Semua Berita</div>
      </Link>
      </div>
    </div>
    </div>


{/* Program */}
<div className="bg-white py-7 mt-[50px]" data-aos="fade-up">
    <div className="container-custom mx-auto">
      <h1 className="text-3xl text-center text-black font-bold">Program dan Kegiatan</h1>
          <p className="w-[70%] text-center text-slate-500 mb-[50px] mx-auto">Program yang lahir dari inisiasi anggota dilevel daerah serta kolaboroasi dengan mitra, bertujuan memberika ragam solusi untuk akselerasi dan penetrasi dalam memutus kesenjangan digital di Indonesia</p>

      <div className="w-full flex flex-col md:flex-row flex-wrap">
        
        <div className="w-full bg-white rounded-xl">
         
          <div className="flex flex-col md:flex-row flex-wrap justify-between p-5">
          <Link href="">
            <div className="w-full md:w-[30%] px-5 py-14 bg-white border-2 border-sky-100 hover:border-sky-300 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md my-3 flex flex-col items-start justify-center hover:bg-blue-800 hover:text-white hover:cursor-pointer hover:scale-110 duration-500">
              <FaChevronCircleRight className="text-3xl"/>
              <h1 className="mt-1 text-2xl font-medium mb-3">Jurnal Relawan TIK</h1>
              <p className="text-sm">Menyelenggarakan jurnal online bagi akademisi, pegiat atau praktisi TIK, dan khususnya bagi anggota dan pengurus organisasi bidang penelitian dan pengembangan untuk masyarakat</p>
            </div>
          </Link>
          <Link href="">
            <div className="w-full md:w-[30%] px-5 py-14 bg-white border-2 border-sky-100 hover:border-sky-300 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md my-3 flex flex-col items-start justify-center hover:bg-blue-800 hover:text-white hover:cursor-pointer hover:scale-110 duration-500">
              <FaChevronCircleRight className="text-3xl"/>
              <h1 className="mt-1 text-2xl font-medium mb-3">TUK RTIK Indonesia</h1>
              <p className="text-sm">Sarana untuk Uji Kompetensi yang disediakan oleh Relawan TIK Indonesia diberbagai daerah guna mendukung Sertifikasi oleh LSP dan BNSP</p>
            </div>
          </Link>
          <Link href="">
            <div className="w-full md:w-[30%] px-5 py-14 bg-white border-2 border-sky-100 hover:border-sky-300 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md my-3 flex flex-col items-start justify-center hover:bg-blue-800 hover:text-white hover:cursor-pointer hover:scale-110 duration-500">
              <FaChevronCircleRight className="text-3xl"/>
              <h1 className="mt-1 text-2xl font-medium mb-3">Festival TIK Indonesia</h1>
              <p className="text-sm">Sosialisasi dan Edukasi TIK tingkat nasional yang digelar secara rutin serta ajang silaturahmi Relawan TIK se Indonesia yang dikemas dengan Festival</p>
            </div>
          </Link>
          <Link href="">
            <div className="w-full md:w-[30%] px-5 py-14 bg-white border-2 border-sky-100 hover:border-sky-300 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md my-3 flex flex-col items-start justify-center hover:bg-blue-800 hover:text-white hover:cursor-pointer hover:scale-110 duration-500">
              <FaChevronCircleRight className="text-3xl"/>
              <h1 className="mt-1 text-2xl font-medium mb-3">RTIK BerKreasi</h1>
              <p className="text-sm">Rutinitas Relawan TIK dalam melakukan sosialisasi dan edukasi dalam bentuk seminar dan workshop secara daring yang digelar diseluruh Indonesia</p>
            </div>
          </Link>
          <Link href="">
            <div className="w-full md:w-[30%] px-5 py-14 bg-white border-2 border-sky-100 hover:border-sky-300 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md my-3 flex flex-col items-start justify-center hover:bg-blue-800 hover:text-white hover:cursor-pointer hover:scale-110 duration-500">
              <FaChevronCircleRight className="text-3xl"/>
              <h1 className="mt-1 text-2xl font-medium mb-3">RTIK Pay</h1>
              <p className="text-sm">Aplikasi Payment dan PPOB bagi anggota Relawan TIK Indonesia hasil kerjasama Co Branding dengan mitra kolaborasi yang digunakan secara resmi oleh Relawan TIK</p>
            </div>
          </Link>
          <Link href="">
            <div className="w-full md:w-[30%] px-5 py-14 bg-white border-2 border-sky-100 hover:border-sky-300 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md my-3 flex flex-col items-start justify-center hover:bg-blue-800 hover:text-white hover:cursor-pointer hover:scale-110 duration-500">
              <FaChevronCircleRight className="text-3xl"/>
              <h1 className="mt-1 text-2xl font-medium mb-3">RTIK Talent</h1>
              <p className="text-sm">Ajang penguatan kompetensi TIK bagi Relawan TIK dan Masyarakat Umum yang konsistem dalam melakukan kerja kerja sosial bagi masyarakat terkait TIK</p>
            </div>
          </Link>
          </div>
        </div>
      </div>
      
     
    </div>
    </div>

    {/* Anggota */}
    <div className="bg-white py-7" data-aos="fade-up">
    <div className="container-custom mx-auto">
      <h1 className="text-3xl text-center text-black font-bold">Anggota RTIK di Seluruh Indonesia</h1>
          <p className="w-[70%] text-center text-black mb-7 mx-auto">Jumlah Data Anggota Relawan TIK Indonesia</p>

      <div className="w-full flex flex-col md:flex-row flex-wrap">
        
        <div className="w-full bg-white rounded-xl">
         
          <div className="flex flex-col md:flex-row flex-wrap justify-around p-5">
          <Link href="">
            <div className="w-full md:w-[24%] p-5 bg-blue-800 rounded-3xl my-3 flex flex-col items-center justify-center text-sky-300 hover:bg-blue-600 hover:text-white hover:cursor-pointer">
              <FaMale className="text-3xl"/>
              <p className="mt-1 text-4xl font-medium">100</p>
              <span className="text-sm text-center">Laki-laki</span>
            </div>
          </Link>
          <Link href="">
            <div className="w-full md:w-[24%] p-5 bg-blue-800 rounded-3xl my-3 flex flex-col items-center justify-center text-sky-300 hover:bg-blue-600 hover:text-white hover:cursor-pointer">
            <FaFemale className="text-3xl"/>
              <p className="mt-1 text-4xl font-medium">100</p>
              <span className="text-sm text-center">Perempuan</span>
            </div>
          </Link>
          <Link href="">
            <div className="w-full md:w-[24%] p-5 bg-blue-800 rounded-3xl my-3 flex flex-col items-center justify-center text-sky-300 hover:bg-blue-600 hover:text-white hover:cursor-pointer">
            <FaTransgender className="text-3xl"/>
              <p className="mt-1 text-4xl font-medium">200</p>
              <span className="text-sm text-center">Seluruh Anggota</span>
            </div>
          </Link>
          <Link href="/dashboard">
            <div className="w-full md:w-[24%] p-5 bg-sky-600 rounded-3xl my-3 flex flex-col items-center justify-center text-white hover:bg-sky-600 hover:text-white hover:cursor-pointer">
              <FaArrowAltCircleRight className="text-3xl"/>
              <span className="text-sm mt-3 text-center">Lihat Selengkapnya</span>
            </div>
          </Link>
          </div>
        </div>
      </div>
      
     
    </div>
    </div>


    




        
   

   

    
   
    




    

    

   

    



 

   
  
     



    

    


    
    {/* Link Eksternal */}
    <div className="container-custom mx-auto mt-10" data-aos="fade-up">
    <h1 className="text-3xl text-center text-black font-bold">Mitra Kolaborasi</h1>
    <p className="w-[70%] text-center text-slate-500 mb-[50px] mx-auto">Jejaring dan Mitra Kerja Relawan TIK Indonesia yang selama ini konsisten dan komitmen dalam mengedukasi masyarakat</p>
      
      <div className="w-full flex flex-row flex-wrap justify-around items-center bg-slate-800 px-5 py-5 rounded-xl" data-aos="fade-up">
        
        
       
       
          <div className="w-[35%] md:w-[9%] h-auto">
            
            <Link href="">
            <Image
            src={ext1}  className="rounded-xl hover:cursor-pointer"
            alt=""
          />
            </Link>
            
          </div>
       
        <div className="w-[35%] md:w-[9%] h-auto">
            
            <Link href="">
            <Image
            src={ext2}  className="rounded-xl hover:cursor-pointer"
            alt=""
          />
            </Link>
            
            
          </div>
       
        <div className="w-[35%] md:w-[9%] h-auto">
           
            <Link href="">
            <Image
            src={ext3}  className="rounded-xl hover:cursor-pointer"
            alt=""
          />
            </Link>
           
          </div>
        
        <div className="w-[35%] md:w-[9%] h-auto">
           
            <Link href="">
            <Image
            src={ext4}  className="rounded-xl hover:cursor-pointer"
            alt=""
          />
            </Link>
           
          </div>

          <div className="w-[35%] md:w-[9%] h-auto">
           
           <Link href="">
           <Image
           src={ext5}  className="rounded-xl hover:cursor-pointer"
           alt=""
         />
           </Link>
          
         </div>

         <div className="w-[35%] md:w-[9%] h-auto">
           
           <Link href="">
           <Image
           src={ext6}  className="rounded-xl hover:cursor-pointer"
           alt=""
         />
           </Link>
          
         </div>

         <div className="w-[35%] md:w-[9%] h-auto">
           
           <Link href="">
           <Image
           src={ext7}  className="rounded-xl hover:cursor-pointer"
           alt=""
         />
           </Link>
          
         </div>

         <div className="w-[35%] md:w-[9%] h-auto">
           
           <Link href="">
           <Image
           src={ext8}  className="rounded-xl hover:cursor-pointer"
           alt=""
         />
           </Link>
          
         </div>

         <div className="w-[35%] md:w-[9%] h-auto">
           
           <Link href="">
           <Image
           src={ext9}  className="rounded-xl hover:cursor-pointer"
           alt=""
         />
           </Link>
          
         </div>

         <div className="w-[35%] md:w-[9%] h-auto">
           
           <Link href="">
           <Image
           src={ext10}  className="rounded-xl hover:cursor-pointer"
           alt=""
         />
           </Link>
          
         </div>
      
      
        
          
        
      </div>
    </div>

    <div className="container-custom mx-auto bg-yellow-400 p-10 rounded-xl text-center">
      <h2 className="uppercase font-bold text-white mb-1">Mari Kolaborasi Bersama</h2>
      <h1 className="font-bold text-white text-3xl mb-1">Kami Mengundang Anda untuk Kolaborasi</h1>
      <h2 className="font-regular text-white mb-1">Kolaborasi dan Sinergi adalah kunci dalam mewujudkan ekosistem digital di Indonesia</h2>
      <Link href="/">
      <div className="mt-5 bg-slate-800 inline-flex px-3 py-1 text-white rounded-xl hover:cursor-pointer hover:bg-yellow-600 duration-300">Submit Sekarang</div>
      </Link>
    </div>

    {/* Link Eksternal */}
    <div className="container-custom mx-auto mb-14 mt-10 text-center" data-aos="fade-up">
      <h1 className="mb-2 font-bold text-sm"> Webhosting Partner :</h1>
      <div className="w-full flex flex-row flex-wrap justify-center items-center" data-aos="fade-up">
        
        
       
       
          
       
        
       
        
        
        <div className="w-[35%] md:w-[7%] h-auto mx-5 mb-5">
           
            <Link href="">
            <Image
            src={ext9}  className="rounded-xl hover:cursor-pointer"
            alt=""
          />
            </Link>
           
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
          <p className="text-black text-sm">Copyright 2025 Relawan TIK Indonesia</p>
        </div>
      </div>
    </div>
    </>
  )
}