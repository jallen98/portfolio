import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface props {
    text: string;
    link: string;
    isInternal?: boolean;
}

const defaultProps = {
    isInternal: true,
}

export default function FormattedLink(props: props) {
    const style = "pl-1 pr-1 underline hover:text-hover";

    const { text, link, isInternal } = { ...defaultProps, ...props };

    if (isInternal) {
        return (
            <Link className={style} href={link}>
                {text}
            </Link>
        );
    }

    return (
        <a className={style} href={link} target="_blank">
            {text}
        </a>
    );
}
