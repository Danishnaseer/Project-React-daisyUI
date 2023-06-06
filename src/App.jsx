import './App.css';
import React from 'react';
import { useState } from 'react';

// const Profile = (props) => {
//   return (
//     <div>
//       <h2 className="mytitle">{props.name}</h2>
//     </div>
//   );
// };

// export default Profile;

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="dcode-card w-96 bg-base-100 shadow-xl ms-10">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="dcode-card-body">
          <h2 className="dcode-card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="dcode-card-actions flex items-center	">
            <button
              className="dcode-btn dcode-btn-neutral"
              onClick={() => setCounter((prevCount) => prevCount + 1)}
            >
              +
            </button>
            <div>
              <h2 className="dcode-card-title">{counter}</h2>
            </div>
            <button
              className="dcode-btn dcode-btn-neutral"
              onClick={() => setCounter((prevCount) => prevCount - 1)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
