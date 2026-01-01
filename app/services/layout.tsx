import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Wabsyin - Web App Development & Design",
    description: "Explore our services: Web App Development, UI/UX Design, Startup MVP Development, and SaaS Solutions.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
