import React from "react";
// import'../App.css';
// import styles from '../App.css';
//add module 
 import styles from './myStyles.module.css';

// in line style
 class MyHeader extends React.Component {
    render() {
      return (
        <div>
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
        <p>Add a little style!</p>
        </div>
      );
    }
  }

  //create object of css 
  class MyHeader2 extends React.Component {
    render() {
      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
      return (
        <div>
        <h1 style={mystyle}>Hello Style!</h1>
        <p>Add a little style!</p>
        </div>
      );
    }
  }
  class MyHeader3 extends React.Component {
    render() {
    
      return (
        <div>
        <h1 className={styles.bigblue}>Hello Style!</h1>
        <p>Add a little style!</p>
        </div>
      );
    }
  }

  export default MyHeader3;