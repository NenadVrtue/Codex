import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout'

const Privatnost = () => {
    return (
        <Layout>
            <Header></Header>
            <section className='max-w-1170 mx-auto py-24  px-4 xl:px-28'>
                <h1 className='text-center text-4xl my-12'>Politika Privatnosti</h1>
                <p className='py-2'>Nama u Codex Agenciji (dostupno na  Codexagencija.org), privatnost posjetilaca sajta predstavlja glavni prioritet. Ova izjava o privatnosti sadrži podatke o tome kakve informacije se skupljaju na Codexagencija.org i kako ih koristimo. </p>
                <p className='py-2'>Ako imate dodatna pitanja ili bilo kakve nedoumice o našoj politici privatnosti, kontaktirajte nas, bez ustručavanja.</p>
                <p className='py-2'>Ova politika privatnosti se primjenjuje samo na naše online aktivnosti i validna je za posjetioce našeg sajta, vezano za informacije koje dijele i/ili saznaju na Codexagencija.org. Ova politika se ne može primjeniti na informacije prikupljene offline ili drugim kanalima izvan ovog sajta. Naša politika privatnosti je stvorena uz pomoć Free Privacy Policy Generator.</p>

                <h2 className='text-3xl py-4'>Vaš Pristanak</h2>
                <p className='py-2'>
                Korišćenjem našeg sajta pristajete na našu politiku privatnosti i sve predvidjene uslove.</p>

                <h2 className='text-3xl py-4'>Informacije koje skupljamo</h2>
                <p className='py-2'>Lične informacije koje se traže od vas i razlozi zbog kojih se traže će vam biti jasno pojašnjeni onog momenta kad te informacije budu zahtjevane od Vas.</p>
                <p className='py-2'>Ako nas kontaktirate direktno, moguće je da ćemo primiti neke dodatne informacije, poput vašeg imena, e-mail adrese, broja telefona, sadržinu poruke i/ili atačmente kao i sve druge informacije koje odlučite da nam pošaljete.</p>

                <h2 className='text-3xl py-4'>Kako koristimo Vaše informacije</h2>
                <p className='py-2'>Koristimo informacije koje prikupimo na različite načine, najčešće za:</p>
                <ul className='list-inside list-disc'>
                    <li>Funkcionisanje i održavanje sajta</li>
                    <li>Personalizaciju, unaprijedjenje i proširenje sajta</li>
                    <li>Razumijevanje i analizu načina korišćenja sajta</li>
                    <li>Razvijanje novih usluga i funkcija</li>
                    <li>Komunikaciju sa klijentima, bilo direktno, bilo preko partnera, kako bi bili obavješteni o svim novinama ali i u marketinške svrhe</li>
                    <li>Slanje mejlova</li>
                    <li>Sprečavanje prevara</li>
                </ul>

                <h2 className='text-3xl py-4'>Log Fajlovi</h2>
                <p className='py-2'>Codex Agencija prati standardnu proceduru kad su u pitanju log fajlovi. Ovi fajlovi bilježe posjetioce kad posjete sajt. Sve hosting kompanije to rade kao dio analitike hosting usluga. Informacije prikupljene log fajlovima uključuju internet protokol (IP) adrese, tip browser-a, provajdera internet usluga (ISP), oznake datuma i vremena, izlaz/preusmjeravanje stranice, a nekad i broj klikova. Ove informacije nisu povezane sa informacijama za ličnu identifikaciju. Svrha ovih informacija je analiza trendova, administracija sajta, praćenje načina korištenja sajta od strane korisnika i prikupljanje demografskih podataka.</p>

                <h2 className='text-3xl py-4'>Kolačići i web oznake</h2>
                <p className='py-2'>Kao i svaki drugi sajt, Codexagencija.org koristi “kolačiće”. Kolačići se koriste za skladištenje informacija, uključujući  interese posjetilaca kao i sajtove koje je posjećivao. Ovi podaci se koriste za optimizaciju korisnikovog iskustva, prilagodjavanjem  sadržaja sajta na osnovu tipa browser-a i drugih informacija. Za više informacija o kolačićima pročitajte više na Cookie Consent sajtu.</p>
                
                
                <h2 className='text-3xl py-4'>Google Double Dart kolačić</h2>
                <p className='py-2'>Google je treća strana “prodavač” na našem sajtu. Takodje koristi kolačiće, poznate kao Dart kolačići kako bi nudio reklame našim posjetiocima na osnovu sajtova koje inače posjećuju. Medjutim korisnici mogu isključiti upotrebu ovih kolačića tako što će posjetiti  Google ad and content network Privacy Policy preko sledećeg linka – https://policies.google.com/technologies/ads</p>

                <h2 className='text-3xl py-4'>GDPR Prava o zaštiti podataka</h2>
                <p className='py-2'>Želimo se osigurati da stvarno shvatate sva prava koja imate kad je u pitanju zaštita vaših podataka. Svaki korisnik ima prava na sledeće:

                Pravo na pristup: U svakom momentu možete zatražiti kopiju vaših ličnih podataka. Za tu uslugu vam možemo zatražiti malu naknadu.

                Pravo na ispravku: Imate pravo zatražiti da ispravimo bilo koji podatak ako smatrate da je netačan. Takodje imate pravo tražiti da dopunimo neki podatak ukoliko je nepotpun

                Pravo na brisanje: Pod odredjenim uslovima, imate pravo zatražiti da neki podatak bude izbrisan

                Pravo na zabranu obrade: Pod odredjenim uslovima, imate pravo zatražiti da odredjeni podaci ne budu obradjeni (procesuirani) 

                Pravo na stavljanje prigovora na  obradu:  Pod odredjenim uslovima, imate pravo zatražiti da se stavi prigovor na obradu podataka

                Pravo na prenos podataka: Pod odredjenim uslovima, imate pravo zatražiti da podaci budu preneseni vama ili trećoj stranci


                Kada nam postavite zahtjev, imamo rok od mjesec dana da vam odgovorimo. Ako želite da iskoristite bilo koje od ovih prava, kontaktirajte nas.

                </p>

               
            </section>
            <Footer></Footer>
        </Layout>
    )
}

export default Privatnost