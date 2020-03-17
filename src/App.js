import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import {wordsDB} from './firebase'
import { Header } from './containers/Header/Header'
import {fillArrayWords} from './store/words/actions'
import './App.css';
import  Main  from './containers/Main/Main';
import {Footer} from './containers/Footer/Footer'


const getDataFromDB = dispatch => wordsDB.collection('Words').onSnapshot(snapshot => {
  const arrayWords = snapshot.docs.map(doc => ({
      id: doc.id,
      words: Object.values({...doc.data()})
  }));
  dispatch(fillArrayWords(arrayWords))
}) 

function App({dispatch}) {
  
  getDataFromDB(dispatch)
  return (
    <div className='allContent'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
    
  );
}

export default connect() (App);
