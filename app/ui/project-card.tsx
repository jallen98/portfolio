import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbSourceCode } from "react-icons/tb";

export default function ProjectCard({ title, imageProps, sourceUrl, appUrl }: { title: string, imageProps: { src: string, alt: string }, sourceUrl?: string, appUrl?: string }) {
    return (
        <div className="w-fit">
            <div className="text-center">
                <p className="text-xl">{title}</p>
                <Image src={imageProps.src} alt={imageProps.alt} width="200" height="500"/>
                <div className="flex justify-between">
                    { sourceUrl ?
                        <Tooltip className="bg-gray-900 p-2" content="Source Code">
                            <a href={sourceUrl} target="_blank"><TbSourceCode className="text-5xl"/></a>
                        </Tooltip>: null }

                    { appUrl ?
                        <Tooltip className="bg-gray-900 p-2" content="Open Application">
                            <a href={appUrl} target="_blank"><RxOpenInNewWindow className="text-5xl"/></a>
                        </Tooltip> : null }
                </div>
            </div>
        </div>
    );
}
