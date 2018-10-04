import React from 'react';

const Card = (props)=>{
	return (
          <div className='bg-light-green ma2 br3 grow dib bw2 shadow-5 tc'>

 				<img src={`https://robohash.org/${props.id}?150x150`} alt='robot'/>
 				<div>
 				<h2>{props.name}</h2>
 				</div>

          </div>
		);
}

export default Card ;