import {formatting} from '../formatting.tsx'
export default function Projects() {
  return (<>
    <p className={formatting.title}>
      Projects
    </p>
    <div>
      <p className={formatting.heading1}>
        Portfolio Website
      </p>
      <p className={formatting.normal}>
        A react based web app using next.js routing, and Tailwind CSS Styling to demonstrate completed projects.
      </p>
    </div>
    <div>
      <p className={formatting.heading1}>
        Networking Automation Project
      </p>
      <p className={formatting.normal}>
        A python based application that automatically configures large scale networks to run Zero Touch Provisioning.
      </p>
    </div>
  </>);
}
  