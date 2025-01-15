import React from 'react';
import { Bot, Award, Users, Rocket, ChevronRight } from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'TechVision was established with a vision to revolutionize the tech industry.'
    },
    {
      year: '2019',
      title: 'AI Division Launch',
      description: 'Launched our artificial intelligence solutions division.'
    },
    {
      year: '2020',
      title: 'Blockchain Integration',
      description: 'Expanded our services to include blockchain technology solutions.'
    },
    {
      year: '2021',
      title: 'Web3.0 Innovation',
      description: 'Pioneered new Web3.0 applications and solutions.'
    },
    {
      year: '2022',
      title: 'Metaverse Expansion',
      description: 'Entered the metaverse space with innovative virtual experiences.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Bot className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About TechVision
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're pioneering the future of technology through innovative solutions
              in AI, blockchain, Web3.0, and the metaverse.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To drive technological innovation and create solutions that shape the future.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-gray-600">
                A diverse group of experts passionate about pushing technological boundaries.
              </p>
            </div>
            <div className="text-center">
              <Rocket className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                To be at the forefront of the digital revolution, creating technology that matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full flex-shrink-0">
                  <span className="font-bold">{item.year}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <ChevronRight className="hidden md:block h-6 w-6 text-blue-600" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}