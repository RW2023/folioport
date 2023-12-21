'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import Image from 'next/image';

interface Props {}

const page: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center m-4 p-1 bg-base-100">
        <Heading title="projects" iconClass="fas fa-cogs" />{' '}
        <SubHeading
          title="This is a subheading on the projects Page"
          iconClass="fas fa-project-diagram"
        />
        <p className="text-xl">This is paragraph font on the Projects Page</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5">
        <motion.div
          className="card  items-center border rounded-md bg-base-300 mx-5 flex flex-col"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-title p-4">
            <SubHeading
              title={`Photography Portfolio`}
              iconClass="fas fa-images"
            />
          </div>
          <div className="card-body mx-auto border-y glass">
            <div className="card-image className='rounded border-1 border-gray-500 drop-shadow-md'">
              <Image
                src="/projects/Ryan-Wilson-Images.png"
                alt="Ryan Wilson"
                width={500}
                height={300}
              />
            </div>
            <div className="card-text">
              <p>
                This is a photography portfolio website that I built using
                NextJS, TailwindCSS, and Framer Motion. I used the NextJS Image
                component to optimize the images for the web. I also used the
                Framer Motion library to animate.
              </p>
              <a href='https://rw-images.vercel.app/' target='_blank' rel='noopener noreferrer'>
                <button type='button' aria-label='live version' className="btn btn-primary">Live Version</button>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="card mx-auto items-center border rounded bg-base-300"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-title">
            <SubHeading
              title={`Card Title 2`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 2</p>
          </div>
        </motion.div>
        <motion.div
          className="card mx-auto items-center border rounded bg-base-300"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-title">
            <SubHeading
              title={`Card Title 3`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 3</p>
          </div>
        </motion.div>
        <motion.div
          className="card mx-auto items-center border rounded bg-base-300"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-title">
            <SubHeading
              title={`Card Title 4`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 4</p>
          </div>
        </motion.div>
        <motion.div
          className="card mx-auto items-center border rounded bg-base-300"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-title">
            <SubHeading
              title={`Card Title 5`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 5</p>
          </div>
        </motion.div>
        <motion.div
          className="card mx-auto items-center border rounded bg-base-300"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-title">
            <SubHeading
              title={`Card Title 6`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 6</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default page;