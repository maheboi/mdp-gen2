import React from 'react';
import { Heart, Star, Trophy, Users, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black-900 mb-4">About MDP</h1>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        {/* Mission and Vision - Burgundy section with white text */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-red-900 text-white p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-red-600 mr-2" />
                <h2 className="text-2xl font-bold">Our Story</h2>
              </div>
              <p className="text-lg text-white">
                Malachi Destiny & Purpose, Inc., is a non-profit 501(c)(3) rooted in Houston's Third Ward community. With over 30 years of service, founders Prince and Sheila Couisnard have built a legacy of nurturing leaders and transforming communities through meaningful connection. Prince's vision to act as a father to a fatherless generation has shaped countless lives, guiding youth from challenging circumstances to become educators, entrepreneurs, and community leaders.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black-900 mb-4">Our Purpose</h3>
              <p className="mb-4">
                At MDP, we empower leaders and community members to build meaningful relationships that strengthen neighborhoods and beyond. Our mission is to provide experiences, exposure, and encouragement to guide youth and families, creating a lasting impact across generations.
              </p>
              <p className="mb-4">
                Born from a passion for fostering transformative connections, MDP cultivates leaders who drive positive change in their communities. We support individuals in overcoming challenges from generational and situational circumstances, helping them achieve personal growth and freedom.
              </p>
              <p className="mb-4">
                Through our approach, we nurture a growing community of transformational leaders who excel as educators, entrepreneurs, public servants, and advocates for humanity.
              </p>
              {/* Enhanced Overcoming Obstacles Subsection */}
              <h3 className="text-xl font-semibold text-black-900 mb-4">Overcoming Obstacles</h3>
              <p className="mb-4">
                The MDP movement has faced significant challenges in Houston's Third Ward, including generational poverty, a drug-infested culture, systemic educational gaps, fractured family structures, and skepticism toward messages of redemption. Tragically, the community has endured violence, with youth, parents, and volunteers lost to senseless acts, including young teens killed by gunfire. Families have struggled with basic needs—children missing school due to lack of clothing, parents seeking food to avoid child protective services, and youth facing academic delays or teenage pregnancies.
              </p>
              <p>
                Resistance from established churches, wary of inner-city youth, posed additional hurdles. Yet, through faith, prayer, and collective resolve, MDP's community—staff, volunteers, and supporters—has persevered. By fostering trust and modeling love, MDP has transformed lives, turning obstacles into opportunities for growth and unity.
              </p>
            </div>
          </div>
        </div>
        
        {/* Generational Legacy */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-2">Our Generational Legacy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Through our organization's engagement, encouragement, and empowerment, countless lives have been transformed into leaders who drive impact. Youth who joined our programs as teenagers are now adults, raising families and leading in their communities, advancing MDP's mission of fostering transformational leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Star className="h-5 w-5 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-black-900">Leadership Growth</h3>
              </div>
              <p>
                Our program alumni have become principals, officers, community leaders, and entrepreneurs, carrying forward our mission in their spheres of influence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Trophy className="h-5 w-5 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-black-900">Proven Impact</h3>
              </div>
              <p>
                With decades of experience, we've crafted an approach to create lasting change through supportive mentoring and practical skill-building.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Users className="h-5 w-5 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold text-black-900">Growing Reach</h3>
              </div>
              <p>
                From our roots in Houston's Third Ward, our impact extends to communities everywhere as we nurture young people and families to become agents of change.
              </p>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-2">Our Core Values</h2>
            <p className="text-lg text-gray-600">Reach, Redemption, Renewed Mind, Restoration</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Reach</h3>
              <p>
                We inspire leaders to extend their impact, fostering positive change across communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Redemption</h3>
              <p>
                We embrace the transformative power of personal redemption, offering hope and a fresh start.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Renewed Mind</h3>
              <p>
                We encourage renewed thinking through empowering teachings, fostering wise and heartfelt decisions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-black-900 mb-3">Restoration</h3>
              <p>
                We work to heal relationships, families, and communities through compassionate leadership and guidance.
              </p>
            </div>
          </div>
        </div>
        
        {/* Leadership */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated couple who guide our mission with compassion and vision
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <img src="/api/placeholder/600/300" alt="Prince and Sheila Couisnard" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black-900">Prince and Sheila Couisnard</h3>
                <p className="text-gray-600 mb-4">Co-Founders</p>
                <p className="text-gray-700 mb-4">
                  Since 1992, Prince and Sheila Couisnard have poured their hearts into Houston's Third Ward, moving from a suburban townhouse to a home in the inner city to build relationships with youth and families. With a passion for fostering empowerment, they founded Malachi Destiny & Purpose in 2012, following two decades of impactful work through Inner City Youth. Prince, a former professional baseball player with the Philadelphia Phillies, and Sheila have used sports, particularly basketball and football, as a "net" to connect with kids, fostering leadership and personal growth.
                </p>
                <p className="text-gray-700 mb-4">
                  Prince's greatest accomplishment is his enduring influence on the lives he touched, fundamentally altering their trajectories. Youth who joined his programs as teenagers are now adults, raising children and grandchildren while leading as educators, NFL players, principals, and community advocates. His impact continues to grow across generations, as he now serves as a consultant to former mentees who have launched their own initiatives, equipped with purpose and readiness as he envisioned 31 years ago. Rather than imposing his goals, Prince has focused on nurturing the inherent potential within each individual, fostering a sense of self-worth and identity through relational leadership.
                </p>
                <p className="text-gray-700">
                  A pivotal moment came in 1997 when Prince and Sheila welcomed 12 inner-city youth to live with them for the summer, opening their home to model authentic mentorship and empowerment. This initiative, supported by the McNair Foundation and organizations nationwide, led to a transformative Summer Leadership Program that sent hundreds of youth to camps across Texas, Colorado, Florida, Missouri, Louisiana, and Indiana over 20 years. These experiences instilled hope, resilience, and compassion, empowering a generation to overcome life's challenges. Prince's unconditional commitment and dedication as a role model to a fatherless community remain his most profound legacy, shaping leaders who continue to transform their spheres of influence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 bg-red-50 py-12 px-4 rounded-lg">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-black-900 mb-4">Transformational Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from those whose lives have been touched through our programs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "The guidance I received at MDP changed my path. Today, I serve as a school principal, sharing the lessons I learned with the next generation."
                </p>
                <div className="flex items-center">
                  <div className="bg-red-100 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-red-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-black-900">Marcus T.</p>
                    <p className="text-sm text-gray-600">Program Graduate, Now Educational Leader</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic text-gray-700 mb-4">
                  "As a former participant now running my own business, I've seen how MDP's leadership principles create lasting change across generations."
                </p>
                <div className="flex items-center">
                  <div className="bg-red-100 h-10 w-10 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-red-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-black-900">Jasmine R.</p>
                    <p className="text-sm text-gray-600">Former Participant, Now Entrepreneur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;