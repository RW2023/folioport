import { FC } from 'react';
import Heading from '@/components/ui/Heading';
import SubHeading from '@/components/ui/SubHeading';

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
        <div className="card mx-auto items-center border rounded bg-base-300">
          <div className="card-title">
            <SubHeading
              title={`Card Title 1`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 1</p>
          </div>
        </div>
        <div className="card mx-auto items-center border rounded bg-base-300">
          <div className="card-title">
            <SubHeading
              title={`Card Title 2`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 2</p>
          </div>
        </div>
        <div className="card mx-auto items-center border rounded bg-base-300">
          <div className="card-title">
            <SubHeading
              title={`Card Title 3`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 3</p>
          </div>
        </div>
        <div className="card mx-auto items-center border rounded bg-base-300">
          <div className="card-title">
            <SubHeading
              title={`Card Title 4`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 4</p>
          </div>
        </div>
        <div className="card mx-auto items-center border rounded bg-base-300">
          <div className="card-title">
            <SubHeading
              title={`Card Title 5`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 5</p>
          </div>
        </div>
        <div className="card mx-auto items-center border rounded bg-base-300">
          <div className="card-title">
            <SubHeading
              title={`Card Title 6`}
              iconClass="fas fa-project-diagram"
            />
          </div>
          <div className="card-body">
            <p>This is the body for Card 6</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;