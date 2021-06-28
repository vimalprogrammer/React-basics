import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
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

/*
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
*/
/*
class A extends React.Component
{
  constructor()
  {
    super();
    this.state={initialvalue:"vaanga vasanth",msg:"keela thodunga"}
  }

  changeValue=()=>
  {
    this.setState({initialvalue:"podaa loosu", msg:"Komali"})
  }

  render()
  {
    return <>
      <h1>{this.state.initialvalue} {this.state.msg}</h1>
      <br></br>
      <button type="button" onClick={this.changeValue}>touch</button>
    
    </>
  }
}

ReactDOM.render(<A/>,document.getElementById('root'))
*/
/*
class EventBind extends React.Component
{
  constructor()
  {
    super();
    this.state={value:"vanga mapla"};
  }
  ChangeValue=(arg)=>
  {
    this.setState({value:arg})
  }
  render()
  {
    return(
      <>
    <h1>{this.state.value}</h1>
    <button type="button" onMouseOver={()=>this.ChangeValue("HELlO Mapla Kishore")}>Click</button>
    </>
    )
  }
}


ReactDOM.render(<EventBind/>,document.getElementById('root'))
*/

/*
class CSS extends React.Component
{
  render()
  {
    const mystyle={
      color:"green",
      textAlign:"right"
    };
    return<>
    <h1 style={{color:"red"}}>Georgia</h1>
    <h1 style={mystyle}>Tokyo</h1>
    <h1 className="App">Nerobi</h1>  
    <h4>Vaanga Makkaleh</h4>  
    </>
  }
}

ReactDOM.render(<CSS/>,document.getElementById('root'))

*/
/*
class Forms extends React.Component
{
  constructor()
  {
    super()
    this.state={username:"",age:null,errmsg:""}
  }
  uservalue=(event)=>
  {
    let n=event.target.name;
    let v=event.target.value;
    let err=""
    if(n==="age" && v!="" && !Number(v))
    {
      err=<strong>Input invalid, please enter Number</strong>
      this.setState({errmsg:err})
    }
    else
      this.setState({[n]:v})
  }
  formsubmit=(event)=>
  {
    event.preventDefault()
    alert('Application subbmitted')
  }

  render()
  {
    return<>
    <form onSubmit={this.formsubmit}>
      <h1>Hello {this.state.username}</h1>
      <h1>Your age is {this.state.age}</h1>
      Enter your name: <input type="text" name="username" onChange={this.uservalue}></input>
      Enter your age: <input type="text" name="age" onChange={this.uservalue}></input>
      {this.state.errmsg}
      <input type="submit" />
    </form>
    
    </>
  }


}

ReactDOM.render(<Forms/>,document.getElementById('root'))
*/

const List=(props)=>{
const myarr=props.myarr;
const lv=myarr.map((i)=>
{
  return <li>{i}</li>
});
return <ul>{lv}</ul>
}
const myarr=[66,7,7,8,54];
ReactDOM.render(<List myarr={myarr}/>,document.getElementById('root'))



