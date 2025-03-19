import React, { useState } from "react";

// ✅ Navbar Component
const Navbar = ({ links, logoText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center px-8 lg:px-20">
        {/* Logo */}
        <div className="rounded-full">{logoText}</div>

        {/* Links for larger screens */}

        <div className="hidden lg:flex space-x-6 text-gray-600 border-b-amber-600">
          {links.map((link, index) => (  
            <a
              key={index}
              href={link.href}
              className="hover:text-gray-900 transition py-3 border-b-amber-600"
            > 
              {link.text}
            </a> 
          ))}
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 ">
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon for smaller screens */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-8 py-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block py-2 text-gray-600 hover:text-gray-900 transition"
            >
              {link.text}
            </a>
          ))}
          <button className="w-full bg-black text-white px-4 py-2 mt-2 rounded-lg hover:bg-gray-800">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

// ✅ Button Component
const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// ✅ Hero Section Component
const Hero = ({ title, subtitle, buttonText, imageSrc }) => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-8 lg:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title} <br />
              <span className="text-blue-600">for a Better Life</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">{subtitle}</p>
            <Button text={buttonText} />
          </div>

          {/* Right Section */}
          <div className="flex justify-center">
            <img
              src={imageSrc}
              alt="AI Doctor"
              className="rounded-lg w-full max-w-md lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------

// ✅ FeatureCard Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-sm p-6 rounded-lg hover:shadow-md transition">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// ✅ Features Section Component
const FeaturesSection = () => {
  // Array of feature objects
  const features = [
    {
      icon: "🛡️",
      title: "Early Risk Detection",
      description:
        "Advanced AI algorithms analyze your health data to identify potential risks before they become serious issues.",
    },
    {
      icon: "💊",
      title: "Medicine Verification",
      description:
        "Instantly verify the authenticity of your medications using our advanced scanning technology.",
    },
    {
      icon: "🔔",
      title: "Smart Reminders",
      description:
        "Never miss a dose with AI-powered medication reminders tailored to your schedule.",
    },
    {
      icon: "📊",
      title: "Health Analytics",
      description:
        "Get detailed insights into your health trends with comprehensive analytics and reporting.",
    },
    {
      icon: "🤖",
      title: "Virtual Assistant",
      description:
        "24/7 AI-powered health assistant to answer your questions and provide guidance.",
    },
    {
      icon: "🔒",
      title: "Secure Records",
      description:
        "Your health data is encrypted and stored securely with blockchain technology.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-8 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Comprehensive Healthcare Features
        </h2>
        <p className="text-gray-600 mt-2">
          Everything you need for your health journey in one place
        </p>
      </div>

      {/* Grid of Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

// ✅ Digital Health ID Section Component
export const DigitalHealthID = () => {
  return (
    <div className="bg-gray-50 py-16 px-8 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image */}
        <div className="flex justify-center">
          <img
            src="/jeevaniCard.jpg"
            alt="Digital Health ID"
            className="rounded-lg shadow-md h-130 max-w-md lg:max-w-full"
          />
        </div>

        {/* Right Side: Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Digital Health ID
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Your unified health identity that securely stores and manages all
            your medical information, making healthcare access seamless across
            providers.
          </p>

          {/* Feature List */}
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-3">✅</span>
              Secure and encrypted storage
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-3">✅</span>
              Easy access across healthcare providers
            </li>
            <li className="flex items-center">
              <span className="text-green-500 text-lg mr-3">✅</span>
              Complete medical history at your fingertips
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

//foter section

export const CTASection = ({ title, subtitle, buttonText, onClick }) => {
  return (
    <div className="bg-black text-white py-30 px-6 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-400 mb-6">{subtitle}</p>
      <button
        onClick={onClick}
        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
      >
        {buttonText}
      </button>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-500 text-center py-8">
      <p>© 2025 Sanjeevani. All rights reserved.</p>      

    </div>
  );
};

// ✅ Main LandingPage Component
const LandingPage = () => {
  // Navbar Links Data
  const navLinks = [
    { text: "Features", href: "#" },
    { text: "Solutions", href: "#" },
    { text: "About", href: "#" },
    { text: "Contact", href: "#" },
    { text: "Sign In", href: "#" },
  ];

   // Handle button click event
   const handleStartNow = () => {
    alert("Let's start your journey to better health!");
  };
  const startNow = () => {
    alert("Let's start your journey to better health!");
  };

  return (
    <>
      {/* Navbar Section */}
      <Navbar
        links={navLinks}
        logoText={<img src="/logo-2.jpg" alt="Logo" className="h-19 rounded-full w-auto" />}
      />

      {/* Hero Section */}
      <Hero
        title="Your Digital Health Companion"
        subtitle="Experience healthcare reimagined with AI-powered insights, secure record keeping, and personalized health planning – all in one place."
        buttonText="Start Your Journey"
        imageSrc="/header-img.jpg"
      />
      {/* Features Section */}
      <FeaturesSection />
      <DigitalHealthID />
      <CTASection
        title="Your Journey to Better Health Starts Here"
        subtitle="Join thousands of users who have already transformed their healthcare experience with Sanjeevani's digital platform."
        buttonText="Start Now"
        onClick={handleStartNow}
      />
      {/* 📚 Other Sections or Components */}
      <Footer
        title="Your Journey to Better Health Starts Here"
        subtitle="Join thousands of users who have already transformed their healthcare experience with Sanjeevani's digital platform."
        buttonText="Start Now"
        onClick={startNow}
        bgColor="bg-black"
        textColor="text-white"
      />

    </>
  );
};

export default LandingPage;
