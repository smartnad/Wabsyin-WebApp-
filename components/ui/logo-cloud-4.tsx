"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
    logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
    return (
        <div className="relative mx-auto max-w-full overflow-hidden py-8 md:py-12">
            <div className="container mx-auto px-6 mb-8 text-center">
                <h2 className="mb-5 text-center">
                    <span className="block font-medium text-2xl text-slate-500 mb-2">
                        Trusted by innovative teams
                    </span>
                    <span className="font-display font-bold text-3xl text-slate-900 tracking-tight md:text-4xl">
                        Powering Next-Gen Startups
                    </span>
                </h2>
            </div>

            <div className="relative mx-auto max-w-5xl bg-gradient-to-r from-transparent via-transparent to-transparent">
                <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen" />

                <InfiniteSlider gap={42} reverse duration={30} durationOnHover={50}>
                    {logos.map((logo) => (
                        <img
                            alt={logo.alt}
                            className="pointer-events-none h-8 select-none md:h-10 w-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                            height="40"
                            key={`logo-${logo.alt}`}
                            loading="lazy"
                            src={logo.src}
                            width="auto"
                        />
                    ))}
                </InfiniteSlider>

                <ProgressiveBlur
                    blurIntensity={2}
                    className="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[200px] z-10 bg-gradient-to-r from-white to-transparent"
                    direction="left"
                />
                <ProgressiveBlur
                    blurIntensity={2}
                    className="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[200px] z-10 bg-gradient-to-l from-white to-transparent"
                    direction="right"
                />

                <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen" />
            </div>
        </div>
    );
}
