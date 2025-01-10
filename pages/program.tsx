import Image from "next/image"
import logoutama from '../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'
import Link from "next/link"
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS styles

export default function programRtik() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    })
  }, [])

  const programs = [
    {
      id: 1,
      title: "Festival TIK Indonesia",
      description: "Ajang tahunan Relawan TIK Indonesia menjadi simpul utama pergerakan kerelawanan yang dikemas dengan Festival",
      image: "/emonev.png",
      link: "/festival-tik"
    },
    {
      id: 2, 
      title: "Akademi Relawan TIK",
      description: "ARTIKA merupakan Komite dalam Sumber Daya Manusia Penelitian dan Pengembangan (SDM Litbang) Relawan TIK Indonesia.",
      image: "/emonev.png",
      link: "/akademi-rtik"
    },
    {
      id: 3,
      title: "TUK ERTIK NASIONAL",
      description: "Tempat dan atau lembaga yang dapat memberikan fasilitas pelaksanaan uji kompetensi, yang telah diverifikasi oleh LSP berlisensi.",
      image: "/emonev.png", 
      link: "/tuk-ertik"
    },
    {
      id: 4,
      title: "RTIK Talent",
      description: "Wadah talenta terbaik Relawan TIK Indonesia yang memiliki kompetensi dan kemampuan kecakapan digital untuk SDM unggul",
      image: "/emonev.png",
      link: "/rtik-talent"
    },
    {
      id: 5,
      title: "RTIK Berkreasi",
      description: "Program edukasi dan sosialisasi Daring dari Relawan TIK Indonesia untuk masyarakat secara serentak diseluruh daerah",
      image: "/emonev.png",
      link: "/rtik-berkreasi"
    },
    {
      id: 6,
      title: "eRTIK Pay",
      description: "Aplikasi keanggotaan sekaligus PPOB bersama yang dikembangkan oleh Relawan TIK bersama mitra sebagai platform anggota",
      image: "/emonev.png",
      link: "/ertik-pay"
    }
  ]

  return(
    <>
          {/* Navbar */}
          <div className="w-full md:h-[90px] relative">
        <div className="w-full h-auto md:pb-0 md:pt-0 relative z-30">
          <div className="flex flex-col h-auto items-center">
            <nav className="w-full bg-white relative md:fixed shadow-lg border-b-[5px] border-b-red-600">
              <div className="w-full bg-blue-800 py-2 hidden md:block">
                <div className="container-custom mx-auto flex flex-row justify-center text-sm text-white">
                  <div className="inline-flex items-center mx-2">
                    <FaMapMarkerAlt className="mr-1" /> Plaza Indah Bogor, Blok B2, Jl. Saleh Iskandar, Kedung Badak, Kota Bogor
                  </div>
                  <div className="inline-flex items-center mx-2">
                    <FaEnvelope className="mr-1" /> humas@relawantik.or.id
                  </div>
                  <div className="inline-flex items-center mx-2 border-l border-l-white px-4">Media Sosial :</div>
                  <Link href="">
                    <div className="inline-flex items-center mx-2 hover:text-yellow-400 hover:cursor-pointer"><FaFacebook /></div>
                  </Link>
                  <Link href="">
                    <div className="inline-flex items-center mx-2 hover:text-yellow-400 hover:cursor-pointer"><FaInstagram /></div>
                  </Link>
                  <Link href="">
                    <div className="inline-flex items-center mx-2 hover:text-yellow-400 hover:cursor-pointer"><FaTwitter /></div>
                  </Link>
                </div>
              </div>

              {/* Logo & Navigation */}
              <div className="container-custom flex flex-wrap items-center justify-between mx-auto">
                <div className="w-full md:w-[15%] flex md:justify-start justify-center">
                  <div className="w-[50%] md:w-[100%] my-1 flex flex-col justify-center bg-white rounded-lg p-2">
                    <Image src={logoutama} className="rounded-lg" alt="Logo RTIK" />
                  </div>
                </div>

                {/* Mobile Menu Button */}
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
                </button>

                {/* Navigation Menu */}
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="flex flex-col p-6 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                    <Link href="/">
                      <li><div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Beranda</div></li>
                    </Link>
                    <Link href="/profil">
                      <li><div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Profil</div></li>
                    </Link>
                    <Link href="/program">
                      <li><div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Program</div></li>
                    </Link>
                    <Link href="/mitra">
                      <li><div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Mitra</div></li>
                    </Link>
                    <Link href="/kontak">
                      <li><div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Kontak</div></li>
                    </Link>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full bg-blue-800 h-[150px]">
        <div className="container-custom mx-auto flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-4xl mt-[70px] text-white text-center" 
              data-aos="fade-down">
            Program
          </h1>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container-custom mx-auto py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8" 
             data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">
            Program dan Kegiatan Relawan TIK Indonesia
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 text-center mb-4">
              Program dan Kegiatan Relawan TIK Indonesia memiliki acuan utama dari program kerja yang lahir dari analisis serta riset atas kebutuhan masyarakat terhadap urgensi penerapan TIK yang telah disepakati melalui Rapat Kerja, program dan kegiatan lainnya berbasis kolaborasi dengan mitra, beberapa kegiatan rutin yang telah dijalankan oleh Relawan TIK Indonesia diantaranya :
            </p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="container-custom max-w-6xl mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div 
              key={program.id} 
              className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image Container */}
              <div className="relative w-full h-auto aspect-[3/2] bg-gray-50">
                <Image 
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="contain"
                  className="p-4 transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-5 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {program.description}
                </p>
                
                {/* Button Container */}
                <div className="flex justify-start items-center">
                  <Link 
                    href={`/program/${program.id}`}
                  >
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 group-hover:translate-x-1 cursor-pointer">
                      Selengkapnya
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      {/* Footer */}
      <footer className="bg-gray-100" data-aos="fade-up">
        <div className="container-custom mx-auto py-10 flex flex-col items-center justify-center">
          <div className="mb-4">
            <Image src={logoutama} alt="Logo RTIK" width={200} height={50} />
          </div>
          <p className="text-gray-600 text-sm">Copyright © 2024 Relawan TIK Indonesia</p>
        </div>
      </footer>
    </>
  )
}