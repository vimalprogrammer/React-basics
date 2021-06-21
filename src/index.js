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

