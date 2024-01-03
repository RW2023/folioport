

import PropTypes from 'prop-types';

const Skill = ({ skill, icon }) => {
    return (
      <div
        className="flex items-center text-2xl glass border rounded drop-shadow-xl p-1 m-1 text-center"
     
      >
        <i className={`fab fa-${icon} mr-2`}></i>
        <p>{skill}</p>
      </div>
    );
};

Skill.propTypes = {
    skill: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Skill;