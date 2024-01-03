//src/Components/Intro.jsx
import SubHeading from '@/components/ui/SubHeading';

export default function Intro() {
  // const me = img;
  return (
    <div className="flex flex-col justify-center bg-black p-1 border rounded-md drop-shadow-xl">
      <SubHeading
        title="Hi my name is ryan wilson"
        iconClass="fas fa-hand-sparkles"
      />
      <p>
        I am a full stack web developer based in Ontario Canada with a passion
        for creating beautiful, performant and functional web applications. When
        I am not coding I enjoy spending time with my family, music and true
        crime podcasts.
      </p>
    </div>
  );
}
