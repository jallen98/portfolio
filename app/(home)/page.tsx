import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import FormattedLink from "../ui/formatted-link";

export default function Home() {
    const greeting = "Welcome to my portfolio! I'm James Allen 👋"

    const linkStyle = "bg-zinc-700 pl-2 pr-2 ml-2 mr-2 rounded-xl border-2 border-gray-500 hover:bg-zinc-500 inline-flex text-sm"

    return (
        <div>
            <div className="flex flex-col items-center p-5">
                <p className="mb-5 text-justify">{ greeting }</p>
                <Image className="rounded-full" src="/profile_pic.jpg" alt="Profile Picture" width="100" height="100"/>
            </div>
            <p className="mb-5 text-justify">
                I'm a passionate developer, with experience ranging from a small startup to a contract with Apple.
                No matter the size of the company, I aim to provide the highest quality work as efficiently as possible.
                I believe collaboration and learning together creates the best teams.
            </p>
            <p className="mb-5 text-justify">
                I've worked with all parts of the stack, but I thrive in web applications and have a passion for 3D graphics.
                See what I've worked on in my
                <FormattedLink text="career" link="/career"/>
                and
                <FormattedLink text="projects" link="/projects"/>
                pages! The source code for this website, written with React and Next.js, is available here:
                <FormattedLink isInternal={false} text="https://github.com/jallen98/portfolio" link="https://github.com/jallen98/portfolio"/>
            </p>

            <div className="flex justify-between mt-20">
                <FormattedLink isInternal={false} text="Resume" link="/resume.pdf" imageProps={ {src: "/resume-icon.png", alt: "Resume Icon"} }/>
                <FormattedLink isInternal={false} text="LinkedIn" link="https://www.linkedin.com/in/james-j-allen/" imageProps={ {src: "/linkedin.png", alt: "LinkedIn Icon"} }/>
                <FormattedLink isInternal={false} text="GitHub" link="https://github.com/jallen98" imageProps={ {src: "/github.png", alt: "GitHub Icon"} }/>
            </div>
        </div>
    );
}
