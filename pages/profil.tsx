import Image from "next/image"
import logoutama from '../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'
import profil from '../public/profile.webp'
import Link from "next/link"
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

export default function ProfilRtik() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    })
  }, [])

  return (
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

              <div className="container-custom flex flex-wrap items-center justify-between mx-auto">
    <div className="w-full md:w-[15%] flex md:justify-start justify-center">
                  <div className="w-[50%] md:w-[100%] my-1 flex flex-col justify-center bg-white rounded-lg p-2">
                    <Image src={logoutama} className="rounded-lg" alt="Logo RTIK" />
                  </div>
    </div>

                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 bg-white justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
    </button>

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
            Profil Relawan TIK Indonesia
          </h1>
        </div>
    </div>
    
      {/* Enhanced Profile Section */}
      <div className="container-custom mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-600/20 rounded-xl transform rotate-3 blur-lg"></div>
            <div className="absolute -inset-4 bg-blue-600/10 rounded-xl transform -rotate-3"></div>
            <Image
              src="/IMG_5577-2048x1365.jpg"
              alt="Relawan TIK"
              width={600}
              height={400}
              className="rounded-xl relative z-10 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg z-20">
              Sejak 2008
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
              Tentang <span className="text-blue-600">Kami</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Relawan TIK Indonesia merupakan organisasi sosial kemasyarakatan bersifat nirlaba, independen, philantropis dan mandiri sebagai upaya untuk pengembangan pengetahuan dan keterampilan bagi anggotanya dan masyarakat luas.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Sinergi & Kolaborasi</h3>
                  <p className="text-gray-600">Dirintis sejak tahun 2008 sebagai bentuk sinergi dan kolaborasi berbagai unsur pemangku kepentingan</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Pemberdayaan Digital</h3>
                  <p className="text-gray-600">Fokus pada pengembangan dan pemberdayaan masyarakat melalui teknologi informasi</p>
                </div>
              </div>
              <Link href="/profil-dan-sejarah">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 mb-8">
                  Selengkapnya
                </button>
              </Link>
            </div>
          </motion.div>
      </div>



        {/* Kepengurusan Pusat Section */}
      <div className="bg-sky-50 p-3 rounded-3xl w-full mt-10">
            <h1 className="text-4xl mb-3 mt-5 text-blue-800 text-center">Kepengurusan Pusat</h1>
            <div className="w-full flex flex-row flex-wrap justify-around">
            {/* Ketua Umum */}
                <div className="w-full flex flex-col md:flex-row items-center justify-around py-5 mb-5 rounded-xl">
                    <div className="w-full md:w-[20%] py-7 border-b-4 bg-white odd:border-red-600 even:border-red-400 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                  <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Hani Purnawanti</h1>
                            <h1 className="text-sm text-slate-500">Ketua Umum</h1>
                </div>
                        </div>
                    </div>
                    
            {/* Sekretaris Jenderal */}
                <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Muh NurFajar Muharom</h1>
                            <h1 className="text-sm text-slate-500">Sekretaris Jenderal</h1>
                        </div>
                    </div>

            {/* Staf Sekretaris Jenderal 1 */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Nurrul Baety Tsani</h1>
                            <h1 className="text-sm text-slate-500">Staf Sekretaris Jenderal</h1>
                        </div>
                    </div>

            {/* Staf Sekretaris Jenderal 2 */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Erlina Dwi Nahzdifah</h1>
                            <h1 className="text-sm text-slate-500">Staf Sekretaris Jenderal</h1>
                        </div>
                    </div>

            {/* Staf Sekretaris Jenderal 3 */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Enny Tridha Rahmina</h1>
                            <h1 className="text-sm text-slate-500">Staf Sekretaris Jenderal</h1>
                        </div>
                    </div>

            {/* Bendahara Umum */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Desty Yani</h1>
                            <h1 className="text-sm text-slate-500">Bendahara Umum</h1>
                        </div>
                    </div>

            {/* Bidang Pembinaan Organisasi dan Kaderisasi 1 */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Samuel Toding</h1>
                            <h1 className="text-sm text-slate-500">Bidang Pembinaan Organisasi dan Kaderisasi</h1>
                        </div>
                    </div>

            {/* Bidang Pembinaan Organisasi dan Kaderisasi 2 */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Ramlan</h1>
                            <h1 className="text-sm text-slate-500">Bidang Pembinaan Organisasi dan Kaderisasi</h1>
                        </div>
                    </div>

            {/* Bidang Kemitraan 1 */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">I Putu Gede Krisna Juliharta</h1>
                            <h1 className="text-sm text-slate-500">Bidang Kemitraan</h1>
                        </div>
                    </div>

            {/* Bidang Kemitraan 2 */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Feriyanto</h1>
                            <h1 className="text-sm text-slate-500">Bidang Kemitraan</h1>
                        </div>
                    </div>

            {/* Bidang Kemitraan 3 */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Meylani Pratiwi</h1>
                            <h1 className="text-sm text-slate-500">Bidang Kemitraan</h1>
                        </div>
                    </div>

            {/* Bidang Program */}
                    <div className="w-full md:w-[19%] py-7 border-b-4 mb-5 bg-white odd:border-red-600 even:border-blue-800 rounded-3xl">
                        <div className="w-[150px] h-[150px] mx-auto rounded-full relative">
                <Image src={profil} layout="fill" objectFit="cover" className="rounded-full" alt="" />
                        </div>
                        <div className="p-2 text-center">
                            <h1 className="text-sm font-bold">Hamzah Fathoni</h1>
                            <h1 className="text-sm text-slate-500">Bidang Program</h1>
              </div>
            </div>
                        </div>
                    </div>
                
        {/* Tujuan Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-20">
          <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4" data-aos="fade-down">
              TUJUAN
            </h2>
          </div>

          <div className="p-8">
            <div className="prose max-w-none text-gray-600 space-y-6" data-aos="fade-up">
              <p className="leading-relaxed">
                Pengorganisasian Relawan TIK dimaksudkan sebagai upaya terpadu dan lintas sektoral untuk mengoptimalkan peran serta, kontribusi dan pemahaman para pakar, praktisi dan akademisi yang menguasai pemanfaatan TIK bagi kemajuan bangsa dan kemaslahatan masyarakat, serta memiliki komitmen dan perhatian yang tinggi bagi peningkatan kualitas kehidupan masyarakat dan bangsa Indonesia.
              </p>

              <p className="leading-relaxed">
                Organisasi Relawan TIK (baik secara nasional saat ini dan kelak berkepanjangan di harapkan hadir di daerah, perdesaan perkotaan dan Kawasan perbatasan) salah satu upayanya adalah memobilisasikan potensi masyarakat yang memiliki kesempatan, kemauan dan kemampuan pengelolaan manfaat TIK dari berbagai lapisan dan golongan untuk menaruh kepedulian atas keperluan bangsa Indonesia dalam mengatasi kesenjangan digital.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Internal (Mikro)</h3>
                  <p className="text-gray-600">
                    Menyiapkan anggota dalam penguasaan pengetahuan, sikap dan keterampilan individual maupun kerja kelompok guna menyelenggarakan tugas-tugas edukasi sosial, pemberdayaan maupun kegiatan incidental.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Organisasional (Meso)</h3>
                  <p className="text-gray-600">
                    Menjadikan Relawan TIK sebagai satuan yang mampu bereaksi cerdas, tanggap, bergerak cepat serta bertindak cermat dalam menjalankan tugasnya.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Nasional (Makro)</h3>
                  <p className="text-gray-600">
                    Berkontribusi dan partisipasi dalam berbagai kegiatan pembangunan, kemasyarakatan serta berperan dalam tugas kemanusiaan, dengan cara mengoptimalkan pemanfaatan TIK bagi kemaslahatan masyarakat dan kemajuan bangsa Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visi & Misi Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-right">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">VISI</h3>
            <p className="text-gray-600 leading-relaxed">
              Menjadikan Relawan TIK sebagai pribadi, sekaligus warga masyarakat unggulan, yang siap siaga mengemban misi sosial, kemasyarakatan dan kemanusiaan bagi pemberdayaan masyarakat melalui pemanfaatan/penguasaan keterampilan teknologi informasi dan komunikasi untuk kemaslahatan masyarakat dan kemajuan bangsa.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8" data-aos="fade-left">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">MISI</h3>
            <ul className="space-y-4 text-gray-600">
              {[
                "Menghimpun dan membina potensi Relawan TIK dalam satu wadah yang terorganisir, untuk mencapai efisiensi manfaat dan efektivitas kegiatan secara optimal",
                "Mempersiapkan kader-kader Relawan TIK secara intelektual, pribadi dan sosial serta khususnya di bidang TIK sebagai unsur generasi penerus pembangunan dan perjuangan bangsa",
                "Mengusahakan secara bersama-sama agar tercapainya tujuan organisasi dengan menyusun kebijakan, landasan program dan rencana kegiatan yang sesuai dengan perkembangan teknologi",
                "Menjalin terselenggaranya koordinasi, kerjasama, kolaborasi dan komunikasi dengan komunitas para pemangku kepentingan serta pihak lain"
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mars, Deklarasi & Hymne Section */}
      <div className="container-custom mx-auto py-16 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MARS Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MARS Relawan TIK</h3>
            </div>
            <div className="p-6">
              <div className="prose prose-sm max-w-none text-gray-600">
                {/* Verse 1 */}
                <div className="mb-6">
                  <p className="leading-relaxed">
                    Kami Datang dengan Genderang Perang<br />
                    Melawan Keterbelakangan…<br />
                    Membawa Panji Panji Kemajuan<br />
                    Ilmu Sains dan Teknologi
                  </p>
                </div>

                {/* Reff 1 */}
                <div className="pl-4 border-l-4 border-blue-600 mb-6">
                  <p className="font-semibold mb-2">Reff:</p>
                  <p className="leading-relaxed">
                    Inilah Kami Derap Relawan<br />
                    Teknologi Informasi dan Komunikasi<br />
                    Inilah Kami sang Pembaharu…<br />
                    Penggerak Kebangkitan Bangsa..
                  </p>
                </div>

                {/* Verse 2 */}
                <div className="mb-6">
                  <p className="leading-relaxed">
                    Dengan Jiwa Pancasila Kita Tebarkan Ilmu<br />
                    Mencerdaskan Kehidupan Bangsa<br />
                    Dengan Berkah Ilahi Ayo Membangun Negeri<br />
                    Demi Indonesia Jaya, Demi Indonesia Raya
                  </p>
                </div>

                {/* Verse 3 */}
                <div className="mb-6">
                  <p className="leading-relaxed">
                    Kami Ikhlas Untuk Membangun Bangsa,<br />
                    Mengabdi Untuk Ilmu Pertiwi<br />
                    Nurani menjadi Pegangan Kami<br />
                    Meningkatkan Martabat Bangsa
                  </p>
                </div>

                {/* Reff 2 */}
                <div className="pl-4 border-l-4 border-blue-600 mb-6">
                  <p className="font-semibold mb-2">Reff:</p>
                  <p className="leading-relaxed">
                    Inilah Kami Derap Relawan<br />
                    Teknologi Informasi dan Komunikasi<br />
                    Inilah Kami sang Pembaharu…<br />
                    Penggerak Kebangkitan Bangsa..
                  </p>
                </div>

                {/* Final Verse */}
                <div>
                  <p className="leading-relaxed">
                    Dengan Jiwa Pancasila Kita Tebarkan Ilmu<br />
                    Mencerdaskan Kehidupan Bangsa<br />
                    Dengan Berkah Ilahi Ayo Membangun Negeri<br />
                    Demi Indonesia Jaya, Demi Indonesia Raya
                  </p>
                </div>
              </div>
            </div>
      </div>
      
          {/* Deklarasi Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Deklarasi RTIK</h3>
            </div>
            <div className="p-6">
              <ol className="list-decimal list-inside space-y-4 text-gray-600">
                <li className="leading-relaxed">Kami Relawan TIK bertekad membantu masyarakat dalam pemanfaatan Teknologi Informasi dan Komunikasi untuk kemajuan bangsa</li>
                <li className="leading-relaxed">Kami relawan TIK bertekad mengembangkan program informasi, advokasi, edukasi dan komunikasi untuk meningkatkan e‐literasi</li>
                <li className="leading-relaxed">Kami relawan TIK bertekad bersama pemerintah mewujudkan masyarakat Indonesia Informatif</li>
                <li className="leading-relaxed">Kami relawan TIK siap membantu optimalisasi pemanfaatan Teknologi Informasi dan Komunikasi di daerah bencana</li>
                <li className="leading-relaxed">Kami relawan TIK siap berkorban tanpa pamrih memberdayakan masyarakat melalui pemanfaatan TIK</li>
              </ol>
            </div>
    </div>

          {/* Hymne Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">HYMNE Relawan TIK</h3>
            </div>
            <div className="p-6">
              <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
                <p>Padamu Negeriku Ku Tetap Berdiri Tegak<br />
                  Untukmu Bangsaku Ku Mengabdi Tanpa Pamrih<br />
                  Dengan Relawan Teknologi Informasi dan Komunikasi<br />
                  Wadah Mandiri… Berkipirah Untuk Negri…</p>

                <p>Sembah Sujudku… Duhai Tuhanku yang Agung…<br />
                  Hormatku… Banggaku… Ibu Pertiwi Tercinta…</p>

                <p className="font-semibold">Dengan Relawan Teknologi Informasi dan Komunikasi<br />
                  Wadah Mandiri… Berbakti Untuk Negri…</p>

                <p>Berdiri… Mengabdi… Bagimu Negri…</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
   <div className="bg-slate-100" data-aos="fade-up">
      <div className="container-custom mx-auto py-10 flex flex-col items-center justify-center">
        <div>
            <Image src={logoutama} className="rounded-xl" alt="Logo RTIK" width={200} height={50} />
        </div>
        <div>
          <p className="text-black text-sm">Copyright 2025 Relawan TIK Indonesia</p>
        </div>
      </div>
    </div>
    </>
  )
}