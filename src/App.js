import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from'./Header.js';
import MainFeaturedPost from './MainFeaturedPost.js';
//import Main from './Main';
//import Sidebar from './Sidebar.js';
//import FeaturedPost from './FeaturedPost';
import Footer from './Footer.js';


function App() {
  return (
    <div className="container">
      <Header sections={[{title:'Manue Item 1'}, {title:'Menue Item 2'}, {title:'Menue Item 3'}, {title:'Manue Item 4'}, {title:'Manue Item 5'}]} title='The Title'/>
      <MainFeaturedPost post={{
        image:'https://source.unsplash.com/random',
        imageText:'The main post image',
        title:'Title of a longer featured blog post',
        description:'Multiple lines of text that form the lede, informing new readers quickly and efficiently about whats most interesting in this posts contents.',
        linkText:'Continue Reading',
        }}/>
        {/*<Main title='From the firehose' posts={['post1', 'post2']}/>*/}
        {/*<Sidebar
        archives={[
          {title:'March 2020'}, {title:'June 2020'}
        ]}
        description={'The description'}
        social={['facebook_icon']}
        title='The title for Archives'
      />*/}
        {/*<FeaturedPost post={{title:'Featured Post', date:'22 May', description:'Short description of post'}}/>*/}
        <Footer description={'Description for the footer'} title={'Footer Title'}/>
    </div>
  );
}

export default App;
