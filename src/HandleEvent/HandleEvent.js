import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showTitle = ()=>{
        alert('hello cybersoft')
    }
     showMess =(mess) => {
         alert(`hello ${mess}`);
     }   
    
   render () {
    return (
        <div>
            {/* xử lý sự kiện truyền callback */}
        <button onClick={this.showTitle}>Hello</button>
            {/* xử lý sự kiện hàm trung gian */}
           <button onClick={()=>{
               this.showTitle();
           }}> Show Title</button>
           <br/>
           <button onClick = {this.showMess.bind(this, 'Nhân')}>Show mess</button>
           <button onClick ={()=>{ 
               this.showMess('Nhân')}}>Show Mess </button>
       </div>
   )

   }
   }
       




