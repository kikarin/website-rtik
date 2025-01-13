import Image from "next/image"
import logoutama from '../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'
import { FaArrowAltCircleRight, FaBeer, FaCalendarAlt, FaCalendarTimes, FaChevronCircleRight, FaClock, FaEnvelope, FaFacebook, FaIdCardAlt, FaInstagram, FaMapMarker, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaTwitter, FaBuilding, FaBriefcase, FaUsers, FaGraduationCap, FaSitemap, FaSchool, FaFacebookF, FaTiktok, FaYoutube, FaNewspaper } from 'react-icons/fa';
import { BiChevronLeftSquare, BiChevronRightSquare } from 'react-icons/bi'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function MitraRtik() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Data mitra dengan kategori
    const mitraData = [
        {
            id: 1,
            name: "Kementerian Komunikasi dan Informatika",
            image: "/4.png",
            category: "pemerintahan"
        },
        {
            id: 2, 
            name: "Telekomunisasi Indonesia",
            image: "/5.png",
            category: "sektor-privat"
        },
        {
            id: 3,
            name: "Bogor Internet",
            image: "/6.jpg",
            category: "komunitas"
        },
        {
            id: 4,
            name: "Qwords",
            image: "/7.png", 
            category: "sektor-privat"
        },
        {
            id: 5,
            name: "4 Edukasi",
            image: "/1.png",
            category: "akademisi"
        },
        {
            id: 6,
            name: "Indonesia Internet Governance Forum",
            image: "/2-1.png",
            category: "organisasi"
        },
        {
            id: 7,
            name: "Common Room Network Foundation",
            image: "/8.png",
            category: "komunitas"
        },
        {
            id: 8,
            name: "Siberkreasi",
            image: "/11.png",
            category: "komunitas"
        },
        {
            id: 9,
            name: "Graha Karya",
            image: "/9.png",
            category: "sektor-privat"
        },
        {
            id: 10,
            name: "Sekolah Tinggi Manajemen Informatika dan Komputer Primakara",
            image: "/10.png",
            category: "akademisi"
        },
        {
            id: 11,
            name: "Asosiasi Pengusaha Informatika dan Komputer Indonesia",
            image: "/12.png",
            category: "organisasi"
        },
        {
            id: 12,
            name: "Information and Communication Technology Watch",
            image: "/13.png",
            category: "organisasi"
        },
        {
            id: 13,
            name: "Sekolah Tinggi Teknologi Garut",
            image: "/14.png",
            category: "akademisi"
        },
        {
            id: 14,
            name: "Politeknik Negeri Pontianak",
            image: "/15.png",
            category: "akademisi"
        },
        {
            id: 15,
            name: "Kururio Indonesia",
            image: "/16.png",
            category: "sektor-privat"
        },
        {
            id: 16,
            name: "Asosiasi Penyelenggara Jasa Internet Indonesia",
            image: "/17.png",
            category: "organisasi"
        }
    ];

    // Filter mitra berdasarkan kategori
    const filteredMitra = activeFilter === 'all' 
        ? mitraData 
        : mitraData.filter(mitra => mitra.category === activeFilter);

    // Handler untuk mengubah filter
    const handleFilterClick = (category: string) => {
        setActiveFilter(category);
    };

    // Tambahkan fungsi untuk menangani tombol "Semua"
    const handleAllClick = () => {
        setActiveFilter('all');
    };

    // Inisialisasi AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out'
        });
    }, []);

    return (
        <div className="w-full">
            {/* Navbar section */}
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

            {/* Hero section */}
    <div className="w-full bg-blue-800 h-[150px]" data-aos="fade-down">
        <div className="container-custom mx-auto flex flex-col items-center justify-center">
        <h1 className="text-xl md:text-4xl mt-[70px] text-white text-center">Mitra Kolaborasi</h1>
        </div>
    </div>
    
            {/* Filter Categories */}
    <div className="container-custom mx-auto mb-32">
      <div className="px-10 w-full flex flex-col mt-10">
            <div className="mt-5">
            <p className="text-gray-600 leading-relaxed mb-8" data-aos="fade-up">
                Dalam menjalankan visi dan misi nya, Relawan TIK Indonesia diberbagai telah banyak berkolaborasi bersama, baik dari pemerintah, industri dan organisasi nir – laba lainnya, kemitraan yang dibangun sejak berdirinya Relawan TIK hingga saat ini menjadi bagian dari sejarah panjang eksisten Relawan TIK Indonesia dalam mengawal peradaban bangsa, kami mengapresiasi seluruhnya serta terus mengajak siapapun untuk sinergi bersama, berikut adalah beberapa mita strategis yang telah membangun kemitraan bersama Relawan TIK Indonesia, data ini belum dengan kemitraan RTIK diberbagai daerah :
            </p>
            
            <div className="flex justify-center mb-16" data-aos="fade-up" data-aos-delay="100">
                <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                >
                    Ajukan Kerja Sama Kemitraan
                </button>
            </div>

            {/* Form Popup */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center overflow-y-auto p-4 sm:py-12">
                    <div className="relative bg-white rounded-lg shadow-xl w-full max-w-md mx-auto my-8">
                        {/* Close Button */}
                        <button 
                            onClick={() => setIsPopupOpen(false)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Form Header */}
                        <div className="bg-gray-50 p-4 rounded-t-lg border-b">
                            <h2 className="text-lg font-semibold text-gray-800">Form Pengajuan Kemitraan</h2>
                            <p className="text-sm text-gray-500 mt-1">Silakan lengkapi form di bawah ini</p>
                        </div>

                        {/* Form Content */}
                        <div className="p-4 sm:p-6">
                            <form className="space-y-4">
                                {/* Nama Instansi */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nama Instansi/Organisasi <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                        placeholder="Masukkan nama instansi"
                                        required
                                    />
                                </div>

                                {/* Email dan Telepon dalam satu baris di desktop */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="email"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                            placeholder="contoh@email.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Nomor Telepon <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="tel"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                            placeholder="+62 xxx-xxxx-xxxx"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Jenis Kemitraan */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Jenis Kemitraan <span className="text-red-500">*</span>
                                    </label>
                                    <select 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                        required
                                    >
                                        <option value="">Pilih jenis kemitraan</option>
                                        <option value="pemerintahan">Pemerintahan</option>
                                        <option value="swasta">Sektor Privat</option>
                                        <option value="komunitas">Komunitas</option>
                                        <option value="akademisi">Akademisi</option>
                                        <option value="organisasi">Organisasi</option>
                                        <option value="sekolah">Sekolah</option>
                                    </select>
                                </div>

                                {/* Deskripsi */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Deskripsi Kerjasama <span className="text-red-500">*</span>
                                    </label>
                                    <textarea 
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                        rows={3}
                                        placeholder="Jelaskan rencana kerjasama yang diinginkan"
                                        required
                                    ></textarea>
                                </div>

                                {/* Upload File */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Upload Dokumen Pendukung
                                    </label>
                                    <div className="mt-1 flex justify-center px-4 py-3 border-2 border-gray-300 border-dashed rounded-lg hover:border-blue-500 transition-colors">
                                        <div className="space-y-1 text-center">
                                            <svg className="mx-auto h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <div className="text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer text-blue-600 hover:text-blue-500">
                                                    <span>Upload file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                                                </label>
                                            </div>
                                            <p className="text-xs text-gray-500">PDF atau DOC maks. 10MB</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Form Actions */}
                                <div className="flex justify-end space-x-3 pt-4 border-t mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setIsPopupOpen(false)}
                                        className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                                    >
                                        Batal
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 text-sm bg-blue-800 text-white rounded-lg hover:bg-blue-900 flex items-center"
                                    >
                                        <span>Kirim</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 text-center mb-16" data-aos="fade-up" data-aos-delay="200">
                            {/* Tombol Semua */}
                            <div 
                                className={`flex flex-col items-center cursor-pointer transform transition-all duration-500 ${
                                    activeFilter === 'all' 
                                    ? 'scale-110 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg' 
                                    : 'hover:scale-105'
                                }`}
                                onClick={handleAllClick}
                            >
                                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 
                                    shadow-md overflow-hidden p-4 transition-all duration-500
                                    hover:shadow-xl hover:bg-blue-50
                                    ${activeFilter === 'all' 
                                        ? 'border-4 border-blue-500 shadow-lg transform rotate-3' 
                                        : 'hover:rotate-6'
                                    }`}
                                >
                                    <Image 
                                        src="/journal.svg"
                                        alt="Semua"
                                        width={60}
                                        height={60}
                                        className="object-contain transition-transform duration-500 hover:scale-110"
                                    />
                                </div>
                                <span className={`text-gray-700 font-medium transition-all duration-300 
                                    ${activeFilter === 'all' 
                                        ? 'text-blue-600 transform scale-110' 
                                        : 'hover:text-blue-500'
                                    }`}
                                >
                                    Semua
                                </span>
                            </div>

                            {/* Pemerintahan */}
                            <div 
                                className={`flex flex-col items-center cursor-pointer transform transition-all duration-500 ${
                                    activeFilter === 'pemerintahan' 
                                    ? 'scale-110 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg' 
                                    : 'hover:scale-105'
                                }`}
                                onClick={() => handleFilterClick('pemerintahan')}
                            >
                                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 
                                    shadow-md overflow-hidden p-4 transition-all duration-500
                                    hover:shadow-xl hover:bg-blue-50
                                    ${activeFilter === 'pemerintahan' 
                                        ? 'border-4 border-blue-500 shadow-lg transform rotate-3' 
                                        : 'hover:rotate-6'
                                    }`}
                                >
                        <Image 
                            src="/oganisasi.svg" 
                            alt="Pemerintahan"
                            width={60}
                            height={60}
                                        className="object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                                <span className={`text-gray-700 font-medium transition-all duration-300 
                                    ${activeFilter === 'pemerintahan' 
                                        ? 'text-blue-600 transform scale-110' 
                                        : 'hover:text-blue-500'
                                    }`}
                                >
                                    Pemerintahan
                                </span>
                </div>
                
                            {/* Sektor Privat */}
                            <div 
                                className={`flex flex-col items-center cursor-pointer transform transition-all duration-500 ${
                                    activeFilter === 'sektor-privat' 
                                    ? 'scale-110 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg' 
                                    : 'hover:scale-105'
                                }`}
                                onClick={() => handleFilterClick('sektor-privat')}
                            >
                                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 
                                    shadow-md overflow-hidden p-4 transition-all duration-500
                                    hover:shadow-xl hover:bg-blue-50
                                    ${activeFilter === 'sektor-privat' 
                                        ? 'border-4 border-blue-500 shadow-lg transform rotate-3' 
                                        : 'hover:rotate-6'
                                    }`}
                                >
                        <Image 
                            src="/aplikasi.svg" 
                            alt="Sektor Privat"
                            width={60}
                            height={60}
                                        className="object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                                <span className={`text-gray-700 font-medium transition-all duration-300 
                                    ${activeFilter === 'sektor-privat' 
                                        ? 'text-blue-600 transform scale-110' 
                                        : 'hover:text-blue-500'
                                    }`}
                                >
                                    Sektor Privat
                                </span>
                </div>
                
                            {/* Komunitas */}
                            <div 
                                className={`flex flex-col items-center cursor-pointer transform transition-all duration-500 ${
                                    activeFilter === 'komunitas' 
                                    ? 'scale-110 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg' 
                                    : 'hover:scale-105'
                                }`}
                                onClick={() => handleFilterClick('komunitas')}
                            >
                                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 
                                    shadow-md overflow-hidden p-4 transition-all duration-500
                                    hover:shadow-xl hover:bg-blue-50
                                    ${activeFilter === 'komunitas' 
                                        ? 'border-4 border-blue-500 shadow-lg transform rotate-3' 
                                        : 'hover:rotate-6'
                                    }`}
                                >
                        <Image 
                            src="/news.svg" 
                            alt="Komunitas"
                            width={60}
                            height={60}
                                        className="object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                                <span className={`text-gray-700 font-medium transition-all duration-300 
                                    ${activeFilter === 'komunitas' 
                                        ? 'text-blue-600 transform scale-110' 
                                        : 'hover:text-blue-500'
                                    }`}
                                >
                                    Komunitas
                                </span>
                </div>
                
                            {/* Akademisi */}
                            <div 
                                className={`flex flex-col items-center cursor-pointer transform transition-all duration-500 ${
                                    activeFilter === 'akademisi' 
                                    ? 'scale-110 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg' 
                                    : 'hover:scale-105'
                                }`}
                                onClick={() => handleFilterClick('akademisi')}
                            >
                                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 
                                    shadow-md overflow-hidden p-4 transition-all duration-500
                                    hover:shadow-xl hover:bg-blue-50
                                    ${activeFilter === 'akademisi' 
                                        ? 'border-4 border-blue-500 shadow-lg transform rotate-3' 
                                        : 'hover:rotate-6'
                                    }`}
                                >
                        <Image 
                            src="/akademisi.png" 
                            alt="Akademisi"
                            width={60}
                            height={60}
                                        className="object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                                <span className={`text-gray-700 font-medium transition-all duration-300 
                                    ${activeFilter === 'akademisi' 
                                        ? 'text-blue-600 transform scale-110' 
                                        : 'hover:text-blue-500'
                                    }`}
                                >
                                    Akademisi
                                </span>
                </div>
                
                            {/* Organisasi */}
                            <div 
                                className={`flex flex-col items-center cursor-pointer transform transition-all duration-500 ${
                                    activeFilter === 'organisasi' 
                                    ? 'scale-110 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg' 
                                    : 'hover:scale-105'
                                }`}
                                onClick={() => handleFilterClick('organisasi')}
                            >
                                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 
                                    shadow-md overflow-hidden p-4 transition-all duration-500
                                    hover:shadow-xl hover:bg-blue-50
                                    ${activeFilter === 'organisasi' 
                                        ? 'border-4 border-blue-500 shadow-lg transform rotate-3' 
                                        : 'hover:rotate-6'
                                    }`}
                                >
                        <Image 
                            src="/organisasi.jpg" 
                            alt="Organisasi"
                            width={60}
                            height={60}
                                        className="object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                                <span className={`text-gray-700 font-medium transition-all duration-300 
                                    ${activeFilter === 'organisasi' 
                                        ? 'text-blue-600 transform scale-110' 
                                        : 'hover:text-blue-500'
                                    }`}
                                >
                                    Organisasi
                                </span>
                </div>
                
                            {/* Sekolah */}
                            <div 
                                className={`flex flex-col items-center cursor-pointer transform transition-all duration-500 ${
                                    activeFilter === 'sekolah' 
                                    ? 'scale-110 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg' 
                                    : 'hover:scale-105'
                                }`}
                                onClick={() => handleFilterClick('sekolah')}
                            >
                                <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-3 
                                    shadow-md overflow-hidden p-4 transition-all duration-500
                                    hover:shadow-xl hover:bg-blue-50
                                    ${activeFilter === 'sekolah' 
                                        ? 'border-4 border-blue-500 shadow-lg transform rotate-3' 
                                        : 'hover:rotate-6'
                                    }`}
                                >
                        <Image 
                            src="/school.png" 
                            alt="Sekolah"
                            width={60}
                            height={60}
                                        className="object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                                <span className={`text-gray-700 font-medium transition-all duration-300 
                                    ${activeFilter === 'sekolah' 
                                        ? 'text-blue-600 transform scale-110' 
                                        : 'hover:text-blue-500'
                                    }`}
                                >
                                    Sekolah
                                </span>
                </div>
            </div>

            <div className="mt-16" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-2xl font-semibold text-center mb-4">Mitra Kerja Sama</h2>
                <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
                    Berkolaborasi dengan berbagai instansi dan organisasi untuk memberikan dampak positif bagi masyarakat
                </p>
                
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {filteredMitra.map((mitra) => (
                                <div 
                                    key={mitra.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
                                >
        <div className="relative h-48 overflow-hidden">
            <Image 
                                            src={mitra.image}
                                            alt={mitra.name}
                width={400}
                height={300}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
            />
        </div>
        <div className="p-4">
                                        <h3 className="font-medium text-gray-800">{mitra.name}</h3>
        </div>
    </div>
                            ))}
    </div>

</div>


</div>


                </div>
     
      
    </div>

            {/* Footer */}
   <div className="bg-slate-100 mt-20" data-aos="fade-up">
      <div className="container-custom mx-auto py-10 flex flex-col items-center justify-center">
        <div>
          <Image src={logoutama} className="rounded-xl" alt="" width={200} height={50} />
        </div>
        <div>
          <p className="text-black text-sm">Copyright 2025 Relawan TIK Indonesia</p>
        </div>
      </div>
    </div>
        </div>
    );
}