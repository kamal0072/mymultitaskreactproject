import React, { Component } from 'react'
import Plan from '../Plan'
export default class Home extends Component {
    date = new Date();
    formattedDate = new Intl.DateTimeFormat('en-US').format(this.date);  // Displays as month/day/year;
    state ={
        items : [],
        text : '',
        dt : this.formattedDate,
        error : "",
        message : "",
        status : false,
        type : "",
    };
    handleChange=e=>{
        this.setState({text : e.target.value})
    };
    
    handleAdd = (e)=>{
        if (this.state.text !== ""){
            const items = [...this.state.items, this.state.text];
            this.setState({items : items,text : "", status : true, error : "", message : "Your Item addedd successfully...", type :'success'})
        }; 
        if (this.state.text === ""){
            this.setState({error : 'Please enter Some items', message : "add", status : false})
        }
    };
    handleDelete = (id) => {
        console.log('deleted', id);
        const oldItems = [...this.state.items]
        console.log("Old Items : ", oldItems)
        const items = oldItems.filter((element, i)=>{
            return i!==id
        });
        this.setState({items : items})
    };
  render() {
    return (
        <div className="container-fluid my-0">
            <div className="row">
                <div className="col-sm-6-mx-auto">
                    <h3 className='text text-center'>My Today's Plan</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-2">
                    {this.state.status ? <p className={`text text-${this.state.type}`}>{this.state.message}</p>:'' }
                    <input type="text" className='form-control' name='' id='' placeholder='write your stuffs' value={this.state.text} onChange = {this.handleChange} />
                </div>
                <div className="col-2">
                    <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd} >Add</button>
                </div>
            </div>
            <div className="row">
                <div className="col-6 offset-3">
                    <ul>
                       {this.state.items.map((value, id)=>{
                            return <Plan items = {value} id = {id} dt = {this.state.dt} sendData = {this.handleDelete} />
                       })}
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}
