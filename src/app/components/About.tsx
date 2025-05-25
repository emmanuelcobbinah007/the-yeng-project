import React from "react";

const About = () => {
  return (
    <section id="the-man" className="bg-white py-20 px-6">
      <div className="md:w-[85%] mx-auto">
        <div className="max-w-4xl mx-auto relative text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 text-center">
            Meet Michael Yeng
          </h2>

          <h3 className="text-xl md:text-2xl text-blue-700 mb-10 text-center font-medium">
            Hall President of Evandy Hall | Aspiring UGSRC President
          </h3>

          {/* Quote block with pseudo elements */}
          <div className="relative text-md md:text-lg lg:text-xl text-gray-700 leading-relaxed px-4 md:px-10 quote-block space-y-6">
            {/* Mobile version (hidden on md and above) */}
            <div className="block mx-auto w-[95%] md:w-[100%] md:hidden space-y-4">
              <p>
                Michael Yeng currently serves as the Hall President of Evandy
                Hall, known for his hands-on leadership and deep commitment to
                student welfare. Now, he's stepping forward to serve the entire
                student body as the next UGSRC President.
              </p>
              <p>
                His campaign focuses on empowerment, opportunity, and meaningful
                change — built on leadership that listens, understands, and
                delivers for all students.
              </p>
              <p className="font-semibold text-blue-900">
                Join the movement. Together, let’s build a better UGSRC for
                every student.
              </p>
            </div>

            {/* Full version (hidden on mobile) */}
            <div className="hidden md:block space-y-6">
              <p>
                Michael Yeng is a passionate and proven student leader. He
                currently serves as the Hall President of Evandy Hall at the
                University of Ghana. With a strong record of transformative
                leadership and a deep commitment to student welfare, he is
                stepping forward to serve the entire student body as the next
                UGSRC President.
              </p>

              <p>
                Michael's vision is clear: to build a University of Ghana where
                every student is empowered, supported and equipped with the
                tools and opportunities to thrive academically, socially and
                professionally.
              </p>

              <p>
                His campaign stands for action, inclusion and impact. He
                believes real change begins with real leadership — leadership
                that listens, understands and delivers.
              </p>

              <p className="font-semibold text-blue-900">
                Now more than ever, your support matters. Join the movement.
                Let's build the UGSRC we all want to see together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
