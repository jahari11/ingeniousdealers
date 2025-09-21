import React, { useState } from 'react';
import { motion } from 'framer-motion'
import IngeniousBackground from '../../img/IngeniousPasswordPage.mp4'


const PasswordForm = ({ setPassword }) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (passwordInput === 'ingeniousdealers518') {
      setPassword(passwordInput);
      setErrorMessage('');
    } else {
      setErrorMessage('Incorrect password. Please try again.');
    }
    
    setIsLoading(false);
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
        className="min-h-screen relative overflow-hidden"
    >
      <video 
        className='absolute top-0 left-0 w-full h-full object-cover z-0' 
        src={IngeniousBackground} 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-5"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <motion.div 
            initial={{y: -20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.2, duration: 0.6}}
            className="text-center mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Welcome Back Dealer
            </h1>
            <p className="text-lg text-gray-200">
              Enter your password to access the platform
            </p>
          </motion.div>

          {/* Password Form */}
          <motion.form 
            onSubmit={handleSubmit}
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.4, duration: 0.6}}
            className="space-y-6"
          >
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-semibold text-white mb-3">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fa-solid fa-lock text-gray-400"></i>
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full pl-12 pr-12 py-4 bg-white bg-opacity-90 border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 text-center font-medium"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  disabled={isLoading}
                >
                  <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-lg`}></i>
                </button>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <motion.div 
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                className="bg-red-500 bg-opacity-90 text-white px-4 py-3 rounded-lg flex items-center"
              >
                <i className="fa-solid fa-exclamation-circle mr-2"></i>
                {errorMessage}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !passwordInput.trim()}
              className="w-full bg-white text-black py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black mr-3"></div>
                  Verifying...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <span>Access Platform</span>
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </div>
              )}
            </button>
          </motion.form>

          {/* Show Password Toggle */}
          <motion.div 
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.6, duration: 0.6}}
            className="mt-6 flex items-center justify-center"
          >
            <label className="flex items-center cursor-pointer group">
              <input
                type="checkbox"
                onChange={togglePasswordVisibility}
                checked={showPassword}
                className="h-5 w-5 text-black focus:ring-black border-gray-300 rounded transition-colors duration-200"
                disabled={isLoading}
              />
              <span className="ml-3 text-white group-hover:text-gray-200 transition-colors duration-200 font-medium">
                Show Password
              </span>
            </label>
          </motion.div>

          {/* Footer Info */}
          <motion.div 
            initial={{y: 20, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{delay: 0.8, duration: 0.6}}
            className="mt-8 text-center"
          >
            <p className="text-gray-300 text-sm">
              Secure access to Ingenious Dealers!
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PasswordForm;