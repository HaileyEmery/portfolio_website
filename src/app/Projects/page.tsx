import Link from 'next/link';
import {formatting} from '../formatting.tsx'

let visionBreaksWindowsCode = `from time import sleep
from os import startfile, system
from ctypes import windll

SCREENSAVER_PATH = "C:\\Windows\\System32\\"
SCREENSAVER_NAME ="Ribbons.scr"
BREAK_DURATION_SECONDS = 30
BREAK_FREQUENCY_MINUTES = 20

def StartBreak():
  #Start Blocking Keyboard and Mouse Input
  windll.user32.BlockInput(True) 
  #Start Screen Saver
  startfile(SCREENSAVER_PATH + SCREENSAVER_NAME) 

def EndBreak():
  #Close Screensaver  
  system("taskkill /f /im " + SCREENSAVER_NAME) 
  #Stop Blocking Keyboard and Mouse Input
  windll.user32.BlockInput(False) 

while True:
  sleep(BREAK_FREQUENCY_MINUTES*60 - BREAK_DURATION_SECONDS)
  StartBreak()
  sleep(BREAK_DURATION_SECONDS)
  EndBreak()`
let visionBreaksLinuxCode = ''

export default function Projects() {
  return (<>
    <p className={formatting.title}>
      Projects
    </p>
    
    <div>
      <Link className={formatting.heading1} href="https://github.com/HaileyEmery/portfolio_website">
        Portfolio Website
      </Link>
      <p className={formatting.normal}>
        A react based web app using next.js routing, and Tailwind CSS Styling to demonstrate completed projects.
      </p>
    </div>
    
    <div>
      <Link className={formatting.heading1} href="https://projects-web.engr.colostate.edu/ece-sr-design/AY23/network/">
        Networking Automation Project
      </Link>
      <p className={formatting.normal}>
        A python based application that automatically configures large scale networks to run Zero Touch Provisioning.
      </p>
    </div>
    
    <div>
      <Link className={formatting.heading1} href="https://github.com/HaileyEmery/VisionBreaks">
        Vision Break Scripts
      </Link>
      <br />
      <div>
        <Link className={formatting.heading3} href="https://github.com/HaileyEmery/VisionBreaks/Windows">
          Windows
        </Link>
        <p className={formatting.normal}>
          A python script that opens the screensaver for 30 seconds every twenty minutes to provide the opportunity for regular vision breaks. 
        </p>
        <pre className={formatting.code}>
          <code>
            {visionBreaksWindowsCode}
          </code>
        </pre>
      </div>
      <br />
      <div>
        <Link className={formatting.heading3} href="https://github.com/HaileyEmery/VisionBreaks/Linux">
          Linux
        </Link>
        <p className={formatting.normal}>
          A bash script for Ubuntu Linux that turns off the screen for 30 seconds every twenty minutes to provide the opportunity for regular vision breaks. 
        </p>
        <pre className={formatting.code}>
          <code>
            {visionBreaksLinuxCode}
          </code>
        </pre>
      </div>
    </div>
  </>);
}
  