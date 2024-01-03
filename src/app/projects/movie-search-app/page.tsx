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
        <Heading title="Flixer" iconClass="fas fa-film" />      </div>
      <motion.div
        className="card items-center border rounded-md bg-base-300 mx-5 flex flex-col"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-title p-4">
          <SubHeading
            title={`Movie Search App`}
            iconClass="fas fa-film"
          />
        </div>
        <div className="card-body mx-auto border-y glass">
          <div className="card-image flex justify-center items-center">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Image
                src="/projects/Flixer.png"
                alt="Ryan Wilson"
                width={500}
                height={300}
                className="rounded border-1 border-gray-500 drop-shadow-md"
              />
            </motion.div>
          </div>
        </div>
        <div className="card-text  text-lg p-5">
          <p>
            I am discovering that I like working with APIs. This is a movie
            search app that I built using NextJS. It is build with typescript
            and uses the IMDB API to fetch movie data.
          </p>
          <a
            href="https://movies2023.vercel.app/"
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
            href="https://github.com/RW2023/next-movies"
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
      <div className="card flex-col justify-center p-6  rounded-md bg-base-300 m-5 border  text-lg">
        <div>
          <SubHeading title="The project" iconClass="fas fa-cogs" />
        </div>
        <p>
          I wanted to work with an api that I could work with and practice
          JavaScript methods like map and filter. I came across the Rapid APi
          IMDB api. I decided to try to create something with it.
          <br />
          <p>
            I ended up creating this movie search app called flixer. It allows
            the user to search for movies and TV shows and get information about
            them. I have been able to search my favorite actors and find out
            what other movies or shows they appear in as well as parodies and
            other off takes of the shows and movies I enjoy. Overall it was a
            fun project. I continue to add functionality to it as I learn. It
            will be fun to see what it can become.
          </p>
        </p>
      </div>
    </>
  );
};

export default page;
