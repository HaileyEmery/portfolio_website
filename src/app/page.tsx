import Link from 'next/link';
import {formatting} from './formatting.tsx'

export default function Page() {
  return (<>
    <div>
      <p className={formatting.title}>
        Hailey Emery
      </p>
    </div>
    <div>
      <p className={formatting.normal}>
        With a Bachelors of Science in Computer Science and a Bachelors of Science in Computer Engineering from Colorado State University, I have honed my technical competencies, particularly in respect to software engineering. As the Head Cashier at Lowes Companies, Inc., my role revolves around meticulous time management and effective communication skills, fostering an efficient checkout process. Our team consistently meets customer service objectives, thanks in part to my dedication to detail and the collaborative efforts to enhance client experiences. These skills and my educational background converge to prepare me for the evolving demands of technology development teams.
      </p>
    </div>
    <div>
      <p className={formatting.heading1}>
        Education
      </p>
      <p className={formatting.heading3}>
        Bachelors of Science in Computer Science
      </p>
      <p className={formatting.normal}>
        Colorado State University - May 2024
      </p>
      <p className={formatting.heading3}>
        Bachelors of Science in Computer Engineering
      </p>
      <p className={formatting.normal}>
        Colorado State University - May 2024
      </p>
    </div>
    <div>
      <p className={formatting.heading1}>
        Major Projects
      </p>
      <Link href="/Projects" className={formatting.heading3}> 
        Portfolio Website 
      </Link>
      <br />
      <Link href="/Projects" className={formatting.heading3}> 
        Networking Automation Project
      </Link>
    </div>
  </>);
}