import React from 'react';
import './App.css'
class Occupancy extends React.Component{ 
    constructor(props){
        super(props)
        this.state={ Adult:1, Child:0}
    }
    handleChangeAd(e){
       this.setState({Adult:e.target.value})
    }
    handleChangeCh(e){
       this.setState({Child:e.target.value})
    }
    render(){
    return (
    <div>
        <ul>
            <li>
                <label >Adults<br/>(18+)</label><br/>
                <select disabled={this.props.selectedValue} onChange={(e)=>this.handleChangeAd(e)}>
                <option value="1">1</option>
                <option value="2">2</option>
                </select>
            </li>
            <li>
                <label >Childern<br/>(0-17)</label><br/>
                <select disabled ={this.props.selectedValue} onChange={(e)=>this.handleChangeCh(e)} >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                </select>  
            </li>
        </ul>
    </div>
    );
    }
}
export default Occupancy;