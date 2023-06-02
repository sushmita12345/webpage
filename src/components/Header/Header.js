import './Header.css'

const Header = () => {
    return (
        <header className="header-wrapper display">
           <div className="header-container">
           <div className="header-logo display">
                <h2 className="header-logo-name">Gafarillo</h2>
                <span className="header-circle"></span>
            </div>
            <div className="header-list-wrap display">
                <ul className="header-list-cont display">
                    <li className="">Home</li>
                    <li className="hedaer-list-name">Instagram</li>
                    <li className="hedaer-list-name">Youtube</li>
                    <li className="hedaer-list-name">Services</li>
                </ul>
                <button className="header-list-btn">Download CV</button>
            </div>
           </div>
        </header>
    )
}

export default Header