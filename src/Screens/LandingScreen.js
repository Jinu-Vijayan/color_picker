import './LandingScreen.css'
import ColorCard from '../Components/ColorCard';

function LandingScreen(){

    function clickHandler(e){
        navigator.clipboard.writeText(e.target.textContent)
    }

    const colorDetails = [
        {
            hexCode : "#000000",
            colorName : "BLACK"
        },
        {
            hexCode : "#FF6663",
            colorName : "PINK"
        },
        {
            hexCode : "#333333",
            colorName : "GRAY"
        },
        {
            hexCode : "#38BB14",
            colorName : "GREEN"
        },
        {
            hexCode : "#C90B0B",
            colorName : "RED"
        },
        {
            hexCode : "#FF8000",
            colorName : "ORANGE"
        },
        {
            hexCode : "#FFF500",
            colorName : "YELLOW"
        },
        {
            hexCode : "#CCCCCC",
            colorName : "LIGHT GRAY"
        },
        {
            hexCode : "#7E41A2",
            colorName : "PURPLE"
        },
        {
            hexCode : "#C14911",
            colorName : "BROWN"
        },
    ]

    return(
        <div id='container'>
            <h1>Color Picker</h1>
            <div id='color-card-container'>
                {
                    colorDetails.map((elem,index) => {
                        return(
                            <ColorCard key = {index} hexCode = {elem.hexCode} colorName = {elem.colorName} onClick = {(e)=>{
                                clickHandler(e);
                            }}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LandingScreen;