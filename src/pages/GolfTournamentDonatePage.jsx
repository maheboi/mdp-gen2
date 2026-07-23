import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { post } from 'aws-amplify/api';
import { Link } from 'react-router-dom';

const stripePromise = loadStripe('pk_live_sT13bwTUAoPgOMm8h8D5ovgD00KiiYoH1x');

const signatureSentence = "For more than 30 years we have invested in young lives through mentorship, leadership, faith, and competition. The Cooz Fam M.O.B.E.C. Challenge invites you to help build the future of that mission.";

const sponsorshipTiers = [
  { name: "Heritage Foundation Sponsor", amount: 30000, tickets: 12, benefits: ["12 golf tickets", "Top branding across all materials", "Premium signage on both courses", "Featured program placement", "Banner display", "Reserved seating", "2-year priority rights"] },
  { name: "Presenting Sponsor", amount: 20000, tickets: 8, benefits: ["8 golf tickets", "Major branding & media recognition", "Premium signage on both courses", "Featured program placement", "Banner display", "Reserved seating", "2-year priority rights"] },
  { name: "Title Sponsor", amount: 15000, tickets: 8, benefits: ["8 golf tickets", "Prominent branding", "Logo on player gifts", "Premium course signage", "Reserved seating", "1-year priority rights"] },
  { name: "Major Sponsor", amount: 12500, tickets: 8, benefits: ["8 golf tickets", "Event recognition", "Full-page program ad", "Premium course signage", "Reserved seating"] },
  { name: "Awards Ceremony Sponsor", amount: 10000, tickets: 4, benefits: ["4 golf tickets", "Event banner", "Full-page ad", "Course signage", "Recognition at ceremony"] },
  { name: "Photo Sponsor", amount: 7500, tickets: 4, benefits: ["4 golf tickets", "Logo on keepsake photos", "Full-page ad", "Recognition at ceremony"] },
  { name: "Golf Cart Sponsor", amount: 5000, tickets: 2, benefits: ["2 golf tickets", "Branding on 150 carts", "Half-page ad", "Event recognition"] },
  { name: "Hole-In-One / Contest Sponsor", amount: 5000, tickets: 2, benefits: ["2 golf tickets","Signage, contest branding, prizes, and recognition"] },
  { name: "Executive Hole Sponsor", amount: 4100, tickets: 4, benefits: ["4 golf tickets", "Hole signage", "Program ad"] },
  { name: "Foursome Sponsor", amount: 2700, tickets: 4, benefits: ["4 golf tickets"] },
  { name: "Driving Range / Beverage Cart / Hole Sponsor", amount: 2500, tickets: 0, benefits: ["Branding on key locations", "Program recognition"] },
];

const getTicketCount = (campaign, amount) => {
  if (campaign === 'Individual Golf Ticket') return 1;
  
  const tier = sponsorshipTiers.find(t => t.name === campaign);
  if (tier) return tier.tickets;
  
  const numAmount = parseInt(amount || 0);
  if (numAmount >= 30000) return 12;
  if (numAmount >= 12500) return 8;
  if (numAmount >= 2700) return 4;
  if (numAmount >= 5000) return 2;
  return 0;
};

const CheckoutForm = ({
  donationAmount,
  setDonationAmount,
  customAmount,
  setCustomAmount,
  donorName,
  setDonorName,
  donorInfo,
  setDonorInfo,
  selectedCampaign,
  setSelectedCampaign,
  onSuccess,
  setErrorMessage,
  isSubmitting,
  setIsSubmitting,
  errorMessage,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setErrorMessage('Stripe has not loaded yet. Please try again.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const { error: submitError } = await elements.submit();
      if (submitError) throw new Error(submitError.message);

      let finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
      finalAmount = String(finalAmount).trim();

      if (!finalAmount || isNaN(Number(finalAmount)) || Number(finalAmount) <= 0) {
        throw new Error('Please enter a valid donation amount');
      }

      if (!donorInfo?.email) {
        throw new Error('Email is required');
      }

      const restOperation = post({
        apiName: 'Donate',
        path: '/stripePayment',
        options: {
          body: {
            amount: finalAmount,
            donorInfo: {
              name: donorName || 'Anonymous',
              email: donorInfo.email,
            },
            campaign: selectedCampaign || "General Donation",
            customReason: "",
            donationType: "one-time",
          },
        },
      });

      const { body } = await restOperation.response;
      const response = await body.json();

      const { clientSecret } = response;
      if (!clientSecret) throw new Error('No client secret received');

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: { return_url: window.location.origin + '/golftournament/donate?success=true' },
        redirect: 'if_required',
      });

      if (error) throw new Error(error.message);

      onSuccess(selectedCampaign, finalAmount);
    } catch (err) {
      console.error('❌ Donation error:', err);
      setErrorMessage(err.message || 'Payment failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <label className="block text-sm font-medium mb-2">Name (optional)</label>
          <input
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500"
            placeholder="John Doe"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <label className="block text-sm font-medium mb-2">Email Address *</label>
          <input
            type="email"
            required
            value={donorInfo.email || ''}
            onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-red-500"
            placeholder="you@example.com"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-3">Payment Information</h3>
        <div className="p-6 border border-gray-300 rounded-2xl bg-gray-50">
          <PaymentElement />
        </div>
      </motion.div>

      {errorMessage && <p className="text-red-600 text-center font-medium">{errorMessage}</p>}

      <motion.button
        type="submit"
        disabled={isSubmitting || !donationAmount || !donorInfo.email}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full bg-red-700 hover:bg-red-800 disabled:bg-gray-400 text-white font-bold py-5 rounded-3xl text-xl transition"
      >
        {isSubmitting 
          ? 'Processing...' 
          : `Donate $${Number(donationAmount === 'custom' ? customAmount : donationAmount || 0).toLocaleString()}`
        }
      </motion.button>
    </form>
  );
};

const GolfTournamentDonatePage = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorInfo, setDonorInfo] = useState({ email: '' });
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [ticketCount, setTicketCount] = useState(0);

  const [elementsOptions, setElementsOptions] = useState({
    mode: 'payment',
    currency: 'usd',
    amount: 1500,
    appearance: { theme: 'stripe' }
  });

  useEffect(() => {
    const currentAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    const amountInCents = currentAmount && !isNaN(currentAmount) && Number(currentAmount) > 0
      ? Math.round(Number(currentAmount) * 100)
      : 1500;

    setElementsOptions({
      mode: 'payment',
      currency: 'usd',
      amount: amountInCents,
      appearance: { theme: 'stripe' }
    });
  }, [donationAmount, customAmount]);

  const handleSuccess = (campaign, amount) => {
    const tickets = getTicketCount(campaign, amount);
    setTicketCount(tickets);
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Cooz Fam Golf Tournament</h1>
        <p className="text-xl max-w-3xl mx-auto">{signatureSentence}</p>
      </motion.div>

      {/* Choose Your Giving Level */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto mb-16"
      >
        <h3 className="text-2xl font-semibold text-center mb-8">Choose Your Giving Level</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-red-500 hover:shadow-2xl transition-all"
          >
            <h4 className="text-xl font-semibold mb-4 text-center">Custom Donation</h4>
            <input
              type="number"
              min="1"
              placeholder="Enter any amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setDonationAmount('custom');
              }}
              className="w-full px-6 py-5 text-5xl text-center border border-gray-300 rounded-3xl focus:outline-none focus:border-red-500"
            />
            <p className="text-center text-sm text-gray-500 mt-4">Any amount is deeply appreciated</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => {
              setSelectedCampaign('Individual Golf Ticket');
              setDonationAmount('675');
              setCustomAmount('');
            }}
            className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-red-500 hover:shadow-2xl cursor-pointer transition-all text-center"
          >
            <h4 className="text-xl font-semibold mb-4">Individual Golf Ticket</h4>
            <div className="text-6xl font-bold text-red-700 mb-2">$675</div>
            <p className="text-sm text-gray-600">18 holes with cart • Breakfast & lunch • Player gift • Practice facility</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Sponsorship Opportunities */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-semibold text-center mb-10">Sponsorship Opportunities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsorshipTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => {
                setSelectedCampaign(tier.name);
                setDonationAmount(tier.amount.toString());
                setCustomAmount('');
              }}
              className={`p-8 rounded-3xl border-2 cursor-pointer transition-all ${
                selectedCampaign === tier.name 
                  ? 'border-red-600 bg-red-50 shadow-xl' 
                  : 'border-gray-200 hover:border-red-400 hover:shadow-xl'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-semibold">{tier.name}</h3>
                <span className="text-4xl font-bold text-red-700">${tier.amount.toLocaleString()}</span>
              </div>
              <ul className="space-y-3 text-sm">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-green-600 flex-shrink-0" /> {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full py-3 border-2 border-red-600 rounded-2xl font-semibold hover:bg-red-600 hover:text-white transition">
                Select This Package
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Payment Form */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto"
      >
        <Elements stripe={stripePromise} options={elementsOptions}>
          <CheckoutForm
            donationAmount={donationAmount}
            setDonationAmount={setDonationAmount}
            customAmount={customAmount}
            setCustomAmount={setCustomAmount}
            donorName={donorName}
            setDonorName={setDonorName}
            donorInfo={donorInfo}
            setDonorInfo={setDonorInfo}
            selectedCampaign={selectedCampaign}
            setSelectedCampaign={setSelectedCampaign}
            onSuccess={handleSuccess}
            setErrorMessage={setErrorMessage}
            isSubmitting={isSubmitting}
            setIsSubmitting={setIsSubmitting}
            errorMessage={errorMessage}
          />
        </Elements>
      </motion.div>

      {/* Success Message */}
      {formSubmitted && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-16 text-center bg-green-50 p-12 rounded-3xl max-w-2xl mx-auto"
        >
          <Check className="h-20 w-20 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
          <p className="text-green-700 text-lg mb-8">
            Your payment was successful. Thank you for supporting the Cooz Fam Golf Tournament!
          </p>

          {ticketCount > 0 && (
            <div className="bg-white p-8 rounded-2xl border border-green-200">
              <p className="text-xl font-semibold mb-4">Next Step: Register Your Tickets</p>
              <p className="text-gray-600 mb-6">
                You have <span className="font-bold text-green-700">{ticketCount} golf tickets</span> included with your sponsorship.<br />
                Please visit the registration page and complete the form for your ticket amount.
              </p>
              <Link
                to="/golftournament/register"
                className="inline-block bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-10 rounded-3xl text-lg transition-all hover:scale-105"
              >
                Go to Ticket Registration Page →
              </Link>
            </div>
          )}

          <p className="text-sm text-gray-500 mt-8">
            A receipt has been sent to your email.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default GolfTournamentDonatePage;