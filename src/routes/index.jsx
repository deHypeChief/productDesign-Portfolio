import { Link } from "react-router-dom";
import { Navbar } from "../assets/blocks/navbar";
import { Button } from "../assets/blocks/button";
import { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

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

    const carouselImages = [
        "/images/download 1.svg",
        "/images/Frame 21.svg",
        "/images/image 1.svg",
        "/images/image 2.svg",
        "/images/Logo 1.svg"
    ];

    const marqueeImages = carouselImages; // use react-fast-marquee's autoFill to duplicate content when necessary

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
                <div className="flex flex-col items-center md:scale-90">
                    <p className="md:text-[140px] text-[40px] text-center font-bold">
                        PRODUCT DESIGN
                    </p>
                    <div className="flex md:gap-4 items-center justify-between w-full px-2 md:px-0">
                        <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#FEEAB4]" />
                        <p className="text-xs md:text-lg" style={{ background: 'linear-gradient(180deg,#ffffff 0%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Web 3</p>
                        <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#FEEAB4]" />
                        <p className="text-xs md:text-lg" style={{ background: 'linear-gradient(180deg,#ffffff 0%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Seed</p>
                        <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#FEEAB4]" />
                        <p className="text-xs md:text-lg" style={{ background: 'linear-gradient(180deg,#ffffff 0%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Series A</p>
                        <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#FEEAB4]" />
                        <p className="text-xs md:text-lg" style={{ background: 'linear-gradient(180deg,#ffffff 0%, #000000 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>Novel brands</p>
                        <div className="h-1 md:h-2 w-1 md:w-2 rounded-full bg-[#FEEAB4]" />
                    </div>
                </div>

                <div className="w-full absolute bottom-16">
                    <Marquee autoFill pauseOnHover speed={60} gradient={false} className="w-full">
                        {marqueeImages.map((src, index) => (
                            <div key={index} className="mx-8 flex items-center">
                                <img src={src} alt={`Marquee ${index}`} />
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>

            <div className="px-5 md:px-20 py-10 md:mt-20" >
                <p className="font-semibold md:w-2xl md:text-4xl text-2xl">
                    Hi, I’m Joseph and I craft premium experiences and solutions that lead to
                    <span className="text-[#FDBA0D]"> conversion</span> and
                    <span className="text-[#FDBA0D]"> retention</span>
                </p>
            </div>

            <div className="md:grid grid-cols-2 px-5 md:px-20 py-20 md:py-40 relative" id="resume">
                <aside className="pt-20 space-y-5 sticky top-20 self-start hidden md:block">
                    {
                        product.map((item, index) => (
                            <div key={index} className="w-2/3">
                                <div className={`flex justify-between border-b-2 pb-2 ${index === activeIndex ? 'opacity-100' : 'opacity-40'}`}>
                                    <p>{`0${index + 1}`}</p>
                                    <p>{item.productType}</p>
                                </div>
                                <p className={`font-semibold text-2xl pt-3 ${index === activeIndex ? 'text-[#FDBA0D]' : 'text-[#FFF9EB]/40'}`}>{item.title}</p>
                            </div>
                        ))
                    }
                </aside>

                <div className="space-y-36">
                    {
                        product.map((item, index) => (
                            <div key={index} ref={el => refs.current[index] = el}>

                                <div key={index} className="md:w-2/3 block md:hidden mb-8">
                                    <div className={`flex justify-between border-b-2 pb-2 ${index === activeIndex ? 'opacity-100' : 'opacity-40'}`}>
                                        <p>{`0${index + 1}`}</p>
                                        <p>{item.productType}</p>
                                    </div>
                                    <p className={`font-semibold text-2xl pt-3 ${index === activeIndex ? 'text-[#FDBA0D]' : 'text-[#FFF9EB]/40'}`}>{item.title}</p>
                                </div>

                                <div className="h-[430px]">
                                    <img src={item.img} alt="Project Image" className="w-full h-full object-cover" />
                                </div>
                                <div className="md:grid grid-cols-[200px_auto] pt-10 space-y-6 md:space-y-0">
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
                                            <span>
                                                <img src="/images/ArrowUpRight.svg" alt="Arrow Right" className="inline-block ml-2" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="py-[160px] flex items-center justify-center bg-no-repeat bg-cover bg-bottom relative mb-10" id="aboutme">
                <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center ">
                    <div className="h-[250px] w-[250px] rounded-full bg-[#FDBA0D] blur-3xl" />
                    <div className="h-full w-full bg-[#0B0B0B]/60 absolute" />
                </div>
                <div className="flex flex-col items-center  justify-center space-y-8 relative z-10">
                    <div className="h-[100px] w-[100px] bg-white rounded-full bg-[url('')] bg-no-repeat bg-cover">
                        <img src="/images/Ellipse 11.png" alt="Avatar" className="h-full w-full rounded-full" />
                    </div>
                    <p className="font-semibold md:w-2xl text-2xl text-center">
                        I’m a product designer who builds products that are easy to understand, easy to trust, and designed to convert.
                    </p>

                    <Button className="bg-[#FDBA0D] text-[#0B0B0B] hover:bg-[#FEEAB4] transition-colors duration-300 shadow-lg shadow-[#FEEAB4] hover:shadow-[#FDBA0D]">
                        <img src="/images/Vector.svg" alt="Envelope" />
                        <p>Get in touch</p>
                    </Button>
                    <div className="-mt-2 p-3 border-[#FFF9EB]/10 border-3 bg-[#FFF9EB]/10 rounded-full flex gap-3 items-center text-sm ">
                        <div className="h-3 w-3 rounded-full bg-[#FDBA0D]" />
                        <p>Typically replies within 10mins</p>
                    </div>
                </div>
            </div>

            {/* <div className="grid grid-cols-5 grid-rows-3 gap-2">
                {Array.from({ length: 15 }, (_, i) => (
                    <div key={i} className="bg-white h-[200px] rounded-lg">
                        
                    </div>
                ))}
            </div> */}

            <div id="socials">
                <div className="flex justify-center flex-col items-center ">
                    <div className="flex md:flex-row flex-col gap-10 md:px-0 px-6">

                        <div className="">
                            <p className="md:w-[350px] font-semibold text-2xl text-[#FFF9EB]/40 mb-8">Question, an idea, or a project you need help with? <span className="text-[#FFF9EB]">Reach out</span></p>

                            <div className="flex gap-3 items-center text-lg font-bold">
                                <div className="w-fit p-3 px-5 border-[#FFF9EB]/10 border-3 bg-[#FFF9EB]/10 rounded-full flex gap-3 items-center text-sm ">
                                    <img src="/images/image 1673907340.svg" alt="Logo" className="w-20" />
                                </div>

                                <p>Book Meeting</p>
                            </div>
                        </div>

                        <div className="flex gap-x-4 md:w-[400px] flex-wrap h-fit gap-y-3">
                            <div className="flex gap-1 items-center text-lg font-semibold">
                                <img src="/images/EnvelopeSimple.svg" alt="Arrow Down" />
                                <p className="text-[#FDBA0D] text-xs md:text-sm">Design@darkerhills.online</p>
                            </div>
                            <div className="flex gap-1 items-center text-lg font-semibold">
                                <img src="/images/XLogo.svg" alt="Arrow Down" />
                                <p className="text-[#FDBA0D] text-xs md:text-sm">Darkerhills</p>
                            </div>
                            <div className="flex gap-1 items-center text-lg font-semibold">
                                <img src="/images/TelegramLogo.svg" alt="Arrow Down" />
                                <p className="text-[#FDBA0D] text-xs md:text-sm">@Darkerhills</p>
                            </div>
                            <div className="flex gap-1 items-center text-lg font-semibold">
                                <img src="/images/LinkedinLogo.svg" alt="Arrow Down" />
                                <p className="text-[#FDBA0D] text-xs md:text-sm">Joseph Effiwatt</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20">
                        <img src="/images/LogoMain.svg" alt="Logo" className="h-32" />
                    </div>
                </div>

                {/* footer text */}

            </div>

            <div className="mt-16">
                <img src="/images/Darkerhills.svg" alt="Decorative Line" className="w-full opacity-50" />
            </div>
        </>
    )
}