import React, { useState } from 'react';

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
          <i class="fa-solid fa-arrow-right"></i>
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
  );
}

export default PasswordForm;
