import React, { Component } from 'react';
import Card from '../component/Card';
export default class Home extends Component {
  render() {
    console.log(this.props.posts);
    const { posts } = this.props;
    return (
      <div>
        {posts.map((value, index) => {
          return (
            <Card id={value.id} judul={value.judul} create={value.create} />
          );
        })}
      </div>
    );
  }
}
