// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavigationUsingLink = () => {
//   const user = { id: 1, name: 'John Doe', email: 'john@example.com' };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Link to="/Locationhook" state={{ user }}>Go to Profile</Link>
//     </div>
//   );
// };

// export default NavigationUsingLink;


import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const user = { id: 1, name: 'Jane Doe', email: 'jane@example.com' };

  const handleNavigate = () => {
    navigate('/profile', { state: { user } });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>Go to Profile</button>
    </div>
  );
};

export default Home;

