import poplarCourseData from "../../../../constant/home/popularCourse.constant";
import { FaRegStar, GoPeople } from "../../../../assets/icons";

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mt-14 gap-8">
      {poplarCourseData.map(
        ({ id, img, price, rating, students, time, title }) => (
          <div
            key={id}
            className="rounded-xl transition-all duration-500 hover:-translate-y-5 drop-shadow-2xl shadow-sm cursor-pointer bg-white"
          >
            <div className="w-full">
              <img
                src={img}
                alt=""
                className="rounded-t-xl w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-row items-start justify-between">
                <h1 className="text-2xl font-medium text-dark2 leading-normal">
                  {title}
                </h1>
                <div className="flex flex-row items-center gap-1">
                  <FaRegStar className="text-green" />
                  <span className="text-black text-base font-poppins">
                    {rating}
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-4 text-base font-medium text-dark2">
                  <p className="">{time}</p>
                  <div className="flex flex-row items-center gap-2">
                    <GoPeople className="text-lg text-green" />
                    <p className="">{students} Students</p>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-green font-poppins">
                  {price}$
                </h3>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
export default Courses;
