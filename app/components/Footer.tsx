import Link from 'next/link';
import React, {FC} from 'react'
import { Github, Linkedin, Twitter } from "lucide-react";
import SocialLink from './SocialLink';

const socials = [
    {
      label: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/oznurkavass",
    },
    {
      label: "GitHub",
      icon: Github,
      href: "https://github.com/oznurkavas7",
    },
    {
      label: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/öznur-boztepe-a45467116",
    },
  ];

type FooterProps = {}

const Footer: FC<FooterProps> = (props) => {
    return (
      <footer className="flex items-center justify-between max-w-3xl mx-auto px-4 w-full h-20 mt-auto">
        <span className="text-sm text-slate-500">
          © {new Date().getFullYear()} Öznur Boztepe
        </span>
  
        <div className="flex items-center space-x-4">
          {socials.map((social) => (
              <SocialLink
              key={social.label}
              icon={social.icon}
              href={social.href}
            />
          ))}
        </div>
      </footer>
    );
  };

export default Footer;