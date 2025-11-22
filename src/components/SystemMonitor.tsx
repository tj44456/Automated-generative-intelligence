import React from 'react';

interface MetricProps {
  label: string;
  value: number;
  max: number;
  unit: string;
}

function Metric({ label, value, max, unit }: MetricProps) {
  const percentage = (value / max) * 100;
  
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-400">{label}</span>
        <span className="text-white">{value}{unit} / {max}{unit}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function SystemMonitor() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">System Resources</h2>
      <Metric label="CPU Usage" value={67} max={100} unit="%" />
      <Metric label="GPU Usage" value={89} max={100} unit="%" />
      <Metric label="Memory" value={24} max={64} unit="GB" />
      <Metric label="Processing Queue" value={5} max={20} unit=" tasks" />
    </div>
  );
}
