import React, { Component } from 'react';
import localforage from 'localforage';

// console.log('saving');

class Browse extends Component {
  state = {
    file: null,
  };

  componentDidMount() {
    fetch('https://s3-eu-west-1.amazonaws.com/react-reader/alice.epub')
      // fetch('https://avatars3.githubusercontent.com/u/13964654?v=3&s=200')
      .then(res => res.blob())
      .then(myBlob => localforage.setItem('image1', myBlob))
      .then((err, value) => localforage.getItem('image1'))
      .then(imageBlob => this.setState({ file: imageBlob }));
  }

  render() {
    console.log(this.state.file);
    return (
      <div>
        <p>Moby Dick</p>
        <button onClick={this.saveBook}>Save Book</button>
      </div>
    );
  }
}

export default Browse;
