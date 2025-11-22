import React, { useState } from 'react';

interface DocCardProps {
  title: string;
  content: string;
}

export default function DocumentationCard({ title, content }: DocCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-850 transition-colors"
      >
        <h3 className="text-white font-semibold">{title}</h3>
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="px-4 py-3 border-t border-gray-800">
          <p className="text-gray-400 text-sm">{content}</p>
        </div>
      )}
    </div>
  );
}
