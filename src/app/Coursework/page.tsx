import fs from 'fs'

let CourseNameFormat="font-bold text-3xl md:text-3xl lg:text-5xl"
export default function Coursework() {
  var jsonString = JSON.parse(fs.readFileSync("src/app/Coursework/relevant_coursework.json", 'utf-8'))
  const courseDataArray = jsonString.courses.map((course) => {
    return {
      name: course.name,
      college: course.school,
      semester: course.semester,
      description: course.description
    }
  }
  )


  let courseList = courseDataArray.map((courseData) => 
    <div>
      
      <p className="font-semibold text-xl md:text-3xl lg:text-4xl">
        {courseData.name}
      </p>
      <p className="font-semibold text-md md:text-lg lg:text-xl">
        {courseData.college} - {courseData.semester}
      </p>
      <p className="text-md md:text-lg lg:text-xl">
        {courseData.description}
      </p>
      <br />
    </div>
  );

  return (
      <div className="flex flex-col gap-y-10">
        <br></br>
        <div>
          <p className="font-bold text-4xl md:text-5xl lg:text-7xl ">Relevant Coursework</p>
        </div>
        <div>
          {courseList}
          {/* <br></br>
          <p className={CourseNameFormat}>Software Testing</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Natural Sciences - Spring 2024</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br>
          <p className={CourseNameFormat}>Database Systems</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Natural Sciences - Spring 2024</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br>
          <p className={CourseNameFormat}>Senior Design Project</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Engineering - Fall 2023 & Spring 2024</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br>
          <p className={CourseNameFormat}>Computer Networks and the Internet</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Natural Sciences - Fall 2023</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br>
          <p className={CourseNameFormat}>Embedded Systems and Machine Learning</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Natural Sciences - Fall 2023</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br>
          <p className={CourseNameFormat}>Modern CyberSecurity</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Natural Sciences - Fall 2023</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br>
          <p className={CourseNameFormat}>Operating Systems</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Natural Sciences - Spring 2023</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br>
          <p className={CourseNameFormat}>Linear System Analysis II</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Engineering - Spring 2023</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br>
          <p className={CourseNameFormat}>Computer Organization and Architecture</p>
          <p className="font-semibold text-l md:text-xl lg:text-2xl">College of Engineering - Spring 2023</p>
          <p className="text-l md:text-xl lg:text-2xl"></p>
          <br></br> */}
        </div>
      </div>
  );
}
  