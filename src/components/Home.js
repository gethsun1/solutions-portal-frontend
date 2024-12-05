import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SolutionsList from './SolutionsList';

const Home = () => {
  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/solutions/')
      .then((response) => setSolutions(response.data))
      .catch((error) => console.error('Error fetching solutions:', error));
  }, []);

  return <SolutionsList solutions={solutions} />;
};

export default Home;
