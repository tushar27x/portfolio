'use client'
import React, { useState, useEffect } from 'react';
import Reveal from '../Reveal';
import Link from 'next/link';
import { Terminal, Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [timestamp, setTimestamp] = useState('');
  const displayTimestamp = timestamp || '--:--:--';

  useEffect(() => {
    setTimestamp(new Date().toLocaleTimeString());
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const yamlLines: { kind: 'comment' | 'blank' | 'str' | 'bool' | 'key'; text?: string; key?: string; value?: string; indent?: number }[] = [
    { kind: 'comment', text: '# contact.yml' },
    { kind: 'str', key: 'service', value: 'tushar-sharma' },
    { kind: 'str', key: 'status', value: 'open_to_work' },
    { kind: 'bool', key: 'remote', value: 'true' },
    { kind: 'blank' },
    { kind: 'key', key: 'runtime' },
    { kind: 'str', key: 'role', value: 'backend engineer', indent: 1 },
    { kind: 'str', key: 'stack', value: '[python, fastapi, java, netty]', indent: 1 },
    { kind: 'str', key: 'data', value: '[postgres, redis, kafka, elasticsearch]', indent: 1 },
    { kind: 'blank' },
    { kind: 'key', key: 'healthcheck' },
    { kind: 'str', key: 'path', value: '/ping', indent: 1 },
    { kind: 'str', key: 'interval', value: '30s', indent: 1 },
  ];

  const logs = [
    { type: 'SUCCESS', msg: 'Loaded contact.yml' },
    { type: 'INFO', msg: 'Listening on :8080' },
    { type: 'NETWORK', msg: 'GET /ping 200 12ms' },
  ];

  return (
    <div className="min-h-screen py-24 bg-zinc-50/30 dark:bg-transparent">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shrink-0">
              <Terminal className="text-primary" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter uppercase truncate">Connect.exe</h2>
              <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono overflow-hidden">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                <span className="truncate">SYSTEM STATUS: ACTIVE | {displayTimestamp}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Terminal Window */}
        <Reveal>
          <div className="border border-black/10 dark:border-white/10 rounded-xl bg-white/40 dark:bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl">
            <div className="bg-black/5 dark:bg-white/5 px-4 py-2 border-b border-black/10 dark:border-white/10 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold truncate ml-4">
                contact.yml
              </div>
            </div>
            <div className="p-4 sm:p-8 font-mono text-xs sm:text-sm md:text-base overflow-hidden">
              {yamlLines.map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-muted-foreground/30 select-none">{String(i + 1).padStart(2, '0')}</span>
                  {line.kind === 'comment' ? (
                    <p className="text-muted-foreground/50 break-all">{line.text}</p>
                  ) : line.kind === 'blank' ? (
                    <p>&nbsp;</p>
                  ) : (
                    <p className="text-muted-foreground break-all" style={{ paddingLeft: `${line.indent ?? 0}rem` }}>
                      <span className="text-blue-400">{line.key}</span>:
                      {line.value !== undefined && (
                        <>
                          {' '}
                          <span className={line.kind === 'bool' ? 'text-primary' : 'text-green-400'}>{line.value}</span>
                        </>
                      )}
                    </p>
                  )}
                </div>
              ))}
              <div className="flex gap-4 mt-8">
                <span className="text-muted-foreground/30 select-none">{String(yamlLines.length + 1).padStart(2, '0')}</span>
                <p className="break-all">
                  <span className="text-primary">$</span> curl -s localhost:8080/ping
                </p>
              </div>
              <div className="flex gap-4">
                <span className="text-muted-foreground/30 select-none">{String(yamlLines.length + 2).padStart(2, '0')}</span>
                <p className="text-muted-foreground break-all">
                  &#123;&quot;status&quot;: <span className="text-green-400">&quot;ok&quot;</span>, &quot;open_to_work&quot;: <span className="text-primary">true</span>&#125;
                  <span className="text-primary animate-pulse ml-1">_</span>
                </p>
              </div>

            </div>
          </div>
        </Reveal>

          {/* Direct Channels */}
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { name: 'Email', icon: Mail, val: 'Send Message', href: 'mailto:tushar27x@proton.me' },
                { name: 'GitHub', icon: Github, val: 'View Source', href: 'https://github.com/tushar27x' },
                { name: 'LinkedIn', icon: Linkedin, val: 'Connect', href: 'https://www.linkedin.com/in/tushar-sharma-01961b22b/' }
              ].map((chan) => (
                <Link
                  key={chan.name}
                  href={chan.href}
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-black/10 dark:border-white/10 hover:border-primary/50 transition-all group gap-2"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <chan.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-tight truncate">{chan.name}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground font-mono truncate shrink-0">{chan.val}</span>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-[10px] leading-relaxed text-muted-foreground font-mono italic text-center px-4">
              # Note: Always looking for challenges that require deep technical knowledge and creative problem solving.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
