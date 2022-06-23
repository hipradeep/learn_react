
import AddCnpt from '../routes/AddCnpt';
import DeleteCnpt from '../routes/DeleteCnpt';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function RouteCpnt() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/add">Acc Component</Link></li>
                    <li><Link to="/delete">Delete Component </Link></li>

                </ul>

                <Routes>
                    <Route path="/" component={AddCnpt} />
                    <Route exact path='/add' element={<AddCnpt />}> </Route>
                    <Route exact path='/delete' element={<DeleteCnpt />}> </Route>

                </Routes>
            </div>
        </Router>

    );
}

export default RouteCpnt;
