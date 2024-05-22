import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import { FaGithub, FaRegWindowRestore } from "react-icons/fa";
import { LuAppWindow } from "react-icons/lu";
import { RxOpenInNewWindow } from "react-icons/rx";

export interface ProjectCardData {
    title: string;
    blurb: string;
    imageProps?: { src: string, alt: string };
    sourceUrl?: string;
    appUrl?: string;
};

export function ProjectCard({ data }: { data: ProjectCardData }) {
    const { title, blurb, imageProps, sourceUrl, appUrl } = data;

    return (
        <div className="w-96 h-96 hover:bg-tertiary rounded-xl">
            { imageProps ? <Image className="rounded-t-xl h-2/5" objectFit="cover" src={imageProps.src} alt={imageProps.alt} width={400} height={200}/> : null }
            <div className="h-3/5 flex flex-col justify-between p-5">
                <div>
                    <p className="text-xl mb-5">{title}</p>
                    <p className="text-sm text-typography-secondary">{blurb}</p>
                </div>
                <div className="flex mt-10 justify-between">
                    { sourceUrl ?
                        <Tooltip className="bg-zinc-900 p-2" content="Source Code">
                            <a href={sourceUrl} target="_blank"><FaGithub className="text-2xl fill-zinc-600 hover:fill-zinc-400"/></a>
                        </Tooltip>: null }

                    { appUrl ?
                        <Tooltip className="bg-zinc-900 p-2" content="Open Application">
                            <a href={appUrl} target="_blank"><FaRegWindowRestore className="text-2xl color-black fill-zinc-600 hover:fill-zinc-400"/></a>
                        </Tooltip> : null }
                </div>
            </div>
        </div>
    );
}
