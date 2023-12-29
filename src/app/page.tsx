//src/app/page.tsx
import Heading from "@/components/ui/Heading";
import SubHeading from "@/components/ui/SubHeading";
import Image from "next/image";


export default function Home() {
  return (
    <div className="text-center p-10">
      <div className="hero-section bg-gray-200">
        <Image src="/dred.png"
          width={1200}
          height={500}
         alt="Hero" 
         className="hero-image drop-shadow" />
      </div>
      <Heading title="I'm Ryan Wilson" iconClass="fas fa-user" />
      <SubHeading title=" a Full Stack Developer" iconClass="fas fa-code" />
    </div>
  );
}