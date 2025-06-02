import { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

export const FlipCard: React.FC<FlipCardProps> = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full max-w-[320px] group cursor-pointer perspective relative"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <motion.div
        className={`relative w-full h-full preserve-3d transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        } group-hover:rotate-y-180`}
      >
        <div className=" absolute w-full h-full backface-hidden">
          {front}
        </div>
        <div className=" w-full h-full backface-hidden rotate-y-180">
          {back}
        </div>
      </motion.div>
    </div>
  );
};
