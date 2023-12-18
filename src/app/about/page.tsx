import GitHubStreak from '@/components/GithubStreak';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import React from 'react';
import Image from 'next/image';

export default function About() {
  // Construct Cloudinary URL for your image with transformations
  const imageUrl = `https://res.cloudinary.com/wildev/image/upload/w_100,h_100,c_fill,g_face,r_max/sites/RW%20Images/me_yzjh2n.jpg`;

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-center">
          {' '}
          {/* Flexbox container */}
          {/* Image */}
          <Image
            src={imageUrl}
            alt="Ryan Wilson"
            width="100"
            height="100"
            className="rounded-full"
          />
          {/* SubHeading */}
          {/* <SubHeading title="Ryan Wilson"  /> */}
        </div>

        <Heading title="About me" iconClass="fas fa-info" />
        <SubHeading
          title="Full Stack Developer"
          iconClass="fas fa-code"
        />
        <div className="flex flex-col justify-center items-center m-1 mb-5">
          <SubHeading title="GitHub Stats" iconClass="fab fa-github" />
          <GitHubStreak />
        </div>

        <div className="grid grid-col-1 gap-3 md:col-1 lg:grid-cols-2 lg-w-3/4">
          <div className="card bg-base-300 shadow-xl mb-6 glass  mx-auto text-lg lg:w-3/4 ">
            <div className="card-body">
              <SubHeading title="My Story" iconClass="fas fa-book" />
              <p>
                I have always had a passion for technology and computers. From a
                young age, I was fascinated with machines and how they worked. I
                was in the 9th grade when my father got a computer. I was amazed
                at how it worked and how it could do so many things.{' '}
              </p>
              <br />
              <p>
                After highschool i attended The University of Western Ontario
                where i earned a degree in Sociology. I continued to work with
                technology in my personal projects and as a technical support
                specialist for a few large companies such as Verizon and HP.
              </p>
            </div>
          </div>
          <div className="card bg-base-300 shadow-xl mb-6 glass w-auto mx-auto text-lg lg:w-3/4 ">
            <div className="card-body">
              <SubHeading
                title="in the beginning..."
                iconClass="fas fa-terminal"
              />
              <p>
                My first brush with programming was in the 10th grade. I took a
                computer programming class. I landed probably the worst intro to
                programming teacher you could imagine. We were learning COBOL,
                no real explanation of why that language and how it fits into
                the overall picture of programming. I was so bored I dropped the
                class. I didn&apos;t think I would ever be a programmer. I was
                increasingly intrigued by machines but i was starting feel like
                coding was just not for me.
              </p>
            </div>
          </div>
          <div className="card bg-base-300 shadow-xl mb-6 glass mx-auto text-lg  w-auto lg:w-3/4">
            <div className="card-body">
              <SubHeading title="over the years" iconClass="fas fa-history" />
              <p>
                My next brush with programming was just out of high school. I
                was working my first tech support job supporting HP PC Hardware
                at the time. A friend gifted me a book. It was a book on
                programming in C++. I struggled through the first few chapters.
                It was then I was sure programming was not for me. I wanted it
                to get better. It just got worse. it seemed like every single
                concept was over my head. I was so discouraged I gave up. It did
                nothing, however, to shake my fascination with computers and
                technology in general. coding just continued to naw at me.
              </p>
            </div>
          </div>
          <div className="card bg-base-300 shadow-xl mb-6 glass  mx-auto text-lg  lg:w-3/4">
            <div className="card-body">
              <SubHeading
                title="A Continuous Evolution"
                iconClass="fas fa-cogs"
              />
              <p>
                Creating this portfolio has been a journey learning. This site
                is not just a showcase of my technical abilities, but also a
                testament to my dedication and passion for crafting efficient,
                dynamic, and user-friendly web applications. Every project and
                code snippet here is a reflection of my commitment to leveraging
                technology for practical, real-world solutions. This portfolio
                stands as a living proof of my journey in web development,
                illustrating how each line of code is a step towards mastering
                this ever-evolving field. As my skills in coding grow, I look
                forward to evolving this site further. It&apos;s more than just
                a portfolio; it&apos;s a growing platform reflecting my journey
                as a web developer.
              </p>
            </div>
            <div></div>
          </div>
        </div>
        <SubHeading title="My Skills" iconClass="fas fa-code" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="card bg-base-300 shadow-xl mb-6 glass mx-auto text-lg lg:w-3/4">
            <div className="card-body">
              <SubHeading title="Front-End Skills" iconClass="fas fa-desktop" />
              <ul className="list-disc pl-5">
                <li>
                  <i className="fab fa-react"></i> React
                </li>
                <li>
                  <i className="fas fa-code"></i> TypeScript
                </li>
                <li>
                  <i className="fas fa-paint-brush"></i> Tailwind CSS & DaisyUI
                </li>
                <li>
                  <i className="fas fa-magic"></i> Framer Motion
                </li>
                <li>
                  <i className="fab fa-js-square"></i> JavaScript
                </li>
              </ul>
            </div>
          </div>
          <div className="card bg-base-300 shadow-xl mb-6 glass mx-auto text-lg lg:w-3/4">
            <div className="card-body">
              <SubHeading title="Back-End Skills" iconClass="fas fa-server" />
              <ul className="list-disc pl-5">
                <li>
                  <i className="fas fa-laptop-code"></i> Full Stack Web
                  Development
                </li>
                <li>
                  <i className="fas fa-server"></i> Next.js
                </li>
                <li>
                  <i className="fas fa-database"></i> MongoDB
                </li>
                <li>
                  <i className="fab fa-git-alt"></i> Git & GitHub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
