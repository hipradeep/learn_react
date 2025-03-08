// import logo from './logo.svg';

import CompntCls from "./components/classcpnt";
import Garage from "./t1_props/propsExample";
// import CompNav from "./nav1/navbar1";
// import CompntEvnt from "./events/eventInClassComp";
// import CompntEvntFun from "./events/eventsInFunComp";
// import CompntProp from "./props/propsexample";
// import  CompntStt from "./states/state";
// import CompCompntSttntFun from "./components/functioncpnt";
// import CompLifeCycle from "./lifecyclemethods/lifecycle";
// import CompLifeCycle2 from "./lifecyclemethods/lifecycle2";
// import CompLifeCycle3 from "./lifecyclemethods/lifecycle3";
// import CompLifeCycle4 from "./lifecyclemethods/lifecycle4";
// import MainAppRoutes from "./routes/Main";
// import IndexAppRoutes from "./routes-2/Index";
//import AxiosTodo from "./rest-axios/AxiosTodo";
// import ReactRoute from "./routes/ReactRoute";
// import HookForm from "./form_hook/form";
// import CSSBasic from "./add-css-in-component/basic";
// import MainHead from "./lifting_state_up/MainHead";
// import Hook1 from "./hooks/Hook1";
// import Hook2 from "./hooks/Hook2";
// import Hook3 from "./hooks/Hook3";
// import List from "./list/List";
// import Bootstraps from "./add-css-in-component/Bootstraps";
// import SimpleForm from "./controlled-component/CComponent";
// import LoginForm from "./forms/Forms";
// import ContextApi from "./context-api/Parent";


function App(props) {

  return (

    <>
      {/*COMT:011 */}
      {/* use of jsx children */}
      {/* <h1>{props.children}</h1> */}

      {/*COMT:012 */}
      <Garage>  sending children to components Garage - COMT:012  </Garage>


      {/* class components */}
      {/* <CompntCls email="helpdesk@cdac.in" address="noida"> welcome to ReactWorld </CompntCls> */}

      {/* functional component */}
      {/* <CompntFun name="GE" code="123454"></CompntFun> */}
      {/* <CompntFun name="neha" code="345" ></CompntFun> */}
      {/* <CompntCls email="abc@gmail.com" address="noida">Test</CompntCls> */}




      {/* <CompntStt roll={450} /> */}

      {/* LifeCycle */}

      {/* without props */}
      {/* <CompLifeCycle /> */}

      {/* sending props */}
      {/* <CompLifeCycle name="i am props" /> */}

      {/* <CompLifeCycle2 name="i am props" /> */}

      {/* <CompLifeCycle4 /> */}


      {/* <MainAppRoutes /> */}

      {/* <IndexAppRoutes /> */}

      {/* <ReactRoute /> */}

      {/* <HookForm /> */}

      {/* <CSSBasic /> */}

      {/* lifting state up */}
      {/* <MainHead /> */}

      {/* <Hook1 /> */}
      {/* <Hook2 /> */}
      {/* <Hook3 /> */}
      {/* <List /> */}
      
      {/* <Bootstraps /> */}
      {/* <SimpleForm /> */}
      {/* <LoginForm /> */}
      {/* <ContextApi/> */}

      {/*<AxiosTodo/> */}

    </>
    );

}

export default App;
