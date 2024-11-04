import './App.css';
import { useState } from 'react';
import InputName from './components/inputName';
import InputEmail from './components/inputEmail';


function App({onSubmit}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  return (
    <form className='' onSubmit={(e)=>{
      e.preventDefault();
      onSubmit({name, email});
     }}>
      <InputName value={name} Onchange={setName}/>
      <InputEmail value={email} Onchange={setEmail}/>
      <input type='submit'/>
     </form> 
  );
}

export default App;
