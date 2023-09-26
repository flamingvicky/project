import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { AiOutlineDoubleRight } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="top-container">
          <div className="left-container">
            <div className="image-box">
              <div className="img-box">
                <img src="img\wb.png" alt="Developers pic"></img>
              </div>
            </div>
            <Link to='/about' className='link'>
              <div className="detail-container">
                <h4>A Web Developer</h4>
                <h3>Mritunjay Dubey</h3>
                <p>I am versatile and adaptable fresher ready to excel</p>
              </div>
            </Link>
            <div className="icon">
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
