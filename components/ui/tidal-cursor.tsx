"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const TidalCursor = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ripples = useRef<
        { x: number; y: number; radius: number; alpha: number }[]
    >([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Throttle ripple creation for performance
        let lastTime = 0;
        const throttleDelay = 15;

        const addRipple = (x: number, y: number) => {
            ripples.current.push({ x, y, radius: 0, alpha: 0.5 }); // Lower starting alpha for subtlety
        };

        const handleMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastTime > throttleDelay) {
                addRipple(e.clientX, e.clientY);
                lastTime = now;
            }
        };

        window.addEventListener("mousemove", handleMove);

        let animationFrameId: number;

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isDark = document.documentElement.classList.contains("dark");

            ripples.current.forEach((r) => {
                r.radius += 1.2;
                r.alpha -= 0.01;

                if (r.alpha > 0) {
                    ctx.beginPath();
                    ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
                    // Wabsyin Brand Colors: Primary (Indigo) & Secondary (Violet) ref from globals.css
                    ctx.strokeStyle = isDark
                        ? `rgba(124, 58, 237, ${r.alpha})` // Violet-600 for dark mode
                        : `rgba(79, 70, 229, ${r.alpha})`; // Indigo-600 for light mode
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            });

            ripples.current = ripples.current.filter((r) => r.alpha > 0);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={cn("fixed inset-0 w-full h-full pointer-events-none z-[9999]")}
        />
    );
};
