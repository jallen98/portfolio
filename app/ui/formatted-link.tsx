import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface props {
    text: string;
    link: string;
    isInternal?: boolean;
    imageProps?: { src: string, alt: string };
}

const defaultProps = {
    isInternal: true,
}

export default function FormattedLink(props: props) {
    const style = "bg-zinc-700 pl-2 pr-2 ml-2 mr-2 rounded-xl border-2 border-gray-500 hover:bg-zinc-500 inline-flex text-sm vertical-middle";
    const imageStyle = "m-2";

    const { text, link, isInternal, imageProps } = { ...defaultProps, ...props };

    if (isInternal) {
        return (
            <Link className={style} href={link}>
                { imageProps ? <Image className={imageStyle} src={imageProps.src} alt={imageProps.alt} width="50" height="50" ></Image> : null }
                {text}
                <GoArrowUpRight className="mt-1 ml-1"/>
            </Link>
        );
    }

    return (
        <a className={style} href={link} target="_blank">
            { imageProps ? <Image className={imageStyle} src={imageProps.src} alt={imageProps.alt} width="50" height="50" ></Image> : null }
            {text}
            <GoArrowUpRight className="mt-1 ml-1"/>
        </a>
    );
}
