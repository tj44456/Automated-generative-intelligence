import React, { useState } from 'react';

export default function ExportPanel() {
  const [exportFormat, setExportFormat] = useState('julia');

  const handleExport = () => {
    alert(`Exporting code as ${exportFormat.toUpperCase()} file...`);
  };

  const handleDeploy = () => {
    alert('Deploying to Kubernetes cluster...');
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Export & Deploy</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-400 text-sm mb-2">Export Format</label>
          <select 
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            className="w-full bg-gray-950 text-white px-3 py-2 rounded border border-gray-700"
          >
            <option value="julia">Julia (.jl)</option>
            <option value="java">Java (.java)</option>
            <option value="processing">Processing (.pde)</option>
            <option value="python">Python (.py)</option>
          </select>
        </div>
        <button 
          onClick={handleExport}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Export Code
        </button>
        <button 
          onClick={handleDeploy}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
        >
          Deploy to Cluster
        </button>
      </div>
    </div>
  );
}
