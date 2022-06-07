
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';

import CarRed from "../exmaplecmpts/carcomponents";


function Car(props) {
    return <h2>I am a { props.brand.model }!</h2>;
  }
  

  
  function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    const color = { color: "Red" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
        <CarRed color={ color } />
      </>
    );
  }

  
export default Garage;