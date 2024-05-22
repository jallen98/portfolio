import ProjectCard from "../ui/project-card";

export default function Projects() {
    return (
        <div className="flex justify-evenly">
            <ProjectCard
                title="Next.js Invoicing"
                imageProps={ { src: "/invoice-demo.jpg", alt: "Invoice App Screenshot" } }
                sourceUrl="https://github.com/jallen98/nextjs-tutorial"
                appUrl="https://james-allen-nextjs.vercel.app/dashboard"
            />

            <ProjectCard
                title="Lovely Engine"
                imageProps={ { src: "/lovelyengine.png", alt: "Lovely Engine Screenshot" } }
                sourceUrl="https://github.com/jallen98/LovelyEngine"
            />
        </div>
    );
}
