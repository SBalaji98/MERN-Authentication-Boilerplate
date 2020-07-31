import React, { Fragment } from "react";
import image from "../../images/time.jpg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='container'>
          <h1 className='x-large'>Developer Connector</h1>
          <p className='lead'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className='container'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
