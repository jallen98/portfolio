import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import FormattedLink from "../ui/formatted-link";
import { FaGithub, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <Image className="rounded-full mb-5" src="/profile_pic.jpg" alt="Profile Picture" width="100" height="100"/>
            <p className="mb-5text-4xl">James Allen</p>

            <p className="mb-5 text-typography">
                I'm a passionate developer, with experience ranging from a small startup to a contract with Apple.
                No matter the size of the company, I aim to provide the highest quality work as efficiently as possible.
                I believe collaboration and learning together creates the best teams.
            </p>
            <p className="mb-5">
                I've worked with all parts of the stack, but I thrive in web applications and have a passion for 3D graphics.
                See what I've worked on in my
                <FormattedLink text="career" link="/career"/>
                and
                <FormattedLink text="projects" link="/projects"/>
                pages! The source code for this website, written with React and Next.js, is available here:
                <FormattedLink isInternal={false} text="https://github.com/jallen98/portfolio" link="https://github.com/jallen98/portfolio"/>
            </p>

            <div className="flex mb-5">
                <a target="_blank" href="https://www.linkedin.com/in/james-j-allen/"><FaLinkedin className="mr-5 text-3xl fill-zinc-600 hover:fill-hover"/></a>
                <a target="_blank" href="https://www.github.com/jallen98/"><FaGithubSquare className="text-3xl fill-zinc-600 hover:fill-hover" style={{ color: "gray" }}/></a>
            </div>

            <FormattedLink isInternal={false} text="View Resume" link="/resume.pdf"/>
        </div>
    );
}
