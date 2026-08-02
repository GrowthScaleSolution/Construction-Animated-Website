'use client';

import React, { useEffect, useState } from 'react';
import { useActiveServiceSection } from './useActiveServiceSection';
import { ServiceEdgePanel } from './ServiceEdgePanel';

interface SystemProps {
  isMuted: boolean;
  onOpenModal: (id: string) => void;
}

export function ServicesEdgePanelSystem({ isMuted, onOpenModal }: SystemProps) {
  const [isMobile, setIsMobile] = useState(true);

  // Disable on mobile/tablet (hide panels if safe placement is impossible)
  // Medium tablet and below (< 1024px)
  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 1024);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const activeSection = useActiveServiceSection([
    'civil-construction',
    'structural-rcc',
    'renovation-repair',
    'foundation-site-preparation',
    'planning-execution',
    'service-selector'
  ]);

  // If on mobile or small tablet, do not render desktop edge panels
  if (isMobile) return null;

  const isPanel1Active = activeSection === 'civil-construction';
  const isPanel2Active = activeSection === 'structural-rcc';
  const isPanel3Active = [
    'renovation-repair', 
    'foundation-site-preparation', 
    'planning-execution', 
    'service-selector'
  ].includes(activeSection || '');

  const handleAction = (id: string) => {
    onOpenModal(id);
  };

  return (
    <div className="fixed inset-0 z-40 pointer-events-none overflow-hidden">
      
      {/* Panel 1: Civil Construction (Right edge, upper viewport) */}
      <ServiceEdgePanel
        id="panel-1"
        side="right"
        label="Civil Construction"
        description="End-to-end practical execution"
        actionText="View Details"
        isActive={isPanel1Active}
        positionClass="top-[22%]"
        onAction={() => handleAction('civil')}
        isMuted={isMuted}
      />
      
      {/* Panel 2: Structural & RCC (Left edge, vertically centred) */}
      <ServiceEdgePanel
        id="panel-2"
        side="left"
        label="Structural & RCC"
        description="Engineering & Framing"
        actionText="View Details"
        isActive={isPanel2Active}
        positionClass="top-1/2 -translate-y-1/2"
        onAction={() => handleAction('structural')}
        isMuted={isMuted}
      />

      {/* Panel 3: Service Guidance (Right edge, lower viewport) */}
      <ServiceEdgePanel
        id="panel-3"
        side="right"
        label="Which Service?"
        description="Need Help Choosing?"
        actionText="Find Your Service"
        isActive={isPanel3Active}
        positionClass="bottom-[18%]"
        onAction={() => handleAction('selector')}
        isMuted={isMuted}
      />
      
    </div>
  );
}
