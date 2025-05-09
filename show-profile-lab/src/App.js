import React, { useState } from 'react';

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const handleToggle = () => {
    setShowProfile(prev => !prev);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <button onClick={handleToggle}>
        {showProfile ? 'Hide Profile' : 'Show Profile'}
      </button>

      {showProfile ? (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', width: '250px' }}>
          <h3>John Doe</h3>
          <p>Email: johndoe@gmail.com</p>
          <p>Location: Cleveland, OH</p>
        </div>
      ) : null}
    </div>
  );
}

export default App;
