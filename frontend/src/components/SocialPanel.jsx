import { useState } from 'react'
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function SocialPanel () {
    const [isInView, setInView] = useState(0);

    const socialInfo = [
        {url: "https://wa.me/", label: 'WhatsApp'},
        {url: "https://github.com/victorolusegun", label: 'GitHub'},
        {url: "https://www.linkedin.com/in/victor-olusegun-66905a344/", label: 'LinkedIn'},
        {url: "https://x.com/victorolusegun_", label: 'Twitter'},
    ]
    
    const upChange = () => {
        if (isInView < 3) {
            setInView(isInView+1)
        }
    }

    const downChange = () => {
        if (isInView > 0) {
            setInView(isInView-1)
        }
    }

    let social;
    switch (isInView) {
        case 0:
            social = <FaWhatsapp />;
            break;
        case 1:
            social = <FaGithub />;
            break;
        case 2:
            social = <FaLinkedin />;
            break;
        case 3:
            social = <FaTwitter />;
            break;
    }

    return(
        <div className = 'flex flex-col items-center'>
            <div className='flex items-center justify-center gap-6'>
                <button
                    onClick={() => downChange()}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white/20 hover:border-white/40"
                >
                    ←
                </button>

                <a 
                    href={socialInfo[isInView].url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={socialInfo[isInView].label}
                    className="flex h-44 w-52 items-center justify-center rounded-3xl border border-black/10 bg-white text-black shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:backdrop-blur-md"
                >
                    <div className='text-5xl'>
                        {social}
                    </div>
                </a>

                <button
                    onClick={() => upChange()}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-white transition hover:bg-white/20 hover:border-white/40"
                >
                    →
                </button>
            </div>
            <p className="mt-4 text-sm font-medium text-white/60">
                {socialInfo[isInView].label}
            </p>
        </div>
    )
}

export default SocialPanel;