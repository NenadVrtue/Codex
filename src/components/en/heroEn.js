import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const HeroEN = () => {
    return (
      <section id="start" className=' min-h-screen py-24 overflow-hidden flex items-center'>
      <div className='max-w-1170 mx-auto grid lg:grid-cols-2 h-full px-4 xl:px-0 items-start'>
          <div className='my-auto text-center lg:text-left'>
              <h1 className='my-auto font-display font-extrabold text-3xl  sm:text-5xl xl:text-6xl   text-dark-blue'>Accounting <br/> Services Codex</h1>
              <p className='text-gray text-lg sm:text-xl mx-auto max-w-md xl:max-w-4xl lg:ml-0 xl:text-2xl py-4'>Save precious time and let our safe hands  take care of your finances</p>
              <div className='flex flex-col mob:flex-row space-y-2 mob:space-y-0 space-x-0 mob:space-x-4 mt-2 lg:mt-10 justify-center lg:justify-start mb-12 '>
                  
                  <AnchorLink
                  to='/en/#services'
                  title='services'
                  className="stripped my-auto btn-prim ">
                  Services
                  </AnchorLink>

                  <AnchorLink
                    to='/en/#contact'
                    title='contact'
                    className="stripped my-auto btn-sec ">
                    Contact
                  </AnchorLink>
              </div>
          </div>
          <div className='mx-auto sm:w-3/4 lg:w-auto lg:-mr-44  my-auto w-full lg:ml-auto'>
            <StaticImage 
            src='../images/codex-knjigovođa-hero.png' 
            alt='knjigovođa' 
            className=' rounded-l-none   ' 
            placeholder="blurred"
            loading='eager'
            quality='100'
          
          ></StaticImage>
          </div>
          
      </div>
  </section>
    )
}

export default HeroEN
