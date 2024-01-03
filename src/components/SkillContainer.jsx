// eslint-disable-next-line no-unused-vars
'use client';
import React, { useState } from 'react';
import Skill from './Skill';
// import SubHeading from './SubHeading';

const Skills = () => {
  const frontendSkills = [
    { skill: 'JavaScript', icon: 'js' },
    { skill: 'React', icon: 'react' },
    { skill: 'HTML5', icon: 'html5' },
    { skill: 'CSS3', icon: 'css3-alt' },
    { skill: 'Bootstrap', icon: 'bootstrap' },
    { skill: 'TypeScript', icon: 'typescript' },
    { skill: 'Tailwind', icon: 'tailwindcss' },
    { skill: 'Material UI', icon: 'material-ui' },
    { skill: 'figma', icon: 'figma' },
  ];

  const backendSkills = [
    { skill: 'Node.js', icon: 'node-js' },
    { skill: 'Express', icon: 'express' },
    { skill: 'SQL', icon: 'database' },
    { skill: 'MongoDB', icon: 'database' },
    { skill: 'Python', icon: 'python' },
    { skill: 'NextJS', icon: 'react' },
    { skill: 'GraphQL', icon: 'graphql' },
    { skill: 'git', icon: 'git' },
    { skill: 'github', icon: 'github' },
  ];

  // State to track which list is active
  const [activeSkills, setActiveSkills] = useState(frontendSkills);
  // State to track the current skill type
  const [currentSkillType, setCurrentSkillType] = useState('Frontend');

  const handleFrontendClick = () => {
    setActiveSkills(frontendSkills);
    setCurrentSkillType('Frontend');
  };

  const handleBackendClick = () => {
    setActiveSkills(backendSkills);
    setCurrentSkillType('Backend');
  };

  return (
    <div className="bg-base-300">
      <div className="flex space-x-4 my-4 card-actions justify-between p-3">
        <button className="btn btn-warning" onClick={handleBackendClick}>
          Back End
        </button>
        <button className="btn btn-success" onClick={handleFrontendClick}>
          Front End
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold">
          {currentSkillType === 'Frontend' ? (
            <i className="fas fa-code mr-2"></i>
          ) : (
            <i className="fas fa-server mr-2"></i>
          )}
          {currentSkillType === 'Frontend'
            ? 'Frontend Skills'
            : 'Backend Skills'}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 border p-1 rounded-md">
        {activeSkills.map((skill, index) => (
          <Skill
            key={index}
            skill={skill.skill}
            icon={skill.icon}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;