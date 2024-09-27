import { type ComponentPropsWithoutRef } from 'react';

const Circle = (props: ComponentPropsWithoutRef<'div'>) => {
  const { className, children } = props;
  return (
    <div
      className={` bg-zinc-900 size-[240px] inline-flex justify-center items-center rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 ${className}`}>
      {children}
    </div>
  );
};

export default Circle;