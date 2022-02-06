export default function HeroSection(props) {
    return (
        <div className="section container mx-auto columns-2 px-4">
            <div className="column">
                <h1 className="title">Welcome to Little Parliament</h1>
                <p className="info">Little Parliament is a quant little cafe situated in the heart of Rainbow Beach. We take pride in our great coffee, delicious food and friendly staff, and guarantee and amazing experience.</p>
                <div className="right-align">
                    <button className="btn">Find out more</button>
                </div>
            </div>
            <div className="column">
                <div className="welcome-image"></div>
            </div>
        </div>
    )
}