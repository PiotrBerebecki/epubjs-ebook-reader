import React, {Component} from 'react'
import {EpubView} from 'react-reader'
import { localforage } from 'localforage';
import './books/moby-dick.epub';

// console.log('book', book.length);
const epubOptions = {
    disableSrcdoc: true // If you use react-reader within cordova you need to set this because cordova webview will silently disable srcdoc for iframes, see https://issues.apache.org/jira/browse/CB-7379
}

console.log('localforage', localforage);
class App extends Component {
  constructor(props){
    super(props)

    this.saveBook = this.saveBook.bind(this);
  }

  saveBook(){
    localforage.setItem('key','moby-dick' ).then(() => {
      console.log('ran' );
    })
  }


  render () {
    return (
      /* The ReactReader will expand to 100% of width/height, so be sure
       * to set a height on the parent element, either with position it
       * absolute of window, set height or use paddingTop for
       * proporsjonal scaling */
      <div style={{position: 'relative', height: '100%'}}>
        <EpubView 
          url={'./books/moby-dick.epub'} 
          locationChanged={(epubcifi) => console.log(epubcifi)}
          tocChanged={(toc) => console.log(toc)}
          epubOptions={epubOptions}
        />
        <button onClick={this.saveBook}></button>
      </div>
    )
  }
}

export default App;
