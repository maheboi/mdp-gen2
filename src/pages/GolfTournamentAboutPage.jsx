import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Carousel Images
import image1 from '../images/pic4.png';
import image2 from '../images/RCA-Football-team-won-Superbowl-9a.jpg';
import image3 from '../images/RCA-biblestudy-copy-6.jpg';
import image4 from '../images/pic2.png';

import coozEliteLogo from '../images/coozelite.png';
import mdpLogo from '../images/custom-icon.jpg';

const signatureSentence = "For more than 30 years we have invested in young lives through mentorship, leadership, faith, and competition. The Cooz Fam M.O.B.E.C. Challenge invites you to help build the future of that mission.";

const GolfTournamentAboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-700 to-amber-600 text-white py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            About the Cooz Fam Golf Tournament
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl max-w-2xl mx-auto"
          >
            {signatureSentence}
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        
        {/* Trusted Guides */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Your Trusted Guides</h2>
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div>
              <div className="w-32 h-32 mx-auto bg-gray-100 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                <img 
                  src={mdpLogo} 
                  alt="MDP Logo" 
                  className="w-28 h-28 object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium">Prince &amp; Sheila Couisnard</h3>
              <p className="text-red-600">Founders of Cooz Elite &amp; Malachi Destiny and Purpose</p>
            </div>
          </div>
        </motion.div>

        {/* Two Ministries */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <div className="border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <img src={coozEliteLogo} alt="Cooz Elite Logo" className="w-12 h-12 object-contain" />
              <h3 className="text-3xl font-semibold">Cooz Elite</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Athletic development, healthy competition, discipline, and leadership through sports. 
              For over 30 years we have built character on and off the field.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <img src={mdpLogo} alt="MDP Logo" className="w-12 h-12 object-contain" />
              <h3 className="text-3xl font-semibold">Malachi Destiny and Purpose (MDP)</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Faith-centered mentorship, leadership development, and holistic support for youth and families. 
              Helping young people discover their God-given destiny and purpose.
            </p>
          </div>
        </motion.div>

        {/* Proven Impact + Carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-12"
        >
          <h2 className="text-center text-3xl font-semibold mb-12">Proven Impact – 30+ Years</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center mb-12">
            <div><div className="text-5xl font-bold text-red-600">7,000+</div><div className="text-gray-600 mt-2">Youth Served</div></div>
            <div><div className="text-5xl font-bold text-red-600">31+</div><div className="text-gray-600 mt-2">Years of Service</div></div>
            <div><div className="text-5xl font-bold text-red-600">2,000+</div><div className="text-gray-600 mt-2">Families Supported</div></div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Our Community in Action
            </h3>
            <Carousel
              showThumbs={false}
              autoPlay
              infiniteLoop
              interval={2500}
              showStatus={false}
              className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl"
            >
              <div><img src={image4} alt="Fellowship Day Event" className="rounded-2xl" /></div>
              <div><img src={image1} alt="Basketball Program Highlights" className="rounded-2xl" /></div>
              <div><img src={image3} alt="Youth Leadership Workshop" className="rounded-2xl" /></div>
              <div><img src={image2} alt="Football Team Celebration" className="rounded-2xl" /></div>
            </Carousel>
          </div>
        </motion.div>

        {/* Why Support Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-semibold mb-6">Why Your Support Matters</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
            Every dollar raised through the Cooz Fam Golf Tournament goes directly to expanding mentorship programs, 
            leadership camps, athletic opportunities, and faith-based character development for the next generation in Houston and Wichita.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link 
              to="/golftournament/donate" 
              className="inline-block bg-red-700 text-white px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-red-800 transition"
            >
              Sponsor the Golf Tournament Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GolfTournamentAboutPage;