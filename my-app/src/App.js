import { Component } from 'react';
import './App.css';

class Field extends Component{
  render(){
    const holder = 'Enter here';
    const styleField = {
      width : '300px'
    };
    return <input 
      placeholder={holder}
      type = "text"
      style = {styleField}/>
  }
}

// const Field = ()=>{
//     const holder = 'Enter here';
//     const styleField = {
//       width : '300px'
//     };
//     return <input 
//       placeholder={holder}
//       type = "text"
//       style = {styleField}/>
// }

const Header = ()=>{
  return <h2>Hello</h2>
}

const Button = ()=>{
  const logged = true;
  const text = 'Sign in'
  return <button>{logged? 'Enter': text}</button>
}

function App() {
  return (
    <div className='App'>
      <Header/>
      <Field/>
      <Button/>
    </div>
  );
}

export default App;
