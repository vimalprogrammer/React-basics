import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MySite1 from './App.js';

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

/*
const mystyle={
  textAlign:'center', //css seaparte by comma
  color:'blue',
  opacity:0.9
}
const ele=<div style={mystyle}>
  <h1 className='header'>Welcome!</h1>
  <h2>User</h2>
</div>
ReactDOM.render(ele,document.getElementById('root'));
*/
/*
function Header()
{
  return <div>
    <h1>This is header</h1>
  </div>
}
function Nav()
{
  return <h2>This is Nav bar</h2>
}
function Footer()
{
  return <h2>This is footer</h2>
}
function MyWebsite()
{
  return <div>
    <Header/>
    <Nav/>
    <Footer/>
  </div>
}

ReactDOM.render(<MyWebsite/>,document.getElementById('root'));
*/
/*
class MySite2 extends React.Component
{
  render()
  {
    return <div>
      <MySite1 />
      <h1>Vimal Vickie Vishnu</h1>
    </div>
  }
}

ReactDOM.render(<MySite2/>,document.getElementById('root'))
*/

class PropsEx extends React.Component
{
  render()
  {
    return <>
    <h1>Learn React {this.props.topic} in {this.props.let.lang}</h1>
    </>
  }
}
class PropsEx2 extends React.Component
{
  render()
    {
      const v= {topic:"Props",lang:"English"}
      return <PropsEx let={v} />
    }
}
PropsEx.defaultProps={topic:"Props",Lang:"tamil"}
ReactDOM.render(<PropsEx2/>,document.getElementById('root'))




