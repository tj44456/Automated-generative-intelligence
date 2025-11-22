import React from 'react';

export default function ArchitectureDiagram() {
  const nodes = [
    { id: 1, label: 'BERT Core', x: 50, y: 20 },
    { id: 2, label: 'GPT-5-Pro', x: 20, y: 50 },
    { id: 3, label: 'Synthetic Intelligence', x: 80, y: 50 },
    { id: 4, label: 'Neural Processor', x: 35, y: 80 },
    { id: 5, label: 'CUDA Engine', x: 65, y: 80 }
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">System Architecture</h2>
      <div className="relative h-64 bg-gray-950 rounded">
        <svg className="w-full h-full">
          <line x1="50%" y1="20%" x2="20%" y2="50%" stroke="#00D4FF" strokeWidth="2" />
          <line x1="50%" y1="20%" x2="80%" y2="50%" stroke="#6B2FFF" strokeWidth="2" />
          <line x1="20%" y1="50%" x2="35%" y2="80%" stroke="#00D4FF" strokeWidth="2" />
          <line x1="80%" y1="50%" x2="65%" y2="80%" stroke="#6B2FFF" strokeWidth="2" />
        </svg>
        {nodes.map(node => (
          <div
            key={node.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap">
              {node.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
