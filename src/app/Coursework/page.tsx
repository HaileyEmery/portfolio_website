import fs from 'fs'
import {formatting} from '/src/app/formatting.tsx'
let CourseNameFormat="font-bold text-3xl md:text-3xl lg:text-5xl"
export default function Coursework() {
  var jsonString = JSON.parse(fs.readFileSync("src/app/Coursework/relevant_coursework.json", 'utf-8'))
  const courseDataArray = jsonString.courses.map((course) => {
    return {
      key: course.code,
      name: course.name,
      college: course.school,
      semester: course.semester,
      description: course.description
    }
  });

  let courseList = courseDataArray.map((courseData) => 
    <div key={courseData.code}>
      <p className="font-semibold text-xl md:text-3xl lg:text-4xl">
        {courseData.name}
      </p>
      <p className="font-semibold text-md md:text-lg lg:text-xl">
        {courseData.college} - {courseData.semester}
      </p>
      <p className="text-md md:text-lg lg:text-xl">
        {courseData.description}
      </p>
    </div>
  );

  return (<>
    <p className="font-bold text-4xl md:text-5xl lg:text-7xl ">
      Relevant Coursework
    </p>
    {courseList}
  </>);
}
  