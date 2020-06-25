import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import ShowArea from './components/ShowArea';
// import Items from './components/Items';
// import ListItems from './components/ListItems';

 class App extends Component{
  // const [state, setState] = useState({
  //   expense:"",
  //   amount:"",
  //   date:""
  // });


  // const [Items, setItems] = useState([]);

  // const itemEvent = (event)=>{
  //   const value=event.target.value;
  //   setState({
  //     ...state,
  //     [event.target.name]:value
  //   });
  // };


  // const listOfItems =() =>{
  //     setItems((oldItems)=>{
  //       return [...oldItems, state]
  //     });
  //     console.log(setItems)
  // };

  render(){
    return (
      <div className="App">
       <Header/>
       <ShowArea/>
        {/* <div className="texttarea">
          <h4>A place where you can keep your expenses</h4>
          <h3>ADD EXPENSE</h3>
          <input className="add" 
                        type="text" 
                        placeholder="Enter Expense"
                        name="expense"
                        onChange={itemEvent}
                        value={state.expense}
                        />   
                    <br/>

                  

                    <input className="add"
                    type="text"
                    placeholder="Enter Amount"
                    name="amount" 
                    onChange={itemEvent}
                    value={state.amount}
                    />
                    <br/>


                    <input className="add" 
                    type="date"
                    placeholder="Enter Date"
                    name="date"
                    onChange={itemEvent}
                    value={state.date}
                    />
                    <button className="button1" type="submit" onClick={listOfItems}>ADD</button>
                    <button className="button1" type="submit">DELETE</button>
                    <ol>
                      {Items.map((itemval)=>{
                        return <li>{itemval}</li>;
                      })}
                    </ol>
                 
        </div> */}
      </div>
    );
  }
}

 

export default App;
