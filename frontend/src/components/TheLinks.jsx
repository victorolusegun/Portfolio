function TheLinks() {
    const links = [
        { name: 'Home', url: 'home' },
        { name: 'Projects', url: 'projects' },
        { name: 'Contact Me', url: 'contact' }
    ]

    return (
        <div>
            <ul>
                {links.map((link) => (
                    <li><a href = {`#${link.url}`}>{link.name}</a></li>
                ))}
            </ul>
        </div>
    )
};

export default TheLinks;