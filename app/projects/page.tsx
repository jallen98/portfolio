import { ProjectCard, ProjectCardData } from "../ui/project-card";

export default function Projects() {
    const projects: ProjectCardData[] = [
        {
            title: "Next.js Invoicing",
            imageProps: { src: "/invoice-demo.jpg", alt: "Invoice App Screenshot" },
            sourceUrl: "https://github.com/jallen98/nextjs-tutorial",
            appUrl: "https://james-allen-nextjs.vercel.app/dashboard"
        },
        {
            title: "Lovely Engine",
            imageProps: { src: "/lovelyengine.png", alt: "Lovely Engine Screenshot" },
            sourceUrl: "https://github.com/jallen98/LovelyEngine"
        }
    ];

    return (
        <div className="flex">
            { projects.map((data) => <div className="mr-10"><ProjectCard data={data} /></div>) }
        </div>
    );
}
