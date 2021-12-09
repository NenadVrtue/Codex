import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Cjenovnik = () => {
    return (
        <section id='cjenovnik' className='bg-bg-blue z-0  overflow-hidden   '>
            <div className='max-w-1440 h-full pt-11 lg:pt-20 pb-11 mx-auto px-4 lg:px-0 flex flex-col-reverse lg:flex-row z-20 items-center justify-between relative'>
                <div>
                <StaticImage
                src='../images/cijena.png' 
                alt='cjenovnik slika' 
                className=' z-20 mt-12 lg:mt-0 lg:-ml-10 rounded-large lg:rounded-l-none ' 
                placeholder="blurred"
                quality='100'></StaticImage>
                </div>
                <div className='text-white z-20 text-center lg:text-left lg:w-2/4 ml-8'>
                    <h2>Cjenovnik</h2>
                    <p className='text-lg max-w-xl pt-5 pb-8 lg:pb-16'>Cijena računovodstvenih usluga zavisi od obima i 
                        djelatnosti klijenta te od organizacije računovodstvene funkcije. Kontaktirajte nas i vjerujemo da ćemo se dogovoriti na obostrano zadovoljstvo.</p> 
                        <AnchorLink
                    to='/#kontakt'
                    title='kontakt'
                    className="stripped my-auto btn-ter mb-12">
                    Pošalji poruku
                  </AnchorLink>  
                </div>
                <div className='absolute z-10 top-0 right-0 w-full lg:w-3/4 lg:-mr-10  bg-dark-blue lg:rounded-tl-large h-full'>
            </div>

           
            </div>

            

            
        </section>
    )
}

export default Cjenovnik
