'use client'
import React, { useState, useEffect } from 'react';
import Reveal from '../Reveal';
import Link from 'next/link';
import { Terminal, Cpu, Network, Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    setTimestamp(new Date().toISOString());
    const interval = setInterval(() => {
      setTimestamp(new Date().toISOString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const logs = [
    { type: 'SUCCESS', msg: 'System initialized' },
    { type: 'INFO', msg: 'Awaiting connection...' },
    { type: 'NETWORK', msg: 'SSL handshake complete' },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
              <Terminal className="text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tighter uppercase">Connect.exe</h2>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                SYSTEM STATUS: ACTIVE | {timestamp}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Terminal Window */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="border border-white/10 rounded-xl bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                    message_handler.ts
                  </div>
                </div>
                <div className="p-8 font-mono text-sm md:text-base">
                  <div className="flex gap-4">
                    <span className="text-muted-foreground/30 select-none">01</span>
                    <p><span className="text-primary">const</span> <span className="text-blue-400">contact</span> = &#123;</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted-foreground/30 select-none">02</span>
                    <p className="pl-4 text-muted-foreground">email: <span className="text-green-400">&apos;sharma.tushar.271003@gmail.com&apos;</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted-foreground/30 select-none">03</span>
                    <p className="pl-4 text-muted-foreground">status: <span className="text-green-400">&apos;open_to_work&apos;</span>,</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted-foreground/30 select-none">04</span>
                    <p className="pl-4 text-muted-foreground">remote: <span className="text-primary">true</span></p>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-muted-foreground/30 select-none">05</span>
                    <p>&#125;;</p>
                  </div>
                  <div className="flex gap-4 mt-8">
                    <span className="text-muted-foreground/30 select-none">06</span>
                    <p className="text-primary animate-pulse">_</p>
                  </div>

                  <div className="mt-12 p-4 bg-white/5 rounded-lg border border-white/5">
                    <h3 className="text-xs font-bold text-muted-foreground uppercase mb-4 flex items-center gap-2">
                      <Network size={12} /> System Logs
                    </h3>
                    <div className="space-y-1">
                      {logs.map((log, i) => (
                        <div key={i} className="text-[10px] flex gap-4">
                          <span className="text-muted-foreground">[{new Date().toLocaleTimeString()}]</span>
                          <span className={log.type === 'SUCCESS' ? 'text-green-400' : 'text-blue-400'}>{log.type}</span>
                          <span className="text-muted-foreground">{log.msg}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.2}>
              <div className="p-6 border border-white/10 rounded-xl bg-black/20 backdrop-blur-xl">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                   <Cpu size={14} className="text-primary" /> Direct Channels
                </h3>
                <div className="space-y-3">
                  {[
                    { name: 'Email', icon: Mail, val: 'Send Message', href: 'mailto:sharma.tushar.271003@gmail.com' },
                    { name: 'GitHub', icon: Github, val: 'View Source', href: 'https://github.com/tushar27x' },
                    { name: 'LinkedIn', icon: Linkedin, val: 'Connect', href: 'https://www.linkedin.com/in/tushar-sharma-01961b22b/' }
                  ].map((chan) => (
                    <Link 
                      key={chan.name}
                      href={chan.href}
                      target="_blank"
                      className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <chan.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-xs font-bold uppercase tracking-tight">{chan.name}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono">{chan.val}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-6 border border-white/10 rounded-xl bg-primary/5 backdrop-blur-xl">
                <p className="text-[10px] leading-relaxed text-muted-foreground font-mono italic">
                  {'//'} Note: Always looking for challenges that require deep technical knowledge and creative problem solving.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
