import { Link } from "react-router-dom"

export default function OurStoreSection() {
    // Section on index that talks about OurStore the products shop of LP
    return (
        <div className="section reverse">
            <div className="column">
                <div className="our-store-image"></div>
            </div>
            <div className="column">
                <h1 className="title">Want to take a little part of us home?</h1>
                <p className="info">Theres nothing worse then falling in-love with a place and have nothing to take home to show for it. Lucky for you Little Parliament also has a nice little gift shop that will wishing that you could buy it all. From amazing beach accessories, books and games to keep you entertained and toys for the little ones. Theres something for everyone.</p>
                <div className="right-align">
                    <Link to="/products" className="btn">Check out Our Store</Link>
                </div>
            </div>
        </div>
    )
}