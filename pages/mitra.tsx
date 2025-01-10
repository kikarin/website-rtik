import Image from "next/image"
import logoutama from '../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'


import { FaArrowAltCircleRight, FaBeer, FaCalendarAlt, FaCalendarTimes, FaChevronCircleRight, FaClock, FaEnvelope, FaFacebook, FaIdCardAlt, FaInstagram, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTwitter, FaBuilding, FaBriefcase, FaUsers, FaGraduationCap, FaSitemap, FaSchool, FaFacebookF, FaTiktok, FaYoutube, FaNewspaper } from 'react-icons/fa';
import { BiChevronLeftSquare, BiChevronRightSquare } from 'react-icons/bi'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function MitraRtik() {
    // Inisialisasi AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    return (
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

            <div className="w-full bg-blue-800 h-[150px]" data-aos="fade-down">
                <div className="container-custom mx-auto flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-4xl mt-[70px] text-white text-center">Mitra Kolaborasi</h1>
                </div>
            </div>


            {/* Sectiom Event Hari Ini */}
            <div className="container-custom mx-auto mb-14">
                <div className="px-10 w-full flex flex-col mt-10">
                    <div className="mt-5">

                        {/* <Image src={main_picture}  className="rounded-xl" alt=""   /> */}
                        <p className="text-gray-600 leading-relaxed mb-8" data-aos="fade-up">
                            Dalam menjalankan visi dan misi nya, Relawan TIK Indonesia diberbagai telah banyak berkolaborasi bersama, baik dari pemerintah, industri dan organisasi nir – laba lainnya, kemitraan yang dibangun sejak berdirinya Relawan TIK hingga saat ini menjadi bagian dari sejarah panjang eksisten Relawan TIK Indonesia dalam mengawal peradaban bangsa, kami mengapresiasi seluruhnya serta terus mengajak siapapun untuk sinergi bersama, berikut adalah beberapa mita strategis yang telah membangun kemitraan bersama Relawan TIK Indonesia, data ini belum dengan kemitraan RTIK diberbagai daerah :
                        </p>

                        <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
                            <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                                Ajukan Kerja Sama Kemitraan
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 shadow-md overflow-hidden p-4">
                                    <Image
                                        src="/oganisasi.svg"
                                        alt="Pemerintahan"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-gray-700 font-medium">Pemerintahan</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 shadow-md overflow-hidden p-4">
                                    <Image
                                        src="/aplikasi.svg"
                                        alt="Sektor Privat"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-gray-700 font-medium">Sektor Privat</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 shadow-md overflow-hidden p-4">
                                    <Image
                                        src="/news.svg"
                                        alt="Komunitas"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-gray-700 font-medium">Komunitas</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 shadow-md overflow-hidden p-4">
                                    <Image
                                        src="/akademisi.png"
                                        alt="Akademisi"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-gray-700 font-medium">Akademisi</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 shadow-md overflow-hidden p-4">
                                    <Image
                                        src="/organisasi.jpg"
                                        alt="Organisasi"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-gray-700 font-medium">Organisasi</span>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 shadow-md overflow-hidden p-4">
                                    <Image
                                        src="/school.png"
                                        alt="Sekolah"
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-gray-700 font-medium">Sekolah</span>
                            </div>
                        </div>

                        <div className="mt-16" data-aos="fade-up" data-aos-delay="300">
                            <h2 className="text-2xl font-semibold text-center mb-4">Mitra Kerja Sama</h2>
                            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                                Berkolaborasi dengan berbagai instansi dan organisasi untuk memberikan dampak positif bagi masyarakat
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                                    data-aos="zoom-in"
                                    data-aos-delay="100">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/4.png"
                                            alt="Partner 1"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Kementerian Komunikasi dan Informatika</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                                    data-aos="zoom-in"
                                    data-aos-delay="200">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/5.png"
                                            alt="Partner 2"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Telekomunisasi Indonesia</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                                    data-aos="zoom-in"
                                    data-aos-delay="300">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/6.jpg"
                                            alt="Partner 3"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Bogor Internet</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/7.png"
                                            alt="Partner 4"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Qwords</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/1.png"
                                            alt="Partner 5"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">4 Edukasi</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/2-1.png"
                                            alt="Partner 6"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Indonesia Internet Governance Forum</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/8.png"
                                            alt="Partner 7"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Common Room Network Foundation</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/11.png"
                                            alt="Partner 8"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Siberkreasi</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/9.png"
                                            alt="Partner 9"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Graha Karya</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/10.png"
                                            alt="Partner 10"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Sekolah Tinggi Manajemen Informatika dan Komputer Primakara</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/12.png"
                                            alt="Partner 11"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Asosiasi Pengusaha Informatika dan Komputer Indonesia</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/13.png"
                                            alt="Partner 12"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800"> Information and Communication Technology Watch</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/14.png"
                                            alt="Partner 13"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800"> Sekolah Tinggi Teknologi Garut</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/15.png"
                                            alt="Partner 14"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Politeknik Negeri Pontianak</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/16.png"
                                            alt="Partner 15"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Kururio Indonesia</h3>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src="/17.png"
                                            alt="Partner 16"
                                            width={400}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-800">Asosiasi Penyelenggara Jasa Internet Indonesia</h3>
                                    </div>
                                </div>

                            </div>
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
                        <p className="text-black text-sm">Copyright 2025 Relawan TIK Indonesia</p>
                    </div>
                </div>
            </div>
        </>
    )
}