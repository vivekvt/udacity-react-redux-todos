import React from 'react';
import {connect} from 'react-redux';
import {handleAddGoal, handleRemoveGoal, handleToggleGoal} from '../actions/goals';
import List from './List';

class Goals extends React.Component{
    addItem = (e) =>{
       e.preventDefault();
       this.props.dispatch(handleAddGoal(this.input.value, ()=>this.input.value=''));

   }
   removeItem = (goal)=>{
       this.props.dispatch(handleRemoveGoal(goal));
   }
   toggleItem = (id)=>{
       this.props.dispatch(handleToggleGoal(id));
   }
   render(){
   return(<div><h1>Goals </h1>
       <input type='text' placeholder='Add Goal' ref={(input)=> this.input=input} />
       <button onClick={this.addItem}>Add Goal</button>
       <List items={this.props.goals} removeItem={this.removeItem} toggleItem={this.toggleItem}/>
       </div>)
   }
}

export default connect((state)=>({goals:state.goals}))(Goals);