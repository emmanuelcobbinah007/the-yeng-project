import React from 'react';
import { CheckCircle } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* What I Stand For */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            What I Stand For
          </h2>
          <ul className="space-y-5">
            {[
              "Empowerment Through Representation",
              "Transparency and Accountability",
              "Student Welfare First",
              "Innovation in Student Services",
              "A Listening Leadership"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-blue-700 w-6 h-6 mt-1" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mission Statement */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            My Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            My mission is simple — to amplify the voices of every student and
            drive meaningful change across our campus. From ensuring affordable
            services to creating better systems for student engagement, I believe
            the UG SRC can become a platform that works for everyone, not just a few.
          </p>

          <div className="mt-6 bg-blue-100 text-blue-900 px-6 py-4 rounded-xl text-center font-semibold text-xl">
            Student First. Always.
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
