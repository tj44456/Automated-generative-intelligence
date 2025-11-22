import React from 'react';

interface AIModelCardProps {
  name: string;
  status: 'active' | 'idle' | 'processing';
  image: string;
  description: string;
  onClick: () => void;
}

export default function AIModelCard({ name, status, image, description, onClick }: AIModelCardProps) {
  const statusColors = {
    active: 'bg-green-500',
    idle: 'bg-gray-500',
    processing: 'bg-blue-500 animate-pulse'
  };

  return (
    <div 
      onClick={onClick}
      className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-blue-500 transition-all cursor-pointer group"
    >
      <div className="relative mb-3">
        <img src={image} alt={name} className="w-full h-32 object-cover rounded" />
        <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${statusColors[status]}`} />
      </div>
      <h3 className="text-white font-semibold mb-1 group-hover:text-blue-400 transition-colors">{name}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
