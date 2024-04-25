import React, { useState } from 'react';
import { motion } from 'framer-motion'


const PasswordForm = ({ setPassword }) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === 'ingeniousdealers') {
      setPassword(passwordInput);
    } else {
      setErrorMessage('Incorrect password.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
    <div className='password-page'>
      <form onSubmit={handleSubmit}>
        <div className="password-input-container">
          <input
            className='p-input'
            type={showPassword ? "text" : "password"}
            placeholder='Enter Password'
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <button type='submit' className="arrow-button">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </form>
      <div className='pw-check'>
        <input
          type="checkbox"
          onChange={togglePasswordVisibility}
          checked={showPassword}
        />
        <span>Show Password</span>
      </div>
      {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
    </div>
    </motion.div>
  );
}

export default PasswordForm;
