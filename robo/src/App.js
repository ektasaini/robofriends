import React ,{Component} from 'react';
import Cardlist from './Cardlist';
import {names} from './names'; 
import Searchbox from './Searchbox'; 
import './App.css';


class App extends Component{
	constructor(){
		super();
		this.state={
			names:names,
	         searchfield:''
		}
	}
	onsearchchange=(event)=>{
   this.setState({searchfield:event.target.value})
	}
	render(){
		const filterrobots=this.state.names.filter(names=>{
			return names.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		return (<div  className='tc'>
		<h1>ROBOFRIENDS</h1>
		<Searchbox searchchange={this.onsearchchange}/>
      <Cardlist names={filterrobots}/>
      </div>);
	}
}


export default App;