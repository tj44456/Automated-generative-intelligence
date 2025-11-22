import React from 'react';

interface Task {
  id: string;
  name: string;
  progress: number;
  status: 'running' | 'queued' | 'completed';
}

const tasks: Task[] = [
  { id: '1', name: 'Neural Network Training', progress: 78, status: 'running' },
  { id: '2', name: 'BERT Model Synthesis', progress: 45, status: 'running' },
  { id: '3', name: 'CUDA Kernel Compilation', progress: 100, status: 'completed' },
  { id: '4', name: 'Cognitive Processing', progress: 23, status: 'running' },
  { id: '5', name: 'Data Pipeline Integration', progress: 0, status: 'queued' }
];

export default function ProcessingQueue() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">Processing Queue</h2>
      <div className="space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="bg-gray-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-sm">{task.name}</span>
              <span className="text-gray-400 text-xs">{task.progress}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-1.5">
              <div 
                className="bg-blue-500 h-1.5 rounded-full transition-all"
                style={{ width: `${task.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
