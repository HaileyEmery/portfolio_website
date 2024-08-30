import {formatting} from '../formatting.tsx'

let visionBreaksWindowsCode = `from time import sleep
from os import startfile, system
from ctypes import windll

SCREENSAVER_PATH = "C:\\Windows\\System32\\"
SCREENSAVER_NAME ="Ribbons.scr"
BREAK_DURATION_SECONDS = 30
BREAK_FREQUENCY_MINUTES = 20

def StartBreak():
    windll.user32.BlockInput(True) #Start Blocking Keyboard and Mouse Input
    startfile(SCREENSAVER_PATH + SCREENSAVER_NAME) #Start Screen Saver

def EndBreak():
    system("taskkill /f /im " + SCREENSAVER_NAME) #Close Screensaver
    windll.user32.BlockInput(False) #Stop Blocking Keyboard and Mouse Input

while True:
    sleep(BREAK_FREQUENCY_MINUTES*60 - BREAK_DURATION_SECONDS)
    StartBreak()
    sleep(BREAK_DURATION_SECONDS)
    EndBreak()`

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
    <div>
      <p className={formatting.heading1}>
        Vision Breaks Scripts
      </p>
      <p className={formatting.heading3}>
        Windows
      </p>
      <p className={formatting.normal}>
        A python script that opens the screensaver for 30 seconds every twenty minutes to provide the oppurtunity for regular vision breaks. 
      </p>
      <pre className={formatting.code}>
        <code>
          {visionBreaksWindowsCode}
        </code>
      </pre>
    </div>
  </>);
}
  