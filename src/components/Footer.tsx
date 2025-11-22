import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">BERT AI</h3>
            <p className="text-gray-400 text-sm">
              Advanced generative AI system with autonomous cognitive processing capabilities.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Tutorials</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Discord</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Forums</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">License</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">© 2025 BERT AI System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
