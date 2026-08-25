// data.js
const portfolioData = {
  about: {
    name: "Fangwei Chang",
    roleDescription: "PhD Candidate in Electrical and Computer Engineering at the University of Toronto. Experience in electromagnetics, FEM tools (COMSOL, HFSS), numeric simulation methods, and RF equipment/measurement.",
    emailText: "fangwei.chang@mail.utoronto.ca",
    emailLink: "fangwei.chang@mail.utoronto.ca",
    linkedinText: "linkedin.com/in/fangwei-c",
    linkedinLink: "linkedin.com/in/fangwei-c",
    githubText: "github.com/fgwc",
    githubLink: "github.com/fgwc",
    scholarText: "Google Scholar Profile",
    scholarLink: "https://scholar.google.com/citations?user=8wtEQYgAAAAJ",
    resumePdf: "CV_fangwei_chang.pdf"
  },
  education: [
    {
      institution: "University of Toronto",
      period: "Sep 2021 - Present",
      degree: "PhD Candidate, Electrical and Computer Engineering (ECE)",
      location: "Toronto, Canada",
      content: `
        <ul class="cv-bullets">
          <li>Thesis: Near Field Wireless Power Transfer and Focusing using Electromagnetic Metamaterials</li>
        </ul>
        <p>Using numeric methods, optimization, and finite-element simulation tools to design and optimize relevant antenna structures, e.g. COMSOL, HFSS, and the method of moments (MoM). Designs are fabricated in-lab using laser printed circuit board (PCB) prototyping machine. Experimental verification is performed using relevant RF measurement setups.</p>
        <ul class="cv-bullets">
          <li>Available for full-time positions starting Nov 2026.</li>
        </ul>
      `
    },
    {
      institution: "University of Toronto",
      period: "Sep 2019 - Sep 2021",
      degree: "Master of Applied Science (MASC), Electrical and Computer Engineering (ECE)",
      location: "Toronto, Canada",
      content: `
        <ul class="cv-bullets">
          <li>Thesis: Shifted-beam Array of Coils for Highly Focal Transcranial Magnetic Stimulation</li>
        </ul>
      `
    },
    {
      institution: "University of Toronto",
      period: "Sep 2015 - Jun 2019",
      degree: "Honors Bachelors of Science (BSc Hons), Physics & Mathematics Double Major",
      location: "Toronto, Canada",
      content: `
        <p>Dean's List Award recipient 2016-2018.</p>
      `
    }
  ],
  skills: [
    { category: "Programming Languages", items: "Python, MATLAB, C++, Java" },
    { category: "Simulation Tools", items: "COMSOL Multiphysics, Ansys Electronics Desktop (AEDT: HFSS, Icepak), Keysight Advanced Design System (ADS)" },
    { category: "Modeling/Numerical Methods", items: "Finite-element method (FEM), finite-difference time-domain (FDTD), method of moments (MoM), reduced order modeling/surrogate modeling, multiphysics modeling, optimization" },
    { category: "AI/ML Tools", items: "Tensorflow, Keras, PyTorch" },
    { category: "Software Tools", items: "Anaconda, Jupyter Notebook, PyCharm, VSCode, LaTeX, Git, high performance computing (HPC)" },
    { category: "Subject Areas", items: "Electromagnetics, metamaterials, physics, wireless power transfer" },
    { category: "Hardware", items: "Radiofrequency (RF) design, RF equipment, antenna design/measurements, printed circuit board (PCB) prototyping, laser etching, 3-D printing, composite materials, machining" }
  ],
  experience: [
    {
      organization: "Synopsys: Electronics, Simulation, and Optics Unit",
      period: "May 2025 - Apr 2026",
      title: "Research & Development Intern",
      location: "Remote, Canada",
      content: `
        <p>Developed, implemented, and tested methods for enhancing the prediction accuracy of surrogate thermal models for integrated circuit (IC) packages, using a physics-informed data sampling approach. Performed detailed study of effects with respect to dataset size, data quality, convergence, etc. Achieved 60-80% error reduction for tested IC packages compared to conventional surrogate modeling techniques.</p>
        <p>Developed general-purpose data sampling workflow for surrogate model training based on observed package sensor data, allowing accurate inference of underlying physics behavior. Achieved 60-80% error reduction for tested IC package.</p>
        <p>Developed Bayesian inference analysis pipeline to create robust, adaptive data sampling method capable of responding in real-time to live IC sensor data. Invention disclosure/patent in progress.</p>
        <p>Leveraged PyCharm for code development to streamline collaboration, testing, and deployment.</p>
      `
    },
    {
      organization: "Toronto SickKids Hospital: SickKids Research Institute",
      period: "Jan 2015 - Sep 2019",
      title: "Researcher, Computational Physics/Atomistic Simulation",
      location: "Toronto, Canada",
      content: `
        <p>Numerically simulated atomic interactions and protein chemical structures using molecular dynamics on the SciNet supercomputer cluster. Analyzed, preprocessed, and visualized large-scale datasets using Python. Studied small brain peptides and interactions with amyloid-beta oligomers in the context of Alzheimer's disease.</p>
        <p>Identified and categorized distinct preferential binding modes consistent with previous literature on amyloid-beta oligomer behavior. Characterized binding propensities using statistical methods.</p>
      `
    },
    {
      organization: "University of Toronto: Department of Physics",
      period: "May 2018 - Aug 2018",
      title: "Research Assistant, Computational Solid State Physics",
      location: "Toronto, Canada",
      content: `
        <p>Constructed new simplified tight-binding model of nickel (II) iodide by calculated tight-binding parameters for electron-hopping model. Performed numeric simulation and data analysis of electron-hopping models using Python via Monte Carlo simulation and statistical methods.</p>
        <p>Generated datasets from density functional theory (DFT) using HPC tools on SciNet supercomputer cluster.</p>
        <p>Used Python to calculate energy band structure from new tight-binding model and confirm agreement with experimental data from literature. Identified distinct magnetic ordering cases, including helimagnetic ordering, via simulated annealing using Monte-Carlo methods.</p>
      `
    },
    {
      organization: "SNOLAB: SNO+ Experiment",
      period: "May 2017 - Aug 2017",
      title: "Research Assistant, Data Quality and Output",
      location: "Sudbury, Canada",
      content: `
        <ul class="cv-bullets">
          <li>Developed and debugged C++ scripts for data quality checks on SNO+ detector output ROOT and relevant physics libraries.</li>
        </ul>
        <p>Assembled and tested calibration apparatus for SNO+ detector per clean room protocols. Assisted with equipment assembly in ultra-clean underground facility at 2 km depth.</p>
      `
    },
    {
      organization: "University of Toronto: Department of Physics",
      period: "May 2016 - Jun 2016",
      title: "Research Assistant, Atomic Physics",
      location: "Toronto, Canada",
      content: `
        <p>Used RF equipment to test a small solid-state NMR apparatus to measure precession frequencies of magnetic dipole moments in Pb-207 nuclei, in the context of searching for violations in time reversal symmetry.</p>
        <p>Designed and built RF filters and relevant RF setup for experiment.</p>
      `
    }
  ],
  publications: [
    {
      title: "Wireless Power Transfer Using a Cavity-Enclosed Impedance Metawire Structure",
      venue: "2026 IEEE International Symposium on Antennas and Propagation, Detroit, United States",
      links: []
    },
    {
      title: "An Aperiodic Sub-Wavelength Dipole Structure for Enhancing Near-Field Wireless Power Transfer",
      venue: "IEEE Antennas and Wireless Propagation Letters (AWPL), Vol. 23, No. 6, July 2024",
      links: [
        { label: "link", url: "https://ieeexplore.ieee.org/document/10530379" }
      ]
    },
    {
      title: "A Shifted-Beam Method for Near-Field Wireless Power Transfer using Parasitic Arrays",
      venue: "2023 IEEE International Symposium on Antennas and Propagation, Portland, United States",
      links: [
        { label: "link", url: "https://ieeexplore.ieee.org/document/10238231" }
      ]
    },
    {
      title: "Shifted-Beam Array Coil for Highly Focal Transcranial Magnetic Stimulation",
      venue: "2021 IEEE International Symposium on Antennas and Propagation, Singapore",
      links: [
        { label: "link", url: "https://ieeexplore.ieee.org/document/9703901" }
      ]
    }
  ],
  projects: [
    {
      year: "Fall 2019[cite: 4]",
      title: "Modelling of Hammer and Piano String Interaction[cite: 4]",
      description: "Modelled the interaction between a piano hammer and string using forward Euler, backward Euler, and trapezoidal rule to solve the wave equation[cite: 4]. Compared the accuracy, stability, and CPU time of the numeric methods, and explored the effect of varying string and felt stiffness parameters on the produced note[cite: 4].",
      link: "piano_wire_physics.pdf"
    },
    {
      year: "Winter 2022[cite: 5]",
      title: "Design of Silicon Nitride Polarization Beam Splitter using a Directional Coupler[cite: 5]",
      description: "Designed a silicon nitride polarization beam splitter for single-mode operation at 1520 nm using a directional coupler[cite: 5]. Evaluated intrinsic propagation loss, substrate leakage loss, and bend loss using 1D and 2D waveguide solvers, and outlined a proposed optical lithography fabrication procedure[cite: 5].",
      link: "SiNi_splitter.pdf"
    },
    {
      year: "April 2019[cite: 6]",
      title: "Application of WKB Method to Quantum Tunnelling[cite: 6]",
      description: "Applied the WKB approximation method to study quantum tunnelling in one dimension[cite: 6]. Calculated reflection and transmission probabilities for a delta potential, a general potential with a single maximum, and a scattering case off the potential peak for a Gaussian potential[cite: 6].",
      link: "WKB_method_report.pdf"
    },
    {
      year: "Fall 2021[cite: 7]",
      title: "Optimisation Methods for Antenna Arrays for Wireless Power Transfer[cite: 7]",
      description: "Investigated wireless power transfer techniques using field synthesis and convex optimization with a 3x3 array of inset-patch antennas at 5.8 GHz[cite: 7]. Compared conjugate-phase focusing, sidelobe minimization, and S-matrix methods to maximize end-to-end power transfer efficiency and field focality[cite: 7].",
      link: "convex_optim_WPT.pdf"
    },
    {
      year: "Fall 2019[cite: 8]",
      title: "Near Field Electromagnetic Focusing using Dipoles[cite: 8]",
      description: "Demonstrated near-field focusing of electric and magnetic fields using a linear array of dipoles[cite: 8]. Implemented the system via a 2D finite-difference time-domain (FDTD) scheme to reproduce Gaussian target functions and investigated focusing properties in dielectric materials[cite: 8].",
      link: "FDTD_magnetic_beamforming.pdf"
    }
  ],
  volunteering: [
    {
      organization: "University of Toronto IEEE Antenna and Propagation Society (AP-S) Student Chapter",
      period: "Oct 2023 - Dec 2025",
      title: "Vice Chair",
      content: `
        <p>Hosted social and academic events for U of Toronto IEEE AP-S student chapter. Elected position.</p>
      `
    },
    {
      organization: "Rocketry Division, University of Toronto Aerospace Team (UTAT)",
      period: "Sep 2015 - Aug 2021",
      title: "Team Lead & Composites Fabricator",
      content: `
        <ul class="cv-bullets">
          <li>Led a team of more than 10 members for rocketry airframe subsystem and solid-fuel rocket program (2019-2021).</li>
        </ul>
        <p>Used machine tools and composite manufacturing techniques to design and fabricate by hand carbon fiber airframes for low-altitude sounding rockets. Performed compression testing to verify performance. Coordinated design and construction of solid-fuel rockets for systems testing.</p>
      `
    },
    {
      organization: "ECE Graduate Student Society (ECEGSS), University of Toronto",
      period: "Oct 2019 - Sep 2020",
      title: "Social Events Officer",
      content: `
        <ul class="cv-bullets">
          <li>Organized monthly social and networking events for Electrical and Computer Engineering Graduate Student Society (ECEGSS) at the University of Toronto. Elected position.</li>
        </ul>
      `
    },
    {
      organization: "University of Toronto Physics Student Union (PhySU)",
      period: "May 2016 - Apr 2018",
      title: "Vice President",
      content: `
        <p>Managed social and academic events for Physics Student Union. Elected position.</p>
      `
    },
    {
      organization: "Trauma and Acute Care Surgery, Toronto St. Michael's Hospital",
      period: "Jun 2015 - Aug 2016",
      title: "Research Volunteer",
      content: `
        <p>Assisted with conducting trauma studies as member of on-call team at St. Michael's Hospital emergency department. Screened and enrolled eligible patients with emergency room staff.</p>
      `
    }
  ],
  personal: [
    "Canadian citizen",
    "Favorite drink: Iced coffee"
  ]
};