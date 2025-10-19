export const hero = {
  greeting: 'Hi, I’m',
  name: 'Kunal Sonne',
  roles: ['Full-stack Engineer', 'Software Developer', 'XR & ML Builder'],
  summary:
    'I build resilient automation platforms and immersive experiences that help teams monitor, learn, and move faster. From robotics fleet dashboards to VR therapy tools, my work blends thoughtful UX with reliable engineering.',
  highlight:
    'Currently refining XRise, a VR therapy platform for neurodiverse learners, while scaling industrial fleet-management tooling at Addverb.',
  location: 'Pune, India',
  availability: 'Open to summer 2026/27 internship opportunities and collaborative research.',
  metrics: [ 
    { label: 'Production features shipped', value: '30+' },
    { label: 'Realtime latency reduction', value: '25%' },
    { label: 'Algorithm problems solved', value: '500+' }
  ]
};

export const socialLinks = [
  {
    label: 'LinkedIn',
    icon: 'Linkedin',
    href: 'https://www.linkedin.com/in/kunal-sonne-719748322/'
  },
  {
    label: 'GitHub',
    icon: 'Github',
    href: 'https://github.com/erenyeager101'
  },
  {
    label: 'LeetCode',
    icon: 'Code2',
    href: 'https://leetcode.com/u/sonnekunal2/'
  }
];

export const skills = {
  blurb:
    'End-to-end engineering skills grounded in robotics, web, and immersive compute. I optimise complex systems for usability, observability, and performance.',
  categories: [
    {
      title: 'Core Languages',
      items: ['C/C++', 'JavaScript', 'Python', 'SQL']
    },
    {
      title: 'Frameworks & Runtime',
      items: ['React & Next.js', 'Node.js / Express', 'Angular', 'MongoDB', 'Flask', 'Unity', 'Godot']
    },
    {
      title: 'Platforms & Tooling',
      items: ['Docker', 'NGINX', 'Redis', 'Git & GitHub', 'Linux', 'AWS', 'GCP', 'Postman']
    },
    {
      title: 'Focus Areas',
      items: ['Realtime telemetry dashboards', 'WebSocket & REST API design', 'Computer vision pipelines', 'Agile delivery & documentation']
    }
  ],
  stats: [
    {
      label: 'Professional internships',
      value: '2',
      helper: 'Hands-on at Addverb Technologies and e-Yantra, IIT Bombay'
    },
    {
      label: 'Latency reduction delivered',
      value: '25%',
      helper: 'Optimised caching and WebSocket updates for live dashboards'
    },
    {
      label: 'Hackathon podiums',
      value: '3',
      helper: 'Including IIT Bombay EYIC and Hackspiration Web3 track'
    }
  ]

};

export const experiences = [
  {
    company: 'Addverb Technologies Pvt. Ltd.',
    role: 'Mobile Robotics Software Intern',
    location: 'Noida, India (On-site)',
    timeline: 'Jul 2025 — Present',
    contributions: [
      'Delivered new fleet-management workflows in Angular with a modular component library, improving operator clarity across devices.',
      'Implemented Redis-backed caching and streaming for low-latency telemetry, unlocking real-time fleet coordination dashboards.',
      'Designed REST APIs that bridge mobile robotic systems with cloud infrastructure, paired with rigorous reviews and sprint ceremonies.'
    ],
    tech: ['Angular', 'Node.js', 'MongoDB', 'Redis', 'REST', 'Agile']
  },
  {
    company: 'e-Yantra, IIT Bombay',
    role: 'Software Engineering Intern',
    location: 'Mumbai, India',
    timeline: 'May 2025 — Jul 2025',
    contributions: [
      'Shipped a scalable automation platform with React, Node.js, MySQL, Docker, and NGINX for the research engineering team.',
      'Explored secure WebSocket messaging patterns alongside HTTPS hardening, trimming API round-trip latency by 25%.',
      'Collaborated with mentors to automate deployment pipelines and observability for classroom robotics content.'
    ],
    tech: ['React', 'Node.js', 'MySQL', 'Docker', 'NGINX', 'WebSockets']
  }
];

export const projects = [
  {
    name: 'XRise — VR Therapy Platform',
    description:
      'Immersive VR therapy games paired with a MERN analytics portal so therapists and families can track neurodiverse learner progress in real time.',
    impact:
      'Delivered custom hardware integrations and 3D printed headset prototypes that achieved 90% reliability during trials.',
    stack: ['React', 'Node.js', 'MongoDB', 'Unity', 'Godot', 'Raspberry Pi'],
    tags: ['XR', 'Healthcare', 'Analytics'],
    links: {
      github: 'https://github.com/erenyeager101',
      live: null
    }
  },
  {
    name: 'CrowdSense — Crowd Analytics',
    description:
      'Realtime MERN dashboard that blends computer-vision scene analysis with geospatial insights for event teams and city planners.',
    impact:
      'Achieved 85% detection accuracy while serving historical trend queries through MongoDB time-series collections.',
    stack: ['React', 'Express', 'MongoDB', 'OpenCV', 'Tailwind'],
    tags: ['Computer Vision', 'Realtime', 'Platform'],
    links: {
      github: 'https://github.com/erenyeager101',
      live: null
    }
  },
  {
    name: 'FleetOps Control Center',
    description:
      'Modular operations cockpit for industrial mobile robots with live telemetry maps, task orchestration, and system health indicators.',
    impact:
      'Unified previously siloed insights into a single view, enabling faster escalations and on-site decision making.',
    stack: ['Angular', 'Node.js', 'Redis', 'TypeScript'],
    tags: ['Robotics', 'Operations', 'Realtime'],
    links: {
      github: null,
      live: null
    }
  }
];

export const highlights = [
  {
    title: 'EYIC 2024-25 Finalist',
    description:
      'Top 3 among 300+ teams at IIT Bombay’s e-Yantra Innovation Challenge with recognition for best technical presentation.',
    href: 'https://www.e-yantra.org/eyic'
  },
  {
    title: 'Hackspiration 2024 — Web3 Track Winner',
    description:
      'Secured first place for a Solidity-driven decentralized application, earning a $500 grant and jury feedback.',
    href: 'https://hackspiration.in/'
  }
];

export const research = [
  {
    title: 'XRise Assistive Therapy Study',
    description:
      'Measuring engagement, cognitive response, and motor improvements from adaptive VR therapy sessions for neurodiverse children.',
    venue: 'In preparation for delivering more impact and collaborations.',
    status: 'Researching more & collecting longitudinal data.',
    link: null
  }
];

export const contact = {
  email: 'kunal.sonne231@vit.edu',
  phone: '+91 87667 27106',
  location: 'Pune, Maharashtra, India',
  resumeUrl: 'https://drive.google.com/file/d/1EuF3XHPnGk_zSoKgCbG_54GURbySjxbB/view?usp=sharing',
  calendly: null,
  availability:
    'Let’s discuss internships, research collaborations, or innovative platform builds—happy to chat about robotics, XR, or platform engineering.',
  socialCTA: 'Prefer async? Reach me directly on LinkedIn or GitHub.'
};
