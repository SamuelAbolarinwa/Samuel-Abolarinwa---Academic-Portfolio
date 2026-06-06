import React from 'react';
import { Github, Linkedin, Mail, Globe, ArrowUpRight, FileText } from 'lucide-react';
import profileImg from './profile.jpg';

interface Project {
  title: string;
  year: string;
  award?: string;
  description: string;
  tools: string[];
  link: string;
}

interface NewsItem {
  date: string;
  description: string;
}

export default function App() {
  const roboticsProjects: Project[] = [
    {
      title: "EdgeMind: Markerless Cartesian Teleoperation System",
      year: "2026",
      description: "A decoupled three-node ROS 2 system implementing a Cartesian \"Floating Hand\" paradigm for teleoperation of a simulated UR3e arm in Gazebo. A MediaPipe vision node (20 Hz) tracks palm position, computes frame-to-frame displacement, resolves target joint angles via inverse kinematics, and executes smooth trajectories through a JointTrajectoryController with EMA smoothing (α=0.35). Includes fist-closure gripper actuation via a SetBool service call and a delta calibration state machine with live keyboard re-centring.",
      tools: ["ROS 2", "Python", "MediaPipe", "OpenCV", "Gazebo"],
      link: "https://github.com/Ayomide-16/"
    },
    {
      title: "F1Tenth Autonomous Racing Stack",
      year: "2026",
      description: "A fully autonomous ROS 2 (Jazzy) navigation stack implementing a decoupled Sense-Plan-Act pipeline: a vectorised Follow-the-Gap local planner, a Pure Pursuit geometric controller for global trajectory tracking, and an IEEE 1872.2-2021 Ontology-aligned Subsumption Safety Filter that enforces kinematic collision avoidance as an absolute hardware firewall. Navigates at 2.5+ m/s through complex unstructured environments.",
      tools: ["ROS 2", "Python", "Ackermann Kinematics", "NumPy"],
      link: "https://github.com/Ayomide-16/F1Tenth-AuR-Nav"
    },
    {
      title: "Voice-Controlled Navigation System with Autonomous Path Planning",
      year: "2025",
      award: "First Runner-Up, FUTMinna MATLAB Challenge",
      description: "A full-stack autonomous navigation agent combining a speech recognition module (MFCC feature extraction + k-NN classifier, k=3, trained on 272 samples) with a Probabilistic Roadmap planner and Pure Pursuit path-tracking controller on a binary occupancy map derived from satellite imagery.",
      tools: ["MATLAB", "Simulink", "App Designer"],
      link: "https://github.com/Ayomide-16/"
    },
    {
      title: "4-DOF Robotic Arm with ESP32-Based Web Control Interface",
      year: "2024",
      description: "Designed and fabricated a four-degree-of-freedom servo-driven robotic arm from CNC-milled acrylic; built an ESP32-hosted web interface supporting real-time joint actuation, motion sequence recording and replay, and ultrasonic proximity-triggered automation.",
      tools: ["ESP32", "C++", "Embedded Systems"],
      link: "https://github.com/Ayomide-16/"
    }
  ];

  const mlProjects: Project[] = [
    {
      title: "Road Anomaly Detection Using YOLOv10-M",
      year: "2025",
      description: "End-to-end detection pipeline for potholes, speed bumps, and road cracks. Unified 6,203 images from three heterogeneous sources -- handling polygon-to-bounding-box conversion, label remapping, deduplication, and a full validation pass. Ran a five-configuration learning rate sensitivity study (1e-5, 1e-4, 1e-3, 0.01, 0.1) using AdamW with Mosaic, MixUp, and CutMix augmentation on a Kaggle Tesla T4; optimal learning rate 0.0001 yielded a test-set mAP@0.5 of 0.606.",
      tools: ["Python", "PyTorch", "Ultralytics", "OpenCV", "Kaggle T4"],
      link: "https://github.com/Ayomide-16/yolov10-road-anomaly-detection"
    },
    {
      title: "CNN vs. ViT Road Damage Detection: Comparative Study (YOLOS-Small)",
      year: "2025",
      description: "As part of a team comparing CNN, Vision Transformer, and classical approaches, implemented YOLOS-Small (100 learnable [DET] tokens, Hungarian matching loss) on a 5,293-image, three-class road damage dataset with differential learning rates, cosine annealing, and gradient clipping. Achieved mAP@0.5 of 50.6%. Resulted in a poster accepted at Deep Learning IndabaX Nigeria, Abuja, May 2026.",
      tools: ["Python", "PyTorch", "HuggingFace Transformers"],
      link: "https://github.com/Ayomide-16/"
    },
    {
      title: "Transfer Learning for Object Classification with OOD Detection",
      year: "2025",
      description: "Fine-tuned MobileNetV2 on 3,206 images achieving >95% validation accuracy at <50ms latency; developed a prediction-margin heuristic (threshold >0.7) for out-of-distribution rejection, investigating confident misclassification under epistemic uncertainty. Deployed as a Flask web application trained entirely on local hardware.",
      tools: ["Python", "TensorFlow/Keras", "Flask"],
      link: "https://github.com/Ayomide-16/Simple-Image-Classifier"
    }
  ];

  const controlProjects: Project[] = [
    {
      title: "EV Battery Thermal Management Simulation",
      year: "2025",
      description: "First-principles mechatronic simulation in MATLAB App Designer using a decoupled asynchronous architecture (synchronous UI thread + 20 fps physics and rendering thread). Modelled a BLDC coolant pump with mechanical deadband, an NTC thermistor via the Steinhart-Hart approximation, and Newtonian convective cooling dynamics. Includes procedural 3D visualisation of 90 cylindrical cells with real-time temperature-mapped colouring and particle animation.",
      tools: ["MATLAB", "App Designer"],
      link: "https://github.com/Ayomide-16/Battery-Thermal-Mechanic"
    },
    {
      title: "Active Quarter-Car Suspension Control System Design",
      year: "2024",
      description: "Modelled quarter-car suspension dynamics, derived transfer functions, and designed PID controllers via Ziegler-Nichols and Internal Model Control (IMC) tuning; demonstrated measurably improved stability margins and disturbance rejection with IMC relative to classical tuning.",
      tools: ["MATLAB", "Simulink", "Control System Toolbox"],
      link: "https://github.com/Ayomide-16/"
    }
  ];

  const newsItems: NewsItem[] = [
    {
      date: "May 2026",
      description: "Poster accepted at Deep Learning IndabaX Nigeria, Abuja: \"Evaluating Architectural Robustness to Domain Shift in Road Anomaly Detection.\""
    },
    {
      date: "2026",
      description: "Serving as Assistant Technical Lead, FUTMinna MATLAB Community, organising technical workshops and supporting student development."
    },
    {
      date: "2026",
      description: "Volunteering with the WAAW Foundation FUTMinna chapter, advancing STEM education for African women and girls."
    },
    {
      date: "2025",
      description: "Third Runner-Up, Nigeria AI Hackathon (Regional), Deep Funding, for YieldPlus AI -- a multimodal agricultural advisory platform supporting Hausa, Yoruba, and Igbo."
    },
    {
      date: "2025",
      description: "First Runner-Up, FUTMinna MATLAB Challenge, MathWorks; awarded ~$50 MathWorks vouchers."
    },
    {
      date: "2024",
      description: "Awarded PTDF In-Country Scholarship (~$3,000), Federal Government Scholarship (~$1,000), Guinness Nigeria Foundation Scholarship (~$500), and Chevron Nigeria Scholarship (~$375)."
    },
    {
      date: "2024",
      description: "Joined the GWIN Research Group as a Research Assistant under Prof. Elizabeth Onwuka and Dr. Michael David, contributing to a TETFund-funded biosignal ML project."
    },
    {
      date: "2023",
      description: "Received a congratulatory letter from the FUTMinna Vice Chancellor for maintaining a perfect CGPA at 100 Level."
    },
    {
      date: "2022",
      description: "Overall Best Graduating Student, Federal Government College Minna; Best in Mathematics, Further Mathematics, and ICT."
    },
    {
      date: "2022",
      description: "Winner, NSE Science Quiz Competition, Nigerian Society of Engineers, Minna Zone."
    },
    {
      date: "2022",
      description: "Top 3, Coderina First LEGO League Regional Championship."
    }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#1A1917] selection:bg-[#2B4163]/10 selection:text-[#2B4163] flex flex-col items-center">
      
      {/* Stable Anchored/Sticky Navigation Bar with crisp translucent document-like layout */}
      <header className="sticky top-0 z-50 w-full h-16 bg-[#F7F6F2]/80 backdrop-blur-md border-b border-[#DEDAD4]/50 select-none" style={{ willChange: 'transform' }}>
        <div className="max-w-[860px] mx-auto h-full px-4 sm:px-6 md:px-12 flex flex-row justify-between items-center">
          <div className="font-serif tracking-tight font-semibold text-[#2B4163] text-[13px] sm:text-base md:text-lg select-none">
            S.A. Abolarinwa
          </div>
          <div className="flex items-center justify-center gap-x-2.5 sm:gap-x-4 md:gap-x-6 text-[10.5px] sm:text-xs md:text-sm font-medium">
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="text-[#6B6660] hover:text-[#2B4163] transition-colors duration-150 relative pb-0.5 group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2B4163] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <span className="text-[#DEDAD4] select-none hidden sm:inline">&middot;</span>
            <a 
              href="#publications" 
              onClick={(e) => handleScroll(e, 'publications')}
              className="text-[#6B6660] hover:text-[#2B4163] transition-colors duration-150 relative pb-0.5 group"
            >
              <span className="hidden md:inline">Publications & Presentations</span>
              <span className="inline md:hidden">Publications</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2B4163] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <span className="text-[#DEDAD4] select-none hidden sm:inline">&middot;</span>
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, 'projects')}
              className="text-[#6B6660] hover:text-[#2B4163] transition-colors duration-150 relative pb-0.5 group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2B4163] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
            <span className="text-[#DEDAD4] select-none hidden sm:inline">&middot;</span>
            <a 
              href="#news" 
              onClick={(e) => handleScroll(e, 'news')}
              className="text-[#6B6660] hover:text-[#2B4163] transition-colors duration-150 relative pb-0.5 group"
            >
              News
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#2B4163] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <div className="w-full max-w-[860px] px-6 md:px-12 py-10 md:py-16 flex flex-col justify-between">
        
        <main className="space-y-16 md:space-y-24">
          
          {/* ABOUT SECTION (Header/Hero) */}
          <section id="about" className="scroll-mt-24">
            <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 items-start mb-8">
              
              {/* Circular profile photo */}
              <div className="flex justify-center md:justify-start">
                <div className="group w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-[#E8E6E0] border border-[#DEDAD4] hover:border-[#2B4163]/40 flex items-center justify-center select-none relative transition-all duration-500 ease-out hover:shadow-[0_4px_20px_rgba(43,65,99,0.06)]">
                  <img 
                    id="profile-picture"
                    src={profileImg}
                    alt="Samuel Ayomide Abolarinwa"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    onError={(e) => {
                      // Gracefully render the high-quality text placeholder if the picture is empty/missing
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const label = parent.querySelector('.fallback-label');
                        if (label) {
                          label.classList.remove('hidden');
                        }
                      }
                    }}
                  />
                  <div className="fallback-label hidden absolute inset-0 flex flex-col items-center justify-center text-[11px] uppercase tracking-widest text-[#6B6660] font-mono">
                    <span className="font-semibold text-xs text-[#524E4A] mb-1">Photo</span>
                    <span className="text-[10px] text-[#8C8780]">7.5k × 7.5k px</span>
                  </div>
                </div>
              </div>

              {/* Bio Details */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#1A1917]">
                  Samuel Ayomide Abolarinwa
                </h1>
                <p className="text-base md:text-[17px] text-[#2B4163] font-medium leading-relaxed">
                  B.Eng. Mechatronics Engineering · Researcher in Robotics, Control, and Computer Vision
                </p>
                
                {/* Social links row */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-2">
                  <a 
                    href="https://github.com/Ayomide-16" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#6B6660] hover:text-[#2B4163] transition-colors duration-150 gap-1.5 text-xs sm:text-[13px] font-mono leading-none"
                    title="GitHub"
                    id="link-github"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="align-middle">github</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/samuel-abolarinwa-02b070295" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#6B6660] hover:text-[#2B4163] transition-colors duration-150 gap-1.5 text-xs sm:text-[13px] font-mono leading-none"
                    title="LinkedIn"
                    id="link-linkedin"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="align-middle">linkedin</span>
                  </a>
                  <a 
                    href="mailto:abolarinwasa@gmail.com" 
                    className="inline-flex items-center text-[#6B6660] hover:text-[#2B4163] transition-colors duration-150 gap-1.5 text-xs sm:text-[13px] font-mono leading-none"
                    title="Email"
                    id="link-email"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="align-middle">email</span>
                  </a>
                  <a 
                    href="https://samuel-abolarinwa.web.app" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-[#6B6660] hover:text-[#2B4163] transition-colors duration-150 gap-1.5 text-xs sm:text-[13px] font-mono leading-none"
                    title="Personal Site"
                    id="link-personal-site"
                  >
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="align-middle">web</span>
                  </a>
                  
                  {/* Understated CV link button */}
                  <a 
                    href="https://drive.google.com/file/d/1vuQWSba0PsGcwkmFoDExKGN7I_vRTmSx/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-[#2B4163]/20 bg-[#2B4163]/5 hover:bg-[#2B4163] text-[#2B4163] hover:text-[#F7F6F2] hover:border-[#2B4163] px-2.5 py-1 rounded text-xs font-mono tracking-wide uppercase transition-all duration-200 leading-none h-[28px] sm:h-[30px]"
                    id="button-cv"
                  >
                    <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span className="align-middle">cv</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Biography Paragraphs */}
            <div className="space-y-6 text-[#1A1917] text-base md:text-[16.5px] leading-relaxed text-justify">
              <p>
                I am Samuel Abolarinwa, a fourth-year Mechatronics Engineering student at the Federal University of Technology, Minna (FUTMinna), Nigeria.
              </p>
              <p>
                My work is in autonomous systems and robotic perception. I am specifically interested in how physical robotic systems handle the gap between the conditions they were built for and the messier conditions they actually encounter, and in building the perception and control components that let them navigate that gap without breaking. Most of what I have built involves that problem in some form: autonomous navigation and teleoperation systems in ROS 2, computer vision pipelines for real-world environments, and machine learning models where the interesting challenge is usually not the training itself but getting reliable performance on data that does not look like the training set.
              </p>
              <p>
                I also volunteer with the WAAW Foundation, supporting STEM education for women and girls across Nigeria. On the industry side, I am Co-Founder and CTO of Edukrest Limited, an AI-powered EdTech startup.
              </p>
              <p>
                In the long term, I intend to pursue a PhD in robotics and autonomous perception, focused on the problems that sit between controlled-environment performance and deployment in the real world.
              </p>
            </div>
          </section>

          {/* PUBLICATIONS & PRESENTATIONS SECTION */}
          <section id="publications" className="scroll-mt-24">
            <h2 className="text-[13px] tracking-widest uppercase text-[#2B4163] font-semibold mb-2 select-none">
              PUBLICATIONS & PRESENTATIONS
            </h2>
            <hr className="mb-6 border-[#DEDAD4]" />

            <div className="space-y-8">
              
              {/* Poster Presentations */}
              <div>
                <h3 className="text-xs tracking-wider uppercase text-[#6B6660] font-mono mb-4 select-none">
                  Poster Presentations
                </h3>
                <div className="border-l border-[#DEDAD4] pl-4 py-1">
                  <div className="space-y-2">
                    <div>
                      <span className="inline-flex items-center bg-[#E5ECE7] text-[#2E5A36] border border-[#CFE4D5] px-2 py-0.5 text-[10px] font-mono tracking-wide uppercase select-none">
                        Poster Presentation
                      </span>
                    </div>
                    <h4 className="font-bold text-[15.5px] text-[#1A1917] leading-relaxed">
                      "Evaluating Architectural Robustness to Domain Shift in Road Anomaly Detection: CNNs, Two-Stage Detectors, and Vision Transformers."
                    </h4>
                    <p className="text-sm text-[#1A1917]">
                      <span className="italic">Eje, O. H., Bagai, G., & Abolarinwa, S. A.</span> (2026)
                    </p>
                    <p className="text-xs text-[#6B6660] font-mono">
                      Deep Learning IndabaX Nigeria, Abuja, Nigeria, May 2026.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="scroll-mt-24">
            <h2 className="text-[13px] tracking-widest uppercase text-[#2B4163] font-semibold mb-2 select-none">
              SELECTED PROJECTS
            </h2>
            <hr className="mb-6 border-[#DEDAD4]" />

            <div className="space-y-12">
              
              {/* Robotics and Autonomous Systems */}
              <div>
                <h3 className="border-l-2 border-[#2B4163] pl-3 py-0.5 text-base font-semibold text-[#1A1917] mb-6 select-none">
                  Robotics and Autonomous Systems
                </h3>
                <div className="space-y-8">
                  {roboticsProjects.map((project, idx) => (
                    <div key={idx} className="border-l border-[#DEDAD4] pl-4 py-1 relative group">
                      <div className="flex flex-row justify-between items-start gap-x-3 mb-1">
                        <h4 className="font-bold text-base text-[#1A1917]">
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-[#2B4163] transition-colors duration-200 group/link relative"
                          >
                            <span className="relative pb-0.5">
                              {project.title}
                              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2B4163] transition-all duration-300 ease-in-out group-hover:w-full group-hover/link:w-full"></span>
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-75 group-hover/link:opacity-100 transition-opacity duration-200 shrink-0 text-[#2B4163]" />
                          </a>
                        </h4>
                        <span className="text-xs text-[#6B6660] font-mono ml-4 select-none">{project.year}</span>
                      </div>
                      {project.award && (
                        <div className="text-xs text-[#2B4163] font-bold mt-1 mb-2">
                          🏆 {project.award}
                        </div>
                      )}
                      <p className="text-sm text-[#1A1917] leading-relaxed mt-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#6B6660] font-mono">
                        {project.tools.map((tool, tIdx) => (
                          <span key={tIdx} className="after:content-['·'] last:after:content-none after:ml-3">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Computer Vision and Machine Learning */}
              <div>
                <h3 className="border-l-2 border-[#2B4163] pl-3 py-0.5 text-base font-semibold text-[#1A1917] mb-6 select-none">
                  Computer Vision and Machine Learning
                </h3>
                <div className="space-y-8">
                  {mlProjects.map((project, idx) => (
                    <div key={idx} className="border-l border-[#DEDAD4] pl-4 py-1 relative group">
                      <div className="flex flex-row justify-between items-start gap-x-3 mb-1">
                        <h4 className="font-bold text-base text-[#1A1917]">
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-[#2B4163] transition-colors duration-200 group/link relative"
                          >
                            <span className="relative pb-0.5">
                              {project.title}
                              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2B4163] transition-all duration-300 ease-in-out group-hover:w-full group-hover/link:w-full"></span>
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-75 group-hover/link:opacity-100 transition-opacity duration-200 shrink-0 text-[#2B4163]" />
                          </a>
                        </h4>
                        <span className="text-xs text-[#6B6660] font-mono ml-4 select-none">{project.year}</span>
                      </div>
                      <p className="text-sm text-[#1A1917] leading-relaxed mt-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#6B6660] font-mono">
                        {project.tools.map((tool, tIdx) => (
                          <span key={tIdx} className="after:content-['·'] last:after:content-none after:ml-3">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Control Systems and Simulation */}
              <div>
                <h3 className="border-l-2 border-[#2B4163] pl-3 py-0.5 text-base font-semibold text-[#1A1917] mb-6 select-none">
                  Control Systems and Simulation
                </h3>
                <div className="space-y-8">
                  {controlProjects.map((project, idx) => (
                    <div key={idx} className="border-l border-[#DEDAD4] pl-4 py-1 relative group">
                      <div className="flex flex-row justify-between items-start gap-x-3 mb-1">
                        <h4 className="font-bold text-base text-[#1A1917]">
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-[#2B4163] transition-colors duration-200 group/link relative"
                          >
                            <span className="relative pb-0.5">
                              {project.title}
                              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2B4163] transition-all duration-300 ease-in-out group-hover:w-full group-hover/link:w-full"></span>
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-75 group-hover/link:opacity-100 transition-opacity duration-200 shrink-0 text-[#2B4163]" />
                          </a>
                        </h4>
                        <span className="text-xs text-[#6B6660] font-mono ml-4 select-none">{project.year}</span>
                      </div>
                      <p className="text-sm text-[#1A1917] leading-relaxed mt-2 mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#6B6660] font-mono">
                        {project.tools.map((tool, tIdx) => (
                          <span key={tIdx} className="after:content-['·'] last:after:content-none after:ml-3">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* NEWS SECTION */}
          <section id="news" className="scroll-mt-24">
            <h2 className="text-[13px] tracking-widest uppercase text-[#2B4163] font-semibold mb-2 select-none">
              NEWS
            </h2>
            <hr className="mb-6 border-[#DEDAD4]" />

            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-x-6 gap-y-5 md:gap-y-6">
              {newsItems.map((news, idx) => (
                <React.Fragment key={idx}>
                  {/* Date Column */}
                  <div className="text-xs md:text-[13px] font-mono text-[#6B6660] md:pt-0.5 select-none md:text-right md:pr-4 md:border-r md:border-[#DEDAD4]/50">
                    {news.date}
                  </div>
                  {/* Description Column */}
                  <div className="text-[14.5px] text-[#1A1917] leading-relaxed pl-1 md:pl-0">
                    {news.description}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="mt-20 md:mt-32 pt-8 border-t border-[#DEDAD4]/60 flex flex-col sm:flex-row items-center justify-between gap-y-4 text-xs font-mono text-[#6B6660] select-none">
          <div>
            &copy; 2026 Samuel Abolarinwa
          </div>
          <div>
            Last updated: June 2026.
          </div>
        </footer>

      </div>
    </div>
  );
}
