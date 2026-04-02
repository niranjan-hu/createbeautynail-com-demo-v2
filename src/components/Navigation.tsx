"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-black/5 p-2 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex items-center gap-6 pr-4">
          <div className="pl-4 font-semibold tracking-tighter text-sm uppercase">Create Beauty</div>
          <div className="w-[1px] h-4 bg-black/10"></div>
          <button 
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors"
          >
            <div className="space-y-1.5 flex flex-col items-end">
              <div className="w-5 h-[1.5px] bg-black"></div>
              <div className="w-3 h-[1.5px] bg-black"></div>
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-[#fdfbf7]/95 flex flex-col justify-center items-center"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-black/5 flex items-center justify-center hover:scale-95 transition-transform"
            >
              <div className="relative w-5 h-5">
                <div className="absolute top-1/2 left-0 w-5 h-[1.5px] bg-black rotate-45 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-0 w-5 h-[1.5px] bg-black -rotate-45 -translate-y-1/2"></div>
              </div>
            </button>

            <div className="flex flex-col text-center gap-8 text-5xl md:text-7xl font-semibold tracking-tighter">
              {["Services", "About Us", "Testimonials", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                  className="hover:text-black/50 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
