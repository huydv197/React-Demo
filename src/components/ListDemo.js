import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
// import ItemDemo from './ItemDemo'

export class ListDemo extends Component {
  showListDemo(demo){
    var elementLi = '';
    // var { match } = this.props
    // console.log(match);
    elementLi = demo.map((item, index) => {
      return (
        <NavLink key={index} to={`/details/${item.id}`}>
          <li className="list-group-item">          
            <h1>{item.firstName} - {item.lastName}</h1>
          </li>
        </NavLink>
      )
  })
  return elementLi;
  };
  render() {
    var { demo } = this.props;
    // gotoDetails{
    //   console.log(id)
    // };
    return (
    <ul className="list-group">
      {this.showListDemo(demo)}
    {/* <li class="list-group-item">First item</li>
    <li class="list-group-item">Second item</li>
    <li class="list-group-item">Third item</li> */}
    </ul>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    demo : state.demo
  }
}
export default connect(mapStatetoProps, null) (ListDemo)
