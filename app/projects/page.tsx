import { ProjectCard, ProjectCardData } from "../ui/project-card";

export default function Projects() {
    const projects: ProjectCardData[] = [
        {
            title: "Three.js Model Exploder",
            blurb: "View a model with orbit controls, drag the slider to explode the model into its parts. More features coming!",
            imageProps: { src: "/exploder-demo.png", alt: "Exploder App Screenshot", priority: true },
            tags: ['TypeScript', 'React', 'Three.js', 'React Three Fiber', 'GLTF'],
            sourceUrl: "https://github.com/jallen98/model-exploder",
            appUrl: "https://model-exploder.vercel.app/"
        },
        {
            title: "Next.js Invoicing",
            blurb: "Add, edit, and delete invoices from a PostgreSQL database. Mark invoices as paid or unpaid. Created with the Next.js tutorial.",
            imageProps: { src: "/invoice-demo.jpg", alt: "Invoice App Screenshot", priority: true },
            tags: ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Tailwind'],
            sourceUrl: "https://github.com/jallen98/nextjs-tutorial",
            appUrl: "https://james-allen-nextjs.vercel.app"
        },
        {
            title: "Lovely Engine",
            blurb: "A passion project that makes coding with OpenGL easy. It's gone through dozens of iterations. This is the most recent, started between jobs in 2023.",
            imageProps: { src: "/lovelyengine.png", alt: "Lovely Engine Screenshot", priority: true },
            tags: ['C++', 'OpenGL', 'GLSL', 'gtest', 'CMake'],
            sourceUrl: "https://github.com/jallen98/LovelyEngine"
        },
    ];

    return (
        <div className="grid md:grid-cols-2">
            { projects.map((data) => <div className="mb-10 flex justify-center" key={data.title}><ProjectCard data={data} /></div>) }
        </div>
    );
}
