import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Tasks:</h1>
            <div style={{position:"flex-colum",  }}>
            <Link  to="Task1" >Task #1</Link>
            <Link to="Task2" >Task #2</Link>
            <Link to="Task3" >Task #3</Link>
            <Link to="Task6" >Task #6</Link>
            <Link to="Task7" >Task #7</Link>
            <Link to="Task9" >Task #9</Link>
            </div>
          
        </div>
    );
};

export default MainPage;