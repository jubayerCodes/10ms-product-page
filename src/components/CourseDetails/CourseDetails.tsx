import { Section } from '@/types/types';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CourseDetails = ({ details, section }: { details: any, section: Section }) => {
    return (
        <div id='about'>
            <div className='mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px] '>
                <div className='mt-10 md:mt-0'>
                    <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
                        {section?.name}
                    </h2>
                    <div className='rounded-lg py-2 md:border md:px-5 '>
                        {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            details?.map((item: any) => (
                                <details key={item?.id} className="mb-0 border-b border-dashed last:border-none">
                                    <summary className="py-4 cursor-pointer">
                                        <div className="max-w-[90%] font-medium md:text-base mx-lg:text-sm"
                                            dangerouslySetInnerHTML={{ __html: item?.title }}>
                                        </div>
                                    </summary>
                                    <div className="px-0 pb-2 text-gray-500">
                                        <div className="prose prose-ul:pl-4" dangerouslySetInnerHTML={{ __html: item?.description }}>
                                        </div>
                                    </div>
                                </details>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;