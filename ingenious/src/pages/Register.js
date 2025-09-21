import React from 'react'
import Navbar from '../Components/Home Components/Navbar'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Logo from '../img/IDlogo.jpg'

const Register = () => {
  return (
    <div className="">
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.8}}
    >
        <Navbar />

<section className="min-h-screen bg-gray-50 py-8">
  <div className='flex items-center justify-center'>
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Become a Dealer today.</h1>

      <p className="mt-4 text-lg text-gray-600 leading-relaxed">
        Join our community of fashion enthusiasts and showcase your unique style to the world. 
        Connect with local dealers and discover amazing opportunities.
      </p>
    </div>

    <form action="#" className="mx-auto mb-0 max-w-md space-y-6">
      <div>
        <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-user text-gray-400"></i>
          </div>
          <input
            type="text"
            id="username"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your username"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-envelope text-gray-400"></i>
          </div>
          <input
            type="email"
            id="email"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your email address"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-lock text-gray-400"></i>
          </div>
          <input
            type="password"
            id="password"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Create a strong password"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-map-marker-alt text-gray-400"></i>
          </div>
          <input
            type="text"
            id="location"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your city"
          />
        </div>
      </div>

      <div>
        <label htmlFor="social" className="block text-sm font-semibold text-gray-700 mb-2">Social Media Links</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-link text-gray-400"></i>
          </div>
          <input
            type="text"
            id="social"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your social media links"
          />
        </div>
      </div>


      <div>
        <label htmlFor="subscription" className="block text-sm font-semibold text-gray-700 mb-2">Subscription Tier</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-tags text-gray-400"></i>
          </div>
          <select
            id="subscription"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 appearance-none bg-white"
          >
            <option value="">Select your role</option>
            <option value="photographer">Photographer</option>
            <option value="model">Model</option>
            <option value="seamstress">Seamstress</option>
            <option value="designer">Designer</option>
            <option value="local-dealer">Local Dealer</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="shopName" className="block text-sm font-semibold text-gray-700 mb-2">Shop Name</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-store text-gray-400"></i>
          </div>
          <input
            type="text"
            id="shopName"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your shop name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-semibold text-gray-700 mb-2">Profile Image</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i className="fa-solid fa-image text-gray-400"></i>
          </div>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-800"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Link className="font-semibold text-black hover:text-gray-700 transition-colors duration-200" to='/login'>
            Sign in here
          </Link>
        </p>

        <button
          type="submit"
          className="w-full sm:w-auto bg-black text-white py-4 px-8 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Create Account
        </button>
      </div>
    </form>
  </div>
</div>
</section>
        <Footer />
    </motion.div>
    </div> 
  )
}

export default Register
