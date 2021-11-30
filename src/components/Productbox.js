import React from 'react';

function Productbox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=""/>
            </div>

            <div claassName='a-b-text'>
                <h2>{props.title}</h2>
                <button className='productbox-button'>Hire now</button>
            </div>
        </div>
    )
}

export default Productbox
