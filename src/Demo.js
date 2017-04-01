import React, { Component } from 'react';

class Demo extends Component {
    constructor() {
        super();
         var getlist=JSON.parse(localStorage.getItem('namelist'));
        this.state = {
            arr:  getlist ==null ? [] : getlist ,
            inputText: ''
        }
    }
    getList(){
        return (
            this.state.arr.map((item, index) => {
                return <li key={index} >
                     {item} <button onClick={this.deleteItem.bind(this,index)}>Delete</button> 
                </li>
            })
        )
}
    inputChange(changeValue) {
        this.setState({
            inputText: '' ,
            inputText: changeValue.target.value
        });
    }
    deleteItem(index) {
        this.state.arr.splice(index, 1);
       this.setItemInLocal()

        this.setState({
            arr: this.state.arr
        })
    }

    setItemInLocal()
    {

        localStorage.setItem('namelist',JSON.stringify(this.state.arr));
    }

    addValue(event) {


        this.state.arr.push(this.state.inputText);

        this.setItemInLocal();
        

        //this.state.arr.push(newValue.value);

        this.setState({
            arr: this.state.arr,
            inputText: ''
        })

        console.log( this.state.arr);
        event.preventDefault();

       
    }


    deleteAll() {

      this.state.arr = [] ;

       this.setItemInLocal();
        this.setState({

            arr: this.state.arr
        })







    }



    render() {
        return (
            <div>

                <form onSubmit={this.addValue.bind(this)}>
                     <input type="text" value={this.state.inputText} onChange={this.inputChange.bind(this)} />
                <button onClick={this.addValue.bind(this)}>Add</button>
                  </form>  
               

                <ul>
                    {this.getList()}

                </ul>

                <button onClick={this.deleteAll.bind(this)}>Delete All</button>
            </div>
        );

    }
}

export default Demo;


/*
import React, {Component} from 'react';

class Demo extends Component{
render()
{
  return (
      <ul>
          <li>one</li>
          <li>one</li>
          <li>one</li>
  
       </ul>    
 );
}
}
export default Demo;
*/