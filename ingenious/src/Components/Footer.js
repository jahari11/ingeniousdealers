import React from "react";
import { Link } from "react-router-dom";

export default function Footer (){
    return (
        <div className="bg-black rl">
  <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="flex justify-center text-white">
      <span className="font-extrabold text-white uppercase text-lg">Ingenious Dealers</span>
    </div>

    <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
      itaque neque.
    </p>

    <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
      <li>
        <Link className="text-white transition hover:text-gray-50/25" to='/'> Home </Link>
      </li>
      <li>
        <Link className="text-white transition hover:text-gray-50/25"> Local Dealers </Link>
      </li>
      <li>
        <Link className="text-white transition hover:text-gray-50/25"> Ingenious Dealers </Link>
      </li>
      <li>
        <Link className="text-white transition hover:text-gray-50/25"> Services </Link>
      </li>
      <li>
        <Link className="text-white transition hover:text-gray-50/25"> Subscriptions </Link>
      </li>
      <li>
        <Link className="text-white transition hover:text-gray-50/25"> About </Link>
      </li>
    </div>

    <ul className="mt-12 flex justify-center gap-6 md:gap-8">
    <li className="text-white transition hover:text-gray-700/75">
    <Link to='https://www.instagram.com/ingeniousdealers/'>
            <i className='fa-brands fa-instagram'></i>
          </Link>
      </li>
      <li className="text-white transition hover:text-gray-700/75">
      <Link to='https://www.instagram.com/ingeniousdealers/'>
            <i className='fa-brands fa-x-twitter'></i>
        </Link>
      </li>
      <li className="text-white transition hover:text-gray-700/75">
      <Link to='https://www.instagram.com/ingeniousdealers/' >
            <i className='fa-brands fa-youtube'></i>
          </Link>
      </li>
    </ul>
  </div>
</div>
    )
}