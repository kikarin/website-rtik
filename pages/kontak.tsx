import Image from "next/image"
import logoutama from '../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'


import { FaArrowAltCircleRight, FaBeer, FaCalendarAlt, FaCalendarTimes, FaChevronCircleRight, FaClock, FaEnvelope, FaFacebook, FaIdCardAlt, FaInstagram, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTwitter, FaTiktok, FaYoutube, FaUsers, FaNewspaper } from 'react-icons/fa';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";


export default function kontakRtik() {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <div className="flex-1">
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
                                    <div className="w-[50%] md:w-[100%] my-1 flex flex-col justify-center bg-white rounded-lg p-2"><Image src={logoutama} className="rounded-lg" alt="" /></div>
                                </div>
                                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
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
                                                <div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular  hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Profil</div>
                                            </li>
                                        </Link>
                                        <Link href="/program">
                                            <li>
                                                <div className="uppercase cursor-pointer block px-5 py-2 text-black font-regular  hover:bg-blue-800 hover:text-white rounded-3xl duration-500 hover:scale-110">Program</div>
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

            <div className="w-full bg-blue-800 h-[150px]">
                <div className="container-custom mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-4xl mt-[70px] text-white text-center">Kontak Kami</h1>
                </div>
            </div>


            {/* Section Kontak */}
                <div className="container-custom mx-auto mb-14 px-4 sm:px-6 lg:px-8 mt-32" data-aos="fade-down">
                <div className="max-w-7xl mx-auto">
                    {/* Content Grid */}
                    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-4 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Informasi Kontak */}
                            <div className="w-full">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                                    Informasi Kontak
                                </h2>
                                <div className="space-y-4 sm:space-y-6">
                                    {/* Kantor Pusat */}
                                    <div className="p-4 sm:p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                                        <h3 className="font-semibold text-base sm:text-lg text-blue-800 mb-2 sm:mb-3 flex items-center gap-2">
                                            <FaMapMarkerAlt className="text-xl sm:text-2xl" />
                                            Kantor Pusat
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-600 ml-7 leading-relaxed">
                                            Plaza Indah Bogor, Blok B2,
                                            <br />Jl. Saleh Iskandar, Kedung Badak,
                                            <br />Kota Bogor
                                        </p>
                                    </div>

                                    {/* Nomor Telepon */}
                                    <div className="p-4 sm:p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                                        <h3 className="font-semibold text-base sm:text-lg text-blue-800 mb-2 sm:mb-3 flex items-center gap-2">
                                            <FaPhoneAlt className="text-xl sm:text-2xl" />
                                            Telepon
                                        </h3>
                                        <div className="space-y-2 sm:space-y-3 ml-7">
                                            <Link href="tel:+6282211335225"
                                                className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors block hover:translate-x-1 duration-200">
                                                0857-9755-2572
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="p-4 sm:p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                                        <h3 className="font-semibold text-base sm:text-lg text-blue-800 mb-2 sm:mb-3 flex items-center gap-2">
                                            <FaEnvelope className="text-xl sm:text-2xl" />
                                            Email
                                        </h3>
                                        <div className="space-y-2 sm:space-y-3 ml-7">
                                            <Link href="mailto:humas@relawantik.or.id"
                                                className="text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors block hover:translate-x-1 duration-200">
                                                humas@relawantik.or.id
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Media Sosial */}
                                    <div className="p-4 sm:p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                                        <h3 className="font-semibold text-base sm:text-lg text-blue-800 mb-3 sm:mb-4 flex items-center gap-2">
                                            <FaUsers className="text-xl sm:text-2xl" />
                                            Media Sosial
                                        </h3>
                                        <div className="flex flex-wrap gap-3 sm:gap-4 ml-7">
                                            <Link href="https://facebook.com/relawantik" target="_blank" rel="noopener noreferrer">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                    <FaFacebook className="text-xl" />
                                                </div>
                                            </Link>

                                            <Link href="https://instagram.com/relawantik" target="_blank" rel="noopener noreferrer">
                                                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                    <FaInstagram className="text-xl" />
                                                </div>
                                            </Link>

                                            <Link href="https://twitter.com/relawantik" target="_blank" rel="noopener noreferrer">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                    <FaTwitter className="text-xl" />
                                                </div>
                                            </Link>

                                            <Link href="https://tiktok.com/@relawantik" target="_blank" rel="noopener noreferrer">
                                                <div className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                    <FaTiktok className="text-xl" />
                                                </div>
                                            </Link>

                                            <Link href="https://youtube.com/relawantik" target="_blank" rel="noopener noreferrer">
                                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                    <FaYoutube className="text-xl" />
                                                </div>
                                            </Link>

                                            <Link href="https://berita.relawantik.or.id" target="_blank" rel="noopener noreferrer">
                                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                                    <FaNewspaper className="text-xl" />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Maps */}
                            <div className="w-full">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-blue-600 rounded-full"></span>
                                    Lokasi Kami
                                </h2>
                                <div className="w-full h-[300px] sm:h-[450px] rounded-xl overflow-hidden border border-gray-100 shadow-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13232.168016162936!2d106.78691906954217!3d-6.563516139729918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c591e4dc580f%3A0x41a2f4cac520b2c!2sRelawan%20TIK%20Bogor!5e0!3m2!1sid!2sid!4v1736397609003!5m2!1sid!2sid"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        className="rounded-xl"
                                    ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-100 w-full mt-20" data-aos="fade-up">
                <div className="container-custom mx-auto py-6 sm:py-10 px-4">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="w-[150px] sm:w-[200px]">
                            <Image src={logoutama} className="rounded-xl" alt="Logo RTIK" />
                        </div>
                        <p className="text-black text-xs sm:text-sm text-center">
                            Copyright 2025 Relawan TIK Indonesia
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}