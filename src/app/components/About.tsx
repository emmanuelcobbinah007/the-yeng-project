import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className='w-[85%] mx-auto'>
      <div className="max-w-4xl mx-auto relative text-center md:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-10 text-center">
          Meet Michael
        </h2>

        {/* Quote block with pseudo elements */}
        <div className="relative text-md md:text-lg lg:text-xl text-gray-700 leading-relaxed px-4 md:px-10 quote-block">
          <p className="mb-6">
            I’m Michael Yeng, the Hall President of Evandy and a dedicated student leader at the University of Ghana. Aspiring to be the next SRC President, my vision is to create a university where every student is empowered, supported, and given the opportunities to thrive.
          </p>
          <p>
            To achieve this, I’ll really need your support. Let’s build the UGSRC we all want to see!
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
