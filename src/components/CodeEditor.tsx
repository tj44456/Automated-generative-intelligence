import React, { useState } from 'react';

export default function CodeEditor() {
  const [code, setCode] = useState(`// BERT AI System - Julia Integration
using NeuroAnalyzer, CUDA, Flux

function initialize_bert_system()
    println("Initializing BERT AI System...")
    # Neural network configuration
    model = Chain(
        Dense(512, 256, relu),
        Dense(256, 128, relu),
        Dense(128, 64, tanh)
    )
    return model
end

bert_model = initialize_bert_system()`);

  const [language, setLanguage] = useState('julia');

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      <div className="bg-gray-950 px-4 py-2 flex items-center justify-between border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 text-white px-3 py-1 rounded text-sm"
        >
          <option value="julia">Julia</option>
          <option value="java">Java</option>
          <option value="processing">Processing</option>
        </select>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-96 bg-gray-900 text-green-400 p-4 font-mono text-sm focus:outline-none"
        spellCheck={false}
      />
    </div>
  );
}
