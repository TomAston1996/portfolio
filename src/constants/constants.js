export const projects = [
  {
    title: 'amaCloud 🌐',
    description: "AMA Cloud is Siemens Mobility UKs internal Engineering Asset Management & Assurance platform. The platform includes a Technical Issue ticketing system, real-time reporting, project management tooling, resourcing and forecasting. AMA Cloud currently serves 1500+ daily active users and brought monthly running costs down by 12x compared to legacy systems by going serverless.",
    image: '/images/amaCloud.png',
    tags: ['TypeScript', 'AWS', 'Serverless', 'React/Redux'],
    visit: '',
    id: 0,
    company: 'Siemens Mobility UK'
  },
  {
    title: '🚆XEMUSimTool',
    description: "XEMUSimTool (X-Electric Multiple Unit Simulation Tool) is novel train simulation tool I developed for Siemens Mobility UK. The tool is currently used for all viability studies in +£1bn new fleet bids. I saved the Engineering department £37k+ per year in 3rd party simulation costs developing this.",
    image: '/images/xemu.png',
    tags: ['Python', 'OOP', 'Tkinter', 'Pandas', 'NumPy'],
    visit: '',
    id: 1,
    company: 'Siemens Mobility UK'
  },
  {
    title: 'Raspberry Pi IoT Streamer ᯤ',
    description: "The goal of raspi-streamer is to extract performance metrics (such as CPU utilisation) from a Raspberry Pi and feed it into AWS IoT Core. IoT Core rules publish events to AWS middleware (SNS, SQS, Lambda) which will in turn transform and store the data into a DynamoDB database. A FastAPI app is hosted on ECS for user access to the data.",
    image: '/images/rpi-iot-project-cropped.png',
    tags: ['AWS', 'Python', 'FastAPI', 'Docker'],
    source: 'https://github.com/TomAston1996/raspi-streamer',
    visit: '',
    id: 2,
    company: 'Link coming soon!'
  },
  {
    title: '💻 SCENT',
    description: "SCENT is a cybersecuirty tool for monitoring device activity on private onboard ethernet networks. I worked on developing the logging functionaility in C++ for the onboard side of the tool and also developed its web interface to display real-time network activity, logging and security alerts to the customer.",
    image: '/images/scent.png',
    tags: ['C++', 'ReactJS', 'Linux', 'VMware'],
    visit: '',
    id: 2,
    company: 'Siemens Mobility UK'
  },
  {
    title: '🔋EV Charging Infrastructure Paper',
    description: "Conference Paper written with Siemens Mind Sphere Analytics Centre to analyse and forecast the uptake of EV’s in the UK based on region, government funding and vehicle registration data. The paper was accepted by two IEEE conferences.",
    image: '/images/ev2.png',
    tags: ['Python', 'Jupyter Notebooks', 'Prophet', 'Plotly'],
    visit: '',
    downloadButtonLink: '/files/paper.pdf',
    id: 3,
  },
  {
    title: '📈 etaStocks',
    description: "ETA Stocks is a web application for tracking stock and ETF (Exchange Traded Fund) price data. The backend interfaces with Alpha Vantages stocks API, personalising the content for users of the app. The goal of the app is to create a personalised space for monitoring and exploring investments.",
    image: '/images/eta.png',
    tags: ['Java', 'Spring Boot', 'ReactJS', 'Docker'],
    source: 'https://github.com/TomAston1996/eta-stocks-frontend',
    visit: '',
    company: 'Link coming soon!',
    id: 4,
    
  },
  {
    title: '🗎 srdParser',
    description: "I wrote a parser to extract Safety Related Defect (SRD) data from .docx, .pdf, and .xlsx files in a shared file system. Post extraction, I used SpaCy's Natural Language Proccessing (NLP) library to categorise safety incidents based on the incident description and title. I created a search function that allowed Engineers to find similar historic issues based on their current issue descriptions. This reduced time taken for engineers to find similar issues from a couple of hours down to a few minutes.",
    image: '/images/default.png',
    tags: ['Python', 'NLP', 'spaCy', 'scikit-learn', 'Pandas'],
    visit: '',
    id: 5,
    company: 'Siemens Mobility UK'
  },
  {
    title: '🤖 NetScanner',
    description: "The goal of NetScanner is to create an all-in-one CLI tool for exploring network vulnerabilities. The tool utilises NMAP along with the National Vulnerability Database (NVD) API to conduct a series of vulnerability tests to help automate Cybersecurity Engineer workflow.",
    image: '/images/netscanner.png',
    tags: ['Python', 'NMAP', 'Pandas'],
    source: 'https://github.com/TomAston1996/net-scanner',
    visit: '',
    id: 5
  },

];

export const TimeLineData = [
  { year: 2016, text: 'Started my journey as a developer.', },
  { year: 2017, text: 'Worked intensively on ROMs & Kernels.', },
  { year: 2018, text: 'Learned Android app development.', },
  { year: 2019, text: 'Finished Diploma in Computer Engineering.', },
  { year: 2020, text: 'Aquired new skills while trying not to catch COVID-19', },
  { year: 2021, text: 'Survived COVID-19 and got my first Job at Primebook.', },
  { year: 2022, text: 'Completed B.Tech in Information Technology.', },
  { year: 2023, text: 'Year under progress....', },
];