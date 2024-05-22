import { ProjectCard, ProjectCardData } from "../ui/project-card";

export default function Projects() {
    const projects: ProjectCardData[] = [
        {
            title: "Next.js Invoicing",
            blurb: "Add, edit, and delete invoices from a PostgreSQL database. Mark invoices as paid or unpaid. Created with the Next.js tutorial.",
            imageProps: { src: "/invoice-demo.jpg", alt: "Invoice App Screenshot" },
            sourceUrl: "https://github.com/jallen98/nextjs-tutorial",
            appUrl: "https://james-allen-nextjs.vercel.app"
        },
        {
            title: "Lovely Engine",
            blurb: "A passion project that makes coding with OpenGL easy. It's gone through dozens of iterations. This is the most recent, started between jobs in 2023.",
            imageProps: { src: "/lovelyengine.png", alt: "Lovely Engine Screenshot" },
            sourceUrl: "https://github.com/jallen98/LovelyEngine"
        }
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between w-full">
            { projects.map((data) => <div className="mb-10" key={data.title}><ProjectCard data={data} /></div>) }
        </div>
    );
}
