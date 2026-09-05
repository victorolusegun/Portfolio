import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
function Navbar() {
    return (
        <div>
            <nav>
            <h1>
                Victor Olusegun.
            </h1>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">Projects</a></li>
                <li><a href="#contact">Contact Me</a></li>
            </ul>

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

export default Navbar