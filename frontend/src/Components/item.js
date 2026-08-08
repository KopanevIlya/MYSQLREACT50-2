import React,{Component} from 'react'
export default class iterm extends Component {
  render() {
    return (
      <div className='wrappen-item'>
        <div className='item-image'>

        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
         <p>{this.props.description}</p>

         </div>

         </div>

  
    )
  }
}