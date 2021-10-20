import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/BannerImg/404.png'
const NotFound = () => {
    return (
        <div>
            <img style={{ width: '50%' , height:'80%' }} src={notfound} alt="" />
            <br />
            <Link to="/"><button className="btn btn-primary py-2 my-4">Home</button>
            </Link>
        </div>
    );
};

export default NotFound;