/* eslint-disable @next/next/no-img-element */
import React from 'react';

const GitHubStreak = () => {
  return (
    <a
      href="https://github.com/RW2023"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://streak-stats.demolab.com?user=RW2023&theme=neon-dark&hide_border=true&border_radius=6.8&date_format=M%20j%5B%2C%20Y%5D"
        alt="GitHub Streak"
        style={{ maxWidth: '100%' }}
      />
    </a>
  );
};

export default GitHubStreak;
