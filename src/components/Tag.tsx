import { type ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'div'> & { color?: string };

const Tag = ({ children, className, color = 'fuchsia' }: Props) => {
  return (
    <div
      className={`px-3 py-1.5 uppercase font-heading font-extrabold tracking-wider text-xs bg-${color}-500/15 text-${color}-500 inline-flex rounded-full ${className}`}>
      {children}
    </div>
  );
};

export default Tag;
