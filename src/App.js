import logo from './logo.svg';

// import Compnt from "./nav1/navbar1";
 // import Compnt from "./events/eventInClassComp";
//  import Compnt from "./events/eventsInFunComp";
//import Compnt from "./props/propsexample";
 import Compnt from "./states/state";

function App(props) {

  return (

    <>
      {/*COMT:011 */}
      {/* use of jsx children */}
      {/* <h1>{props.children}</h1> */}
      
       {/*COMT:012 */}
      {/* <Compnt>  sending children to components   </Compnt> */}

      <Compnt roll ={450} />

      {/* <Compnt/> */}

    </>);

}

export default App;
