import React, { useState } from 'react'

const Age = () => {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState("");

  const calAge = () => {
    const todaysDate = new Date();
    const birth_date = new Date(birthdate);

    let years = todaysDate.getFullYear() - birth_date.getFullYear();
    let months = todaysDate.getMonth() - birth_date.getMonth();
    let days = todaysDate.getDate() - birth_date.getDate();

    // Adjust days
    if (days < 0) {
      months--; 
      days += new Date(todaysDate.getFullYear(), todaysDate.getMonth(), 0).getDate();
    }

    // Adjust months
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge(`${years} years ${months} months`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 relative">
      
      {/* Go Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition font-semibold"
      >
        &larr; Go Back
      </button>

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Right Side: Result */}
        <div className="md:w-1/2 p-8 flex flex-col items-center justify-center bg-blue-50">
          <h1 className="text-2xl font-bold mb-4">Your Age Is</h1>
          <h1 className="text-5xl font-extrabold text-blue-600">
            {age ? age : '--'}
          </h1>
        </div>

        {/* Left Side: Input */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center border-l">
          <h4 className="text-xl font-semibold mb-4">Date of Birth</h4>
          <input 
            type="date" 
            value={birthdate}
            onChange={(e)=> setBirthdate(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none mb-6"
          />
          <div className="flex gap-4">
            <button 
              type="button"
              onClick={calAge} 
              className="w-1/2 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Calculate Age
            </button>
            <button 
              type="reset" 
              onClick={() => { setBirthdate(""); setAge(""); }}
              className="w-1/2 bg-gray-200 text-black py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Age
