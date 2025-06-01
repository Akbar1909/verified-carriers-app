'use client';

import { useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react'
import Show from '../Show';
import { twMerge } from 'tailwind-merge';
// import { FaTimes } from 'react-icons/fa';

interface FullscreenDrawerProps {
  children: React.ReactNode;
  toggler: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  togglerClassName?:string;
  withCloseButton?:boolean;
  contentClassName?:string;
}

const FullscreenDrawer: React.FC<FullscreenDrawerProps> = ({
  children,
  toggler,
  open: controlledOpen,
  onOpenChange,
  togglerClassName,
  withCloseButton=true,
  contentClassName
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const open = isControlled ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      if (isControlled) {
        onOpenChange?.(value);
      } else {
        setInternalOpen(value);
      }
    },
    [isControlled, onOpenChange]
  );

  // 🚫 Prevent background scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Trigger Button */}
      <div className={togglerClassName} onClick={() => setOpen(true)}>{toggler}</div>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-full bg-white z-50 overflow-auto"
            >
              {/* Close Button */}
             <Show when={withCloseButton}>
             <div className="flex justify-end p-4">
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-black text-xl"
                  aria-label="Close Drawer"
                >
                  x
                </button>
              </div>
             </Show>

              {/* Content */}
              <div className={twMerge("px-4 pt-6 pb-10 z-40 flex-1", contentClassName)}>{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullscreenDrawer;
