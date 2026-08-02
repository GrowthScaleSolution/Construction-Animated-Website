import { useState, useEffect } from 'react';

export function useActiveServiceSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Determine active section (e.g. the first one in our ordered list that is currently visible)
        const active = sectionIds.find(id => visibleSections.has(id)) || null;
        setActiveSection(active);
      },
      { 
        rootMargin: '-25% 0px -25% 0px', 
        threshold: 0 
      }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return activeSection;
}
