import './ColorCard.css'

function ColorCard(props){
    return(
        <div className='color-card' >
            <div className='show-color' style={{
                backgroundColor : props.hexCode
            }}></div>
            <div className='color-details'>
                <p className='hex-code' onClick={(e)=>{
                        props.onClick(e);
                    }}>{props.hexCode}
                </p>
                <p className='color-name' style={
                    {
                        color : props.hexCode
                    }
                    }>{props.colorName}
                </p>
            </div>
        </div>
    )
}

export default ColorCard;