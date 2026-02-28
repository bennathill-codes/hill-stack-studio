import React from 'react';

interface GlassPanelProps {
    children: React.ReactNode;
    className?: string;
}

export default function GlassPanel({ children, className = '' }: GlassPanelProps) {
    return (
        <div className={`max-w-[90rem] mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.3)] py-16 md:py-24 overflow-hidden ${className}`}>
            {children}
        </div>
    );
}
