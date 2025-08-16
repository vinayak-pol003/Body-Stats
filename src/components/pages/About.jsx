import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          About Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We build simple and smart health tools that help you stay aware of
          your body metrics. Our goal is to make health tracking accessible to
          everyone.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://imgs.search.brave.com/RGCtRqH7vrkkfE0deCxqBlve0X4AMk5Ck2JMnBf_ET8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vbWFyaXVzel9w/cnVzYWN6eWsvbWFy/aXVzel9wcnVzYWN6/eWsxNzA2L21hcml1/c3pfcHJ1c2Fjenlr/MTcwNjAwMzQ2Lzgw/NDgzOTEyLXdvcmQt/aGVhbHRoeS1saWZl/c3R5bGUtYnJhbmNo/ZXMtd2l0aC10aGUt/ZnJ1aXRzLW9mLXRo/ZS1vcmFuZ2UtdHJl/ZXMuanBnP3Zlcj02"
          alt="Healthy lifestyle"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Health shouldn’t be complicated. We design tools that are lightweight,
            user-friendly, and effective in helping you understand key health
            metrics like BMI and age calculation. We aim to keep things
            transparent, easy, and empowering.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                BMI Calculator
              </h3>
              <p className="text-gray-600 text-sm">
                Instantly check your Body Mass Index and track your health.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Age Calculator
              </h3>
              <p className="text-gray-600 text-sm">
                Calculate your exact age in years, months, and days with ease.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Future Tools
              </h3>
              <p className="text-gray-600 text-sm">
                We are working on adding more health utilities to support your
                fitness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        Built with ❤️ for awareness and learning.
      </footer>
    </div>
  );
};

export default AboutUs;
