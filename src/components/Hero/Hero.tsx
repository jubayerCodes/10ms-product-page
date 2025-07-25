/* eslint-disable @next/next/no-img-element */
"use client"
import { Medium } from '@/types/types';
import React, { useEffect, useState } from 'react';

interface Props {
    title: string,
    description: string,
    ratings: number,
    media: Medium[]
}

const Hero = ({ title, description, ratings, media }: Props) => {

    const [active, setActive] = useState(0)

    const customMedia = media.filter((medium: Medium) => medium.name !== "sqr_img" && medium.name !== "thumbnail")

    useEffect(() => {
        console.log(active);
    }, [active])

    return (
        <section style={{
            backgroundImage: "url(https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
                <div className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
                    <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
                        {title}
                    </h1>
                    <div className="mb-2">
                        <button className="flex flex-row flex-wrap gap-2 text-white">
                            <span className="inline-block">
                                <img className="md:w-[130px] w-[100px]" src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png" alt='' />
                            </span>
                            <span className="inline-block text-sm md:text-base">
                                ({ratings}% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                            </span>
                        </button>
                    </div>
                    <div>
                        <div className="text-gray-400 " style={{ overflow: "hidden", height: "auto", maskImage: "none" }}>
                            <div dangerouslySetInnerHTML={{ __html: description }}>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute">
                    <div className="md:sticky md:top-[112px] ">
                        <div className=" md:border">
                            <div className="hidden p-1 md:block" id="">
                                {
                                    customMedia.map((medium: Medium, idx) => (
                                        medium.resource_type === 'video' ?
                                            <div className={`relative overflow-hidden bg-black youtube-video aspect-video ${idx === active ? "block" : "hidden"}`} key={idx}>
                                                <div className="relative">
                                                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 56 56">
                                                            <circle cx="28" cy="28" r="28" fill="#fff" fillOpacity="0.5">
                                                            </circle>
                                                            <circle cx="27.999" cy="28" r="25.415" fill="#fff">
                                                            </circle>
                                                            <path fill="#1CAB55" d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                    <div className="thumb-wrap">
                                                        <div>
                                                            <div className="active opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", objectFit: "cover", opacity: "1" }}>
                                                                <img alt="preview_gallery" data-original-src={medium.thumbnail_url} fetchPriority="high" width="867" height="480" decoding="async" data-nimg="1" className="w-full" src={medium.thumbnail_url} style={{ color: "transparent" }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="white" style={{ color: "white" }} height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z">
                                                            </path>
                                                        </svg>
                                                    </div>
                                                    <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
                                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="white" style={{ color: "white" }} height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <>
                                                <div className={`relative overflow-hidden bg-black youtube-video aspect-video ${idx === active ? "block" : "hidden"}`}>
                                                    <div className="h-full opacity-0 transition-opacity duration-300 ease-in-out" style={{
                                                        fontSize: "0px", opacity: "1"
                                                    }}>
                                                        <img alt="preview_gallery" data-original-src={medium.resource_value} fetchPriority="high" width="640" height="360" decoding="async" data-nimg="1" src={medium.resource_value} style={{ color: "transparent" }} />
                                                    </div>
                                                    <div>
                                                        <div className="absolute  left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
                                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="white" style={{ color: "white" }} height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
                                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="white" style={{ color: "white" }} height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div >
                                            </>
                                    ))
                                }
                                <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
                                    {
                                        customMedia?.map((medium: Medium, idx) => (
                                            medium.resource_type === "video" ?
                                                <div key={idx} onClick={() => setActive(idx)}>
                                                    <div>
                                                        <div className="relative w-[55px] rounded cursor-pointer overflow-hidden outline-[2px] outline-[#1CAB55]">
                                                            <div className="rounded opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: "1" }}>
                                                                <img alt="preview_gallery" data-original-src={medium.thumbnail_url} loading="lazy" width="86" height="50" decoding="async" data-nimg="1" style={{ color: "transparent" }} src={medium.thumbnail_url} />
                                                            </div>
                                                            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                                                <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: "1" }}>
                                                                    <img alt="Play The Video" data-original-src="/images/annual_exam/play_icon_2.svg" fetchPriority="high" width="20" height="20" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                medium.resource_type === "image" ?
                                                    <div key={idx} onClick={() => setActive(idx)}>
                                                        <div>
                                                            <div className="relative  w-[55px] rounded cursor-pointer border-0">
                                                                <div className="rounded opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: "1" }}>
                                                                    <img alt="preview_gallery" data-original-src={medium.resource_value} loading="lazy" width="86" height="50" decoding="async" data-nimg="1" style={{ color: "transparent" }} src={medium.resource_value} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    :
                                                    <></>
                                        ))
                                    }
                                </div>
                                <div className="block md:hidden">
                                    <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl">
                                        IELTS Course by Munzereen Shahid
                                    </h1>
                                    <div className="mb-4 text-sm font-normal">
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="" data-device-type="desktop">
                                    <div className="w-full p-4 md:h-auto " id="variant">
                                        <div className="relative md:static ">
                                            <div>
                                                <div className="flex flex-col w-full">
                                                    <div>
                                                        <div className="flex items-center justify-between md:flex-col md:items-start">
                                                            <div className="md:mb-3">
                                                                <div className="inline-block text-2xl font-semibold">
                                                                    ৳3850
                                                                </div>
                                                                <span className="infline-flex">
                                                                    <del className="ml-2 text-base font-normal md:text-xl">
                                                                        ৳5000
                                                                    </del>
                                                                    <div className="c-Tukmu inline-block">
                                                                        <p className="card-price">
                                                                            1150 ৳ ছাড়
                                                                        </p>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between mb-2">
                                                        </div>
                                                    </div>
                                                    <button className="bg-green whitespace-nowrap button primary text-center md:w-full centered-buttons">
                                                        কোর্সটি কিনুন
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="absolute md:static top-[-45px] left-0 ">
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="grid py-2 md:p-4">
                                    <p className="mb-4 text-lg font-semibold">
                                        এই কোর্সে যা থাকছে
                                    </p>
                                    <div>
                                        <div className="flex items-center mb-3 leading-5">
                                            <div className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out" style={{ fontSize: "0px", opacity: "1" }}>
                                                <img alt="icon" data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png" />
                                            </div>
                                            <h4 className="mb-0 inline-block pl-2 tracking-[0.005em] text-[#111827] text-sm">
                                                কোর্সটি করছেন ৩২৯৯৫ জন
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
                            <span>
                                কোর্সটি সম্পর্কে বিস্তারিত জানতে
                            </span>
                            <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                    </path>
                                </svg>
                                <span className="ml-1">
                                    ফোন করুন (16910)
                                </span>
                            </span>
                        </p>
                    </div>
                </section>
            </div >
        </section >
    );
};

export default Hero;