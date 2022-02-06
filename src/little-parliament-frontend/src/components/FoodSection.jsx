export default function FoodSection(props) {
    return (
        <div className="section">
            <div className="column">
                <h1 className="title">Good Coffee and Good Food</h1>
                <p className="info">Not only do we have delicious coffee, we also have amazing breakfast and superb lunch, with a wide range that will satisfy anyones palette. From our bacon and eggs, to our fish tacos, there will surely be something you fall in love with.</p>
                <div className="right-align">
                    <button className="btn">Check out our Menu</button>
                </div>
            </div>
            <div className="column">
                <div className="food-image"></div>
            </div>
        </div>
    )
}