import { type ComponentPropsWithoutRef } from 'react';
import TextBtn from './TextBtn';

type Props = ComponentPropsWithoutRef<'div'> & {
  color?: string;
  btnText?: string;
};

const Card = (props: Props) => {
  const {
    color = 'fuchsia',
    children,
    className,
    btnText = 'Learn More',
  } = props;
  return (
    <div className={`relative z-0 p-8 md:p-10 group ${className}`}>
      <div
        className={`absolute size-16 rounded-xl bg-${color}-500 top-1.5 right-1.5 -z-10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300`}
      />
      <div
        className={`absolute size-16 rounded-xl bg-${color}-500 top-1.5 right-1.5 -z-10 group-hover:bg-${color}-400 transition duration-300`}
      />
      <div className='absolute inset-0 bg-zinc-800 -z-10 rounded-2xl [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]' />

      {children}

      <div className='flex justify-between mt-12'>
        <TextBtn color={color}>{btnText}</TextBtn>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='size-8 text-zinc-500 group-hover:text-zinc-300 transition duration-300 -translate-x-2 group-hover:translate-x-0'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
          />
        </svg>
      </div>
    </div>
  );
};

export default Card;
