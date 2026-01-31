import { Button } from "./button";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0B0B0B] z-10 ">
            <div className="flex justify-between items-center px-10 py-5">
                <div className="flex gap-3 items-center">
                    <img src="/images/LogoMain.svg" alt="Logo" className="h-10" />
                    <p className="font-medium">Darkerhills</p>
                </div>
                <div className="flex gap-20" >
                    <p className="font-medium">Resume</p>
                    <p className="font-medium">About Me</p>
                    <p className="font-medium">Socials</p>
                </div>
                <Button className="bg-[#FDBA0D] text-[#0B0B0B] hover:bg-[#FEEAB4] transition-colors duration-300">
                    <p>Get in touch</p>
                </Button>

            </div>
        </nav>
    )
}