import React, { useState } from "react";

const Bmi = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const calBMI = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      alert("Please enter a valid weight and height");
      return;
    }

    const bmiValue = weight / ((height / 100) * (height / 100));
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) {
      setMessage("You are Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage("You are a Healthy Weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage("You are Overweight");
    } else {
      setMessage("You are Obese");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 relative">
      
      {/* Go Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition font-semibold"
      >
        &larr; Go Back
      </button>

      <div className="max-w-5xl w-full rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side: BMI Illustration */}
        <div
          className="md:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/1361979553/vector/indikator-bmi-on-white-background-chart-concept-vector-icon.jpg?s=612x612&w=0&k=20&c=pTA-NeyIyU_rtmZ0TVjVQqiM5037e9jxmA87TVuENhA=')",
          }}
        ></div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6 text-center">
            BMI Calculator
          </h2>

          <form onSubmit={calBMI}>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your weight"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your height"
              />
            </div>

            <div className="flex justify-between gap-4 mt-6">
              <button
                type="submit"
                className="w-1/2 bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
              >
                Calculate
              </button>
              <button
                type="reset"
                onClick={() => {
                  setWeight("");
                  setHeight("");
                  setBmi("");
                  setMessage("");
                }}
                className="w-1/2 bg-blue-200 text-black py-3 rounded-lg font-semibold text-lg hover:bg-blue-400 transition"
              >
                Reset
              </button>
            </div>
          </form>

          {/* Result */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold">
              Your BMI is: <span className="text-blue-600">{bmi || "--"}</span>
            </h3>
            <p className="text-lg mt-2">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
