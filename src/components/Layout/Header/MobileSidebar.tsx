import { useState } from "react";
import { motion, AnimatePresence } from 'motion/react'
 // optional icons

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

interface MobileSidebarProps{
    toggler:any;
}

const MobileSidebar = ({toggler}:MobileSidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-3 fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">MySite</div>

      

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none text-gray-800"
        >
          {toggler}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="md:hidden flex flex-col gap-4 mt-4 px-4 text-gray-700 font-medium bg-white pb-4"
          >
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileSidebar;
