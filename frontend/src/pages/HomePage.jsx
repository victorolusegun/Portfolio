import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function HomePage() {
    // Navigation Links
    const theLinks = [
        {id: 1,url: 'home', text: 'Home'},
        {id: 2,url: 'projects', text: 'Projects'},
        {id: 3,url: 'contact', text: 'Contact Me'},
    ];
    
    // Languages I've Used
    const languages = ['HTML', 'CSS', 'Python', 'JavaScript', 'React'];

    return (
    <div>
        <Navbar />

        <div>
            <h3>My Skills</h3>
            <ul>
                {languages.map(language => <li>{language}</li>)}
            </ul>
        </div>
        <Footer />
    </div>
    )
}

export default HomePage;