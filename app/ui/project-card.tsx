import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import { FaGithub, FaRegWindowRestore } from "react-icons/fa";
import { LuAppWindow } from "react-icons/lu";
import { RxOpenInNewWindow } from "react-icons/rx";
import ProjectTag from "./project-tag";

export interface ProjectCardData {
    title: string;
    blurb: string;
    imageProps: { src: string, alt: string, priority: boolean };
    tags: string[];
    sourceUrl?: string;
    appUrl?: string;
};

export function ProjectCard({ data }: { data: ProjectCardData }) {
    const { title, blurb, imageProps, tags, sourceUrl, appUrl } = data;

    return (
        <div className="w-72 h-project-card md:w-thumbnail hover:bg-hover-card rounded-xl border-tertiary border-x-2 rounded-b-xl">
            <Image className="rounded-t-xl h-2/5 object-fit" priority={imageProps.priority} src={imageProps.src} alt={imageProps.alt} width={500} height={200}/>
            <div className="h-3/5 flex flex-col justify-between pl-2 pr-2 pb-5 ">
                <p className="text-xl mb-2">{title}</p>
                <p className="text-sm text-typography-secondary mb-5">{blurb}</p>

                <div className="flex flex-wrap mb-5">
                    { tags.map((tag) => <ProjectTag text={tag} key={tag}/>) }
                </div>

                <div className="flex justify-between">
                    { sourceUrl ?
                        <Tooltip className="bg-tooltip p-1 rounded" content="Source Code">
                            <a href={sourceUrl} target="_blank"><FaGithub className="text-2xl fill-zinc-600 hover:fill-zinc-400"/></a>
                        </Tooltip>: null }

                    { appUrl ?
                        <Tooltip className="bg-tooltip p-1 rounded" content="Open Application">
                            <a href={appUrl} target="_blank"><FaRegWindowRestore className="text-2xl color-black fill-zinc-600 hover:fill-zinc-400"/></a>
                        </Tooltip> : null }
                </div>
            </div>
        </div>
    );
}
