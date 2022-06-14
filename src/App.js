import logo from './logo.svg';

// import Compnt from "./nav1/navbar1";
//  import Compnt from "./events/events";
import Compnt from "./props/propsexample";

function App(props) {

  return (

    <>
      {/*COMT:011 */}
      {/* use of jsx children */}
      {/* <h1>{props.children}</h1> */}
      
      <Compnt>

        sending children to components

      </Compnt>

    </>);

}

export default App;
