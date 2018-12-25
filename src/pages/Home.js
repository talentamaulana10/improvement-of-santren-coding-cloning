import React, { Component } from 'react';
import Card from '../component/Card';
export default class Home extends Component {
  render() {
    console.log(this.props.posts);
    const { posts } = this.props;

    return (
      <div>
        <h1>ini home</h1>
      </div>
    );
  }
}
