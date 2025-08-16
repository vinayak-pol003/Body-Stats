import React from 'react'
import { Link } from 'react-router-dom'

const tools = [
    {
        name: "BMI Calculator",
        description: "Check you Body Mass Index easily.",
        link: "/bmi",
         color: "from-pink-500 to-red-500",
    },
    {
        name: "Age Calculator",
        description: "Find your exact age in years, months, and days.",
        link: "/age",
        color: "from-blue-500 to-cyan-500",
    },
    {
        name: "More Tools Coming",
        description: "Stay tuned for more awesome features!",
        link: "/",
        color: "from-purple-500 to-indigo-500",
    },
]

const Tools = () => {
  return (
    <section className='min-h-screen bg-gray-100 py-12 px-6'>
        <div className='className="max-w-5xl mx-auto text-center"'>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
          🔧 Explore Our <span className="text-blue-600">Smart Tools</span>
            </h1>

            <p className="text-lg text-gray-600 mb-12">
            Choose a tool below to get started with simple, powerful calculators.
            </p>

         {/* Cards Grid */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {tools.map((tool,index)=>(
                    <Link key={index} to={tool.link} className={`bg-gradient-to-r ${tool.color} text-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300`}>
                        <h2 className="text-2xl font-semibold mb-2">{tool.name}</h2>
                        <p className="text-sm opacity-90">{tool.description}</p>
                </Link>
            ))}
            
         </div>
        </div>
    </section>
  )
}

export default Tools