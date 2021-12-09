import React from 'react'

import KontaktForma from './kontaktForma'
import { StaticImage } from 'gatsby-plugin-image'

const Kontakt = () => {
    return (
        <section id='kontakt' className='bg-bg-blue px-4 xl:px-0 pt-10 lg:pt-16  pb-24 lg:pb-32'>
        
        <h2 className='text-center text-dark-blue'>Kontakt</h2>
        <div className='max-w-1170 mx-auto mt-8 lg:mt-12 lg:px-0 flex flex-col lg:flex-row  items-center lg:items-start justify-between '>
            <KontaktForma></KontaktForma>
            <a target='_blank' rel="noreferrer" 
            href='https://www.google.com/maps/place/Majke+Jugovi%C4%87a+12,+Lakta%C5%A1i+78250/@44.9065255,17.2980594,17z/data=!3m1!4b1!4m5!3m4!1s0x475dfe6c10b6d077:0x3d10b447078e03b!8m2!3d44.9065255!4d17.3002481'>
                <StaticImage
                    src='../images/Adr.png' 
                    alt='Codex agencija google mapa lokacija i adresa' 
                    className='  mt-16 lg:mt-0  ' 
                    placeholder="blurred"
                    quality='100'>

                </StaticImage>
                </a>
</div>
       
        
      
    </section>
    )
}

export default Kontakt
