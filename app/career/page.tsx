import Image from "next/image";

export default function Career() {
    const nextdroid = [
        "I began my career at NextDroid, a small startup developing verification and validation software for\
        autonomous vehicles. Life at NextDroid moved fast, with constant pivots to new work and projects depending on client\
        needs. It thus required knowledge of the full tech stack, with the ability to learn and adapt quickly.",

        "I began as an intern, with a focus on NextDroid's data-heavy SaaS application written in JavaScript and React and on NextDroid's\
        highly relational PostgreSQL database. This included features for the application, features for the embedded 3D data visualizer, and\
        a complete redesign of the database with a focus on scalability. NextDroid was small enough that my impact as an intern was nearly as great\
        as any full time developer's. NextDroid certaintly wasn't for the feint of heart.",

        "I soon came on full time, growing my responsibilities even more. Due to previous experience with OpenGL, I became the lead developer for the\
        3D data visualizer written in JavaScript with Three.js. I began by making numerous performance improvements by instancing meshes where possible,\
        merging draw calls where that wasn't possible, and overall being smarter with mesh management. I also added many features over the years, like meausurement\
        tools and annotation tools.",

        "As the company grew, I gained more responsibility in other areas. I continued my work on the React app and data visualizer, but I also became the lead\
        developer for the drivers of the next generation of NextDroid's data logging hardware. Written in C++, this involved reading packets, like Ethernet and CAN, and writing the\
        data to disk. I also worked with a coworker on designing a new onboard UI, written in JavaScript with Node.js and Bootstrap. I found myself travelling to clients as well,\
        demoing and troubleshooting to managers and engineers. Additionally, I began hiring and mentoring interns from Northeastern University each semester."
    ];

    const apple = [
        "After NextDroid, I acquired an exciting year long contract with Apple through a company called TekSystems. I became part of a team\
        working on an internal 3D data visualizer for AI and Machine Learning output. Unfortunately, I can't speak much to the project\
        due to NDAs. I can say that this position allowed me to focus soley on my favorite parts of NextDroid: frontend and 3D Graphics.\
        The application was written in TypeScript and Angular, using Three.js for the 3D. My impact on the team was felt immediately. I\
        was in charge of designing and implementing many large features, ranging from interactive tables with thousands of rows to big\
        performance boosts in the 3D pipeline.",

        "The Apple contract differed from NextDroid quite a bit. My role was more targeted and predictable. There was more time to focus\
        on design and getting things right. It felt like a natural progression in my career, from the crazy world of a successful startup\
        to an established company with hundreds of thousands of employees. One aspect I'm grateful was shared between both experiences was\
        the ability to have a large impact.",

        "My manager and I were working towards a full time position. Unfortunately, the project\
        was cancelled before my contract was up. I was deemed a 'high performing contractor' and my manager fought hard to keep me around,\
        but no contractors were allowed to stay."
    ];

    return (
        <div className="flex flex-col">
            <h1 className="mb-5 text-3xl">About My Career</h1>
            <Image className="w-auto h-auto mb-5" src="/nd_pointcloud.png" alt="Screenshot of NextDroid's Data Visualizer" width="400" height="200" priority={true}/>

            <h2 className="mb-2 text-2xl">Education</h2>

            <div className="flex justify-between mb-2">
                <p>Northeastern University</p>
                <p>2016 - 2020</p>
            </div>

            <div className="flex justify-between mb-5">
                <p>Bachelor of Science in Computer Engineering</p>
                <p>GPA 3.986</p>
            </div>

            <h2 className="mb-5 text-2xl">NextDroid (July 2019 - July 2023)</h2>
            { nextdroid.map((paragraph, i) => <p key={`nextdroid-p${i}`} className="mb-5">{ paragraph }</p>) }

            <h2 className="mb-2 text-2xl">Apple (August 2023 - March 2024)</h2>
            { apple.map((paragraph, i) => <p key={`apple-p${i}`} className="mb-5">{ paragraph }</p>) }
        </div>
    );
}
