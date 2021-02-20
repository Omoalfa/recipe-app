import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
            <h3>Hire Me!</h3>
            <ul>
            <li className="footer-list"><a href="https://twitter.com/omoalfa_dev?s=09"><i className="fab fa-twitter"></i></a></li>
            <li className="footer-list"><a href="https://wa.link/1n0pns"><i className="fab fa-whatsapp"></i></a></li>
            </ul>
            <li className="footer-list"><a href="mailto: engr.omoalfa@gmail.com"><i className="fab fa-google-plus"></i></a></li>
            </div>
            <div className="inspiration">
                <p>Inspiration from <a>Dev Ed</a> youtube channel and API from <a href="https://www.edamam.com/">EDAMAM</a></p>
            </div>
        </footer>
    )
}

export default Footer