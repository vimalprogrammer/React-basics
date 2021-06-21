




import React from 'react';
import ReactDOM from 'react-dom';

class MySite1 extends React.Component
{
  render()
  {
    return <>
    <h1>Welcome here buddies</h1>
    <MySite3/>
    </>
  }
}

class MySite3 extends React.Component
{
  render() {
    return <div>
      <h3>Basically known as Triple V</h3>
    </div> 
  }
} 

export default MySite1;

