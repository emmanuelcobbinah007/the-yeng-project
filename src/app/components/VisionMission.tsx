import React from 'react';

const VisionMission = () => {
  const pillars = [
    {
      title: 'Empowered Students',
      description: 'Ensuring every student has a voice that is heard and respected.',
      icon: '🎓',
    },
    {
      title: 'Transparent Governance',
      description: 'Promoting integrity, accountability, and openness in all dealings.',
      icon: '🔍',
    },
    {
      title: 'Welfare First',
      description: 'Improving campus living, academics, and student support systems.',
      icon: '🤝',
    },
    {
      title: 'Digital Innovation',
      description: 'Leveraging tech for better SRC communication and service delivery.',
      icon: '💡',
    },
  ];

  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Vision & Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12">
          Our campaign is rooted in values that matter most to students. Here's what Michael stands for:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left transition hover:shadow-lg"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
