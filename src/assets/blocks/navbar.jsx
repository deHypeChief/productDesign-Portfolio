import { Button } from "./button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0B0B0B] z-50 ">
            <div className="flex justify-between items-center px-5 md:px-10 py-5">
                <div className="flex gap-3 items-center">
                    <img src="/images/LogoMain.svg" alt="Logo" className="h-8 md:h-10" />
                    <p className="font-medium">Darkerhills</p>
                </div>
                <div className="md:flex gap-20 hidden" >
                    <a href="#aboutme" className="font-medium">About Me</a>
                    <a href="#resume" className="font-medium">Resume</a>
                    <a href="#socials" className="font-medium">Socials</a>
                </div>
                <Button className="bg-[#FDBA0D] text-[#0B0B0B] hover:bg-[#FEEAB4] transition-colors duration-300 shadow-lg shadow-[#FEEAB4] hover:shadow-[#FDBA0D]">
                        <img src="/images/Vector.svg" alt="Envelope" />
                    <p>Get in touch</p>
                </Button>

            </div>
        </nav>
    )
}