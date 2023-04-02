import React from 'react';
import LeftPage from './components/leftPage/LeftPage';
import RightPage from './components/rightPage/RightPage';

const App = () => {


    return (

        <div className='container py-5'>
            <div className='row'>
                <LeftPage />
                <RightPage/>
            </div>
        </div>

    )
}

export default App;