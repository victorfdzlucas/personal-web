import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";
//import Link from "next/link";

export default function AboutMe() {
  return (
    <div
      className="mt-[10rem] flex w-11/12 flex-col items-start justify-center md:w-1/2"
      id="about-me-section"
    >
      <SectionTitle>About Me </SectionTitle>
      <SectionText>
        Hey! I’m Víctor Fernández, a Telecom Engineer
        currently working as a{" "}
        <span className="font-medium text-gray-800">
          Data Scientist 
        </span> at{" "} 
        <span className="font-medium text-gray-800">
        Aily Labs
        </span>
        .
        <br />
        <br />
        I’m especially interested in building things from scratch and turning
        ideas into real products, with the goal of creating and
        launching my own ventures.
        <br />
        <br />
        To recharge my batteries, I spend time outdoors surfing, skiing, playing golf,
        traveling, reading and hanging out with people and friends.
      </SectionText>
    </div>
  );
}
