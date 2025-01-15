import React from 'react';
import { ArrowRight, Brain, Database, Globe2, Glasses } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: 'Artificial Intelligence',
      description: 'Advanced AI solutions powering the next generation of applications'
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600" />,
      title: 'Blockchain',
      description: 'Secure and transparent distributed ledger technology'
    },
    {
      icon: <Globe2 className="h-12 w-12 text-blue-600" />,
      title: 'Web3.0',
      description: 'Decentralized web applications for the future'
    },
    {
      icon: <Glasses className="h-12 w-12 text-blue-600" />,
      title: 'Metaverse',
      description: 'Immersive virtual experiences and digital worlds'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-600 opacity-5 pattern-grid-lg"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of Technology
              <span className="text-blue-600"> Is Here</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore the cutting-edge technologies shaping our digital future: AI, Blockchain, Web3.0, and the Metaverse.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/services"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/tutorial"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
              >
                Start Tutorial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}