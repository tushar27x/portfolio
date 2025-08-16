'use client'
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Reveal from '../Reveal';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Tushar27x',
      icon: FaGithub,
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tushar-sharma-01961b22b/',
      icon: FaLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/iAmTushar_27',
      icon: FaXTwitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tushar27x_/?next=%2Ftusharx27_%2F',
      icon: FaInstagram,
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold flex items-center justify-center gap-4">
              <span className="text-4xl md:text-5xl lg:text-6xl">📧</span>
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">CONTACT</span>
              <span className="text-4xl md:text-5xl lg:text-6xl">🤝</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-4 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <Reveal>
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Let&apos;s Connect
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">Available for opportunities</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Message</p>
                        <p className="text-sm text-muted-foreground">Open to collaborations</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Remote / India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>

          {/* Social Links Card */}
          <Reveal>
            <Card className="border-0 bg-card/50  transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      Follow Me
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Connect with me on social media and stay updated with my latest projects and thoughts.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => {
                      const IconComponent = social.icon;
                      return (
                        <Link 
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          className="group"
                        >
                          <div className="p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <IconComponent size={20} className={`text-foreground ${social.color} transition-colors`} />
                              </div>
                              <div>
                                <p className="font-medium text-foreground">{social.name}</p>
                                <p className="text-xs text-muted-foreground">Connect</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Contact Summary */}
        <Reveal>
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm mt-12 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Ready to Collaborate?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                  I&apos;d love to hear from you. Let&apos;s build something amazing together!
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Badge variant="outline" className="text-sm">Open to Work</Badge>
                  <Badge variant="outline" className="text-sm">Remote Ready</Badge>
                  <Badge variant="outline" className="text-sm">Collaborative</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </div>
  )
}

export default Contact