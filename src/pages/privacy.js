import React from 'react'
import FooterEN from '../components/en/footerEN'
import HeaderEN from '../components/en/headerEN'

import Layout from '../components/layout'

const Privacy = () => {
    return (
        <Layout>
            <HeaderEN></HeaderEN>
            <section className='max-w-1170 mx-auto py-24  px-4 xl:px-28'>
                <h1 className='text-center text-4xl my-12'>Privacy Policy</h1>
                <p className='py-2'>At Codex Agencija, accessible from Codexagencija.org, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Codexagencija.org and how we use it. </p>
                <p className='py-2'>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
                <p className='py-2'>This Privacy Policy applies only to our online activities and is valid for visitors to our website with/ regards to the information that they shared and/or collect in Codexagencija.org. This policy is not applicable to any information collected offline or via channels other than this website. Our Privacy Policy was created with the help of the Free Privacy Policy Generator.</p>

                <h2 className='text-3xl py-4'>Consent</h2>
                <p className='py-2'>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>

                <h2 className='text-3xl py-4'>Information we collect</h2>
                <p className='py-2'>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p className='py-2'>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>

                <h2 className='text-3xl py-4'>How we use your information</h2>
                <p className='py-2'>We use the information we collect in various ways, including to:</p>
                <ul className='list-inside list-disc'>
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Develop new services, features, and functionality</li>
                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                    <li>Send you emails</li>
                    <li>Find and prevent fraud</li>
                </ul>

                <h2 className='text-3xl py-4'>Log Files</h2>
                <p className='py-2'>Codex Agencija follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>

                <h2 className='text-3xl py-4'>Cookies and Web Beacons</h2>
                <p className='py-2'>Like any other website, Codexagencija.org uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
                <p className='py-2'>For more general information on cookies, please read more on the Cookie Consent website.</p>
                
                <h2 className='text-3xl py-4'>Google DoubleClick DART Cookie</h2>
                <p className='py-2'>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL ??? https://policies.google.com/technologies/ads</p>

                <h2 className='text-3xl py-4'>GDPR Data Protection Rights</h2>
                <p className='py-2'>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                The right to access ??? You have the right to request copies of your personal data. We may charge you a small fee for this service.
                The right to rectification ??? You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.
                The right to erasure ??? You have the right to request that we erase your personal data, under certain conditions.
                The right to restrict processing ??? You have the right to request that we restrict the processing of your personal data, under certain conditions.
                The right to object to processing ??? You have the right to object to our processing of your personal data, under certain conditions.
                The right to data portability ??? You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                </p>

               
            </section>
            <FooterEN></FooterEN>
        </Layout>
    )
}

export default Privacy
