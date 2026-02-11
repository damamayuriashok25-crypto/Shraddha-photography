
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="h-12 w-full flex items-center justify-between px-6 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <span className="text-sm font-semibold">9:41</span>
      <div className="flex items-center space-x-1.5">
        <span className="material-icons-round text-lg">signal_cellular_alt</span>
        <span className="material-icons-round text-lg">wifi</span>
        <span className="material-icons-round text-lg">battery_full</span>
      </div>
    </div>
  );
};

export default StatusBar;
