import { type ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'> & { color?: string };

const TextBtn = ({ className, children, color = 'fuchsia' }: Props) => {
  return (
    <button
      className={`text-sm font-heading uppercase font-extrabold tracking-wider text-${color}-500 ${className}`}>
      {children}
    </button>
  );
};

export default TextBtn;
