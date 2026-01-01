import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work | Wabsyin - Real Projects, Real Impact",
    description: "Showcase of our recent projects including SaaS platforms, e-commerce sites, and educational apps.",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
