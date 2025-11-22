import React, { useEffect, useState } from 'react';

export default function NeuralVisualization() {
  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % 6);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const neurons = [
    { x: 20, y: 30, layer: 'input' },
    { x: 20, y: 50, layer: 'input' },
    { x: 20, y: 70, layer: 'input' },
    { x: 50, y: 20, layer: 'hidden' },
    { x: 50, y: 40, layer: 'hidden' },
    { x: 50, y: 60, layer: 'hidden' },
    { x: 50, y: 80, layer: 'hidden' },
    { x: 80, y: 35, layer: 'output' },
    { x: 80, y: 65, layer: 'output' }
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Neural Processing</h2>
      <div className="relative h-80 bg-gray-950 rounded">
        <svg className="w-full h-full">
          {neurons.map((neuron, i) => 
            neurons.slice(i + 1).map((target, j) => (
              <line
                key={`${i}-${j}`}
                x1={`${neuron.x}%`}
                y1={`${neuron.y}%`}
                x2={`${target.x}%`}
                y2={`${target.y}%`}
                stroke={i === pulseIndex ? '#00D4FF' : '#374151'}
                strokeWidth="1"
                opacity={i === pulseIndex ? '1' : '0.3'}
              />
            ))
          )}
          {neurons.map((neuron, i) => (
            <circle
              key={i}
              cx={`${neuron.x}%`}
              cy={`${neuron.y}%`}
              r="8"
              fill={i === pulseIndex ? '#00D4FF' : '#6B7280'}
              className="transition-all duration-300"
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
