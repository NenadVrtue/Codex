import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Sidebar = ({isOpen, toggleSidebar}) => {
    
    return (
        <div className={isOpen? " flex flex-col space-y-8 align-middle justify-center fixed z-20 top-0 w-2/3 px-4  pl-8 h-screen right-0 bg-dark-blue"  : 'hidden'}>
          
          <button className="fixed top-6 font-body text-light-blue right-2" onClick={toggleSidebar}>
          <svg  width="48" height="48" viewBox="0 0 48 48" fill="#29B8E8" xmlns="http://www.w3.org/2000/svg">
<line x1="1.41421" y1="1.58579" x2="21.9203" y2="22.0919" stroke="#29B8E8" stroke-width="4"/>
<line x1="1.58579" y1="22.0919" x2="22.0919" y2="1.58579" stroke="#29B8E8" stroke-width="4"/>
</svg>



          </button>
          
           <nav className="mt-4 space-y-2 flex flex-col font-body text-white  text-3xl  justify-center  ">
            
          
          <AnchorLink 
          to='/#pocetna'
          title='pocetna'
            className=" "
            
            
          >
            Početna
          </AnchorLink>
          <AnchorLink
            to='/#usluge'
            title='usluge'
            className="stripped my-auto "
            
          >
            Usluge
          </AnchorLink>

          <AnchorLink
            to='/#cjenovnik'
            title='cjenovnik'
            className="stripped my-auto "
          >
            Cjenovnik
          </AnchorLink>
          <AnchorLink
            to='/#o-nama'
            title='o-nama'
            className="stripped my-auto "
          >
            O Nama
          </AnchorLink>
          <AnchorLink
            to='/#kontakt'
            title='kontakt'
            className="stripped my-auto "
          >
            Kontakt
          </AnchorLink>
        
            
     </nav>


     <nav className='  flex items-middle font-display text-lg text-gray'>
            <Link to='/' className='my-auto' activeClassName='text-white'>SR</Link>
            <span className='my-auto px-1 text-white'>|</span>
            <Link to='/en' className='my-auto' activeClassName='text-white'>EN</Link>
          </nav>


          <a href="tel:+38765569196" className='flex text-white font-body text-lg font-medium '>
          <span className='mr-2'>
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_207_2642)">
                <path d="M12.0249 23C18.3762 23 23.5249 17.8513 23.5249 11.5C23.5249 5.14873 18.3762 0 12.0249 0C5.67363 0 0.524902 5.14873 0.524902 11.5C0.524902 17.8513 5.67363 23 12.0249 23Z" fill="url(#paint0_linear_207_2642)"/>
                <path d="M17.2348 14.9943V5.69691C17.2348 4.65916 16.3877 3.81201 15.3499 3.81201H8.69984C7.66209 3.81201 6.81494 4.65916 6.81494 5.69691V14.9943H17.2348ZM12.0249 4.99802C12.3426 4.99802 12.5967 5.25216 12.5967 5.56984C12.5967 5.88752 12.3426 6.14166 12.0249 6.14166C11.7072 6.14166 11.4531 5.88752 11.4531 5.56984C11.4531 5.25216 11.7072 4.99802 12.0249 4.99802Z" fill="white"/>
                <path d="M6.81494 16.1167V17.3027C6.81494 18.3405 7.66209 19.1876 8.69984 19.1876H15.3499C16.3877 19.1876 17.2348 18.3405 17.2348 17.3027V16.1167H6.81494ZM12.0249 18.1287C11.7072 18.1287 11.4531 17.8745 11.4531 17.5568C11.4531 17.2392 11.7072 16.985 12.0249 16.985C12.3426 16.985 12.5967 17.2392 12.5967 17.5568C12.5967 17.8745 12.3426 18.1287 12.0249 18.1287Z" fill="white"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_207_2642" x1="-9.94264" y1="-30.1696" x2="47.0205" y2="77.8815" gradientUnits="userSpaceOnUse">
                <stop stop-color="#24E8B9"/>
                <stop offset="1" stop-color="#29A9F5"/>
                </linearGradient>
                <clipPath id="clip0_207_2642">
                <rect width="23" height="23" fill="white" transform="translate(0.524902)"/>
                </clipPath>
                </defs>
            </svg>
          </span
          >+38765/569-196</a>
        </div>
    )
}

export default Sidebar