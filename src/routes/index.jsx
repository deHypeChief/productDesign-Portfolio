import { Link } from "react-router-dom";
import { Navbar } from "../assets/blocks/navbar";
import { Button } from "../assets/blocks/button";
import { useState, useEffect, useRef } from "react";

export default function Home() {

    const [activeIndex, setActiveIndex] = useState(0);
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = refs.current.indexOf(entry.target);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        refs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            refs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    const product = [
        {
            img: "/images/Frame 18.png",
            type: "Product design",
            description: "Drove product design and design system improvements during a growth phase in which the company exceeded $1B in total transaction volume.",
            link: "/",
            productType: "Seed",
            title: "XO Market"
        },
        {
            img: "/images/Frame 2087329340.png",
            type: " Product Audit",
            description: "Audited and redesigned web app UX, contributing to $600K+ in trading volume within three days and supporting $25M in token sales.",
            link: "/",
            productType: "Series A",
            title: "Universal X"
        },
        {
            img: "/images/Frame 2087329341.png",
            type: "Branding, Product design",
            description: "Collaborated with founders to create the the visual language, branding, design system, and contributed to feature development.",
            link: "/",
            productType: "Pre-seed",
            title: "Small search"
        }
    ]
    return (
        <>
            <Navbar />

            <div className="min-h-screen flex flex-col justify-center items-center gap-40 relative bg-[url('/images/wlwewlj.png')] bg-no-repeat bg-cover bg-bottom ">
                <div className="flex flex-col items-center">
                    <p className="text-[140px]">
                        PRODUCT DESIGN
                    </p>
                    <div className="flex gap-4 items-center justify-between w-full">
                        <div className="h-2 w-2 rounded-full bg-[#FEEAB4]" />
                        <p>Web 3</p>
                        <div className="h-2 w-2 rounded-full bg-[#FEEAB4]" />
                        <p>Seed</p>
                        <div className="h-2 w-2 rounded-full bg-[#FEEAB4]" />
                        <p>Series A</p>
                        <div className="h-2 w-2 rounded-full bg-[#FEEAB4]" />
                        <p>Novel brands</p>
                        <div className="h-2 w-2 rounded-full bg-[#FEEAB4]" />
                    </div>
                </div>

                <div className="w-full flex justify-between items-center px-28 absolute bottom-10">
                    <img src="/images/download 1.svg" alt="Arrow Down" />
                    <img src="/images/Frame 21.svg" alt="Arrow Down" />
                    <img src="/images/image 1.svg" alt="Arrow Down" />
                    <img src="/images/image 2.svg" alt="Arrow Down" />
                    <img src="/images/Logo 1.svg" alt="Arrow Down" />
                </div>

            </div>

            <div className="px-20 py-10" >
                <p className="font-semibold w-2xl text-4xl">
                    Hi, I’m Joseph and I craft premium experiences and solutions that lead to
                    <span className="text-[#FDBA0D]"> conversion</span> and
                    <span className="text-[#FDBA0D]"> retention</span>
                </p>
            </div>

            <div className="grid grid-cols-2 px-20 py-40 relative" id="resume">
                <aside className="pt-20 space-y-5 sticky top-20 self-start">
                    {
                        product.map((item, index) => (
                            <div key={index} className="w-2/3">
                                <div className={`flex justify-between border-b-2 pb-2 ${index === activeIndex ? 'opacity-100' : 'opacity-40'}`}>
                                    <p>{`0${index + 1}`}</p>
                                    <p>{item.productType}</p>
                                </div>
                                <p className={`font-semibold text-2xl pt-3 ${index === activeIndex ? 'text-[#FDBA0D]' : 'text-white opacity-40'}`}>{item.title}</p>
                            </div>
                        ))
                    }
                </aside>

                <div className="space-y-36">
                    {
                        product.map((item, index) => (
                            <div key={index} ref={el => refs.current[index] = el}>
                                <div className="h-[430px] bg-amber-500">
                                    <img src={item.img} alt="Project Image" className="w-full h-full object-cover" />
                                </div>
                                <div className="grid grid-cols-[200px_auto] pt-10">
                                    <div className="opacity-35">
                                        <p>
                                            {`0${index + 1}`}- {item.type}
                                        </p>
                                    </div>
                                    <div>
                                        <p>
                                            {item.description}
                                        </p>
                                        <Link to={item.link} className="text-[#FDBA0D] mt-5 inline-block ">
                                            View Live Project
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="h-[800px] flex items-center justify-center" id="aboutme">
                <div className="flex flex-col items-center  justify-center space-y-14">
                    <div className="h-[100px] w-[100px] bg-white rounded-full bg-[url('')] bg-no-repeat bg-cover">
                        <img src="/images/Ellipse 11.png" alt="Avatar" className="h-full w-full rounded-full" />
                    </div>
                    <p className="font-semibold w-2xl text-2xl text-center">
                        I’m a product designer who builds products that are easy to understand, easy to trust, and designed to convert.
                    </p>

                    <Button className="bg-[#FDBA0D] text-[#0B0B0B] hover:bg-[#FEEAB4] transition-colors duration-300 ">
                        <img src="/images/Vector.svg" alt="Envelope" />
                        <p>Get in touch</p>
                    </Button>
                    <div className="p-3 border-[#FFF9EB]/10 border-3 bg-[#FFF9EB]/10 rounded-full flex gap-3 items-center text-sm ">
                        <div className="h-3 w-3 rounded-full bg-[#FDBA0D]" />
                        <p>Typically replies within 10mins</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-3 gap-2">
                {Array.from({ length: 15 }, (_, i) => (
                    <div key={i} className="bg-white h-[200px] rounded-lg">
                        {/* Add content here if needed */}
                    </div>
                ))}
            </div>

            <div id="socials">
                <div className="flex justify-center flex-col items-center pt-50">
                    <div className="flex gap-10 ">

                        <div className="">
                            <p className="w-[350px] font-semibold w-2xl text-2xl text-white/40 mb-8">Question, an idea, or a project you need help with? <span className="text-white">Reach out</span></p>

                            <div className="flex gap-3 items-center text-lg font-bold">
                                <div className="w-fit p-3 px-5 border-[#FFF9EB]/10 border-3 bg-[#FFF9EB]/10 rounded-full flex gap-3 items-center text-sm ">
                                    <img src="/images/image 1673907340.svg" alt="Logo" className="w-20" />
                                </div>

                                <p>Book Meeting</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 w-[400px] flex-wrap h-fit gap-y-3">
                            <div className="flex gap-1 items-center text-lg font-semibold">
                                <img src="/images/EnvelopeSimple.svg" alt="Arrow Down" />
                                <p className="text-[#FDBA0D]">Design@darkerhills.online</p>
                            </div>
                            <div className="flex gap-1 items-center text-lg font-semibold">
                                <img src="/images/XLogo.svg" alt="Arrow Down" />
                                <p className="text-[#FDBA0D]">Darkerhills</p>
                            </div>
                            <div className="flex gap-1 items-center text-lg font-semibold">
                                <img src="/images/TelegramLogo.svg" alt="Arrow Down" />
                                <p className="text-[#FDBA0D]">@Darkerhills</p>
                            </div>
                            <div className="flex gap-1 items-center text-lg font-semibold">
                                <img src="/images/LinkedinLogo.svg" alt="Arrow Down" />
                                <p className="text-[#FDBA0D]">Joseph Effiwatt</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                        <img src="/images/LogoMain.svg" alt="Logo" className="h-32" />
                    </div>
                </div>

                {/* footer text */}

            </div>

            <div className="pt-32">
                <img src="/images/Darkerhills.svg" alt="Decorative Line" className="w-full opacity-50" />
            </div>
        </>
    )
}