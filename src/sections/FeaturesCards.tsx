import { useEffect, useState } from 'react';
import Card from '../components/Card';

const cardData = [
  {
    image: '/assets/images/pill.png',
    title: 'Discover the future of blockchain with Blockforge',
    description:
      'Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.',
    color: 'fuchsia',
  },
  {
    image: '/assets/images/cuboid.png',
    title: 'Decentralized Data Solutions',
    description:
      'Empower your application with decetralized data solutions, ensuring security and transparency at every step',
    color: 'lime',
  },
  {
    image: '/assets/images/cone.png',
    title: 'Next-Gen Smart Contracts',
    description:
      'Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.',
    color: 'cyan',
  },
  {
    image: '/assets/images/icosahedron.png',
    title: 'Seamless Blockchain Integration',
    description:
      'Integrate blockchain technology seamlessly into your projects. with minimal effort and maximum efficiency.',
    color: 'violet',
  },
];

const FeaturesCards = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timeout = setTimeout(() => {
      setSelectedCardIndex((curr) =>
        curr === cardData.length - 1 ? 0 : curr + 1
      );
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [selectedCardIndex, isHovered]);

  return (
    <section className='py-24 overflow-x-clip md:-mt-28'>
      <div className='container'>
        <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>
          Discover the future of blockchain with Blockforge.
        </h2>
        <div className='mt-36 lg:mt-48 flex'>
          <div className='flex flex-none gap-8'>
            {cardData.map(({ image, title, description, color }) => (
              <div
                key={title}
                className='inline-flex transition-all duration-500'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  transform: `translateX(calc((-100% - 2rem) * ${selectedCardIndex}))`,
                }}>
                <Card color={color} className='max-w-xs md:map-w-md'>
                  <div className='flex justify-center -mt-28'>
                    <div className='inline-flex relative'>
                      <div className='absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30 transition duration-300' />
                      <img
                        src={image}
                        alt={title}
                        className='size-40 group-hover:-translate-y-6 transition duration-300'
                      />
                    </div>
                  </div>

                  <h3 className='font-heading font-black text-3xl mt-12'>
                    {title}
                  </h3>
                  <p className='text-lg text-zinc-400 mt-4'>{description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-10'>
          <div className='bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full'>
            {cardData.map(({ title }, cardIndex) => (
              <div
                onClick={() => setSelectedCardIndex(cardIndex)}
                key={title}
                className={`size-2.5 rounded-full cursor-pointer ${cardIndex === selectedCardIndex ? 'bg-zinc-300' : 'bg-zinc-500 '}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCards;
