import React from 'react';
import Profile from './profile/index'
import Skills from './profile/skills';
import MyProps from './props';


class App extends React.Component {
    render(){
        return(
        <div className='App'>
                <Profile/>
                <MyProps name='Avee Chakraborty'/>
                <MyProps name='Aminul Islam'/>
                <MyProps name ='Sajjad'/>

        </div>
        );
    }           
};

export default App;