import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function Home () {
  const { currentUser } = useAuth();

  return (
    <div>
      Home: {currentUser && currentUser.name}
    </div>
  )
}

export default Home