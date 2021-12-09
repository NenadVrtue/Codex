import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import CollapseAboutEN from './collapseAboutEN'


const AboutEN = () => {
    return (
        <section id='about' className='pt-16 xl:pt-28 pb-16 px-4'>

        <div className='max-w-1170 mx-auto px-4 lg:px-0 flex flex-col lg:flex-row  items-center lg:items-start justify-between '>
                    <div className='text-gray  text-center lg:text-left lg:w-2/4 '>
                    <h2 className='text-dark-blue'>About Us</h2>
                    <h4 className='text-gray-2 text-base font-semibold'>Choose the best</h4>
                    <p className='text-lg max-w-xl pt-5  pb-5'>
                    The owner of Codex is <span className='text-dark-blue'>Stevo Tadic</span>, a graduate of the Faculty of Economics in Banjaluka,  
                    and a licensed accountant with over 20 years of experience</p> 
                    
                    <p className='text-lg max-w-xl '>Accounting Agency Codex can take care of all of our client's finances, or you can let us take charge of only certain aspects. 
                     Our services are adjustable, depending on the size of your business. 
                     <CollapseAboutEN>
                    <p className='text-lg max-w-xl '>
                    We provide accounting services at the highest level of expertise because we are aware that our clients expect the best tax and business consulting. 
                    Our main principle is quality; that is why we offer collaboration with a professional approach, based on expertise and trust.  

                    We collaborate with every important government institution related to accounting, taxes, and entrepreneurship in general. 

                    We utilise the newest IT technology, recognized by national and international companies. 
                    Paying attention to details when it comes to the level of expertise provided to our clients is very important to us. 
                    Our open communication with clients allows us to take care of all of their needs on time and with a positive attitude.   
                    </p>
                    </CollapseAboutEN></p>
                    
                    <AnchorLink 
                    to='/en/#contact'
                    title='contact'
                    className="stripped mx-auto lg:ml-0 block w-52 my-auto btn-prim mb-4 xl:mb-12 mt-8 lg:mt-12">
                    Contact
                    </AnchorLink>  
                </div>
                
                <div>
                <StaticImage
                src='../images/Stevo Codex.png' 
                alt='knjigovođa Stevo Tadić vlasnik Codex agencije' 
                className='  mt-12 lg:mt-0 lg:-ml-10 rounded-large lg:rounded-l-none 3xl:rounded-l-large' 
                placeholder="blurred"
                quality='100'></StaticImage>
                </div>
                
            </div>
            
        </section>
    )
}

export default AboutEN