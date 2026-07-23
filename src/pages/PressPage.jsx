import React, { useState } from 'react';
import { ZoomIn, X, Star } from 'lucide-react';
import ebonyArticleImage from '../images/ebony-article.jpg';
import essenceArticleImage from '../images/essence-article.jpg';
import princeArticleImage1 from '../images/prince-newsletter-1.jpg';
import princeArticleImage2 from '../images/prince-newsletter-2.jpg';
import mcnairArticleImage1 from '../images/mcnair-article-1.jpg';
import mcnairArticleImage2 from '../images/mcnair-article-2.jpg';
import compassionateConservatismCover from '../images/compassionate-conservatism-cover.jpg';
import streetSaintsCover from '../images/street-saints-cover.jpg';
import boldAwardImage from '../images/bold-award.jpg';

const PressPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 'mcnair',
      publication: 'Robert & Janice McNair Foundation',
      title: 'Major Partnership and Support',
      description: 'The McNair Foundation’s partnership with Inner City Youth, the precursor to Malachi Destiny & Purpose (MDP), provided over $1 million to support transformative youth programs, including summer camps, leadership training, and community athletics.',
      images: [mcnairArticleImage1, mcnairArticleImage2],
      content: `The McNair Foundation played a pivotal role in supporting Inner City Youth, the predecessor to Malachi Destiny & Purpose (MDP), with over $1 million in funding. This partnership enabled Inner City Youth to send thousands of young people to camps across the United States, develop athletic discipleship programs, expand the Summer Leadership Program, and establish an Internship Program. These initiatives transformed lives in Houston’s Third Ward, empowering youth to become leaders. Today, MDP continues this legacy, and this website represents MDP’s ongoing mission to create lasting change.`
    },
    {
      id: 'ebony',
      publication: 'EBONY Magazine',
      title: 'Sisterspeak Luncheon Honoree',
      description: 'Sheila was honored by EBONY Magazine and Pine-Sol at their Sisterspeak Luncheon in Houston, recognizing her as a force for positive change in the Third Ward community.',
      images: [ebonyArticleImage],
      content: `Featured in EBONY Magazine's coverage of the Sisterspeak Luncheon in Houston, Texas. Sheila Couisnard was recognized alongside other powerful women making a difference in their communities. The article highlighted her work as "Mama Sheila" and her foundation's role in providing team sports, vocational life skills seminars, after-school programs, counseling, 12-step groups, and summer entrepreneurial and leadership training camps and mission trips. This website represents Malachi Destiny & Purpose (MDP), which continues the legacy of Inner City Youth’s transformative work.`
    },
    {
      id: 'essence',
      publication: 'ESSENCE Magazine',
      title: '"She\'s Got The Power"',
      description: 'Sheila Couisnard was featured as one of the powerful women bringing family values to her community, highlighting her role as "Mama Sheila" to Houston\'s youth.',
      images: [essenceArticleImage],
      content: `ESSENCE Magazine featured Sheila in their "She's Got The Power" series, celebrating African-American women leading positive change. The article detailed how since 1995, the Couisnards have offered "a big family atmosphere" through their nonprofit organization, providing summer camps, athletic teams, after-school tutoring and mentoring, health seminars, substance-abuse recovery help, and counseling services. This website represents Malachi Destiny & Purpose (MDP), which builds on Inner City Youth’s mission to empower Houston’s youth.`
    },
    {
      id: 'newsletter',
      publication: 'Wind for New Wings Book',
      title: 'Rev. Prince Couisnard Profile',
      description: 'Featured in "Wind for New Wings: A Message from the Leaders of Today to the Leaders of the New Millennium" by Dr. Bertie Simmons, highlighting Prince\'s transformational leadership journey.',
      images: [princeArticleImage1, princeArticleImage2],
      content: `Featured in "Wind for New Wings: A Message from the Leaders of Today to the Leaders of the New Millennium" by Dr. Bertie Simmons, a renowned Houston educator who served for 58 years in leadership positions within urban school districts. Dr. Simmons, known for her visionary approach and commitment to equity in education, profiled Prince's transformation from professional baseball player with the Philadelphia Phillies to community leader. The feature emphasized his success in maintaining lifestyle programs and his vision for creating lasting change in Houston's inner city communities through relational leadership and mentorship. This website represents Malachi Destiny & Purpose (MDP), continuing Inner City Youth’s legacy of leadership development.`
    },
    {
      id: 'compassionate-conservatism',
      publication: 'Compassionate Conservatism Book',
      title: 'Model for Social Entrepreneurship',
      description: 'Inner City Youth, the precursor to Malachi Destiny & Purpose (MDP), was featured in Marvin Olasky’s “Compassionate Conservatism” for its innovative programs using sports and mentorship to transform lives in Houston’s Third Ward.',
      image: compassionateConservatismCover,
      isBookFeature: true,
      content: `Marvin Olasky’s “Compassionate Conservatism” showcased Inner City Youth, the predecessor to Malachi Destiny & Purpose (MDP), as a model for social entrepreneurship. Operating in Houston’s Third Ward, Inner City Youth used basketball and other sports to build trust and mentor youth, providing a refuge for those in challenging circumstances. Led by Prince and Sheila Couisnard, these programs fostered education, moral growth, and leadership, impacting hundreds of lives. This website represents MDP, carrying forward Inner City Youth’s mission to empower communities.`
    },
    {
      id: 'street-saints',
      publication: 'Street Saints Book',
      title: 'Faith-Based Youth Transformation',
      description: 'Inner City Youth, the foundation for Malachi Destiny & Purpose (MDP), was featured in Barbara Elliott’s “Street Saints” for its faith-based programs that uplifted at-risk youth and drove community change in Houston.',
      image: streetSaintsCover,
      isBookFeature: true,
      content: `Barbara Elliott’s “Street Saints,” in Chapter 4: “Rescuing America’s At-Risk Kids,” recognized Inner City Youth, the precursor to Malachi Destiny & Purpose (MDP), for its impactful work since 1992. In Houston’s Third Ward, Inner City Youth’s faith-based programs provided mentorship, sports, and education, creating stable environments for at-risk youth. These efforts, led by Prince Couisnard, produced a new generation of leaders who now mentor others. This website represents MDP, dedicated to continuing Inner City Youth’s transformative legacy.`
    },
    {
      id: 'bold-award',
      publication: 'Houston Texans & Coca-Cola',
      title: '2023 BOLD Award Recipient',
      description: 'Prince Couisnard was honored with the 2023 BOLD Award by the Houston Texans and Coca-Cola, recognizing him as a Black, Outstanding Leader and Doer for his 31 years of transformative work in Houston’s Third Ward through Inner City Ministries.',
      images: [boldAwardImage],
      content: `On September 20, 2023, the Houston Texans and Coca-Cola awarded Prince Couisnard the 2023 BOLD Award, celebrating Black, Outstanding Leaders and Doer making a difference in Houston. As CEO, President, and Founder of Inner City Ministries, Couisnard has impacted the Third Ward community for 31 years by creating programs and opportunities for individuals in impoverished neighborhoods. His vision equips young men and women with tools to become successful parents and leaders. The award, accompanied by a grant of over $7,000, was presented by Vice President of the Houston Texans Foundation Hannah McNair, TORO, and Texans Cheerleaders. This website represents Malachi Destiny & Purpose (MDP), which continues the legacy of Inner City Youth’s transformative work.`
    }
  ];

  const openModal = (article) => {
    if (!article.isBookFeature) {
      setSelectedArticle(article);
    }
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black-900 mb-4">Press and Recognition</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The leadership of Malachi Destiny & Purpose (MDP) has driven transformative impact through organizations like Forge for Families and Inner City Youth, earning widespread recognition for innovative programs in Houston’s Third Ward. Today, MDP continues this legacy, and this website showcases our ongoing mission.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group lg:col-span-2"
            onClick={() => openModal(articles[0])}
          >
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto bg-gray-100 overflow-hidden relative">
                <img
                  src={articles[0].images[0]}
                  alt="McNair Foundation Partnership Recognition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="p-4 md:w-2/3">
                <div className="text-sm text-red-600 font-semibold mb-1">{articles[0].publication}</div>
                <h3 className="text-lg font-bold text-black-900 mb-2">{articles[0].title}</h3>
                <p className="text-gray-600 text-sm mb-3">{articles[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Summer Leadership</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">Athletic Programs</span>
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">College Scholarships</span>
                </div>
                <button className="text-red-600 font-medium text-sm hover:text-red-700">View Recognition →</button>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => openModal(articles[1])}
          >
            <div className="h-48 bg-gray-100 overflow-hidden relative">
              <img
                src={articles[1].images[0]}
                alt="EBONY Magazine Sisterspeak Luncheon Feature"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm text-red-600 font-semibold mb-1">{articles[1].publication}</div>
              <h3 className="text-lg font-bold text-black-900 mb-2">{articles[1].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{articles[1].description}</p>
              <button className="text-red-600 font-medium text-sm hover:text-red-700">Read Full Article →</button>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => openModal(articles[2])}
          >
            <div className="h-48 bg-gray-100 overflow-hidden relative">
              <img
                src={articles[2].images[0]}
                alt="ESSENCE Magazine She's Got The Power Feature"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm text-red-600 font-semibold mb-1">{articles[2].publication}</div>
              <h3 className="text-lg font-bold text-black-900 mb-2">{articles[2].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{articles[2].description}</p>
              <button className="text-red-600 font-medium text-sm hover:text-red-700">Read Full Article →</button>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => openModal(articles[3])}
          >
            <div className="h-48 bg-gray-100 overflow-hidden relative">
              <img
                src={articles[3].images[0]}
                alt="Wind for New Wings Book Feature"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm text-red-600 font-semibold mb-1">{articles[3].publication}</div>
              <h3 className="text-lg font-bold text-black-900 mb-2">{articles[3].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{articles[3].description}</p>
              <button className="text-red-600 font-medium text-sm hover:text-red-700">Read Full Article →</button>
            </div>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            onClick={() => openModal(articles[6])}
          >
            <div className="h-48 bg-gray-100 overflow-hidden relative">
              <img
                src={articles[6].images[0]}
                alt="Houston Texans & Coca-Cola BOLD Award"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm text-red-600 font-semibold mb-1">{articles[6].publication}</div>
              <h3 className="text-lg font-bold text-black-900 mb-2">{articles[6].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{articles[6].description}</p>
              <button className="text-red-600 font-medium text-sm hover:text-red-700">View Recognition →</button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="h-48 bg-gray-100 overflow-hidden relative">
              <img
                src={articles[4].image}
                alt="Compassionate Conservatism Book Cover"
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                BOOK FEATURE
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm text-blue-600 font-semibold mb-1">{articles[4].publication}</div>
              <h3 className="text-lg font-bold text-black-900 mb-2">{articles[4].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{articles[4].description}</p>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-blue-800 text-xs italic">
                  "Couisnard gains initial respect by competing on the basketball court, the place 'where manhood is taught in the ghetto.'" - Marvin Olasky
                </p>
              </div>
              <div className="flex flex-wrap gap-1 text-xs text-gray-500">
                <span>Author: Marvin Olasky</span> • <span>Policy Influence</span> • <span>Social Entrepreneurship Model</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
            <div className="h-48 bg-gray-100 overflow-hidden relative">
              <img
                src={articles[5].image}
                alt="Street Saints Book Cover"
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
              />
              <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                BOOK FEATURE
              </div>
            </div>
            <div className="p-4">
              <div className="text-sm text-blue-600 font-semibold mb-1">{articles[5].publication}</div>
              <h3 className="text-lg font-bold text-black-900 mb-2">{articles[5].title}</h3>
              <p className="text-gray-600 text-sm mb-3">{articles[5].description}</p>
              <div className="bg-blue-50 p-3 rounded-lg mb-3">
                <p className="text-blue-800 text-xs italic">
                  "Inner City Youth, which Prince began in 1992, has produced a new generation of young leaders who came through the program and are now working with the youngsters full time." - Barbara Elliott
                </p>
              </div>
              <div className="flex flex-wrap gap-1 text-xs text-gray-500">
                <span>Author: Barbara Elliott</span> • <span>Faith-Based Programs</span> • <span>At-Risk Youth Model</span>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
            <div className="text-center">
              <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
                <Star className="h-6 w-6 text-red-700" />
              </div>
              <h3 className="text-lg font-bold text-black-900 mb-2">Media Recognition</h3>
              <p className="text-gray-700 text-sm mb-4">
                Inner City Youth, the foundation for Malachi Destiny & Purpose (MDP), was featured in multiple national publications for its groundbreaking community work in Houston’s Third Ward.
              </p>
              <div className="text-2xl font-bold text-red-600 mb-1">7+</div>
              <p className="text-sm text-gray-600">Major Publications & Awards</p>
            </div>
          </div>
        </div>
      </div>

      {selectedArticle && (
        <div className="fixed inset-0 z-50 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
          <div className="flex items-center justify-center min-h-full">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" style={{ backgroundColor: 'white' }}>
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between rounded-t-lg" style={{ backgroundColor: 'white' }}>
                <div>
                  <div className="text-sm text-red-600 font-semibold">{selectedArticle.publication}</div>
                  <h2 className="text-xl font-bold text-black-900">{selectedArticle.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-600" />
                </button>
              </div>

              <div className="p-6" style={{ backgroundColor: 'white' }}>
                <div className="mb-6">
                  {selectedArticle.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedArticle.title} - Image ${index + 1}`}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-4"
                    />
                  ))}
                </div>

                <div className="prose max-w-none" style={{ backgroundColor: 'white' }}>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {selectedArticle.description}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedArticle.content}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t" style={{ backgroundColor: 'white' }}>
                  <button
                    onClick={closeModal}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PressPage;