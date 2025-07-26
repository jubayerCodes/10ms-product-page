/* eslint-disable @next/next/no-img-element */
import { IFeature, Section } from '@/types/types';
import React from 'react';

const Features = ({ features, section }: { features: IFeature[], section: Section }) => {
    return (
        <>
            <div id="features">
                <div className='flex flex-col gap-3'>
                    <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                        {section?.name}
                    </h2>
                    <div className='mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8'>
                        {
                            features?.map((feature: IFeature, idx) => (
                                <div className="flex flex-row items-start gap-3 m-1" key={idx}>
                                    <div>
                                        <div className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: "1" }}>
                                            <img alt={feature?.title} data-original-src={feature?.icon} loading="lazy" width="36" height="36" decoding="async" data-nimg="1" style={{ color: "transparent" }} src={feature?.icon} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1 gap-2">
                                        <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                                            {feature?.title}
                                        </h2>
                                        <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                                            {feature?.subtitle}
                                        </h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;