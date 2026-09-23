import "../index.css"

function Navbar(){
    return(
            <div className="nav">
                <div>
                    <h1>Perfumy</h1>
                </div>
                <div>
                    <ul  className="nav__list">
                        <li><a href="#">Home</a></li>
                        <li><span>|</span></li>
                        <li><a href="#products">Products</a></li>
                        <li><span>|</span></li>
                        <li><a href="#about">About</a></li>
                        <li><span>|</span></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
    )
}

export default Navbar