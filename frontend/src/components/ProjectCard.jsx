
function ProjectCard ({project}) {

    return (
        <div className="relative h-96 overflow-hidden rounded-3xl">
            <img 
                src={project.image}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white/85 p-6 text-left backdrop-blur-md">
                <h4 className="text-2xl font-bold text-black">
                    {project.name}
                </h4>

                <p className="mt-2 text-black/70">
                    {project.desc}
                </p>

                <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block font-bold text-cyan-700 underline decoration-2 underline-offset-4 transition hover:text-cyan-500"
                >
                    Check it Out
                </a>
            </div>
        </div>
    )
}

export default ProjectCard;