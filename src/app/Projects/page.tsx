export default function Projects() {
    return (
      <div className="flex flex-col gap-y-10">
        <div>
          <p className="font-bold text-5xl md:text-7xl lg:text-9xl ">Projects</p>
        </div>
        <div>
          <br></br>
          <p className="font-bold text-3xl md:text-3xl lg:text-5xl">Portfolio Website</p>
          <br></br>
          <p className="text-l md:text-xl lg:text-2xl">A react based web app using next.js routing, and Tailwind CSS Styling to demonstrate completed projects.</p>
        </div>
        <div>
          <br></br>
          <p className="font-bold text-3xl md:text-3xl lg:text-5xl">Networking Automation Project</p>
          <br></br>
          <p className="text-l md:text-xl lg:text-2xl">A python based application that automatically configures large scale networks to run Zero Touch Provisioning.</p>
        </div>
      </div>
  );
}
  