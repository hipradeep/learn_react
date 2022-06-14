
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';

import CarRed from "./carcomponents";


function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
  }
  
  function Garage(props) {
    const carInfo = { name: "Ford", model: "Mustang" };
    const color = { color: "Red" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        {/*COMT:012 */}
        {/* use of jsx children */}
        <h1>{props.children}</h1>
        <Car brand={ carInfo } />
        <CarRed color={ color } />
      </>
    );
  }

  
export default Garage;