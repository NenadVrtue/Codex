import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import CollapseOnama from './collapseOnama'

const ONama = () => {
    return (
        <section id='o-nama' className='pt-16 xl:pt-28 pb-16 px-4'>

        <div className='max-w-1170 mx-auto px-4 lg:px-0 flex flex-col lg:flex-row  items-center lg:items-start justify-between '>
                    <div className='text-gray  text-center lg:text-left lg:w-2/4 '>
                    <h2 className='text-dark-blue'>O Nama</h2>
                    <h4 className='text-gray-2 text-base font-semibold'>Izaberite najbolje</h4>
                    <p className='text-lg max-w-xl pt-5  pb-5'>
                        Vlasnik Codex-a je Stevo Tadić, diplomirani ekonomista (Ekonomski fakultet u Banjaluci) 
                        i licencirani računovodja sa preko 20 godina radnog iskustva.</p> 
                    
                    <p className='text-lg max-w-xl '>Računovodstvena agencija Codex za vas može da obavlja kompletno vođenje finansija, 
                        ili pak možete da prepustite samo određena područja. Usluga se prilagođava u poslovanju sa  velikim, 
                        srednjim i malim preduzećima. <CollapseOnama>
                    <p className='text-lg max-w-xl '>
                    Za klijente se računovodstveni poslovi obavljaju na najvišem mogućem stručnom nivou, 
                    svjesni da računovodstveni servis svojim klijentima mora da nudi kvalitetno poresko i poslovno savetovanje. 
                    Osnovno načelo  je kvalitet; zato se nudi  profesionalan pristup i saradnju koja se zasniva na stručnosti i povjerenju. 
                    Sarađujemo sa svim značajnim institucijama u državi u vezi sa računovodstvom, dažbinama i preduzetništvom uopšte.
                    Koristi se  vrhunska informaciona tehnologija priznatih domaćih i stranih proizvođača. 
                    U radu se naročito posvećuje pažnja detaljima kada je u pitanju visoka stručnost u vezi sa savetovanjem, brz odziv na razne dodatne želje i ljubazan odnos.
                    </p>
                    </CollapseOnama></p>
                    
                    <AnchorLink 
                    to='/#kontakt'
                    title='kontakt'
                    className="stripped mx-auto lg:ml-0 block w-52 my-auto btn-prim mb-4 xl:mb-12 mt-8 lg:mt-12">
                    Kontakt
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

export default ONama
