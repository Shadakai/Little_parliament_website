export default function MenuSelector() {

    return (
        //  Widget that shows quick nav options and lets you jump to them when you clickem
        <>
        <div className="menu-selector"> 
            <a className="drink selector" href="#drink">DRINKS</a>
            <a className="cabinet selector" href="#cabinet">CABINET</a>
            <a className="breakfast selector" href="#breakfast">BREAKFAST</a>
            <a className="lunch selector" href="#lunch">LUNCH</a>
        </div>
        </>
    )
}