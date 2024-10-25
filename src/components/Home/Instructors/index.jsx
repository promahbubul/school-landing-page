import { useState } from "react";
import instructorData from "../../../constant/home/instructor.constant";
import SectionTitle from "../../shared/ui/SectionTitle";
import Card from "./Card";

const Instructors = () => {
  return (
    <div className="mt-24">
      <SectionTitle title={"Meet our instructors"} />
      <div className="flex flex-row justify-between mt-16 gap-8 items-stretch">
        {instructorData.map((instructor) => (
          <Card key={instructor.id} {...instructor} />
        ))}
      </div>
    </div>
  );
};
export default Instructors;
