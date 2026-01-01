import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Wabsyin - Product Studio",
    description: "Learn about Wabsyin's product-first mindset. We build startup-grade SaaS solutions, not just websites.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
