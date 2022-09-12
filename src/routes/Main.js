
import AddCnpt from './AddCnpt';
import Home from './Home';
import DeleteCnpt from './DeleteCnpt';

import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
function Main() {
    return (


        <>
            <BrowserRouter>

                <ul>
                    <li><Link to="/add">Acc Component</Link></li>
                    <li><Link to="/delete">Delete Component </Link></li>

                </ul>
                <Routes>
                    <Route path="/" element={< Home />}> </Route>
                    <Route path='/delete' element={<DeleteCnpt />}> </Route>
                    <Route path='/add' element={<AddCnpt />}> </Route>
                </Routes>
            </BrowserRouter>
        </>




        //  <Router>


        //                 <Routes>

        //                     {/* <Route exact path='/'> <AddCnpt /> </Route> */}
        //                     <Route  path='/add' element={<AddCnpt />}> </Route>
        //                     <Route  path='/delete' element={<DeleteCnpt />}> </Route>
        //                     <Route  path='/' component={AddCnpt} />

        //                 </Routes>
        //             </div>
        //         </Router>
    );
}

export default Main;
