import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Star, Briefcase, GraduationCap, Heart, Globe } from 'lucide-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { get } from 'aws-amplify/api';

import image1 from '../images/pic4.png';
import image2 from '../images/RCA-Football-team-won-Superbowl-9a.jpg';
import image3 from '../images/RCA-biblestudy-copy-6.jpg';
import image4 from '../images/pic2.png';
import instagramQRCode from '../images/qr-code.png';
import poster1 from '../images/poster1.png';
import poster3 from '../images/poster3.png';
import poster5 from '../images/poster5.png';
import mobecVideo1 from '../videos/MobecChallenge1.mp4';
import mobecVideo2 from '../videos/MobecChallenge3.mp4';
import mobecVideo3 from '../videos/MobecChallenge5.mp4';

const HomePage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const restOperation = get({
          apiName: 'SheetAPI',
          path: '/sheet'
        });
        
        const { body } = await restOperation.response;
        const response = await body.json();

        if (!response.values || response.values.length === 0) {
          setEvents([]);
          return;
        }

        const [headers, ...rows] = response.values;
        const fetchedEvents = rows
          .map(row => ({
            date: row[0]?.startsWith('D') ? row[0].slice(1).trim() : row[0]?.trim(),
            event: row[1]?.trim(),
            embed: row[2]
          }))
          .filter(event => event.event && event.embed)
          .map(event => ({
            ...event,
            embed: event.embed
              .replace(/width="[^"]*"/, 'width="100%"')
              .replace(/height="[^"]*"/, 'height="100%"')
          }));

        setEvents(fetchedEvents);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transforming Lives Through Generational Leadership
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nurturing & guiding youth and families through meaningful relationships
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link 
              to="/donate" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Donate Now
            </Link>
            <Link 
              to="/programs" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-900 font-bold py-3 px-8 rounded-lg shadow-lg transition"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Picture Slide Reel */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Community in Action</h2>
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000}
            showStatus={false}
            className="max-w-4xl mx-auto"
          >
            <div>
              <img src={image4} alt="Fellowship Day Event" className="rounded-lg" />
            </div>
            <div>
              <img src={image1} alt="Basketball Program Highlights" className="rounded-lg" />
            </div>
            <div>
              <img src={image3} alt="Youth Leadership Workshop" className="rounded-lg" />
            </div>
            <div>
              <img src={image2} alt="Fellowship Day Event" className="rounded-lg" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* MOBEC Challenge Videos Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cooz Fam M.O.B.E.C. Challenge</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Cooz Fam M.O.B.E.C. Challenge is a seven-month initiative (April–October) to engage targeted groups in supporting the financial goals of the Cooz Fam Charity Golf Tournament and the Cooz Legacy Souvenir Booklet. By mobilizing families, friends, and communities, it fosters collective action to fund transformative programs, building on the legacy of Malachi D&P’s leadership initiatives.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <video
                src={mobecVideo1}
                controls
                className="w-full h-48 md:h-64 object-cover"
                poster={poster1}
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enduring Passion: 30+ Years of Ministry</h3>
                <p className="text-gray-700">
                  Prince Couisnard, cofounder of Malachi Destiny & Purpose, shares why he's excited to continue ministry after 30 years—because everyone he teaches goes on to teach and do ministry as well, creating a ripple effect of generational impact.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <video
                src={mobecVideo2}
                controls
                className="w-full h-48 md:h-64 object-cover"
                poster={poster3}
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Uniting for Love: Community Connections</h3>
                <p className="text-gray-700">
                  Explore how we're bringing people together to represent and show love—a vital force much needed in the community—to foster unity, support, and transformative relationships that heal and strengthen our neighborhoods.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <video
                src={mobecVideo3}
                controls
                className="w-full h-48 md:h-64 object-cover"
                poster={poster5}
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wichita's Embrace: MOBEC</h3>
                <p className="text-gray-700">
                  Hear why Wichita was one of the cities chosen for the MOBEC Challenge: it's home to some of the most embracing people Prince has ever seen, fully welcoming the message and purpose of Malachi D&P with open hearts and unwavering support.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Get Involved</h3>
            <p className="text-lg text-gray-700 mb-6">
              Be a part of our fundraising movement—contact us to learn how your group can contribute and make a lasting impact.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              to="/mobec-challenge"
              className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white font-medium py-3 px-6 rounded-lg shadow transition"
            >
              <Heart className="h-5 w-5 mr-2" />
              Learn More About MOBEC
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Event Videos Section */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Event Videos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
                <div className="relative pt-[56.25%]">
                  <div className="absolute top-0 left-0 w-full h-full" dangerouslySetInnerHTML={{ __html: event.embed }} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.event}</h3>
                </div>
              </div>
            ))}
          </div>
          {events.length === 0 && (
            <p className="text-center text-gray-700">No featured videos available at this time.</p>
          )}
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Mission</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">Malachi Destiny & Purpose seeks to nurture and guide a generation of inner-city youth and families through meaningful relationships by:</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                  <Award className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p>Delivering transformative programs that empower youth and families to grow as leaders</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                  <BookOpen className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Encounter</h3>
                <p>Creating meaningful connections that foster hope, resilience, and community bonds</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                  <Users className="h-6 w-6 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exposure</h3>
                <p>Opening pathways to new opportunities and perspectives for lasting impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generational Leadership Impact */}
      <div className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Generational Leadership Impact</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Through MDP’s engagement, encouragement, and empowerment, countless lives have been transformed into leaders who drive impact across various sectors.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                <GraduationCap className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p>Our alumni include college graduates, principals, and educational leaders shaping the next generation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                <Briefcase className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Business</h3>
              <p>Former participants lead as entrepreneurs, creating opportunities in their communities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                <Star className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Public Service</h3>
              <p>Our mentees serve as officers, civil servants, and organizers dedicated to the public good.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                <Heart className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advocacy</h3>
              <p>Many alumni lead as community advocates, continuing our mission of relational leadership.</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
              MDP’s commitment extends beyond boundaries to empower youth and families, nurturing their potential to become transformative leaders.
            </p>
            <Link to="/programs" className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white font-medium py-3 px-6 rounded-lg shadow transition">
              <Globe className="h-5 w-5 mr-2" />
              Learn About Our Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Our Impact Stats */}
      <div className="bg-red-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-red-400 mb-2">7,000+</p>
              <p className="text-lg">Youth Served</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-red-400 mb-2">31+</p>
              <p className="text-lg">Years of Service</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-red-400 mb-2">2,000+</p>
              <p className="text-lg">Families Supported</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-red-400 mb-2">500+</p>
              <p className="text-lg">Community Partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Transformation */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Transformation</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
            For over three decades, Malachi Destiny & Purpose has transformed lives by empowering youth to become leaders who guide their families and communities. Participants, once teenagers, are now adults raising their own families, extending the organization’s impact. By addressing generational poverty and systemic challenges, MDP fosters hope and resilience, creating a legacy of positive change through its programs and partnerships.
          </p>
          <Link to="/about" className="inline-flex items-center bg-red-900 hover:bg-red-800 text-white font-medium py-3 px-6 rounded-lg shadow transition">
            <Heart className="h-5 w-5 mr-2" />
            Learn More About Our Impact
          </Link>
        </div>
      </div>

      {/* Join Our Cooz Fam Campaign */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Cooz Fam Campaign</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Help us make a lasting impact on future leaders. Become a Game Changer by supporting MDP’s mission to transform lives through generational leadership.
          </p>
          <div className="mb-8">
            <img
              src={instagramQRCode}
              alt="Follow MDP on Instagram"
              className="mx-auto h-48 w-48 md:h-64 md:w-64 rounded-lg shadow-lg border-4 border-red-600 p-2 bg-white"
            />
            <p className="mt-4 text-lg font-semibold text-gray-900">Scan to Follow MDP on Instagram!</p>
          </div>
          <Link to="/donate" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg inline-block transition">
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;