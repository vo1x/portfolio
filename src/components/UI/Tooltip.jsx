import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Tooltip({ tooltip, children, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible((prev) => !prev);
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return 'bottom-full mb-2';
      case 'bottom':
        return 'top-full mt-2';
      case 'left':
        return 'right-full mr-2';
      case 'right':
        return 'left-full ml-2';
      default:
        return 'bottom-full mb-2';
    }
  };

  return (
    <div className="relative">
      <div onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
        {children}
      </div>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: position === 'top' ? 10 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === 'top' ? 5 : 15 }}
            transition={{ duration: 0.2 }}
            className={`absolute ${getPositionStyles()} w-max rounded-lg border border-teal-500 bg-teal-950/50 p-1 text-sm text-teal-400 shadow-md backdrop-blur-sm`}
          >
            {tooltip || 'Tooltip'}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Tooltip;
