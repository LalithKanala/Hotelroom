import React from 'react';
import Occupancy from './occupancy';
import './App.css'

class Roomcomp extends React.Component{
    constructor() {
        super()
        this.numberOfRooms = 4;
        this.state ={ isChecked:{0:true}};
    }
    componentDidMount(){
        let a=Object.assign({},this.state.isChecked);
        for(let i=1; i<this.numberOfRooms;i++){
            a[i]=false;
        }
        this.setState({isChecked:a})
    }
    renderRoom(){
       return  Object.keys(this.state.isChecked).map((key,i)=>{
           if(i=== 0){
               return   <li className="rooms firstbox" key={i+1}>
               <p>Room {i+1}</p>
               <Occupancy selectedValue={!this.state.isChecked[i]}/>
              </li>
            }
            else{
            return (
                <li className="rooms" key={i+1}>
                <input value={i+1} type="checkbox" checked = {this.state.isChecked[i]}   onChange={(e)=>this.handleChange(e)}/>
                <p>Room {i+1}</p>
                <Occupancy selectedValue={!this.state.isChecked[i]}/>
            </li>
            )}
        })
    }
    handleChange(e){
        let box=(e.target.value)-1;
        if(this.state.isChecked[box] === false ||!this.state.isChecked[box] ){
           var a=Object.assign({},this.state.isChecked);
           for(let i=0;i<=box;i++){
                a[i]=true;
           }
           this.setState({isChecked: a})
       }
       if(this.state.isChecked[box]=== true){
           var b= Object.assign({},this.state.isChecked);
           for(let j=box;j<=this.numberOfRooms-1;j++){
               b[j]=false;
           }
           this.setState({isChecked:b})
       }

    }
    handleSubmit(e){
        e.preventDefault();
        let c=this.state.isChecked
        alert(`Room 1 is occupied: ${c[0]}, Room 2 is occupied: ${c[1]}, Room 3 is occupied: ${c[2]}, Room 4 is occupied: ${c[3]}`)
       
    }

    render(){
        return(
        <form  onSubmit={(e)=>this.handleSubmit(e)}>
            <ul>
            {this.renderRoom()}
            </ul>
            <div>
            <input className="btn" type="submit" value="submit"></input>
            </div>   
        </form> 
        );

    }
}
export default Roomcomp;