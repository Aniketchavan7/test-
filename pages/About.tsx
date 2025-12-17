import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/#about');
  }, [navigate]);
  return null;
};

export default About;