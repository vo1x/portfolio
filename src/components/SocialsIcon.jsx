import { motion } from 'framer-motion';

function SocialsIcon({ url, icon }) {
  return (
    <motion.a
      whileHover={{ scale: 1.2, color: '#fff' }}
      href={url}
      target="_blank"
      className="cursor-pointer"
    >
      {icon}
    </motion.a>
  );
}

export default SocialsIcon;
