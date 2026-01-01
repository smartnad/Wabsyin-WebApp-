"use client";
import React from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, User, Zap } from "lucide-react";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[320vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-white"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block">Website Development</span>
            <h1 className="text-4xl md:text-7xl font-bold dark:text-white text-slate-900 leading-tight">
                The &quot;Anti-Agency&quot; <br /> Approach.
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-slate-600">
                Most agencies want to bill hours. We want to ship products. Our team consists of former startup founders and lead engineers who understand that code is a liability unless it drives revenue.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-1">
                        <Target className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-lg font-bold text-slate-900">Mission Critical</h3>
                    </div>
                    <p className="text-slate-500 text-sm">We focus on the ONE feature that matters most for your launch.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-1">
                        <User className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-lg font-bold text-slate-900">User-Centric</h3>
                    </div>
                    <p className="text-slate-500 text-sm">We design for the end-user, not for Dribbble accolades.</p>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-1">
                        <Zap className="w-6 h-6 text-indigo-600" />
                        <h3 className="text-lg font-bold text-slate-900">Velocity</h3>
                    </div>
                    <p className="text-slate-500 text-sm">We deploy daily. You see progress in real-time.</p>
                </div>
            </div>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <Link
                href={product.link}
                className="block group-hover/product:shadow-2xl "
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl" // Added rounded-xl for better aesthetics
                    alt={product.title}
                />
            </Link>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none rounded-xl"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-bold text-xl">
                {product.title}
            </h2>
        </motion.div>
    );
};
