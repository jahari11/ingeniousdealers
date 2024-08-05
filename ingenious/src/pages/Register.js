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

<section className="relative flex flex-wrap lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Become a Dealer today.</h1>

      <p className="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>
    </div>

    <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label htmlFor="username" className="sr-only">Username</label>
        <div className="relative">
          <input
            type="text"
            id="username"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter username"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <div className="relative">
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="sr-only">Location</label>
        <div className="relative">
          <input
            type="text"
            id="location"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter location"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subscription" className="sr-only">Subscription Tier</label>
        <div className="relative">
          <select
            id="subscription"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          >
            <option value="">Select Subscription Tier</option>
            <option value="basic">Starter</option>
            <option value="premium">Pro</option>
            <option value="pro">Platnium</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="shopName" className="sr-only">Shop Name</label>
        <div className="relative">
          <input
            type="text"
            id="shopName"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter shop name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="image" className="sr-only">Upload Image</label>
        <div className="relative">
          <input
            type="file"
            id="image"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 font-bold">
          Already have an account?
          <Link className="underline font-bold" to='/login'> Sign in</Link>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
          Register
        </button>
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt=""
      src={Logo}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>
</section>
        <Footer />
    </motion.div>
    </div> 
  )
}

export default Register
