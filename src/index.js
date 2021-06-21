import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*
//var add = function()
let c=12345;
var add=()=>
  {
    let a=60,b=10,c=a+b;//let works only inside the block
    (document.getElementById('root').innerHTML)=c;
  }
add();
//(document.getElementById('root').innerHTML)=c;

*/
/*
const ele=React.createElement('h1',{},'Hello Sasi');
ReactDOM.render(ele,document.getElementById('root'));
*/

const mystyle={
  textAlign:'center',
  color:'blue',
  opacity:0.9
}

const ele=<div style={mystyle}>
  <h1 className='header'>Welcome!</h1>
  <h2>User</h2>
</div>
ReactDOM.render(ele,document.getElementById('root'));
