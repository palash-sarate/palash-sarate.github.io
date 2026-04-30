export const cvData = {
  name: "Dr. Palash S. Sarate",
  title: "Ph.D. in Physics",
  institution: "Indian Institute of Science (IISc), Bangalore",
  email: "palashsarate@gmail.com",
  linkedin: "https://linkedin.com/in/palash-sarate",
  github: "https://github.com/palash-sarate",
  summary: "Ph.D. specializing in experimental soft matter physics and granular materials from IISc Bangalore. Expert in probing how topology and connectivity govern macroscopic mechanical response in non-equilibrium systems. Experienced in developing custom experimental platforms, data analysis (Python, MATLAB), and machine learning pipelines.",
  education: [
    {
      degree: "Integrated MSc-PhD in Physics",
      school: "Indian Institute of Science, Bangalore",
      period: "2017 – Mar 2026",
      details: "Focus on granular chains and geometric cohesion."
    },
    {
      degree: "BE in Electronics and Telecommunication",
      school: "SKNCOE, Pune",
      period: "2011 – 2016"
    }
  ],
  experience: [
    {
      role: "PhD Researcher",
      company: "Department of Physics, IISc Bangalore",
      period: "Aug 2019 – Mar 2026",
      points: [
        "Designed and conducted Experiments in soft matter physics, focusing on granular chains under varying force regimes.",
        "Developed custom hardware and software (Arduino, ESP32, Electron.js) for high-precision data acquisition.",
        "Utilized Python, MATLAB, LAMMPS and ImageJ for data analysis and statistical modeling.",
        "Trained a computer vision pipeline (ResNet18) for automated detection of granular chains."
      ]
    },
    {
      role: "Software Developer Internship",
      company: "Xfinito Biodesigns, Bangalore",
      period: "Sept 2021 – Sept 2024",
      points: [
        "Led the development of multiple full-stack applications (mobile, web, and desktop) for health monitoring.",
        "Architected scalable microservices on AWS EKS (Kubernetes) and optimized infrastructure costs by 55%.",
        "Implemented secure authentication and hybrid data storage solutions."
      ]
    }
  ],
  publications: [
    {
      title: "Column to pile transition in quasi-static deposition of granular chains",
      authors: "Palash S., Tejas M., Prerna S.",
      journal: "Soft Matter, (2022), 18, 2054-2059",
      link: "https://doi.org/10.1039/D1SM01539G"
    },
    {
      title: "Topological constraints suppress shear localization in granular chain ensembles",
      authors: "Palash S., Ilyas B., Tejas M., Prerna S.",
      journal: "arXiv:2602.09588, (2026)",
      link: "https://arxiv.org/abs/2602.09588"
    },
    {
      title: "Unjamming Granular Chains: The Role of Frequency and Chain Length in Hopper Discharge Dynamics",
      authors: "Palash S., Tejas M., Prerna S.",
      journal: "Manuscript under preparation, (2025)"
    }
  ],
  projects: [
    {
      title: "Column-to-Pile Transition in Granular Chains",
      period: "2022–2023",
      description: "Designed and built an experiment to study effect of geometric cohesion on flow of granular chains under gravity. Applied image processing and PIV to analyze angle-of-repose and flow fields."
    },
    {
      title: "Flow Through a 2D Hopper of Granular Chains",
      period: "2023–2024",
      description: "Constructed a 2D hopper to study confined granular chain flow and energy-driven unjamming. Investigated the effect of chain length on required energy for fluidization."
    },
    {
      title: "Shear Response of Granular Chains",
      period: "2024–2025",
      description: "Performed direct shear tests to study effect of geometric cohesion on deformation and shear response. Observed chain length dependent shear hardening and wider shear bands."
    },
    {
      title: "DEM Modeling Framework for Granular Chain Dynamics",
      period: "2025–Present",
      description: "Developed a modular DEM simulation framework in LAMMPS and Python for studying granular chain dynamics. Built tools to generate chains of arbitrary length and initial configurations.",
      link: "https://github.com/palash-sarate/Granular-Chains-DEM"
    },
    {
      title: "Computer Vision Pipeline for Granular Chain Detection",
      period: "2025–Present",
      description: "Developed a machine learning pipeline using ResNet18 to identify granular chains from experimental image data. Integrated with a post-processing algorithm for complete chain identification."
    },
    {
      title: "Precision Weighing Instrument & DAQ Tool",
      period: "2024",
      description: "Designed and built a high-resolution weighing scale using load cell sensors, Arduino, and ESP32. Developed an Electron-based desktop app for real-time visualization.",
      link: "https://github.com/palash-sarate/HopperApp"
    },
    {
      title: "Brownian Dynamics Simulation of DNA in Extensional Flow",
      period: "2020",
      description: "Implemented a bead-spring polymer model in Python to simulate Brownian dynamics of a single DNA molecule. Validated steady-state stretch values and characteristic relaxation times."
    },
    {
      title: "Digital Health Applications for Rehabilitation & Monitoring",
      period: "2021–2024",
      description: "Designed and implemented a gamified desktop rehabilitation app using vision-based pose detection and a cross-platform mobile app for tracking health metrics."
    },
    {
      title: "Scalable Backend for Biodesign Applications",
      period: "2021–2024",
      description: "Engineered a Kubernetes-based microservices platform on AWS EKS. Implemented Express.js services for auth, report generation, and multimedia storage."
    }
  ],
  skills: {
    languages: ["Python", "MATLAB", "LAMMPS", "Java", "C++", "JavaScript", "TypeScript", "LaTeX"],
    tools: ["Git", "Docker", "Kubernetes", "AWS (EKS, S3, RDS)", "Arduino/ESP32"],
    experimental: ["PIV", "Direct Shear Testing", "Hollow Cylinder Apparatus", "Image Analysis"]
  }
};
