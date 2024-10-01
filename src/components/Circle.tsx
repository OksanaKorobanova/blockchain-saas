import { motion } from 'framer-motion';
import { type ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'> & { isAnimated?: boolean };

const Circle = ({ className, children, isAnimated = false }: Props) => {
  return (
    <div
      className={`bg-zinc-900 size-[240px] inline-flex justify-center items-center rounded-full ${className}`}>
      <motion.div
        animate={isAnimated && { rotate: 360 }}
        transition={{ ease: 'linear', duration: 15, repeat: Infinity }}
        className={`absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 border-[6px] border-transparent ${isAnimated && 'border-t-fuchsia-500/30'}`}
      />
      {children}
    </div>
  );
};

export default Circle;
