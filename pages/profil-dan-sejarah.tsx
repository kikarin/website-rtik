import Image from "next/image"
import logoutama from '../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'
import Link from "next/link"
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaNewspaper } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

export default function ProfilDanSejarah() {
  const [activeTab, setActiveTab] = useState('LWmIta')

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

      <div className="w-full bg-gradient-to-r from-blue-800 to-blue-600 min-h-[100px] relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl text-white font-bold text-center"
          >
            Sejarah Relawan TIK Indonesia
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Relawan TIK Indonesia merupakan rumah besar aktivis, pegiat, pemerhati dan pelaku Teknologi Informasi dan Komunikasi di Indonesia, organisasi sosial kemasyarakatan bersifat nirlaba, independen, philantropis dan mandiri sebagai upaya untuk pengembangan pengetahuan dan keterampilan bagi anggotanya dan masyarakat luas.
            </p>
            <p className="mb-4">
              Dirintis sejak tahun 2008, sebagai bentuk sinergi dan kolaborasi berbagai unsur pemangku kepentingan untuk mewujudkan masyarakat informasi Indonesia, oleh Bambang Soeprijanto selaku Direktur Pemberdayaan Informatika pada waktu itu, simpul – simpul pertemuan, komunikasi dan koordinasi terus menggeliat.
            </p>

            <div className="my-8 flex justify-center">
              <Image
                src="/Hani-Purnawanti.jpg"
                alt="FK5T RTIK"
                width={760}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>

            <p className="mb-8">
              Atas inisiasi dan dorongan kuat oleh berbagai pihak serta Mariam F Barata yang pada saat itu menjabat sebagai Direktur Pemberdayaan Informatika dan Ashwin Sasongko selaku Dirjen APTIKA Kominfo RI, pada 4 – 6 Juli 2011, melalui momentum pertemuan Forum Komunikasi, Koordinasi, Kolaborasi dan Kerjasama Komunitas TIK atau FK5T di Bogor, Jawa Barat, disepakati terbentuknya Relawan TIK sebagai organisasi berbarengan dengan pengesahan AD/ART organisasi serta pengurus nasional periode pertama.
            </p>
          </div>
        </div>

        {/* Susunan Kepengurusan Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Susunan Kepengurusan Relawan TIK Indonesia dari Masa ke Masa
          </h2>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex space-x-8">
              {[
                { id: 'LWmIta', label: 'AD HOC 2011-2012' },
                { id: '2pSrgA', label: 'Periode 2012-2016' },
                { id: 'koGHYx', label: 'Periode 2016-2020' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Content for each tab period */}
            {activeTab === 'LWmIta' && (
              <div className="prose max-w-none">
                <table className="min-w-full border-collapse border border-gray-300">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">I. Pelindung</td>
                      <td className="border border-gray-300 p-3">Menteri Komunikasi dan Informatika</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold" rowSpan={4}>II. Penasehat</td>
                      <td className="border border-gray-300 p-3">1. Direktur Jenderal Aplikasi Informatika ‐ Kemkominfo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">2. Direktur Jenderal Penyelenggaraan Pos dan Informatika ‐ Kemkominfo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">3. Direktur Jenderal Informasi dan Komunikasi Publik ‐ Kemkominfo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">4. Kepala Badan Litbang SDM ‐ Kemkominfo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold" rowSpan={3}>III. Pembina</td>
                      <td className="border border-gray-300 p-3">1. Direktur Pemberdayaan Informatika – Kemkominfo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">2. Sekretaris Direktorat Jenderal Aplikasi Informatika</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">3. Bambang Soeprijanto – Praktisi TIK</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">IV. Ketua</td>
                      <td className="border border-gray-300 p-3">Indriyatno Banyumurti</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">V. Sekretaris Umum</td>
                      <td className="border border-gray-300 p-3">AS Zarkasih</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">VI. Bendahara</td>
                      <td className="border border-gray-300 p-3">Elly Agustini</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">VII. Kehumasan</td>
                      <td className="border border-gray-300 p-3">Suryani Manaf</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold" colSpan={2}>VIII. Koordinator Wilayah</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Wil. Barat</td>
                      <td className="border border-gray-300 p-3">Hendi Sama</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Wil. Tengah</td>
                      <td className="border border-gray-300 p-3">Ramadiani Kartika Yusuf</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Wil. Timur</td>
                      <td className="border border-gray-300 p-3">Arman Satari</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">IX. Bid. Keanggotaan dan Organisasi</td>
                      <td className="border border-gray-300 p-3">M. Said Hasibuan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">X. Bid. Pengembangan Kapasitas</td>
                      <td className="border border-gray-300 p-3">Maya Silvi Lydia</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">XI. Bid. Sosialisasi dan Edukasi Masy.</td>
                      <td className="border border-gray-300 p-3">Oki Tri Hutomo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">XII. Bid. Kerjasama Kemitraan</td>
                      <td className="border border-gray-300 p-3">Netty Pietersina Engel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === '2pSrgA' && (
              <div className="prose max-w-none">
                <table className="min-w-full border-collapse border border-gray-300">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Ketua</td>
                      <td className="border border-gray-300 p-3">Indriyatno Banyumurti</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Sekretaris Umum</td>
                      <td className="border border-gray-300 p-3">AS Zarkasih</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Wakil Sekretaris Umum</td>
                      <td className="border border-gray-300 p-3">Komarul Hadi</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Bendahara Umum</td>
                      <td className="border border-gray-300 p-3">Elly Agustini</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Wakil Bendahara Umum</td>
                      <td className="border border-gray-300 p-3">Maya Silvya Lidia</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Ketua 1</td>
                      <td className="border border-gray-300 p-3">M. Said Hasibuan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Koordinator Bidang Organisasi dan Pengembangan SDM</td>
                      <td className="border border-gray-300 p-3">Ramadiani Kartika Yusuf</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Koordinator Bidang Humas dan Kemitraan</td>
                      <td className="border border-gray-300 p-3">Netty Pietersina Engel</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Koordinator Bidang Hukum dan Legal</td>
                      <td className="border border-gray-300 p-3">Suryani Manaf</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Ketua 2</td>
                      <td className="border border-gray-300 p-3">Arman Satari</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Koordinator Bidang Literasi</td>
                      <td className="border border-gray-300 p-3">Fajar Eri Dianto</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Koordinator Bidang Aplikasi</td>
                      <td className="border border-gray-300 p-3">Akhfiyan Qoyum</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Koordinator Bidang Advokasi</td>
                      <td className="border border-gray-300 p-3">Ahmad Luthfie</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Ketua 3</td>
                      <td className="border border-gray-300 p-3">Oki Tri Hutomo</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Koordinator Bidang Infrastruktur dan Keamanan</td>
                      <td className="border border-gray-300 p-3">Erwin Gunawan</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Koordinator Bidang Konten</td>
                      <td className="border border-gray-300 p-3">Abdul Rachman</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'koGHYx' && (
              <div className="prose max-w-none">
                <table className="min-w-full border-collapse border border-gray-300">
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Ketua Umum</td>
                      <td className="border border-gray-300 p-3">FAJAR ERI DIANTO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Ketua Harian</td>
                      <td className="border border-gray-300 p-3">UNGGUL SAGENA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">Sekretaris</td>
                      <td className="border border-gray-300 p-3">MUHAMMAD SAID HASIBUAN</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID Kesekretariatan & Organisasi</td>
                      <td className="border border-gray-300 p-3">MUH. NURFAJAR MUHAROM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID PUBLIKASI & HUMAS</td>
                      <td className="border border-gray-300 p-3">GERY SUGIRAN A.S</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID ADVOKASI & HUKUM</td>
                      <td className="border border-gray-300 p-3">M. MIHRAM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">BENDAHARA</td>
                      <td className="border border-gray-300 p-3">NETTY PIETERSINA ENGEL</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">WAKIL BENDAHARA</td>
                      <td className="border border-gray-300 p-3">SHANTI KUSMIATI</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID KEMITRAAN</td>
                      <td className="border border-gray-300 p-3">HANI PURNAWANTI</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID PENGENDALIAN PROGRAM</td>
                      <td className="border border-gray-300 p-3">EKO PRASETYA</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID PERFORMANSI</td>
                      <td className="border border-gray-300 p-3">SAMUEL TODING</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID LITERASI</td>
                      <td className="border border-gray-300 p-3">SOEPRIYANTO</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID LITBANG TIK</td>
                      <td className="border border-gray-300 p-3">ANDRI JOHARI</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-semibold">KABID PENGEMBANGAN SDM</td>
                      <td className="border border-gray-300 p-3">RINDA CAHYANA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Section */}
        <div
          className="wp-block-themeisle-blocks-advanced-columns custom-gallery-container py-16 px-6 my-0 min-h-screen"
        >
          <div className="guten-element guten-gallery layout-overlay grid-desktop-3 grid-tablet-2 grid-mobile-2">
            {/* Gallery Popup */}
            <div className="gutenverse-popup-gallery hidden">
              <div className="gallery-header">
                <div className="left-header"></div>
                <div className="right-header flex space-x-4">
                  <svg className="icon-fullscreen cursor-pointer hover:text-blue-500 transition-colors"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24" height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                  </svg>
                  {/* Add other control icons */}
                </div>
              </div>

              {/* Gallery Body */}
              <div className="gallery-body">
                <div className="images">
                  <div id="guten-j6Dn10" className="swiper-container">
                    <div className="swiper-wrapper">
                      {[
                        'rtik-lama.jpg',
                        'rtik-lama-2.jpg',
                        'rtik-lama-3.jpg',
                        'rtik-lama-4.jpg',
                        'rtik-lama-7.jpg',
                        'rtik-lama-6.jpg'
                      ].map((img, index) => (
                        <div key={index}
                          className="swiper-slide image-list animated visible animate-play-running"
                        >
                          <div className="content-image swiper-zoom-container">
                            <Image
                              className="main-image w-full h-full object-cover"
                              src={`https://relawantik.or.id/wp-content/uploads/2023/01/${img}`}
                              alt={`RTIK Gallery ${index + 1}`}
                              width={800}
                              height={800}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div
              className="gallery-items grid grid-cols-2 md:grid-cols-3 gap-4 gallery-responsive-padding"
              data-loaded="6"
              data-max="6"
            >
              {[
                'rtik-lama.jpg',
                'rtik-lama-2.jpg',
                'rtik-lama-3.jpg',
                'rtik-lama-4.jpg',
                'rtik-lama-7.jpg',
                'rtik-lama-6.jpg'
              ].map((img, index) => (
                <div
                  key={index}
                  className="gallery-item-wrap animated visible animate-play-running"
                  data-index={index}
                >
                  <div className="grid-item">
                    <div className="thumbnail-wrap relative group overflow-hidden rounded-lg">
                      <Image
                        src={`https://relawantik.or.id/wp-content/uploads/2023/01/${img}`}
                        alt={`RTIK Gallery ${index + 1}`}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                        width={800}
                        height={800}
                      />
                      <div className="caption-wrap style-overlay absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="item-buttons">
                          <div className="gallery-link zoom cursor-pointer">
                            <span className="text-white text-xl hover:text-blue-400 transition-colors">
                              <i className="fas fa-search-plus"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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