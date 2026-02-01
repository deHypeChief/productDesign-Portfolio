import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function LayoutMain() {
    const overlayRef = useRef(null);
    const logoRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // ensure main content is hidden while the intro runs
        gsap.set(contentRef.current, { autoAlpha: 0 });

        const tl = gsap.timeline({
            defaults: { ease: "power4.out" },
            onComplete: () => {
                // fully remove overlay from the flow after animation to allow interactions
                if (overlayRef.current) overlayRef.current.style.display = "none";
            }
        });

        tl.fromTo(
            logoRef.current,
            { autoAlpha: 0, scale: 0.6, y: 20, rotate: -15 },
            { duration: 1.1, autoAlpha: 1, scale: 1.1, y: 0, rotate: 10 }
        )
        .to(logoRef.current, { duration: 0.9, scale: 0.95, rotate: 0, ease: "elastic.out(1, 0.6)" }, "+=0.2")
        .to(logoRef.current, { duration: 0.5, scale: 18, autoAlpha: 0, ease: "power3.in" }, "+=0.2")
        .to(overlayRef.current, { duration: 0.2, yPercent: -20, autoAlpha: 0, ease: "power2.inOut" }, "-=0.4")
        .to(contentRef.current, { duration: 0.6, autoAlpha: 1, ease: "power2.out" }, "-=0.3");

        return () => tl.kill();
    }, []);

    return (
        <main className="min-h-screen text-[#FFF9EB]">
            <div ref={overlayRef} aria-hidden="true" className="flex justify-center items-center fixed h-full top-0 w-full bg-[#0B0B0B] z-[100]">
                <img ref={logoRef} src="/images/LogoMain.svg" alt="Logo" className="h-20"/>
            </div>

            <div ref={contentRef} className="relative z-0">
                <Outlet/>
            </div>
        </main>
    )
}