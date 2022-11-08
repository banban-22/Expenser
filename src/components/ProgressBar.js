import React from 'react';

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  const testData = [
    { bgcolor: '#6a1b9a', completed: 60 },
    { bgcolor: '#00695c', completed: 30 },
    { bgcolor: '#ef6c00', completed: 53 },
  ];

  return (
    <div className="App">
      {testData.map((item, idx) => (
        <ProgressBar
          key={idx}
          bgcolor={item.bgcolor}
          completed={item.completed}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
