import Hero from '@/components/Hero/Hero';
import Sections from '@/components/Sections/Sections';
import { getProductData } from '@/lib/api';
import React from 'react';

const Home = async ({ lang }: { lang: string }) => {
    const { data } = await getProductData(lang);
    return (
        <div>
            <Hero
                title={data.title}
                description={data.description}
                ratings={82.6}
                media={data.media}
                ctaText={data.cta_text}
                checkList={data.checklist}
            />
            <main className="container">
                <section className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
                    <Sections sections={data.sections} />
                </section>
                <section></section>
            </main>
        </div>
    );
};

export default Home;