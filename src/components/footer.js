import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Footer = () => {
    return (
        <footer className="bg-dark-blue text-white pt-10 pb-2">
            <div className='max-w-1170 mx-auto px-4 xl:px-0'>
                <div className='flex flex-col sm:flex-row justify-between align-middle mb-12'>
                    <div className="flex flex-col items-center sm:items-start " > 
                        <svg width="155" height="50" viewBox="0 0 155 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M68.3639 35.7899C60.9301 35.7899 57.2339 30.947 57.2339 23.5026C57.2339 15.8129 61.1455 11.1826 68.7865 11.1826C71.7368 11.1826 74.1236 11.8862 75.9386 13.3587C77.6458 14.8721 78.6071 16.9418 78.8557 19.535H75.8723C74.8032 19.535 74.0242 19.0442 73.5601 18.0952C72.7479 16.3773 71.1402 15.4938 68.7948 15.4938C64.2036 15.4938 62.1815 18.6843 62.1815 23.4945C62.1815 28.1656 64.1373 31.4624 68.6539 31.4624C71.7451 31.4624 73.5269 29.7772 74.0573 27.143H78.8557C78.3916 32.6649 74.48 35.7899 68.3639 35.7899Z" fill="white"/>
                        <path d="M85.9005 26.244C85.9336 29.8598 87.1767 31.6841 89.5966 31.6841C92.0166 31.6841 93.2265 29.7862 93.2597 26.1049C93.2597 22.4891 92.0497 20.6975 89.6298 20.6975C87.1436 20.6975 85.9005 22.5545 85.9005 26.244ZM98.2073 26.244C98.2073 32.633 95.3315 35.8644 89.6381 35.8644C83.9446 35.8644 81.1021 32.633 81.1021 26.244C81.1021 19.7813 83.9446 16.5908 89.6381 16.5908C95.3232 16.5908 98.2073 19.7813 98.2073 26.244Z" fill="white"/>
                        <path d="M105.135 26.106C105.102 29.8609 106.378 31.7588 109.088 31.7588C111.79 31.7588 113.141 29.8609 113.141 26.106C113.033 22.5229 111.715 20.7722 109.163 20.7722C106.602 20.7722 105.284 22.5229 105.135 26.106ZM117.831 13.925V27.4067C117.831 32.9859 114.881 35.7591 109.014 35.7264C103.179 35.6201 100.262 32.4951 100.262 26.3187C100.262 20.0032 102.748 16.7719 107.771 16.5919C110.116 16.5919 111.931 17.5409 113.141 19.4715V11.5772H115.486C116.771 11.569 117.831 12.657 117.831 13.925Z" fill="white"/>
                        <path d="M124.777 24.1334H131.854C131.572 21.6792 130.396 20.4112 128.365 20.4112C126.335 20.4112 125.125 21.6792 124.777 24.1334ZM128.365 35.8644C122.672 35.6926 119.829 32.4203 119.829 26.1049C119.829 19.7894 122.705 16.6317 128.44 16.5908C134.415 16.5908 137.224 20.2067 136.868 27.4711H124.702C124.876 30.3097 126.128 31.7577 128.44 31.7577C129.542 31.7577 130.57 31.2996 131.498 30.4243C131.92 29.9661 132.459 29.7535 133.097 29.7535H136.586C135.55 33.6883 132.989 35.8644 128.365 35.8644Z" fill="white"/>
                        <path d="M155 15.2256L147.889 25.9667L154.146 35.4399H148.453L145.113 29.5417L141.732 35.4399H135.931L142.047 25.9258L136.287 16.8699H141.732L144.964 22.49L148.594 16.4527C149.016 15.651 149.696 15.2256 150.657 15.2256H155Z" fill="white"/>
                        <path d="M121.917 14.2032H125V13.4506H122.779V12.3953H123.989C124.296 12.3953 124.445 12.2562 124.437 11.9781V11.7081H122.779V10.8328H125V10.1211H122.357C122.058 10.1293 121.917 10.2765 121.917 10.5628V14.2032Z" fill="white"/>
                        <path d="M128.058 13.5725C127.503 13.5725 127.212 13.3598 127.179 12.9262H126.334C126.359 13.8179 126.931 14.2596 128.058 14.2596C129.135 14.2596 129.699 13.867 129.748 13.0653C129.773 12.5499 129.549 12.2145 129.069 12.0591C128.712 11.9363 128.373 11.8464 128.058 11.7809C127.503 11.6582 127.229 11.4782 127.229 11.2165C127.246 10.9056 127.469 10.742 127.925 10.7338C128.298 10.7338 128.555 10.8483 128.696 11.0856C128.779 11.241 128.903 11.3228 129.085 11.3228H129.574C129.525 10.4802 129.003 10.0548 128 10.0548C126.947 10.0466 126.417 10.472 126.4 11.3228C126.4 11.8627 126.815 12.2309 127.643 12.4354C127.95 12.5172 128.24 12.5826 128.489 12.6562C128.754 12.7299 128.878 12.8608 128.878 13.0571C128.878 13.4089 128.613 13.5725 128.058 13.5725Z" fill="white"/>
                        <path d="M131.017 10.5628V10.8492H132.276V14.2032H133.146V10.8492H134.406V10.1211H131.456C131.207 10.1293 131.017 10.3338 131.017 10.5628Z" fill="white"/>
                        <path d="M139.81 11.5775H140.282C140.274 11.0049 140.498 10.7185 140.962 10.7185C141.401 10.7349 141.616 10.9394 141.592 11.3484C141.575 11.553 141.5 11.7166 141.36 11.8229C141.094 12.0356 140.796 12.2401 140.448 12.4528C140.1 12.6655 139.843 12.9109 139.652 13.2054C139.47 13.5163 139.379 13.8517 139.354 14.2117H142.429V13.4999H140.572C140.597 13.3772 140.705 13.2463 140.912 13.1236C141.633 12.6573 142.072 12.3056 142.23 12.0929C142.371 11.9211 142.454 11.6757 142.47 11.3648C142.429 10.4977 141.931 10.0723 140.97 10.0723C140.125 10.0723 139.628 10.424 139.478 11.1194C139.429 11.4139 139.536 11.5775 139.81 11.5775Z" fill="white"/>
                        <path d="M145.271 10.7251C145.727 10.7251 145.967 11.2078 145.975 12.1649C145.984 13.1221 145.752 13.5884 145.271 13.5884C144.79 13.5884 144.567 13.1057 144.591 12.1486C144.583 11.1996 144.815 10.7251 145.271 10.7251ZM145.271 10.0625C144.227 10.0625 143.696 10.7579 143.696 12.1567C143.671 13.5638 144.194 14.2673 145.271 14.2673C146.348 14.2673 146.879 13.5638 146.862 12.1649C146.837 10.766 146.315 10.0625 145.271 10.0625Z" fill="white"/>
                        <path d="M148.081 10.8661V11.4633H148.876V14.2202H149.746V10.5553C149.746 10.2771 149.597 10.1299 149.299 10.1299H149.042C148.926 10.5389 148.553 10.8661 148.081 10.8661Z" fill="white"/>
                        <path d="M152.936 12.6495H151.751L152.936 10.858V12.6495ZM152.928 14.2038H153.773V13.304H154.287V12.6168H153.773V10.5553C153.773 10.2771 153.633 10.1299 153.343 10.1299H152.696L151.08 12.5677V13.304H152.928V14.2038Z" fill="white"/>
                        <path d="M34.9065 28.7467V21.2615H37.4922C43.2271 21.2615 46.7824 15.8622 45.4564 11.0684C45.1249 9.85766 44.5365 8.63874 43.5254 7.61617C38.9259 2.92048 32.47 0 25.3263 0C11.3372 0 0 11.1911 0 25C0 38.8089 11.3372 50 25.3263 50C32.47 50 38.9259 47.0795 43.5254 42.3838C44.6525 41.2304 45.2658 39.8642 45.5558 38.498C46.5752 33.696 43.0531 28.7385 37.4922 28.7385H34.9065V28.7467Z" fill="url(#paint0_linear_201_2399)"/>
                        <path opacity="0.5" d="M20.836 37.7853H15.3995C14.0901 37.7853 13.021 36.7381 13.021 35.4374V18.3644C13.021 17.0719 14.0818 16.0166 15.3995 16.0166H20.836C22.1454 16.0166 23.2145 17.0637 23.2145 18.3644V35.4374C23.2062 36.73 22.1454 37.7853 20.836 37.7853Z" fill="url(#paint1_linear_201_2399)"/>
                        <path d="M20.836 37.7853H15.3995C14.0901 37.7853 13.021 36.7381 13.021 35.4374V18.3644C13.021 17.0719 14.0818 16.0166 15.3995 16.0166H20.836C22.1454 16.0166 23.2145 17.0637 23.2145 18.3644V35.4374C23.2062 36.73 22.1454 37.7853 20.836 37.7853Z" fill="#2E5983"/>
                        <path d="M33.0344 37.7859H25.5841C24.2746 37.7859 23.2056 36.7388 23.2056 35.4381V14.0539C23.2056 12.7614 24.2664 11.7061 25.5841 11.7061H33.0344C34.3438 11.7061 35.4129 12.7532 35.4129 14.0539V35.4381C35.4129 36.7306 34.3438 37.7859 33.0344 37.7859Z" fill="#323667"/>
                        <path d="M10.8411 37.7864H7.16152C5.95985 37.7864 4.98193 36.8211 4.98193 35.6349V22.7667C4.98193 21.5805 5.95985 20.6152 7.16152 20.6152H10.8328C12.0345 20.6152 13.0124 21.5805 13.0124 22.7667V35.6349C13.0207 36.8211 12.0428 37.7864 10.8411 37.7864Z" fill="#2C809D"/>
                        <defs>
                        <linearGradient id="paint0_linear_201_2399" x1="-0.227822" y1="-1.80546" x2="42.89" y2="44.6153" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#24E8B9"/>
                        <stop offset="1" stop-color="#29A9F5"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_201_2399" x1="23.0691" y1="26.8995" x2="23.2481" y2="26.8995" gradientUnits="userSpaceOnUse">
                        <stop stop-color="white"/>
                        <stop offset="1" stop-color="white"/>
                        </linearGradient>
                        </defs>
                        </svg>

                        <p className='mt-1.5'>Stevo Tadić</p>
                        <p>dipl. ekonomista</p>

                        <div className='flex space-x-4 mt-1.5'>
                            <a href='#'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="#C4C4C4"/>
                                </svg>
                            </a>

                            <a href='#'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="#C4C4C4"/>
                                </svg>
                            </a>

                            <a href='#'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="24" fill="#C4C4C4"/>
                                </svg>
                            </a>
                        </div>
                    </div>


                    <div className='flex'>
                        <nav className='flex flex-col font-body text-center md:text-left pb-6 pt-2 sm:pt-6'>
                            <AnchorLink  to='/#test-hash' className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-white">
                            Hash
                            </AnchorLink>
                        
                        </nav>

                        <div className="flex flex-col items-center sm:items-start "> 
                                <p>Radno vrijeme: Pon-Pet 09-17h</p>
                                <p>JIB :450920150001  </p>
                                <p>Ž.R. MF Banka: 572-206-00000810-43</p>
                        </div>
                    </div>

                <div className="flex flex-col items-center sm:items-start "> 
                        <p>Radno vrijeme: Pon-Pet 09-17h</p>
                        <p>JIB :450920150001  </p>
                        <p>Ž.R. MF Banka: 572-206-00000810-43</p>
                </div>

            </div>
               
                    <div className=" flex flex-col sm:flex-row text-center sm:justify-between align-baseline max-w-1170 mx-auto mt-4 ">
                
                        <p className='py-0 sm:py-4'>© {new Date().getFullYear()} Codex Agencija</p>
                        <p className='py-0 sm:py-4'>Made by <a href='https://vrtuedigital.com/' target='_blank' rel='noreferrer'>Vrtue Digital</a></p>
                    </div>
                </div>
               
        </footer>
    )
}

export default Footer
