import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Award, Users, Calendar, Heart } from 'lucide-react';

const ProgramsPage = () => {
  const [activeProgram, setActiveProgram] = useState(null);

  const toggleProgram = (index) => {
    setActiveProgram(activeProgram === index ? null : index);
  };

  const programs = [
    {
      title: "Personal Empowerment",
      icon: <Heart className="h-6 w-6 text-red-700" />,
      description: "The Personal Empowerment program guided youth and families toward personal growth and resilience through meaningful relationships and mentorship, fostering hope and self-worth.",
      details: [
        "Facilitated weekly group sessions for personal development",
        "Provided one-on-one mentoring to build confidence",
        "Organized community service projects to strengthen bonds",
        "Hosted fellowship events to promote emotional well-being"
      ]
    },
    {
      title: "Educational Support",
      icon: <BookOpen className="h-6 w-6 text-red-700" />,
      description: "The Educational Support program helped thousands of youth overcome systemic educational barriers, achieving academic success and preparing for future opportunities.",
      details: [
        "Supported literacy through reading programs",
        "Offered speech and debate coaching to build communication skills",
        "Secured scholarships for higher education",
        "Provided tutoring and mentoring for students struggling academically"
      ]
    },
    {
      title: "Leadership Development",
      icon: <Award className="h-6 w-6 text-red-700" />,
      description: "The Leadership Development program, including the Summer Leadership Program (1998-2010), empowered over 7,000 youth with an 85% completion rate, equipping them with skills to become community leaders.",
      details: [
        "Ran Summer Leadership Program with mentorship and educational classes",
        "Organized leadership conferences and retreats in Florida, Alabama, and D.C.",
        "Taught public speaking and presentation skills",
        "Fostered character growth and ethical decision-making",
        "Led over 20 trips to KAA and 25 to Camp Red Cloud"
      ]
    },
    {
      title: "Athletic Leadership",
      icon: <Users className="h-6 w-6 text-red-700" />,
      description: "The Athletic Leadership program used sports to build resilience, teamwork, and perseverance, engaging over 400 youth in basketball, 150 in football, 150 in baseball, and 50 in cheerleading.",
      details: [
        "Operated Biddy Basketball and Cooz Elite Training programs",
        "Supported football, baseball, and cheerleading initiatives",
        "Hosted sports camps and tournaments",
        "Promoted athletic skill development and fitness"
      ]
    },
    {
      title: "Economic Empowerment",
      icon: <Calendar className="h-6 w-6 text-red-700" />,
      description: "The Economic Empowerment program equipped families with financial literacy and career skills, helping them overcome generational poverty and achieve stability.",
      details: [
        "Offered summer internships for youth",
        "Conducted financial literacy workshops",
        "Provided career development and job readiness training",
        "Supported entrepreneurship through training and mentorship"
      ]
    },
    {
      title: "Community Support",
      icon: <Heart className="h-6 w-6 text-red-700" />,
      description: "Through initiatives like Holiday Blessings and Direct Interventions, the Community Support program aided over 1,000 families during Christmas and Thanksgiving and supported housing and tragedy recovery efforts.",
      details: [
        "Provided Christmas and Thanksgiving support for 1,000+ families",
        "Led direct interventions to build houses and reconnect families",
        "Assisted families recovering from tragedies",
        "Coordinated with volunteers and vendors for community aid"
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Our Historical Programs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Malachi Destiny & Purpose has transformed lives through impactful programs that nurtured youth and families, fostering leadership and community resilience.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>
        
        {/* Legacy of Impact - Burgundy with white text */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black-900 mb-6 text-center">A Legacy of Impact</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-900 text-white p-6">
              <p className="text-lg text-white">
                For over 31 years, MDP’s programs transformed Houston’s Third Ward, serving over 7,000 youth and 2,000 families through free initiatives. From leadership camps to sports leagues and community support, these efforts built resilience, hope, and lasting change.
              </p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-black-900">Summer Leadership</h4>
                  <p>Empowered 7,000+ youth with an 85% completion rate, impacting 2,000+ families.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black-900">Sports Programs</h4>
                  <p>Engaged 750+ youth in basketball, football, baseball, and cheerleading.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black-900">Holiday Support</h4>
                  <p>Served 1,000+ families during Christmas and Thanksgiving.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black-900">Educational Support</h4>
                  <p>Helped thousands overcome academic barriers, securing scholarships and tutoring.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black-900">Economic Empowerment</h4>
                  <p>Equipped families with financial literacy and career skills for stability.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-black-900">Community Support</h4>
                  <p>Supported 1,000+ families with housing and tragedy recovery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Program Accordion */}
        <div>
          <h2 className="text-2xl font-bold text-black-900 mb-6 text-center">Historical Program Details</h2>
          <div className="max-w-3xl mx-auto">
            {programs.map((program, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className={`w-full flex items-center justify-between p-4 text-left ${activeProgram === index ? 'bg-red-900 text-white' : 'bg-white text-black-900'}`}
                  onClick={() => toggleProgram(index)}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${activeProgram === index ? 'bg-white' : 'bg-red-100'}`}>
                      {React.cloneElement(program.icon, { className: activeProgram === index ? 'text-red-900' : 'text-red-700' })}
                    </div>
                    <span className="text-lg font-semibold">{program.title}</span>
                  </div>
                  {activeProgram === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                
                {activeProgram === index && (
                  <div className="p-4 bg-white">
                    <p className="mb-4">{program.description}</p>
                    <h4 className="font-semibold mb-2 text-black-900">Program Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {program.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;