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
        <input
          type={showPassword ? "text" : "password"}
          placeholder='Enter Password'
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        <button type='submit'><i className="fa-solid fa-arrow-right"></i></button>
      </form>
      <span className='pw-check'>
          <input
            type="checkbox"
            onChange={togglePasswordVisibility}
            checked={showPassword}
          />
          Show Password
        </span>
      {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
    </div>
  );
}

export default PasswordForm;
