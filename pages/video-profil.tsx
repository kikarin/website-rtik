import Image from "next/image"
import logoutama from '../public/logo-smarthealth.png'
import siberkreasi from '../public/SiberKreasi.jpg'
import slider2 from '../public/banner-ems2.jpg'
import slider3 from '../public/banner-ems3.png'
import berita1 from '../public/b-dinkes-1.jpg'
import berita2 from '../public/b-dinkes-2.jpg'
import berita3 from '../public/b-dinkes-3.jpg'
import berita4 from '../public/b-dinkes-4.jpg'
import berita5 from '../public/b-dinkes-5.jpg'
import berita6 from '../public/b-dinkes-6.jpg'
import berita7 from '../public/b-dinkes-7.jpg'
import berita8 from '../public/b-dinkes-8.jpg'
import rilis1 from '../public/artkl1.jpg'
import rilis2 from '../public/artkl2.jpg'
import rilis3 from '../public/artkl3.jpg'
import rilis4 from '../public/artkl4.jpg'
import rilis5 from '../public/artkl5.webp'
import carisertifikat from '../public/search.png'
import webinar from '../public/webinar.png'
import { Swiper, SwiperSlide } from "swiper/react";

import { FaArrowAltCircleRight, FaBeer, FaBuilding, FaCalendarAlt, FaCalendarTimes, FaChevronCircleRight, FaClock, FaEdit, FaEnvelope, FaEye, FaFacebook, FaIdCardAlt, FaInstagram, FaMapMarker, FaMapMarkerAlt, FaNewspaper, FaPhoneAlt, FaSearch, FaTag, FaTwitter, FaUser } from 'react-icons/fa';
import { BiChevronLeftSquare, BiChevronRightSquare } from 'react-icons/bi'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import 'flowbite';


export default function videoProfil() {
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
<div className="w-full h-auto md:h-[100px] bg-[#263238]"></div>
    
    {/* Sectiom Event Hari Ini */}
    <div className="container-custom mx-auto flex flex-col md:flex-row mb-14 mt-10" data-aos="fade-up">
      {/* <div className="w-full md:w-[25%] p-2 bg-slate-100 rounded-xl h-auto  flex flex-col flex-wrap items-center">
      <div className="relative w-full h-[500px] rounded-xl">
      <Image
            src={rilis1}  className="rounded-xl"
            alt=""
          />
      </div>
      </div> */}
      <div className="bg-white rounded-xl shadow-lg w-full md:w-[60%] flex flex-col p-5">
        
          
            <h1 className="text-2xl mb-3">Video Profil Dinas Kesehatan Kota Bogor</h1>
            <div className="w-full bg-black rounded-xl p-5">
            <iframe width="100%" height="550" src="https://www.youtube.com/embed/TbPlPpxeqvs?si=7Oztb_C0ENWACvYT" title="YouTube video player"  allowFullScreen></iframe>
            </div>
           
            
      </div>

      <div className="bg-slate-200 rounded-xl shadow-lg p-5 w-full md:w-[40%] flex flex-col">
        <h1 className="text-black text-2xl inline-flex items-center mb-5"><FaNewspaper className="mr-2"/>Berita Populer</h1>
        {/* <h1 className="text-2xl text-orange-300">April 2024</h1>
        <Link href="/kontributor">
        <a className="text-sky-500 hover:underline">Lihat Kontributor Bulanan</a>
        </Link> */}
        <div className="w-full flex flex-col">
          {/* List Berita */}
          <div className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg justify-between mb-3">
            <div className="w-full md:w-[40%] min-h-[150px] rounded-sm relative">
            <Image
            src={berita4} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            </div>
            <div className="w-full md:w-[60%] p-3">
              <div className="w-full flex flex-col md:flex-row justify-start mb-1">
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Jumat, 17 Mei 2024</h6>
                <h6 className="text-xs text-red-600 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 100</h6>
                
              </div>
              
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg text-slate-800 hover:text-sky-500 hover:cursor-pointer">Kick Off Gebyar Pamong Walagri : Cegah Penyakit Tidak Menular (PTM) dan Kesehatan Jiwa bagi ASN Kota Bogor</h1>
                </Link>
              </div>
            </div>
          </div>
          {/* List Berita */}
          <div className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg justify-between mb-3">
            <div className="w-full md:w-[40%] min-h-[150px] rounded-sm relative">
            <Image
            src={berita7} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            </div>
            <div className="w-full md:w-[60%] p-3">
              <div className="w-full flex flex-col md:flex-row justify-start mb-1">
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Jumat, 17 Mei 2024</h6>
                <h6 className="text-xs text-red-600 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 100</h6>
                
              </div>
              
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg text-slate-800 hover:text-sky-500 hover:cursor-pointer">Bimbingan Teknis Penyuluhan Keamanan Pangan untuk Industri Rumah Tangga Pangan</h1>
                </Link>
              </div>
            </div>
          </div>
          {/* List Berita */}
          <div className="w-full flex flex-col md:flex-row bg-white shadow-lg rounded-lg justify-between mb-3">
            <div className="w-full md:w-[40%] min-h-[150px] rounded-sm relative">
            <Image
            src={berita8} layout="fill" objectFit="cover" className="rounded-lg"
            alt=""
          />
            </div>
            <div className="w-full md:w-[60%] p-3">
              <div className="w-full flex flex-col md:flex-row justify-start mb-1">
                <h6 className="text-xs text-slate-600 inline-flex flex-row items-center mr-3"><FaCalendarAlt className="mr-1"/> Rabu, 08 Mei 2024</h6>
                <h6 className="text-xs text-red-600 inline-flex flex-row items-center mr-3"><FaEye className="mr-1"/> 100</h6>
                
              </div>
              
              <div className="w-full mb-3">
                <Link href="/detail-informasi">
                  <h1 className="text-lg text-slate-800 hover:text-sky-500 hover:cursor-pointer">Penguatan Program Penyakit Tidak Menular (PTM Prioritas) untuk 25 Puskesmas Di Kota Bogor</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

   {/* Informasi Lainnya */}
   <div className="bg-sky-700 py-5" data-aos="fade-up">
    <div className="container-custom mx-auto mt-10">
      <h1 className="text-3xl text-center mb-7 text-white">Rilis Berita</h1>
      <div className="flex flex-row flex-wrap mb-5 mt-5">
      <Swiper
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-auto bg-white rounded-xl shadow-md mx-1 my-1">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita1} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
              
              <div className="bg-red-600 text-white py-1 px-2 rounded-lg animate-bounce mb-1 inline-flex text-xs">Baru</div>
              <div className="w-full flex flex-col mb-1">
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaEye className="mr-1"/>123</h4>
              </div>
              <h2 className="mt-1 mb-3">Koordinasi Bulan Deteksi Pamong Walagri oleh Puskesmas di Satuan Kerja Perangkat Daerah</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-1 rounded-lg bg-yellow-400 shadow-sm mx-3 text-[10px] text-white text-center font-semibold cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-auto bg-white rounded-xl shadow-md mx-1 my-1">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita2} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
              
              <div className="bg-red-600 text-white py-1 px-2 rounded-lg animate-bounce mb-1 inline-flex text-xs">Baru</div>
              <div className="w-full flex flex-col mb-1">
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaEye className="mr-1"/>123</h4>
              </div>
              <h2 className="mt-1 mb-3">Advokasi Laboratorium Kesehatan Masyarakat</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-1 rounded-lg bg-yellow-400 shadow-sm mx-3 text-[10px] text-white text-center font-semibold cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-auto bg-white rounded-xl shadow-md mx-1 my-1">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita3} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
              
              <div className="bg-red-600 text-white py-1 px-2 rounded-lg animate-bounce mb-1 inline-flex text-xs">Baru</div>
              <div className="w-full flex flex-col mb-1">
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaEye className="mr-1"/>123</h4>
              </div>
              <h2 className="mt-1 mb-3">Sosialisasi dan Diskusi Kelompok Terarah Terkait Optimalisasi Rujukan Internal dan Eksternal Tuberkulosis di Rumah Sakit Kota Bogor</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-1 rounded-lg bg-yellow-400 shadow-sm mx-3 text-[10px] text-white text-center font-semibold cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-auto bg-white rounded-xl shadow-md mx-1 my-1">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita4} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
              
              <div className="bg-red-600 text-white py-1 px-2 rounded-lg animate-bounce mb-1 inline-flex text-xs">Baru</div>
              <div className="w-full flex flex-col mb-1">
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaEye className="mr-1"/>123</h4>
              </div>
              <h2 className="mt-1 mb-3">Kick Off Gebyar Pamong Walagri : Cegah Penyakit Tidak Menular (PTM) dan Kesehatan Jiwa bagi ASN Kota Bogor</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-1 rounded-lg bg-yellow-400 shadow-sm mx-3 text-[10px] text-white text-center font-semibold cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-auto bg-white rounded-xl shadow-md mx-1 my-1">
            <div className="w-full h-[200px] rounded-tl-xl rounded-tr-xl relative">
            <Image
            src={berita5} layout="fill" objectFit="cover" className="rounded-tl-xl rounded-tr-xl"
            alt=""
          />
            </div>
            <div className="p-3">
              
              <div className="bg-red-600 text-white py-1 px-2 rounded-lg animate-bounce mb-1 inline-flex text-xs">Baru</div>
              <div className="w-full flex flex-col mb-1">
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaCalendarAlt className="mr-1"/>Jumat, 20 Januari 2022</h4>
              <h4 className="inline-flex items-center text-xs text-slate-500 mb-1"><FaEye className="mr-1"/>123</h4>
              </div>
              <h2 className="mt-1 mb-3">Bimbingan Teknis Penyuluhan Keamanan Pangan untuk Industri Rumah Tangga Pangan</h2>
              <Link href="/detail-informasi">
                <div className="px-3 py-1 rounded-lg bg-yellow-400 shadow-sm mx-3 text-[10px] text-white text-center font-semibold cursor-pointer hover:bg-yellow-600">Baca Selengkapnya</div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="flex flex-col items-center justifycenter">
      <Link href="/berita">
        <div className="px-3 py-1 rounded-full mx-3 text-[10px] text-white text-center font-semibold cursor-pointer inline-flex items-center hover:text-blue-200"><BiChevronRightSquare className="mr-1"/>Lihat Semua Informasi</div>
      </Link>
      </div>
    </div>
    </div>
    

   

    {/* Section Ayo */}
    {/* <div className="container-custom mx-auto flex flex-row flex-wrap p-5 bg-white  mb-5 mt-14 justift-between" data-aos="fade-up">
        <div className="w-[60%] flex flex-col justify-center">
          <h1 className="text-xl">Ayo, Ikuti Kegiatan Makin Cakap Digital</h1>
          <h2 className="text-4xl font-semibold">Sekarang Juga!</h2>
          
          
            
            <div className="mt-10">
              <div className="mr-3 text-white bg-orange-400 hover:bg-orange-300 cursor-pointer font-medium rounded-lg text-[10px] w-full sm:w-auto px-5 py-2.5 text-center inline-flex items-center"><BiChevronRightSquare className="mr-1"/>Dapatkan Token Disini</div>
              <Link href="" className="">
                <span className="text-xs text-blue-400 cursor-pointer hover:underline">Apa itu Token? Klik Disini</span>
              </Link>
            </div>
            
         

        </div>
        <div className="w-[40%] inline-flex justify-end">
        <Image
            src={webinar}  className="justify-end" width={200} objectFit="cover" height={230}
            alt=""
          />
        </div>
    </div> */}


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