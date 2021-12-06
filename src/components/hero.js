import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Hero = () => {
    return (
      <section id="pocetna" className=' min-h-screen py-24 overflow-hidden flex items-center'>
      <div className='max-w-1170 mx-auto grid lg:grid-cols-2 h-full px-4 xl:px-0 items-center'>
          <div className='my-auto text-center lg:text-left'>
              <h1 className='my-auto font-display  font-extrabold text-5xl xl:text-6xl text-dark-blue'>Računovodstvene <br/> Usluge Codex</h1>
              <p className='text-gray text-xl mx-auto max-w-md xl:max-w-3xl lg:ml-0 xl:text-2xl py-3'>Prepustite vaše finansije sigurnim rukama i uštedite dragocjeno vrijeme.</p>
              <div className='flex space-x-8 mt-4 lg:mt-10 justify-center lg:justify-start mb-4 '>
                  
                  <AnchorLink
                  to='/#usluge'
                  title='usluge'
                  className="stripped my-auto btn-prim ">
                  Usluge
                  </AnchorLink>

                  <AnchorLink
                    to='/#kontakt'
                    title='kontakt'
                    className="stripped my-auto btn-sec ">
                    Kontakt
                  </AnchorLink>
              </div>
          </div>
          <div className='mx-auto sm:w-3/4 lg:w-auto'>
            <StaticImage 
            src='../images/codex-knjigovođa-hero.png' 
            alt='knjigovođa' 
            className='my-auto lg:ml-auto lg:-mr-48  ' 
            placeholder="blurred"
            loading='eager'
            quality='100'
          
          ></StaticImage>
          </div>
      </div>
  </section>
    )
}

export default Hero
