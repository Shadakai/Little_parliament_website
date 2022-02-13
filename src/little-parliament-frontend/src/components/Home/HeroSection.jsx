import { Link } from "react-router-dom"

export default function HeroSection(props) {
    return (
        <div className="section">
            <div className="column">
                <h1 className="title">Welcome to Little Parliament</h1>
                <p className="info">Little Parliament is a quant little cafe situated in the heart of Rainbow Beach. We take pride in our great coffee, delicious food and friendly staff, and guarantee and amazing experience.</p>
                <div className="right-align">
                    <Link to='/about' className="btn">Find out more</Link>
                </div>
            </div>
            <div className="column">
                <div className="welcome-image"></div>
            </div>
        </div>
    )
}