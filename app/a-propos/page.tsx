import Intro from '@/components/a-propos/Intro'
import Introduction from '@/components/a-propos/introduction'
import StatsCard from '@/components/a-propos/Stats'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/home/ProjectSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "Fuite Piscine Expert",
                            image: "https://https://fuitepiscinenice-expert.fr/images/fuite-piscine-sur-nice.webp",
                            "@id": "https://https://fuitepiscinenice-expert.fr/",
                            url: "https://https://fuitepiscinenice-expert.fr/",
                            telephone: "+33647572021",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "12 Rue de France",
                                addressLocality: "Nice",
                                postalCode: "06000",
                                addressCountry: "FR",
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday",
                                    ],
                                    opens: "08:00",
                                    closes: "20:00",
                                },
                            ],
                            sameAs: [],
                        }),
                    }}
                />
            </Head>
            <LocalBusinessSchema />
            <main className='max-w-7xl mx-auto relative  text-[#222626] px-16  max-sm:px-6'>
                <HeroSection
                    title='A propos de nous'
                />
                <Intro />
                <Introduction />
                <StatsCard />
                <div className=' flex justify-center'>
                    <Image
                        src="/images/piscine-d-escalier-fuite-nice.webp"
                        alt="Expert fuites piscine à Nice"
                        width={1000}
                        height={1000}
                        className='w-full h-auto object-cover mt-10 mb-10'
                    />
                </div>
                <ProjectSection />

            </main>
        </>
    )
}

export default page