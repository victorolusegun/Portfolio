import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import TheLinks from './TheLinks'

function Navbar() {
    return (
        <div>
            <nav>
            <h1> 
                Victor Olusegun.
            </h1>

            <TheLinks />

            <div>
                <FaWhatsapp />
                <FaGithub />
                <FaLinkedin />
                <FaTwitter />
            </div>
            </nav>
        </div>
    )
}

export default Navbar;