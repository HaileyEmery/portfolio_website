import {formatting} from '../formatting.tsx'

export default function Page() {
  return (<>
    <p className={formatting.title}>
      Resume
    </p>
    <div>
      <p className={formatting.heading1}>
        Objective
      </p>
      <p className={formatting.normal}>
        Seeking a challenging position that allows me to leverage my understanding of the full hardware and software stack, within an environment that allows me to further increase my knowledge and understanding.  
      </p>
    </div>
    <div>
      <p className={formatting.heading1}>
        Education
      </p>
      <br />
      <p className={formatting.heading2}>
        Bachelors of Science in Computer Science 
      </p>
      <p className={formatting.heading3}>
        Colorado State University - Graduated May 2024
      </p>
      <p className={formatting.normal}>
        Networking and Security Concentration
      </p>
      <br />
      <p className={formatting.heading2}>
        Bachelors of Science in Computer Engineering
      </p>
      <p className={formatting.heading3}>
        Colorado State University - Graduated May 2024
      </p>
    </div>
    <div>
      <p className={formatting.heading1}>
        Awards
      </p>
      <p className={formatting.heading2}> 
        Academic Enrichment Award
      </p>
      <p className={formatting.heading3}>
        CSU College of Natural Sciences - May 2024
      </p>
      <p className={formatting.normal}>
        For breadth of education within the Bachelor of Science degree.
      </p>
    </div>
    <div>
      <p className={formatting.heading1}>
        Projects
      </p>
      <a href="https://projects-web.engr.colostate.edu/ece-sr-design/AY23/network/" className={formatting.heading2}>
        Networking Automation
      </a>
      <p className={formatting.heading3}>
        Developed in collaboration with industry partner, Ductus 
      </p>
      <p className={formatting.normal}>
        Senior Design project for B.S. Computer Engineering. Created an open-source software tool that automates the configuration of large-scale networks for the use of Zero Touch Provisioning. 
      </p>
    </div>
    <div>
      <p className={formatting.heading1}>
        Skills
      </p>
      <p className={formatting.normal}>
        Scheduling, collaboration, conflict management, microsoft office, git, GitHub, C, C++, C#, CSS, Java, JavaScript, React, Verilog, Assembly (MIPS and ARM), Shell Scripting, MATLAB, Python, HTML, SQL, Postman, Visual Studio Code, VMWare, Docker, Cadence Virtuoso, ISC DHCP Servers, and KEA DHCP Servers.
      </p>
    </div>
    <div>
      <p className={formatting.heading1}> 
        Work Experience
      </p>
      <br />
      <div>
        <p className={formatting.heading2}>
          Head Cashier - Lowes 
        </p>
        <p className={formatting.heading3}>
          November 2022 - Present
        </p>
        <p className={formatting.normal}>
          - Coordinate with cashiers and management to organize breaks and ensure adequate coverage.
        </p>
        <p className={formatting.normal}>
          - Resolve customer complaints and answer questions.
        </p>
        <p className={formatting.normal}>
          - Ensure policies and procedures are being upheld by the front-end associates.  
        </p>
        <p className={formatting.normal}>
          - Assist with opening and closing procedures ensuring the safe and secure handling of the tills.
        </p>
        <p className={formatting.normal}>
          - Follow policies and procedures to maintain a safe and efficient working environment
        </p>
        <p className={formatting.normal}>
          - Coordinated with other departments to assist customers and organize deliveries.
        </p>
        <p className={formatting.normal}>
          - Provide fair and courteous service to create a positive experience. 
        </p>
        <p className={formatting.normal}>
          - Collaborated with coworkers to maintain a clean and stocked front end. 
        </p>
      </div>
      <br />
      <div>
        <p className={formatting.heading2}>
          Cashier - Lowes 
        </p>
        <p className={formatting.heading3}>
          November 2022 - Present
        </p>
        <p className={formatting.normal}>
          - Follow policies and procedures to maintain a safe and efficient working environment
        </p>
        <p className={formatting.normal}>
          - Coordinated with other departments to assist customers and organize deliveries.
        </p>
        <p className={formatting.normal}>
          - Provide fair and courteous service to create a positive experience. 
        </p>
        <p className={formatting.normal}>
          - Collaborated with coworkers to maintain a clean and stocked front end. 
        </p>
      </div>
      <br />
      <div>
        <p className={formatting.heading2}>
          Cashier - Target 
        </p>
        <p className={formatting.heading3}>
          November 2022 - Present
        </p>
        <p className={formatting.normal}>
          - Follow policies and procedures to maintain a safe and efficient working environment
        </p>
        <p className={formatting.normal}>
          - Provide fair and courteous service to create a positive experience. 
        </p>
        <p className={formatting.normal}>
          - Collaborated with coworkers to maintain a clean and stocked front end. 
        </p>
      </div>
    </div>
    
  </>);
}
  