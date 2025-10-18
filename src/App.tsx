import { useState, useEffect } from 'react';
import { Terminal, Shield, Zap, Code, Lock, Database, Activity, Globe } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [glitchText, setGlitchText] = useState('SYSTEM ACCESS');

  useEffect(() => {
    const lines = [
      '> Initializing secure connection...',
      '> Loading encryption protocols...',
      '> Establishing quantum tunnel...',
      '> Access granted. Welcome, operator.',
    ];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
      }, index * 800);
    });

    const glitchInterval = setInterval(() => {
      const texts = ['SYSTEM ACCESS', 'ENCRYPTED', 'SECURE', 'ONLINE'];
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-cyan-900/10"></div>

      <div className="relative z-10">
        <header className="border-b border-green-500/30 backdrop-blur-sm bg-black/50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Terminal className="w-8 h-8 text-green-400" />
                <div>
                  <h1 className="text-2xl font-bold tracking-wider glitch" data-text="CYBERNODE">
                    CYBERNODE
                  </h1>
                  <p className="text-xs text-green-500/70">v2.4.7 - Quantum Edition</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-green-400 animate-pulse" />
                  <span className="text-xs">ONLINE</span>
                </div>
                <div className="text-xs">
                  <span className="text-green-500/70">USER:</span> ADMIN
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h2 className="text-5xl font-bold mb-4 tracking-wider animate-pulse">
              {glitchText}
            </h2>
            <p className="text-green-500/80 text-lg">Penetration Testing & Security Analysis Platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="border border-green-500/30 bg-black/50 p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group">
              <Shield className="w-12 h-12 mb-4 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">FIREWALL STATUS</h3>
              <p className="text-green-500/70 text-sm mb-3">All systems protected</p>
              <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 w-full animate-pulse"></div>
              </div>
              <p className="text-xs mt-2 text-green-400">100% Secure</p>
            </div>

            <div className="border border-green-500/30 bg-black/50 p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group">
              <Zap className="w-12 h-12 mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">NETWORK SPEED</h3>
              <p className="text-green-500/70 text-sm mb-3">Quantum bandwidth</p>
              <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-400 w-4/5"></div>
              </div>
              <p className="text-xs mt-2 text-cyan-400">847 GB/s</p>
            </div>

            <div className="border border-green-500/30 bg-black/50 p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group">
              <Database className="w-12 h-12 mb-4 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">DATA VAULTS</h3>
              <p className="text-green-500/70 text-sm mb-3">Encrypted storage</p>
              <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 w-3/5"></div>
              </div>
              <p className="text-xs mt-2 text-green-400">2.4 PB / 4.0 PB</p>
            </div>

            <div className="border border-green-500/30 bg-black/50 p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group">
              <Globe className="w-12 h-12 mb-4 text-green-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">CONNECTIONS</h3>
              <p className="text-green-500/70 text-sm mb-3">Active nodes</p>
              <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
                <div className="h-full bg-green-400 w-full animate-pulse"></div>
              </div>
              <p className="text-xs mt-2 text-green-400">847 Nodes</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex space-x-2 mb-4 overflow-x-auto">
              {[
                { id: 'terminal', label: 'TERMINAL', icon: Terminal },
                { id: 'security', label: 'SECURITY', icon: Lock },
                { id: 'code', label: 'CODE EXEC', icon: Code },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 border transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-green-400 bg-green-500/10 text-green-400 shadow-lg shadow-green-500/20'
                      : 'border-green-500/30 bg-black/50 text-green-500/70 hover:border-green-400/50'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="border border-green-500/30 bg-black/80 p-6 min-h-[400px]">
              {activeTab === 'terminal' && (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 mb-4">
                    <Terminal className="w-5 h-5" />
                    <span className="text-sm">SECURE SHELL v3.2.1</span>
                  </div>
                  {terminalLines.map((line, index) => (
                    <div key={index} className="text-green-400 animate-fadeIn">
                      {line}
                    </div>
                  ))}
                  {terminalLines.length >= 4 && (
                    <div className="flex items-center space-x-2 mt-4">
                      <span className="text-green-400">admin@cybernode:~$</span>
                      <div className="w-2 h-5 bg-green-400 animate-pulse"></div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Lock className="w-5 h-5" />
                    <span className="text-sm">SECURITY PROTOCOLS</span>
                  </div>
                  {[
                    { name: 'AES-256 Encryption', status: 'ACTIVE', level: 100 },
                    { name: 'Quantum Key Distribution', status: 'ACTIVE', level: 100 },
                    { name: 'Intrusion Detection', status: 'MONITORING', level: 95 },
                    { name: 'DDoS Protection', status: 'ACTIVE', level: 100 },
                    { name: 'Zero Trust Architecture', status: 'ENFORCED', level: 100 },
                  ].map((protocol, index) => (
                    <div key={index} className="border border-green-500/20 p-4 hover:border-green-400/50 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-green-400">{protocol.name}</span>
                        <span className="text-xs text-cyan-400">{protocol.status}</span>
                      </div>
                      <div className="h-1 bg-green-900/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-400"
                          style={{ width: `${protocol.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'code' && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className="w-5 h-5" />
                    <span className="text-sm">CODE EXECUTION ENGINE</span>
                  </div>
                  <div className="border border-green-500/20 p-4">
                    <pre className="text-sm text-green-400">
{`function quantumDecrypt(data) {
  const key = generateQuantumKey();
  const decrypted = data.map(byte =>
    byte ^ key[byte % key.length]
  );
  return Buffer.from(decrypted);
}

const result = quantumDecrypt(payload);
console.log('Decryption complete:', result);`}
                    </pre>
                  </div>
                  <button className="w-full border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-green-400 py-3 transition-colors">
                    EXECUTE CODE
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-green-500/30 bg-black/50 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Activity className="w-6 h-6" />
                <span>SYSTEM LOGS</span>
              </h3>
              <div className="space-y-2 text-sm">
                {[
                  '[12:34:56] Security scan completed - 0 threats detected',
                  '[12:34:42] Network tunnel established to NODE-847',
                  '[12:34:21] Firewall rules updated successfully',
                  '[12:34:08] Backup procedure initiated',
                  '[12:33:55] User authentication successful',
                ].map((log, index) => (
                  <div key={index} className="text-green-500/70 hover:text-green-400 transition-colors">
                    {log}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-green-500/30 bg-black/50 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>QUICK ACTIONS</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'SCAN NETWORK',
                  'DEPLOY FIREWALL',
                  'ENCRYPT DATA',
                  'MONITOR TRAFFIC',
                ].map((action, index) => (
                  <button
                    key={index}
                    className="border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 hover:border-green-400 text-green-400 py-3 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t border-green-500/30 backdrop-blur-sm bg-black/50 mt-16">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-green-500/70">
                © 2025 CYBERNODE - Secure Operations Platform
              </p>
              <div className="flex space-x-6 text-sm text-green-500/70">
                <span>UPTIME: 99.99%</span>
                <span>LATENCY: 4ms</span>
                <span>NODES: 847</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
