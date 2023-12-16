import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';
import React from 'react';

export default function About() {
  return (
    <div className="bg-base-200 min-h-screen">
      <div className="container mx-auto p-6">
        <Heading title="About me" iconClass="fas fa-info" />
        <SubHeading
          title="Ryan Wilson Full Stack Developer"
          iconClass="fas fa-code"
        />

        <div className="grid grid-col-1 gap-6 md:col-1 lg:grid-cols-2 lg-w-3/4">
          <div className="card bg-base-300 shadow-xl mb-6 glass  mx-auto text-lg lg:w-3/4 ">
            <div className="card-body">
              <SubHeading title="My Story" iconClass="fas fa-book" />
              <p>
                I have always had a passion for technology and computers. From a
                young age, I was fascinated with machines and how they worked. I
                was in the 9th grade when my father got a computer. I was amazed
                at how it worked and how it could do so many things. I was
                especially fascinated by the internet. I imagined a time when
                all machines would talk to one another and share information. I
                was hooked. I knew I wanted to be a part of this new world.
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
          </div>
        </div>
      </div>
    </div>
  );
}
