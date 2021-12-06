import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Hero = () => {
    return (
      <section id="pocetna" className=' min-h-screen py-24 overflow-hidden flex items-center'>
      <div className='max-w-1170 mx-auto grid lg:grid-cols-2 h-full px-4 xl:px-0 items-start'>
          <div className='my-auto text-center lg:text-left'>
              <h1 className='my-auto font-display font-extrabold text-3xl  sm:text-5xl xl:text-6xl   text-dark-blue'>Računovodstvene <br/> Usluge Codex</h1>
              <p className='text-gray text-lg sm:text-xl mx-auto max-w-md xl:max-w-4xl lg:ml-0 xl:text-2xl py-4'>Prepustite vaše finansije sigurnim rukama i uštedite dragocjeno vrijeme.</p>
              <div className='flex flex-col mob:flex-row space-y-2 mob:space-y-0 space-x-0 mob:space-x-4 mt-2 lg:mt-10 justify-center lg:justify-start mb-12 '>
                  
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
          <div className='mx-auto sm:w-3/4 lg:w-auto lg:-mr-48 my-auto w-full lg:ml-auto'>
            <StaticImage 
            src='../images/codex-knjigovođa-hero.png' 
            alt='knjigovođa' 
            className='   ' 
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
