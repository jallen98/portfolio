'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderPage {
    display: string;
    link: string;
}

export default function Header() {
    const pathname = usePathname();

    const pages: HeaderPage[] = [
        { display: "Home", link: "/" },
        { display: "Career", link: "/career" },
        { display: "Projects", link: "/projects" }
    ]

    const activePage = (link: string) => {
        return pathname === link;
    }

    return (
        <div className="mt-5 mb-5 flex">
            { pages.map(({ display, link }) => (<Link key={link} className={`mr-5 hover:text-gray-500 ${ activePage(link) ? "text-white underline" : "text-gray-400" }`} href={link}>{ display }</Link>)) }
        </div>
    );
}
