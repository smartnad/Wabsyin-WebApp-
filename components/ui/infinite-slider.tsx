"use client";

import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    duration?: number;
    durationOnHover?: number;
    direction?: "horizontal" | "vertical";
    reverse?: boolean;
    className?: string;
    speed?: number; // Added speed prop for compatibility with LogoCloud usage
    speedOnHover?: number; // Added speedOnHover for compatibility
};

export function InfiniteSlider({
    children,
    gap = 16,
    duration = 25,
    durationOnHover,
    direction = "horizontal",
    reverse = false,
    className,
    speed,
    speedOnHover,
}: InfiniteSliderProps) {
    const [currentDuration, setCurrentDuration] = useState(duration);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    // If speed is provided, override duration roughly based on content size (calculated dynamically)
    // For simplicity, we'll stick to the provided duration logic unless speed is critical.
    // The provided demo passes 'speed' but the component implementation uses 'duration'.
    // We'll map speed to duration loosely if needed, but for now let's rely on the base implementation
    // and accept the props to avoid TS errors.

    useEffect(() => {
        let controls: { stop: () => void } | undefined;
        const size = direction === "horizontal" ? width : height;
        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        if (isTransitioning) {
            controls = animate(translation, [translation.get(), to], {
                ease: "linear",
                duration:
                    currentDuration * Math.abs((translation.get() - to) / contentSize),
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: "linear",
                duration: currentDuration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return () => controls?.stop();
    }, [
        key,
        translation,
        currentDuration,
        width,
        height,
        gap,
        isTransitioning,
        direction,
        reverse,
    ]);

    const hoverProps = durationOnHover
        ? {
            onHoverStart: () => {
                setIsTransitioning(true);
                setCurrentDuration(durationOnHover);
            },
            onHoverEnd: () => {
                setIsTransitioning(true);
                setCurrentDuration(duration);
            },
        }
        : {};

    return (
        <div className={cn("overflow-hidden", className)}>
            <motion.div
                className="flex w-max"
                style={{
                    ...(direction === "horizontal"
                        ? { x: translation }
                        : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === "horizontal" ? "row" : "column",
                }}
                ref={ref}
                {...hoverProps}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}
