import React, { useState } from 'react';
import AIModelCard from './AIModelCard';
import SystemMonitor from './SystemMonitor';
import CodeEditor from './CodeEditor';
import ProcessingQueue from './ProcessingQueue';
import ArchitectureDiagram from './ArchitectureDiagram';
import ConfigPanel from './ConfigPanel';
import DocumentationCard from './DocumentationCard';
import NeuralVisualization from './NeuralVisualization';
import SystemLogs from './SystemLogs';
import JuliaPackages from './JuliaPackages';
import ExportPanel from './ExportPanel';
import Footer from './Footer';




export default function AppLayout() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  const aiModels = [
    {
      name: 'BERT Core',
      status: 'active' as const,
      image: 'https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804386759_e0546b0f.webp',
      description: 'Primary generative AI system'
    },
    {
      name: 'ChatGPT-5-Pro',
      status: 'active' as const,
      image: 'https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804389612_19e7a92a.webp',
      description: 'Advanced language model integration'
    },
    {
      name: 'MARTINI BERTopic',
      status: 'processing' as const,
      image: 'https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804391940_845fad1a.webp',
      description: 'Topic modeling and enrichment'
    },
    {
      name: 'Gemini',
      status: 'active' as const,
      image: 'https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804394347_59c0de12.webp',
      description: 'Google multimodal AI'
    },
    {
      name: 'Meta AI',
      status: 'active' as const,
      image: 'https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804395685_8174f9ca.webp',
      description: 'Meta Llama integration'
    },
    {
      name: 'Midjourney',
      status: 'idle' as const,
      image: 'https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804397560_7853a46e.webp',
      description: 'Image generation system'
    },
    {
      name: 'Google Whisk',
      status: 'active' as const,
      image: 'https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804399427_5dc36891.webp',
      description: 'Visual AI processing'
    },
    {
      name: 'DeepSeek',
      status: 'processing' as const,
      image: 'https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804386759_e0546b0f.webp',
      description: 'Deep learning analysis'
    }
  ];


  const docs = [
    {
      title: 'Cognitive Sovereignty Architecture',
      content: 'The system implements autonomous decision-making through distributed neural networks, enabling self-directed learning and adaptation without external intervention.'
    },
    {
      title: 'Generative Deep Learning Framework',
      content: 'Built on advanced machine learning transformers, the framework combines perpetual learning with real-time synthesis to generate novel solutions continuously.'
    },
    {
      title: 'Intel GNA 3.0 Integration',
      content: 'Gaussian Mixture Model and Neural Network Accelerator provides hardware-accelerated inference for deep learning models with optimized power efficiency.'
    },
    {
      title: 'Newton\'s Laws in Neural Processing',
      content: 'The system applies calculus-based physics modeling to simulate neural dynamics, using biophysical principles for accurate brain-like computation.'
    },
    {
      title: 'Kubernetes Supercomputer Clustering',
      content: 'Distributed processing across multiple nodes creates supercomputer-level performance, coordinated through Kubernetes orchestration for seamless scaling.'
    }
  ];


  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src="https://d64gsuwffb70l.cloudfront.net/69218405720a01ed64f864ee_1763804385777_72717c34.webp"
          alt="Neural Network"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-white mb-4">
            BERT AI System
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Next-generation generative AI powered by ChatGPT-5-Pro with autonomous cognitive processing
          </p>
          <button 
            onClick={() => alert('Initializing BERT AI System...\n\nConnecting to:\n- ChatGPT-5-Pro\n- MARTINI BERTopic\n- Gemini\n- Meta AI\n- Midjourney\n- Google Whisk\n- DeepSeek\n\nLoading Julia packages...\nCompiling CUDA kernels...\nSystem ready!')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:opacity-90 transition-opacity"
          >
            Initialize System
          </button>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* AI Models Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Integrated AI Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiModels.map(model => (
              <AIModelCard
                key={model.name}
                {...model}
                onClick={() => setSelectedModel(model.name)}
              />
            ))}
          </div>
        </section>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <CodeEditor />
          </div>
          <div className="space-y-6">
            <SystemMonitor />
            <ConfigPanel />
          </div>
        </div>

        {/* Architecture & Processing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <ArchitectureDiagram />
          <ProcessingQueue />
        </div>

        {/* Neural Visualization & Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <NeuralVisualization />
          <SystemLogs />
        </div>

        {/* Julia Packages & Export */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <JuliaPackages />
          <ExportPanel />
        </div>

        {/* Documentation */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6">Documentation</h2>
          <div className="space-y-4">
            {docs.map(doc => (
              <DocumentationCard key={doc.title} {...doc} />
            ))}
          </div>
        </section>

      </div>
      
      <Footer />
    </div>
  );
}

