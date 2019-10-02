import React, { Component } from 'react';
import {connect} from 'react-redux';

export class ItemDemo extends Component {
  showItemDemo(demo, match){
    var element = '';
    element = demo.filter(item => item.id == match.params.id)
    .map((item, index) => {
      return (
        <li className="list-group-item" key={index}>
            <h1>Id: {item.id}</h1>         
            <h1>FirstName :{item.firstName}</h1>
            <h1>LastName: {item.lastName}</h1>
            <h1>Age: {item.age}</h1>
            <h1>job: {item.job}</h1>
        </li>
      );
    })
    console.log('element', element)
    return element;
  }
  render() {
    var {demo} = this.props;
    var { match } = this.props;
    // console.log('match', demo)
    return (
      <ul className="list-group">
        {this.showItemDemo(demo, match)}
      </ul>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    demo : state.demo
  }
}

export default connect(mapStatetoProps, null) (ItemDemo);
