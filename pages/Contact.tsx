import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/#contact');
  }, [navigate]);
  return null;
};

export default Contact;