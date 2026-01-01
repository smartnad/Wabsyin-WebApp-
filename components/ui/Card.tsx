"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export const Card = ({ className, children, ...props }: HTMLMotionProps<"div">) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-white/20 dark:border-white/10 text-card-foreground p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:border-primary/20 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};
