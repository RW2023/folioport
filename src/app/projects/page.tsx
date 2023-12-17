import { FC } from 'react';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';

interface Props {}

const page: FC<Props> = (props): JSX.Element => {
  return (
    <div className="flex flex-col  items-center  min-h-screen m-4 p-1 bg-base-100">
      <Heading title="projects" iconClass="fas fa-gears" />
      <SubHeading
        title="This is a subheading on the Home Page"
        iconClass="fas fa-info-circle"
      />
      <p className="text-xl">This is paragraph font on the Home Page</p>
    </div>
  );
};

export default page;