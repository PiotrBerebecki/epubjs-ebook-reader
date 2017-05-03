import React, { Component } from 'react';

import {
  EpubView, // Underlaying epub-canvas (wrapper for epub.js iframe)
  EpubViewStyle, // Styles for EpubView, you can pass it to the instance as a style prop for customize it
  ReactReader, // A simple epub-reader with left/right button and chapter navigation
  ReactReaderStyle, // Styles for the epub-reader it you need to customize it
} from 'react-reader';

// localforage.setItem('key','moby-dick' ).then(() => {
//   console.log('ran' );
// })

class App extends Component {
  saveBook = () => {
    this.saveBook = this.saveBook.bind(this);
  };

  render() {
    return (
      <div style={{ position: 'relative', height: '100vh' }}>
        <ReactReader
          // url={'https://s3-eu-west-1.amazonaws.com/react-reader/alice.epub'}
          url={'moby-dick.epub'}
          title={'Moby moby'}
          location={'epubcfi(/6/2[cover]!/6)'}
          // location={'./books/moby-dick.epub'}
          locationChanged={epubcifi => console.log(epubcifi)}
        />
      </div>
    );
  }
}

export default App;
