const Aboutus = () => {
  return (
    <div className=" bg-gray-50 p-5 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Page Title */}
        <h1 className="text-xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>

        {/* Intro Section */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
          Welcome to <span className="font-semibold">Our Company</span>!  
          We are dedicated to delivering top-notch solutions to help our clients grow 
          and succeed in a competitive world.
        </p>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-blue-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Our Mission</h2>
            <p className="text-gray-700">
              To provide innovative, reliable, and cost-effective services 
              that empower businesses to reach their full potential.
            </p>
          </div>

          <div className="p-6 bg-green-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Our Vision</h2>
            <p className="text-gray-700">
              To be recognized as a global leader in delivering cutting-edge 
              solutions that transform industries and improve lives.
            </p>
          </div>

          <div className="p-6 bg-yellow-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-yellow-700">Our Values</h2>
            <p className="text-gray-700">
              Integrity, innovation, and excellence drive every decision we make 
              and every product we deliver.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
