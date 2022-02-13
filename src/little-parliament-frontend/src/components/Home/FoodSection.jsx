import { Link } from "react-router-dom"

export default function FoodSection(props) {
    // Section on index that talks about food
    return (
        <div className="section">
            <div className="column">
                <h1 className="title">Good coffee and good food</h1>
                <p className="info">Not only do we have delicious coffee, we also have amazing breakfast and superb lunch, with a wide range that will satisfy anyones palette. From our bacon and eggs, to our fish tacos, there will surely be something you fall in love with.</p>
                <div className="right-align">
                    <Link to="/menu" className="btn">Check out our Menu</Link>
                </div>
            </div>
            <div className="column">
                <div className="food-image"></div>
            </div>
        </div>
    )
}