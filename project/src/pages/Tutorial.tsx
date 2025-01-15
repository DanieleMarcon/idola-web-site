import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Bot, Brain, Database, Globe2, Glasses } from 'lucide-react';

interface TutorialStep {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
}

export default function Tutorial() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: TutorialStep[] = [
    {
      title: 'Welcome to TechVision',
      description: 'Discover how our advanced technologies can transform your business. This tutorial will guide you through our core offerings.',
      icon: <Bot className="h-12 w-12 text-blue-600" />,
      image: 'https://source.unsplash.com/800x600/?technology,future'
    },
    {
      title: 'Artificial Intelligence',
      description: 'Our AI solutions help automate processes, gain insights from data, and enhance decision-making capabilities.',
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      image: 'https://source.unsplash.com/800x600/?artificial,intelligence'
    },
    {
      title: 'Blockchain Technology',
      description: 'Secure, transparent, and decentralized solutions for modern business needs.',
      icon: <Database className="h-12 w-12 text-blue-600" />,
      image: 'https://source.unsplash.com/800x600/?blockchain,technology'
    },
    {
      title: 'Web3.0 Integration',
      description: 'Next-generation web applications with decentralized architecture and blockchain integration.',
      icon: <Globe2 className="h-12 w-12 text-blue-600" />,
      image: 'https://source.unsplash.com/800x600/?web,digital'
    },
    {
      title: 'Metaverse Solutions',
      description: 'Immersive virtual experiences that connect people and businesses in revolutionary ways.',
      icon: <Glasses className="h-12 w-12 text-blue-600" />,
      image: 'https://source.unsplash.com/800x600/?virtual,reality'
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Step {currentStep + 1} of {steps.length}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-64 md:h-full">
              <img
                src={steps[currentStep].image}
                alt={steps[currentStep].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12">
              <div className="mb-6">
                {steps[currentStep].icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {steps[currentStep].title}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {steps[currentStep].description}
              </p>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-colors ${
                    currentStep === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span>Previous</span>
                </button>
                <button
                  onClick={nextStep}
                  disabled={currentStep === steps.length - 1}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-md transition-colors ${
                    currentStep === steps.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <span>Next</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}