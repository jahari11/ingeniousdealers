import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import IngeniousBackground from '../../img/IngeniousPasswordPage.mp4'
import { EDGE_FUNCTIONS_URL } from '../../config/supabase'


const PasswordForm = ({ setPassword }) => {
  const [passwordInput, setPasswordInput] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDealerLogin, setShowDealerLogin] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);


  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Limit to 10 digits for US phone numbers
    const limitedPhoneNumber = phoneNumber.slice(0, 10);
    
    // Don't format if it's empty
    if (limitedPhoneNumber.length === 0) return '';
    
    // Format based on length
    if (limitedPhoneNumber.length <= 3) {
      return limitedPhoneNumber;
    } else if (limitedPhoneNumber.length <= 6) {
      return `${limitedPhoneNumber.slice(0, 3)}-${limitedPhoneNumber.slice(3)}`;
    } else {
      return `${limitedPhoneNumber.slice(0, 3)}-${limitedPhoneNumber.slice(3, 6)}-${limitedPhoneNumber.slice(6)}`;
    }
  };

  const validatePhoneNumber = (phone) => {
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(cleaned);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!phoneNumber.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      setErrorMessage('Please enter a valid 10-digit US phone number.');
      return;
    }
    if (!privacyAgreed) {
      setErrorMessage('Please agree to our privacy policy to continue.');
      return;
    }

    try {
      setIsSubmitting(true);
      
      const response = await fetch(`${EDGE_FUNCTIONS_URL}/phone-numbers`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          phoneNumber: phoneNumber.trim(),
          timestamp: new Date().toISOString(),
          source: 'password_page'
        })
      });
      
      if (response.ok) {
        setSuccessMessage('🎉 Thanks! We\'ll text you updates about our launch!');
        setPhoneNumber('');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Phone number submission error:', error);
      setErrorMessage('Unable to connect to Supabase. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDealerLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (passwordInput === 'ingeniousdealers518') {
      setShowDealerLogin(false);
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
        {/* Dealer Access button */}
        <button
          type="button"
          className="absolute top-4 right-4 text-white text-sm underline hover:opacity-80"
          onClick={() => setShowDealerLogin((v) => !v)}
          disabled={isSubmitting}
        >
          dealer access
        </button>

        {/* Dealer Access popover */}
        {showDealerLogin && (
          <div className="absolute top-14 right-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-xl p-4 w-72">
            <form onSubmit={handleDealerLogin} className="space-y-3">
              <div className="relative">
                <i className="fa-solid fa-lock absolute left-3 top-1/2 -translate-y-1/2 text-white/80"></i>
                <input
                  className='w-full pl-10 pr-4 py-3 rounded-xl text-white placeholder-white/70 bg-white/10 border border-white/20 backdrop-blur-md shadow-md shadow-black/20 focus:outline-none focus:ring-4 focus:ring-white/10 focus:border-white/40 transition'
                  type={showPassword ? "text" : "password"}
                  placeholder='Enter Dealer Password'
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>
              <div className='pw-check' style={{justifyContent: 'space-between'}}>
                <label style={{display: 'flex', alignItems: 'center', gap: 6}}>
                  <input
                    type="checkbox"
                    onChange={togglePasswordVisibility}
                    checked={showPassword}
                  />
                  <span>Show Password</span>
                </label>
                <div style={{display: 'flex', gap: 8}}>
                  <button type="button" className="text-white text-sm underline" onClick={() => setShowDealerLogin(false)}>Close</button>
                  <button type="submit" className="text-white text-sm underline">Login</button>
                </div>
              </div>
            </form>
          </div>
        )}
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8"
          >
            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Get Launch Updates</h1>
              <p className="text-base text-gray-200">Enter your phone number to receive updates</p>
              <p className="text-xs text-gray-300 mt-1">We'll only use it for important notifications</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <i className="fa-solid fa-phone absolute left-3 top-1/2 -translate-y-1/2 text-white/80"></i>
                <input
                  className='w-full pl-10 pr-14 py-3.5 rounded-xl text-white placeholder-white/70 bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-black/20 focus:outline-none focus:ring-4 focus:ring-white/10 focus:border-white/40 transition'
                  type="tel"
                  placeholder='Enter 10-digit US Phone Number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(formatPhoneNumber(e.target.value))}
                  disabled={isSubmitting}
                  style={{width:'100%'}}
                />
                <button type='submit' disabled={isSubmitting || !privacyAgreed} className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2.5 border border-white/30 text-white shadow-md shadow-black/30 transition ${
                  isSubmitting || !privacyAgreed 
                    ? 'bg-white/10 cursor-not-allowed opacity-50' 
                    : 'bg-gradient-to-br from-white/30 to-white/10 hover:from-white/40 hover:to-white/20'
                }`} aria-label="Submit phone number">
                  {isSubmitting ? (
                    <i className="fa-solid fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fa-solid fa-arrow-right"></i>
                  )}
                </button>
              </div>

              {/* Privacy Agreement Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy-agreement"
                  checked={privacyAgreed}
                  onChange={(e) => setPrivacyAgreed(e.target.checked)}
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 text-blue-600 bg-white/10 border-white/20 rounded focus:ring-white/20 focus:ring-2"
                />
                <label htmlFor="privacy-agreement" className="text-xs text-gray-300 leading-relaxed">
                  I agree to receive text messages from Ingenious Dealers about launch updates, promotions, and important announcements. 
                  <span className="text-white/80 font-medium"> Message and data rates may apply.</span> 
                  You can opt out at any time by replying STOP.
                </label>
              </div>

              {errorMessage && (
                <div className="text-red-300 text-sm text-center">{errorMessage}</div>
              )}
              {successMessage && (
                <div className="text-green-300 text-sm text-center">{successMessage}</div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default PasswordForm;
