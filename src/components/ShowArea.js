import React,{Component} from 'react';
import './ShowArea.css';
// import ListItems from './ListItems';



class showArea extends Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            expense:'',
            amount:'',
            date:'',
            key:''
        };
    }
    handleDelete = (itemDeleted) =>{
        console.log(itemDeleted);
    }
    handleChange = (event)=>{
        this.setState({
            [event.target.name]:event.target.value,
            // [event.target.name]:event.target.value,
            // [event.target.name]:event.target.value
        });
       
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        const expense = this.state.expense;
        const amount = this.state.amount;
        const date= this.state.date;
        const newItems=this.state.items.concat(expense,amount,date);
        this.setState({
            // expense: this.state.expense,
            // amount: this.state.amount,
            // date:this.state.date
            expense:'',
            amount:'',
            date:'',
            key:'',
            items:newItems

        });
        console.log(this.state);
       

        // console.log(this.state.expense);
        // console.log(this.state.amount);
        // console.log(this.state.date);
    }
   
        render(){
        return(
            <div className="textarea">
                <h4>A place where you can keep your expenses</h4>
                <h3>ADD EXPENSE</h3>



                <form onSubmit={this.handleSubmit.bind(this)}>

                
                    <input className="add" 
                        type="text" 
                        placeholder="Enter Expense"
                        name="expense"
                        onChange={this.handleChange}
                        value={this.state.expense}
                        />   
                    <br/>

                  

                    <input className="add"
                    type="text"
                    placeholder="Enter Amount"
                    name="amount" 
                    onChange={this.handleChange}
                    value={this.state.amount}
                    />
                    <br/>


                    <input className="add" 
                    type="date"
                    name="date"
                    placeholder="Enter Date"
                    onChange={this.handleChange}
                    value={this.state.date}
                    />
                <button className="button1" type="submit" >ADD</button>

               
                </form>
                    
                    {this.state.items.map((item,i)=>{
                          return <h3>{item}</h3>
                    })}

                    
            </div>
        );
    }
}


export default showArea;