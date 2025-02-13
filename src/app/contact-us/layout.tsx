import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'contact TYB',
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