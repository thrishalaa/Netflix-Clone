import React from 'react';
import "./ProfileScreen.css";
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className ="profileScreen">
        <Nav />
        <div className="profileScreen__body">
          <h1>Edit Profile</h1>
          <div className='profileScreen__info'>

            <img 
              src='https://i.pinimg.com/originals/5b/50/e7/5b50e75d07c726d36f397f6359098f58.png' 
              alt=""
            />

            <div className='profileScreen__details'>
              <h2>{user.email}</h2>

              <div className='profileScreen__plans'>

                <h3>Plans</h3>
                <div className='plancontainer'>
                  <div className='planinfo'>
                    <h5>Premium</h5>
                    <h6>Ultra HD (4K) and HDR</h6>
                  </div>
                  <button>Subscribe</button>
                </div>

                <div className='plancontainer'>
                  <div className='planinfo'>
                    <h5>Standard</h5>
                    <h6>Full HD (1080p)</h6>
                  </div>
                  <button>Subscribe</button>
                </div>

                <div className='plancontainer'>
                  <div className='planinfo'>
                    <h5>Basic</h5>
                    <h6>HD (720p)</h6>
                  </div>
                  <button>Subscribe</button>
                </div>

                <div className='plancontainer'>
                  <div className='planinfo'>
                    <h5>Mobile</h5>
                    <h6>SD (480p)</h6>
                  </div>
                  <button>Subscribe</button>
                </div>

                <button 
                  onClick={() => auth.signOut()}
                  className='profileScreen__signOut'
                >
                  Sign Out
                </button>

              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default ProfileScreen;