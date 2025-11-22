import React, { useState } from 'react';

export default function ConfigPanel() {
  const [config, setConfig] = useState({
    gna: 'Intel GNA 3.0',
    cudaVersion: '12.2',
    juliaPackages: 'All Dependencies',
    processingMode: 'Continuous'
  });

  const handleSave = () => {
    alert('Configuration saved successfully!');
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Configuration</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-400 text-sm mb-1">GNA Version</label>
          <select 
            value={config.gna}
            onChange={(e) => setConfig({...config, gna: e.target.value})}
            className="w-full bg-gray-950 text-white px-3 py-2 rounded border border-gray-700"
          >
            <option>Intel GNA 3.0</option>
            <option>Intel GNA 2.0</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-400 text-sm mb-1">CUDA Version</label>
          <input 
            type="text"
            value={config.cudaVersion}
            onChange={(e) => setConfig({...config, cudaVersion: e.target.value})}
            className="w-full bg-gray-950 text-white px-3 py-2 rounded border border-gray-700"
          />
        </div>
        <button 
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded hover:opacity-90 transition-opacity"
        >
          Save Configuration
        </button>
      </div>
    </div>
  );
}
