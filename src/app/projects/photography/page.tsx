'use client';
import { FC } from 'react';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {}

const page: FC<Props> = (): JSX.Element => {
  return (
    <>
      <div className="mt-4">
        <Heading title="photography" iconClass="fas fa-camera-retro" />
      </div>
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
          <div className="card-image flex justify-center items-center">
          

            <motion.div whileHover={{ scale: 1.1 }}>
                <Image
                    src="/projects/Ryan-Wilson-Images.png"
                    alt="Ryan Wilson"
                    width={500}
                    height={300}
                    className="rounded border-1 border-gray-500 drop-shadow-md"
                />
            </motion.div>
          </div>
        </div>
        <div className="card-text">
          <p>
            This is a photography portfolio website that I built using NextJS,
            TailwindCSS, and Framer Motion. I used the NextJS Image component to
            optimize the images for the web. I also used the Framer Motion
            library to animate.
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
          <Link href={'/projects'}>
            <button
              type="button"
              aria-label="back"
              className="btn btn-success m-1"
            >
              Back to Projects
            </button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default page;
