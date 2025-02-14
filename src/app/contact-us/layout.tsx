import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact US - The Yarn Bazaar',
    description: '',
    keywords: '',
}

export default function contactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}