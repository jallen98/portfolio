import Image from "next/image";

export default function Career() {
    const nextdroid =       "I began my career at NextDroid, a small startup developing verification and validation software for\
                            autonomous vehicles. NextDroid required knowledge in all parts of the stack. I started as an intern designing\
                            a new highly-relational PostgreSQL database, and pivoted to the data-heavy JavaScript and React application\
                            upon joining full time. Most of this time was spent improving the 3D data visualizer written in Three.js.\
                            I'm very proud of my work there, adding numerous tools and new visualizations, with a strong focus on performance.\
                            I even had to opportunity to hire and supervise interns to help with the tool. NextDroid required its employees to\
                            become an expert in many areas, and while I spent most of my time on the front end, I also wrote drivers for NextDroid's\
                            data recording hardware, debugged the hardware's networking, and maintained much of the AWS infrastructure."

    const apple =           "After NextDroid, I acquired an exciting year long contract with Apple through a company called TekSystems. I became part of a team\
                            working on an internal 3D data visualizer for AI and Machine Learning output. Unfortunately, I can't speak much to the project\
                            due to NDAs. I can say that this position allowed me to focus soley on my favorite parts of NextDroid: frontend and 3D Graphics.\
                            The application was written in TypeScript and Angular, using Three.js for the 3D. My impact on the team was felt immediately. I\
                            was in charge of designing and implementing many large features, ranging from interactive tables with thousands of rows to big\
                            performance boosts in the 3D pipeline. My manager and I were working towards a full time position. Unfortunately, the project\
                            was cancelled before my contract was up. I was deemed a 'high performing contractor' and my manager fought hard to keep me around,\
                            but no contractors were allowed to stay."
    return (
        <div className="flex flex-col items-center">
            <p className="mb-5">{ nextdroid }</p>
            <Image className="mb-5" src="/nextdroid_app.jpg" alt="NextDroid Software" width="500" height="200"/>
            <p className="mb-5">{ apple }</p>
            <Image className="mb-5" src="/nd_pointcloud.png" alt="NextDroid Software" width="500" height="200"/>
        </div>
    );
}
