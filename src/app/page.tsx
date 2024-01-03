//src/app/page.tsx
import Heading from "@/components/ui/Heading";
import SubHeading from "@/components/ui/SubHeading";
import Image from "next/image";
import Intro from "@/components/Intro";
import SkillContainer from "@/components/SkillContainer";


const me = '/me.jpeg'


export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center p-4 min-h-screen bg-base300 glass mx-auto relative ">
        <div className="card card-compact w-full sm:m-0 sm:w-3/4 md:w-1/2 bg-base-300 shadow-2xl border mx-auto rounded">
          <figure>
            <Image
              src={me}
              alt="Ryan Wilson"
              height={400}
              width={400}
              className="rounded-xl h-50 w-50 mx-2 border-black border-2 justify-self-start p-1 bg-cover bg-no-repeat"
            />
          </figure>
          <div className="card-body rounded">
            <Heading title="Ryan Wilson" />
            <SubHeading title="web developer" iconClass="fas fa-code" />
            <div className="card-content text-lg">
              <Intro />
            </div>
            <div className="skills text-3xl border">
              <SkillContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}