"use client";

interface GradientWaveProps {
    colors?: string[]; // Kept for compatibility, though CSS uses predefined colors primarily
    className?: string;
    isPlaying?: boolean; // Kept for compatibility
    // Other props kept for interface compatibility but ignored
    shadowPower?: number;
    darkenTop?: boolean;
    noiseSpeed?: number;
    noiseFrequency?: [number, number];
    deform?: any;
}

export function GradientWave({
    className = "",
}: GradientWaveProps) {
    // This is a high-performance CSS-only replacement for the previously laggy WebGL background.
    // It creates a similar "moving gradient" effect using CSS blur and keyframe animations
    // which runs on the compositor thread and does not block scrolling.

    return (
        <div className={`absolute inset-0 z-0 w-full h-full overflow-hidden bg-slate-50 ${className}`}>
            {/* Animated Blobs */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            {/* Overlay for texture/noise if needed, but keeping it clean for performance */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>
    );
}
