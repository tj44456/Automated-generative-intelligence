import React from 'react';

const packages = [
  { name: 'NeuroAnalyzer', version: '0.24.3', status: 'installed' },
  { name: 'CUDA', version: '5.1.1', status: 'installed' },
  { name: 'Flux', version: '0.14.6', status: 'installed' },
  { name: 'GeometricFlux', version: '0.13.0', status: 'installed' },
  { name: 'DiffEqFlux', version: '2.1.0', status: 'installed' },
  { name: 'CudaRBMs', version: '0.2.1', status: 'updating' },
  { name: 'BloqadeCUDA', version: '0.1.5', status: 'installed' },
  { name: 'OptimizationFlux', version: '1.0.2', status: 'installed' }
];

export default function JuliaPackages() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Julia Dependencies</h2>
      <div className="space-y-2">
        {packages.map(pkg => (
          <div key={pkg.name} className="flex items-center justify-between bg-gray-950 p-3 rounded">
            <div>
              <div className="text-white font-medium">{pkg.name}</div>
              <div className="text-gray-500 text-xs">v{pkg.version}</div>
            </div>
            <div className={`text-xs px-2 py-1 rounded ${
              pkg.status === 'installed' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
            }`}>
              {pkg.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
