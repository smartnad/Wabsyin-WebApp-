import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Wabsyin - Start Your Project",
    description: "Ready to build your product? Connect with Wabsyin via WhatsApp or Email. Minimal friction, fast response.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
