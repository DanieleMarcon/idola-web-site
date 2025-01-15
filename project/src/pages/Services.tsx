import React from 'react';
import { Brain, Database, Globe2, Glasses, ArrowRight, Bot } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Brain className="h-16 w-16 text-blue-600" />,
      title: 'Artificial Intelligence',
      description: 'Cutting-edge AI solutions that transform businesses through machine learning, natural language processing, and computer vision.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision Systems',
        'Predictive Analytics'
      ]
    },
    {
      icon: <Database className="h-16 w-16 text-blue-600" />,
      title: 'Blockchain',
      description: 'Secure and transparent blockchain solutions for modern business needs, from smart contracts to decentralized applications.',
      features: [
        'Smart Contracts',
        'DeFi Solutions',
        'NFT Platforms',
        'Private Blockchains'
      ]
    },
    {
      icon: <Globe2 className="h-16 w-16 text-blue-600" />,
      title: 'Web3.0',
      description: 'Next-generation web applications leveraging decentralized technologies and blockchain integration.',
      features: [
        'Decentralized Apps',
        'Token Integration',
        'Web3 Wallets',
        'IPFS Storage'
      ]
    },
    {
      icon: <Glasses className="h-16 w-16 text-blue-600" />,
      title: 'Metaverse',
      description: 'Immersive virtual experiences and digital worlds that connect people and businesses in new ways.',
      features: [
        'Virtual Environments',
        'Digital Assets',
        'VR Experiences',
        'Virtual Commerce'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Bot className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of advanced technology solutions
              designed to transform your business for the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="bg-blue-50 p-8 rounded-full inline-block mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2 text-gray-700"
                      >
                        <ArrowRight className="h-5 w-5 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-100 to-white p-8 rounded-lg shadow-lg">
                    <img
                      src={`https://source.unsplash.com/800x600/?technology,${service.title.toLowerCase()}`}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our advanced technology solutions can help you stay
            ahead in the digital age.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
            <span>Contact Us</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}