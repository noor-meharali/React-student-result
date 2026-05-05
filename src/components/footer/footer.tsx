import './footer.css'
function Footer() {
  return (
    <div className="footer-container">
        <footer className="footer">
            <nav className="footer-nav">
                <ul className="footer-list">
                    <li className="footer-item"><a href="/" className="footer-link">Home</a></li>
                    <li className="footer-item"><a href="/about" className="footer-link">About</a></li>
                    <li className="footer-item"><a href="/services" className="footer-link">Services</a></li>
                    <li className="footer-item"><a href="/contact" className="footer-link">Contact</a></li>
                </ul>
            </nav>
            <p className="footer-copyright">&copy; 2026 My Company. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Footer
