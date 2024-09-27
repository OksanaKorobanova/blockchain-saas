import { type ComponentPropsWithoutRef } from 'react';

const TextBtn = ({
  className,
  children,
  color = 'fuchsia',
}: ComponentPropsWithoutRef<'button'> & { color?: string }) => {
  return (
    <button
      className={`text-sm font-heading uppercase font-extrabold tracking-wider text-${color}-500 ${className}`}>
      {children}
    </button>
  );
};

export default TextBtn;
