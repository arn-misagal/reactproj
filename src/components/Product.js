import React from 'react';
import Productbox from './Productbox';
import pimage1 from '../images/p1.png';
import pimage2 from '../images/p2.png';
import pimage3 from '../images/p3.png';


function Product() {
    return (
        <div id='products'>
            <h1>CHOOSE YOUR DEV.</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                looked up one of the more obscure Latin words, consectetur</p>
                <div className='a-container'>
                    <Productbox image={pimage1} title="Full-Stack Developer" />
                    <Productbox image={pimage2} title="Front-End Developer" />
                    <Productbox image={pimage3} title="Back-End Developer" />  
                </div>;
        </div>
    )
}

export default Product
