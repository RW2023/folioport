'use client';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const page: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col items-center m-4 p-1 bg-base-100">
        <Heading title="projects" iconClass="fas fa-cogs" />
        <SubHeading
          title="This is a subheading on the projects Page"
          iconClass="fas fa-project-diagram"
        />
        <p className="text-xl">This is paragraph font on the Projects Page</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-5">
        {/* First Card - Original Style */}
        <motion.div
          className="card items-center border rounded-md bg-base-300 mx-5 flex flex-col"
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
            <div className="card rounded border-1 border-gray-500 drop-shadow-md">
              <Link
              href="projects/photography"
              >
                <Image
                  src="/projects/Ryan-Wilson-Images.png"
                  alt="Ryan Wilson"
                  width={500}
                  height={300}
                />
              </Link>
            </div>
            <div className="card-text">
              <p>
                This is a photography portfolio website that I built using
                NextJS, TailwindCSS, and Framer Motion. I used the NextJS Image
                component to optimize the images for the web. I also used the
                Framer Motion library to animate.
              </p>
              <a
                href="https://rw-images.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  aria-label="live version"
                  className="btn btn-primary m-1"
                >
                  Live Version
                </button>
              </a>
              <a
                href="https://github.com/RW2023/rw-images"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  aria-label="github"
                  className="btn btn-secondary m-1"
                >
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Cards - Duplicated Style */}
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={`card-${index + 2}`}
            className="card items-center border rounded-md bg-base-300 mx-5 flex flex-col"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-title p-4">
              <SubHeading
                title={`Card Title ${index + 2}`}
                iconClass="fas fa-project-diagram"
              />
            </div>
            <div className="card-body mx-auto border-y glass">
              <p>This is the body for Card {index + 2}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default page;
