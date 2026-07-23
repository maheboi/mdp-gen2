import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import HoustonSkyline from '../images/houston-skyline.jpg';
import WichitaSkyline from '../images/wichita-skyline.jpg';
import BeautifulFairway from '../images/beautiful-fairway-1.jpg';
import AwardsCeremony from '../images/golf-awards-ceremony.jpg';
import TravisHardwick from '../images/travis-hardwick.jpg';

const signatureSentence = "For more than 30 years we have invested in young lives through mentorship, leadership, faith, and competition. The Cooz Fam M.O.B.E.C. Challenge invites you to help build the future of that mission.";

const GolfTournamentHomePage = () => {
  const [hoveredSide, setHoveredSide] = useState(null);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-red-800 to-yellow-600 text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4"
          >
            Houston vs Wichita
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl mb-3"
          >
            The Cooz Fam Golf Tournament
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-medium mb-8 text-yellow-200"
          >
            at Tour 18 Humble • Humble, Texas
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto text-xl mb-10"
          >
            {signatureSentence}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/golftournament/donate"
              className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition"
            >
              Sponsor the Golf Tournament <span className="text-xl">→</span>
            </Link>
            <Link
              to="/golftournament/about"
              className="border-2 border-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition"
            >
              Learn Our Story
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Skyline Split */}
      <div className="flex flex-col lg:flex-row">
        {/* HOUSTON */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:w-1/2 relative overflow-hidden group cursor-pointer min-h-[520px] lg:min-h-[700px]"
          onMouseEnter={() => setHoveredSide('houston')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <img
            src={HoustonSkyline}
            alt="Houston Skyline"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/70 to-red-950/95 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter"
            >
              HOUSTON
            </motion.h2>
            <p className="text-xl mt-1">Crimson & Gold</p>
            <div className="mt-6 sm:mt-8 text-sm sm:text-base leading-relaxed max-w-md">
              Houston’s Third Ward has been transformed for over 30 years through MDP’s faith-based mentorship and sports programs. This golf tournament brings the community together to raise funds and expand life-changing opportunities for our youth.
            </div>
          </div>
        </motion.div>

        {/* WICHITA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:w-1/2 relative overflow-hidden group cursor-pointer min-h-[520px] lg:min-h-[700px]"
          onMouseEnter={() => setHoveredSide('wichita')}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <img
            src={WichitaSkyline}
            alt="Wichita Skyline"
            className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/70 to-yellow-600/95 flex flex-col justify-end p-6 sm:p-10 lg:p-12">
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter"
            >
              WICHITA
            </motion.h2>
            <p className="text-xl mt-1">Black & Yellow</p>
            <div className="mt-6 sm:mt-8 text-sm sm:text-base leading-relaxed max-w-md">
              Wichita has stood with the Cooz Fam mission, investing in young lives through mentorship, leadership, and faith. This golf tournament unites our city to support the next generation and strengthen our community.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Message from Golf Chair – Travis Hardwick */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-5">
              <div className="aspect-[4/5] max-h-[300px] bg-gray-100 rounded-3xl overflow-hidden shadow-xl mx-auto">
                <img
                  src={TravisHardwick}
                  alt="Travis Hardwick - Golf Chair"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-7">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Message from Golf Chair – Travis Hardwick</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  As someone who believes deeply in the power of relationships, mentorship, and leadership development,
                  it is an honor to serve as Chair of the Cooz Fam Golf Tournament. Over the years, I’ve seen firsthand
                  the impact this mission has had on young people, families, and communities.
                </p>
                <p>
                  This is more than a program—it’s a proven process that develops discipline, character, and leadership 
                  that carries far beyond the game. I invite you to join me in supporting this tournament and becoming 
                  part of a mission that is developing the next generation of leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Golf Course Highlights */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold mb-4">The Golf Tournament Experience</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for an unforgettable day of golf at Tour 18 Humble.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src={BeautifulFairway}
                alt="Beautiful fairways at Tour 18 Humble"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Beautiful Fairways at Tour 18 Humble</h3>
                <p className="text-gray-600">
                  Play on one of Texas’s most unique courses — featuring stunning replicas of America’s greatest golf holes.
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src={AwardsCeremony}
                alt="Golf tournament awards ceremony"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Awards Ceremony</h3>
                <p className="text-gray-600">Celebrate with fellow golfers and recognize our generous sponsors.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Value to Sponsors + Opportunity */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-900 py-20 text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="text-2xl font-semibold mb-6">The Value to Sponsors</h3>
              <ul className="space-y-4 text-lg">
                <li>• Leadership Development — preparing young people for real-world success</li>
                <li>• Workforce Readiness — building discipline, accountability, and character</li>
                <li>• Community Impact — strengthening families and local communities</li>
                <li>• Brand Alignment — associating your organization with a trusted 30+ year mission</li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="text-2xl font-semibold mb-6">The Opportunity</h3>
              <ul className="space-y-4 text-lg">
                <li>• Visibility among community and business leaders</li>
                <li>• Connection to a multi-generational network of alumni and supporters</li>
                <li>• Alignment with a mission that produces measurable life outcomes</li>
              </ul>
              <div className="mt-12">
                <Link
                  to="/golftournament/donate"
                  className="inline-block bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-semibold transition"
                >
                  Become a Sponsor Today →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Final Connection */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center px-6 py-20 bg-white border-t"
      >
        <p className="text-xl font-medium">
          This event directly supports the <span className="text-red-600 font-semibold">Cooz Fam M.O.B.E.C. Challenge</span> — 
          helping us expand mentorship programs and reach more young people.
        </p>
      </motion.div>
    </div>
  );
};

export default GolfTournamentHomePage;