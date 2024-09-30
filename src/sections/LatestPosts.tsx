import type { CollectionEntry } from 'astro:content';
import Card from '../components/Card';
import { getPostColorFromCategory } from '../utils/postUtils';
import Tag from '../components/Tag';
import CutCornerButton from '../components/CutCornerButton';

type Props = {
  latestPosts: CollectionEntry<'blog'>[];
};

const LatestPosts = ({ latestPosts }: Props) => {
  return (
    <section className='py-60'>
      <div className='container'>
        <div className='max-w-3xl mx-auto'>
          <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>
            Your portal to everything blockchain.
          </h2>
          <p className='tetx-xl lg:text-2xl text-center text-zinc-400 mt-8'>
            Keep up with the newest trends, updates, and insights in the
            blockchain world, updated weekly.
          </p>
        </div>

        <div className='mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-8'>
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  btnText='Read more'
                  color={getPostColorFromCategory(category)}
                  className={postIndex % 2 !== 0 ? 'md:hidden' : ''}>
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className='font-heading font-black text-3xl mt-3'>
                    {title}
                  </h3>
                  <p className='text-lg text-zinc-400 mt-6'>{description}</p>
                </Card>
              )
            )}
          </div>
          <div className='hidden md:flex flex-col gap-8 mt-16'>
            {latestPosts.map(
              ({ data: { title, description, category } }, postIndex) => (
                <Card
                  key={postIndex}
                  btnText='Read more'
                  color={getPostColorFromCategory(category)}
                  className={postIndex % 2 == 0 ? 'md:hidden' : ''}>
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className='font-heading font-black text-3xl mt-3'>
                    {title}
                  </h3>
                  <p className='text-lg text-zinc-400 mt-6'>{description}</p>
                </Card>
              )
            )}
          </div>
        </div>
        <div className='flex justify-center mt-48 md:mt-32'>
          <CutCornerButton>Read the Blog</CutCornerButton>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
