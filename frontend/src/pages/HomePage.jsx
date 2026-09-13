import presentImage from '../assets/sunset.jpg'
import SocialPanel from '../components/SocialPanel'

function HomePage() {
    // Languages I've Used
    const languages = [
        {name: 'HTML', libraries: []},
        {name: 'CSS', libraries: ['Bootstrap', 'TailwindCSS']},
        {name: 'JavaScript', libraries: ['React']},
        {name: 'Python', libraries: ['Django', 'FastAPI', 'Streamlit']},
    ]

    return (
        <div>
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
            </div>
            <section id='contact' className='flex flex-col items-center justify-center py-24'>
                <h3 className='mb-10 text-4xl font-bold leading-tight text-black md:text-6xl'>
                    Contact
                </h3>
                <SocialPanel />
            </section>
        </div>
    )
}

export default HomePage;