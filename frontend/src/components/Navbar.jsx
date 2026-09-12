import { NavLink } from 'react-router-dom'
import {useState} from 'react'

function NavBar() {
    const [isActive, setActive] = useState('Home'); 

    const thelinks = [
        {name: 'Home', path: '/'},
        {name: 'Projects', path: 'projects'},
        {name: 'About Me', path: 'about'},
        {name: 'Contact', path: 'contact'},
    ]
    return (
        <nav className = 'sticky top-4 z-50 mx-6 flex items-center justify-between rounded-full bg-[#050B18] px-6 py-3 text-white shadow-lg'>
            <div className='text-xl font-bold'>
                <h1 className='bg-white px-4 py-2 text-black rounded-full'>Victor Olusegun.</h1>
            </div>

            {/* <div className='flex items-center gap-2'> */}
            <div>
                <ul className='flex items-center gap-8'>
                    {thelinks.map((link) => (
                        <li>
                            <a href={`#${link.path}`}
                                className = {`px-4 py-2 ${isActive === link.name
                                    ? 'rounded-full bg-white/10 backdrop-blur-md border border-white/10'
                                    : ''
                                }`}
                                onClick = {() => setActive(link.name)}
                            >
                                {link.name}
                            </a>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;