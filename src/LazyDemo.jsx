
import React, { Suspense } from 'react';
import Loader from './components/Loader';


const Dashboard = React.lazy(() => import('./components/Dashboard'));

const LazyDemo = () => {
    return (
        <div className="lazy-demo-container">

            <Suspense fallback={<Loader />}>
                <Dashboard />
            </Suspense>
        </div>
    );
};

export default LazyDemo;
