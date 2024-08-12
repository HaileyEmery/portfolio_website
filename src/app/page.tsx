import Link from 'next/link';
export default function Page() {
  return (
      <div className="flex flex-col gap-y-10">
        <div>
          <p className="font-bold text-5xl md:text-7xl lg:text-9xl "> Hailey Emery</p>
        </div>
        <div>
          <p className="text-l md:text-xl lg:text-2xl"> With Bachelors of Science in Computer Science and a Bachelors of Science in Computer Engineering from Colorado State University, I have honed my technical competencies, particularly in respect to software engineering. As the Head Cashier at Lowes Companies, Inc., my role revolves around meticulous time management and effective communication skills, fostering an efficient checkout process. Our team consistently meets customer service objectives, thanks in part to my dedication to detail and the collaborative efforts to enhance client experiences. These skills and my educational background converge to prepare me for the evolving demands of technology development teams. </p>
        </div>
        <div>
          <br></br>
          <p className="font-bold text-3xl md:text-3xl lg:text-5xl">Education</p>
          <br></br>
          <p className="text-l md:text-xl lg:text-2xl"> <p className="font-bold">Bachelors of Science in Computer Science</p> Colorado State University - May 2024</p>
          <br></br>
          <p className="text-l md:text-xl lg:text-2xl"> <p className="font-bold">Bachelors of Science in Computer Engineering</p> Colorado State University - May 2024</p>
        </div>
        <div>
          <br></br>
          <p className="font-bold text-3xl md:text-3xl lg:text-5xl">Major Projects</p>
          <br></br>
          <Link href="/Projects" className="text-l md:text-xl lg:text-2xl"> Portfolio Website </Link>
          <br></br>
          <Link href="/Projects" className="text-l md:text-xl lg:text-2xl"> Networking Automation Project </Link>
        </div>

       </div>
  );
}
