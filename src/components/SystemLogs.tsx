import React, { useEffect, useState } from 'react';

interface LogEntry {
  timestamp: string;
  level: 'info' | 'success' | 'warning' | 'error';
  message: string;
}

export default function SystemLogs() {
  const [logs, setLogs] = useState<LogEntry[]>([
    { timestamp: '09:39:12', level: 'success', message: 'BERT Core initialized successfully' },
    { timestamp: '09:39:15', level: 'info', message: 'Loading CUDA kernels...' },
    { timestamp: '09:39:18', level: 'success', message: 'Neural network compiled' },
    { timestamp: '09:39:21', level: 'info', message: 'Connecting to GPT-5-Pro API' },
    { timestamp: '09:39:24', level: 'warning', message: 'High GPU utilization detected' },
    { timestamp: '09:39:27', level: 'success', message: 'All systems operational' }
  ]);

  const levelColors = {
    info: 'text-blue-400',
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold text-white mb-4">System Logs</h2>
      <div className="bg-gray-950 rounded p-4 h-64 overflow-y-auto font-mono text-xs">
        {logs.map((log, i) => (
          <div key={i} className="mb-1">
            <span className="text-gray-500">[{log.timestamp}]</span>{' '}
            <span className={levelColors[log.level]}>{log.level.toUpperCase()}</span>{' '}
            <span className="text-gray-300">{log.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
