import React, { useState, useEffect } from 'react';

function CursorTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [regionCounts, setRegionCounts] = useState({
    topLeft: 0,
    topRight: 0,
    bottomLeft: 0,
    bottomRight: 0,
  });

  const [mostVisitedRegion, setMostVisitedRegion] = useState(null);

  useEffect(() => {
    function handleMouseMove(event) {
      const { clientX: x, clientY: y } = event;
      setPosition({ x, y });

      const width = window.innerWidth;
      const height = window.innerHeight;

      let region = '';

      if (y < height / 2) {
        region = x < width / 2 ? 'topLeft' : 'topRight';
      } else {
        region = x < width / 2 ? 'bottomLeft' : 'bottomRight';
      }

      setRegionCounts(prev => {
        const updated = {
          ...prev,
          [region]: prev[region] + 1
        };

        // Update most visited region
        const mostVisited = Object.entries(updated).reduce(
          (max, [key, value]) => (value > max[1] ? [key, value] : max),
          ['', 0]
        );

        setMostVisitedRegion(mostVisited[0]);

        return updated;
      });
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Cursor Tracker</h2>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
      <p>Most visited region: <strong>{mostVisitedRegion || 'N/A'}</strong></p>
    </div>
  );
}

export default CursorTracker;
