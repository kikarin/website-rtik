import { useRouter } from 'next/router'
import Image from "next/image"
import logoutama from '../../public/Logo-RTIK-Indonesia-Web-Berita-2023-1.png'
import Link from "next/link"
import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import 'aos/dist/aos.css'

export default function ProgramDetail() {
  const router = useRouter()
  const { id } = router.query

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
            Detail Program
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom mx-auto py-16 mb-32">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Program Image */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/4-2.png"
              alt="Program Image"
              width={1200}
              height={800}
              className="rounded-lg object-contain w-full h-auto"
              priority
            />
          </div>
          
          {/* Detail content */}
          <h2 className="text-3xl font-bold mb-6">Program Title</h2>
          <div className="prose max-w-none">
<<<<<<< HEAD
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
=======
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            {/* Add more content as needed */}
>>>>>>> 5a3009a56e56848e15388075041d56a8cea1c854
          </div>
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