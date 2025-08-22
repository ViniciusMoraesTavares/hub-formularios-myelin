import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, steps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-sm font-medium ${
              index < currentStep
                ? 'text-blue-600'
                : index === currentStep
                ? 'text-blue-600'
                : 'text-gray-400'
            }`}
          >
            {step}
          </div>
        ))}
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="text-right mt-2 text-sm text-gray-500">
        Etapa {currentStep} de {totalSteps}
      </div>
    </div>
  );
};

export default ProgressBar;