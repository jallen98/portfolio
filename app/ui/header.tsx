'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Theme, changeTheme } from "../themes/theme-util";
import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { Tooltip } from "@nextui-org/tooltip";

interface HeaderPage {
    display: string;
    link: string;
}

export default function Header() {
    const pathname = usePathname();
    const [theme, setTheme] = useState<Theme>('dark-mode');

    useEffect(() => {
        changeTheme(theme);
    }, [theme]);

    const pages: HeaderPage[] = [
        { display: "Home", link: "/" },
        { display: "Career", link: "/career" },
        { display: "Projects", link: "/projects" }
    ]

    const activePage = (link: string) => {
        return pathname === link;
    }

    function onChangeTheme() {
        if (theme === 'dark-mode') {
            setTheme('light-mode');
        }
        else {
            setTheme('dark-mode');
        }
    }

    return (
        <div className="mt-5 mb-5 flex justify-between">
            <div>
                { pages.map(({ display, link }) => (<Link key={link} className={`mr-5 hover:text-hover ${ activePage(link) ? "text-primary underline" : "text-secondary" }`} href={link}>{ display }</Link>)) }
            </div>

            <Tooltip className="text-sm" content={ theme === 'dark-mode' ? "Light Mode" : "Dark Mode" }>
                <button className="text-2xl" onClick={onChangeTheme}>{theme === 'dark-mode' ? <FaRegSun/>: <FaRegMoon/>}</button>
            </Tooltip>
        </div>
    );
}
