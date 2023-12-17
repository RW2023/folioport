//src/app/page.tsx
import Heading from "@/components/ui/Heading";
import SubHeading from "@/components/ui/SubHeading";


export default function Home() {
  return (
    <div className="flex flex-col  items-center  min-h-screen m-4 p-1 bg-base-100">
     <Heading title="home page" iconClass="fas fa-home" />
      <SubHeading title="This is a subheading on the Home Page" iconClass="fas fa-info-circle" />
      <p className="text-xl">This is paragraph font on the Home Page</p>
    </div>
  );
}
