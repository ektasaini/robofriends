import React from 'react';
import Card from './Card';

const Cardlist = ({names})=>{
	return (
			<div>
			{
				names.map((user,i)=>{
					return (
							<Card key ={i} id={names[i].id} name={names[i].name}/>
						);
				} )
			}
			</div>
		);
}

export default Cardlist;