import React,{Component,PropTypes} from 'react'

export default class Footer extends Component{
    renderFilter(filter,name){
        if(filter===this.porps.filter){
            return name
        }
        return (
        <a href='#' onClick={e=>{
            e.preventDefault()
            this.props.onFilterChange(filter)
        }}>
        {name}
        </a>)
    }
    render(){
        return (<p>
            Show:{''}
            {this.renderFilter('SHOW_ALL','ALL')}
            {','}
            {this.renderFilter('SHOW_COMPLETED','Completed')}
            {','}
            {this.renderFilter('SHOW_ACTIVE','Active')}
        </p>)
    }
}