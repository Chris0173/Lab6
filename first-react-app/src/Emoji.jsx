import React, { useState } from 'react';

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const handleButtonClick = () => {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  };

  return (
    <div>
      <span role="img" aria-label={isHappy ? 'happy emoji' : 'laughing emoji'}>
        {isHappy ? '\u{1F604}' : '\u{1F606}'}
      </span>
      <button onClick={handleButtonClick}>Change Mood</button>
    </div>
  );
};

export default Emoji;
