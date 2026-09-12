import presentImage from '../assets/sunset.jpg'
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
function HomePage() {
    // Languages I've Used
    const languages = [
        {name: 'HTML', libraries: []},
        {name: 'CSS', libraries: ['Bootstrap', 'TailwindCSS']},
        {name: 'JavaScript', libraries: ['React']},
        {name: 'Python', libraries: ['Django', 'FastAPI', 'Streamlit']},
    ]

    return (
        <div className='mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-24 md:grid-cols-[3fr_2fr]'>
            <section id='about'className='max-w-3xl'>
                <h3 className='mb-8 text-4xl font-bold leading-tight md:text-6xl'>
                    About Me
                </h3>
                <p className="leading-8 text-black/60 md:text-lg">
                    My name is <strong>Victor Olusegun</strong>, and I am a software developer passionate about building systems that solve real-world problems. 
                    I have experience developing web applications and working with data analysis, and I am continually expanding my skills across software engineering and emerging technologies.
                    My primary interest is in <strong>Artificial Intelligence (AI) and Machine Learning</strong>, particularly in building intelligent systems that can be applied to practical, real-world problems. 
                    I am interested in exploring how software, data, and AI can work together to create useful products and solve complex challenges.
                    I am the lead developer and co-founder of <a href="https://www.vasecrib.com.ng/" target="_blank" rel="noopener noreferrer">VaseCrib</a>, where I have gained experience taking software from an idea to a working product.
                    I am always looking to improve as a developer, learn new technologies, and collaborate with people who are building interesting things.
                </p>
            </section>
            <aside className = 'flex justify-center md:justify-end'>
                <div className="relative flex aspect-square w-full max-w-md items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <img 
                        src={presentImage}
                        alt="Victor Olusegun" 
                        className="h-full w-full rounded-2xl object-cover" 
                    />
                </div>
            </aside>

            <section id='contact' className='flex items-center gap-3'>
                <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/5 text-xl transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white"
                >
                    <FaWhatsapp />
                </a>

                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/5 text-xl transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/5 text-xl transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/5 text-xl transition-all duration-200 hover:-translate-y-1 hover:bg-black hover:text-white"
                >
                    <FaTwitter />
                </a>
            </section>
        </div>
    )
}

export default HomePage;