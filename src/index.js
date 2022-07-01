require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom'
import {App} from './App.jsx'
import './App.scss'

console.log(document.getElementById('root'))
 
ReactDOM.render(<App />, document.getElementById('root')) 

