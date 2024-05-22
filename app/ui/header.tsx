import Link from "next/link";

interface HeaderPage {
    display: string;
    link: string;
}

export default function Header() {
    const pages: HeaderPage[] = [
        { display: "Home", link: "/" },
        { display: "Career", link: "/career" },
        { display: "Projects", link: "/projects" }
    ]

    return (
        <div className="mt-5 flex justify-center">
            { pages.map(({ display, link }) => (<Link key={link} className="p-5 hover:text-gray-500" href={link}>{ display }</Link>)) }
        </div>
    );
}
