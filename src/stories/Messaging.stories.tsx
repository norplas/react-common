import React, { useState,Fragment } from 'react';
import Grid from '@material-ui/core/Grid'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {useMessaging} from '../components';
 
import { Story, Meta } from '@storybook/react/types-6-0';

const Component = ({text}:ComponentProps) =>{

 const [user,setUser]=useState('')
   const { messages,addMessage} = useMessaging('storybook',user);
  const[textValue,setText]=useState('')
   const handleChange=e=>{
    setText(e.target.value)
   }
   const handleChangeUser = ()=>{
     const el = document.getElementById('userName');
      const value = el.value
      console.log(value);
     setUser(value);
   }
   const handleClick=e=>{
     console.log('handleClick')
     addMessage(textValue)
   }
  return (<Grid container spacing={2}>
    <div>{text}</div>
        <ul>{messages.map((o,idx)=>  <li key={`msg-${idx}`}>{o}</li> )}</ul>
       <Grid>
         <input type='text' defaultValue={textValue} onChange={handleChange}/>
         <button type='button' onClick={handleClick}>Send</button>
         <input type='text' defaultValue={user} id='userName'/>
         <button type='button' onClick={handleChangeUser}>Send</button>
       </Grid>
    </Grid>
  )
}

type ComponentProps = {
  text:string
}


export default {
  title: 'Components/Messaging',
  component: Component,
  argTypes: {
    color: { control: 'color' }
    
  }
} as Meta;



const Template: Story<ComponentProps> = (props:ComponentProps) => (
  <Fragment>
      <Component {...props}/>

    
  </Fragment>
)

export const Messaging = Template.bind({});
Messaging.args = {
  text: 'helso'
};

