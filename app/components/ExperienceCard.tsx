'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

interface ExperienceCardProps {
  company: string;
  role: string;
  duration: string;
  description: string[];
  link: string;
  borderColor: string;
}

export default function ExperienceCard({ company, role, duration, description, link, borderColor }: ExperienceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`border-2 p-8 transition-all duration-700 ease-in-out transform flex flex-col
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
        ${isHovered ? 'border-yellow-300' : borderColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          {link ? (
            <Link 
              href={link}
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-3xl mb-2 transition-colors duration-200 block
                ${isHovered ? 'text-yellow-300' : 'text-white'}`}
            >
              {company}
            </Link>
          ) : (
            <h3 className={`text-3xl mb-2 transition-colors duration-200 
              ${isHovered ? 'text-yellow-300' : 'text-white'}`}>
              {company}
            </h3>
          )}
          <h4 className="text-white text-xl">{role}</h4>
        </div>
        <span className="text-white text-sm">{duration}</span>
      </div>
      <div className="text-white text-sm space-y-4 flex-grow">
        {description.map((bullet, index) => (
          <p key={index}>• {bullet}</p>
        ))}
      </div>
    </div>
  );
} 