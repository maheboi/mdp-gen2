import React from 'react';
import GolfTournamentHeader from '../components/GolfTournamentHeader';
import { Check } from 'lucide-react';

const ticketOptions = [
  {
    tickets: 12,
    levels: ["Heritage Foundation Sponsor ($30,000)", "Presenting Sponsor ($20,000)"],
    link: "https://forms.gle/LLrmkY6DbPCXptBx6",
  },
  {
    tickets: 8,
    levels: ["Title Sponsor ($15,000)", "Major Sponsor ($12,500)"],
    link: "https://forms.gle/oFDEuZmNdJKWiNXy8",
  },
  {
    tickets: 4,
    levels: ["Awards Ceremony Sponsor ($10,000)", "Photo Sponsor ($7,500)", "Executive Hole Sponsor ($4,100)", "Foursome Sponsor ($2,700)"],
    link: "https://forms.gle/Ut2ZNsTHm4bKi4pm9",
  },
  {
    tickets: 2,
    levels: ["Golf Cart Sponsor ($5,000)", "Hole-In-One / Contest Sponsor ($5,000)"],
    link: "https://forms.gle/92HZWycwkxa1s9359",
  },
];

const GolfTournamentRegistration = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GolfTournamentHeader />

      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Register Your Golf Tickets
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thank you for your sponsorship! Select the package that matches your sponsorship level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ticketOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-10 border border-gray-200 hover:border-red-300 transition-all hover:shadow-xl"
              >
                <div className="text-center mb-8">
                  <div className="text-[6.5rem] font-bold text-red-700 leading-none mb-2">
                    {option.tickets}
                  </div>
                  <div className="text-2xl font-semibold text-gray-900">Golf Tickets</div>
                </div>

                <div className="mb-8">
                  <p className="font-medium text-gray-900 mb-3">Applies to:</p>
                  <ul className="space-y-2 text-gray-700">
                    {option.levels.map((level, i) => (
                      <li key={i} className="flex items-start gap-2">
                        • {level}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 mb-10">
                  {["18 Holes with Cart", "Breakfast & Lunch Included", "Player Gift Bag", "Practice Facility Access"].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700">
                      <Check className="h-6 w-6 text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-5 rounded-2xl text-center text-lg transition"
                >
                  Register {option.tickets} Tickets →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 text-gray-600">
            Need assistance? Call <strong>(713) 875-1502</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GolfTournamentRegistration;