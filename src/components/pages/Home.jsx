import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2016/07/08/08/59/background-1503863_1280.png')",
      }}
    >

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-sans">
          <span className="text-yellow-300">Smart</span> Tools for Your{" "}
          <span className="text-pink-400">Everyday</span>{" "}
          <span className="text-blue-500">Life</span>
        </h1>
        <p className="font-serif text-xl md:text-2xl mb-8">
          Simple, powerful, and free calculators to make your daily tasks easier!
        </p>

        {/* Button */}
        <Link to="/tools">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  )
}

export default Home
