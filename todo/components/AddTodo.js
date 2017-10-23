import React,{Component,PropTypes} from 'react'

export default class AddTodo extends Component{
    render(){
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={(e)=>this.hadleClick(e)}>
                Add
                </button>
            </div>
        )
    }
    hadleClick(e){
        const node=this.refs.input
        const text=node.nodeValue.trim()
        this.props.onAddClick(text)
        node.value=''
    }
}