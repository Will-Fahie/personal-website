import { Mail, Linkedin, Instagram, Github, ExternalLink, FileText, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import as35Report from "@/assets/research/AS35 report.pdf";
import epqReport from "@/assets/research/EPQ.pdf";
import protoDuneReport from "@/assets/research/ProtoDUNE report.pdf";

// Import all images from the pictures folder
import picture1 from "@/assets/pictures/1.png";
import picture2 from "@/assets/pictures/2.JPG";
import picture3 from "@/assets/pictures/3.JPG";
import picture4 from "@/assets/pictures/4.jpg";
import picture5 from "@/assets/pictures/5.JPG";
import picture7 from "@/assets/pictures/7.png";
import picture8 from "@/assets/pictures/8.jpg";
import picture9 from "@/assets/pictures/9.PNG";

const pictures = [picture1, picture2, picture3, picture4, picture5, picture7, picture8, picture9];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const profileRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const researchRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    [profileRef, projectsRef, researchRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-play after 5 seconds
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume auto-play after 5 seconds
  };
  const featuredWork = [
    {
      title: "Parrock",
      subtitle: "AI for Social Value & ESG",
      description: "Co-founder of a platform that automates social value and ESG research for public sector tenders.",
      link: "https://www.parrock.uk"
    },
    {
      title: "Oxford University Amateur Boxing Club",
      subtitle: "144th President",
      description: "President of the Oxford University Amateur Boxing Club (OUABC), leading operations, training programs, and competitive activities for the world's oldest amateur boxing club.",
      link: "https://ouabc.com"
    },
    {
      title: "Varsify Media",
      subtitle: "Sports Media Agency",
      description: "Founded a sports media agency providing professional-level promotion for UK university sports, creating content and strategies to elevate student-athlete visibility.",
      link: "https://varsifymedia.com"
    },
    {
      title: "Achuar",
      subtitle: "Generative AI for Indigenous Cultures",
      description: "Developing a mobile application and natural language processing model to preserve the Achuar language.",
      link: "https://achuar-ingis.com"
    },
  ];

  const researchPapers = [
    {
      title: "Machine Learning Approaches to Final State π± Identification in ProtoDUNE SP",
      subtitle: "September 2025",
      description: "Summarises results from applying decision trees, random forests, and gradient-boosted trees to π± classification in the ProtoDUNE experiment, with a comparison to the traditional cut-based approach.",
      link: protoDuneReport
    },
    {
      title: "Finding Properties of Open Clusters Using Hertzsprung-Russell Diagrams",
      subtitle: "February 2025",
      description: "Combines observations from the Philip Wetton Telescope in Oxford with Gaia data to analyze star clusters NGC0663, NGC1039, and NGC6939. Uses Hertzsprung-Russell diagrams and PARSEC models to determine distances, ages, and extinctions for each cluster.",
      link: as35Report
    },
    {
      title: "Building a self-sufficient colony on Mars using current science and technology: an evaluation of the options",
      subtitle: "January 2021",
      description: "Considers the physical challenges of establishing a sustainable presence on the red planet, and explores the potential for interplanetary travel and resource extraction.",
      link: epqReport
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Three Column Layout: Profile, Projects, and Research */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Section */}
          <section ref={profileRef} className="text-center lg:text-left mt-8 lg:mt-12 opacity-0">
            <div className="mb-6 relative w-full max-w-sm mx-auto lg:mx-0">
              <div 
                className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-border shadow-2xl"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {pictures.map((picture, index) => (
                  <img
                    key={index}
                    src={picture}
                    alt={`William Fahie ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                
                {/* Navigation Buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              William Fahie
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed">
              Physics @ Oxford University
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <a 
                href="https://www.linkedin.com/in/williamfahie/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-blue-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 border border-border group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/will_fahie?igsh=MWlhcTFkZTNhdGMydA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 border border-border group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:williamfahie@outlook.com"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-cyan-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 border border-border group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://github.com/Will-Fahie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-gray-800 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-gray-800/50 transition-all duration-300 border border-border group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-transparent p-0 h-auto gap-0 border-b border-border">
                <TabsTrigger 
                  value="about"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground text-muted-foreground hover:text-foreground transition-colors pb-3"
                >
                  About Me
                </TabsTrigger>
                <TabsTrigger 
                  value="achievements"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground text-muted-foreground hover:text-foreground transition-colors pb-3"
                >
                  Achievements
                </TabsTrigger>
                <TabsTrigger 
                  value="experiences"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground text-muted-foreground hover:text-foreground transition-colors pb-3"
                >
                  Experiences
                </TabsTrigger>
              </TabsList>
              <TabsContent value="about" className="mt-6 text-sm text-muted-foreground leading-relaxed">
                <p className="mb-4">
                  I'm a fourth-year physics student at Oxford University. Experienced video editor, writer and programmer. Hungry to learn and ready to build.
                </p>
                <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <FileText className="w-4 h-4 mr-2" />
                    View CV
                  </Button>
                </a>
              </TabsContent>
              <TabsContent value="achievements" className="mt-6 text-sm text-muted-foreground leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>100% academic scholarship to Sherborne School</li>
                  <li>Foundation Prize (highest academic award at Sherborne)</li>
                  <li>Sixth Form: Morcom Prize for Mathematics Turing Prize for Computer Science</li>
                  <li>Top 50 A Level Computer Science Students in the UK</li>
                  <li>50/50 EPQ - project now used as student exemplary work</li>
                  <li>Pembroke College Academic Scholarship (£1000) - 2 years in a row</li>
                  <li>Pembroke College Roger Bannister Award (£300)</li>
                </ul>
              </TabsContent>
              <TabsContent value="experiences" className="mt-6 text-sm text-muted-foreground leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                <li>
                  See below for ongoing projects.
                  </li>
                  <li>
                    Research Intern at Oxford University (2025)
                    <ul className="list-square list-inside ml-6 mt-1 space-y-1 text-xs">
                      <li>
                        Developed and implemented a novel machine learning approach for the classification of final state particles in pion-argon interactions, with data collected by ProtoDUNE in CERN.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Video Editor for Critical Edge Podcast (2023-2024)
                    <ul className="list-square list-inside ml-6 mt-1 space-y-1 text-xs">
                      <li>
                        Joshua Cavallo: <br/><a href="https://www.instagram.com/p/CxLBReeM-iG/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.instagram.com/p/CxLBReeM-iG/</a>
                      </li>
                      <li>
                        Dan Ariely: <br/><a href="https://www.instagram.com/p/Cz105pdoyv2/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.instagram.com/p/Cz105pdoyv2/</a>
                      </li>
                      <li>
                        Spencer Matthews: <br/><a href="https://www.instagram.com/p/C0E7fVzo6OB/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.instagram.com/p/C0E7fVzo6OB/</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                  Video Editor for Newsthink (2023-2024)
                  <ul className="list-square list-inside ml-6 mt-1 space-y-1 text-xs">
                    <li>
                      Most successful edit now has &gt;3 million views: <br/><a href="https://www.instagram.com/p/CxLBReeM-iG/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.instagram.com/p/CxLBReeM-iG/</a>
                    </li>
                  </ul>
                  </li>
                  <li>
                    Writer at Snipette (2022)
                    <ul className="list-square list-inside ml-6 mt-1 space-y-1 text-xs">
                      <li>
                        <a href="https://snipettemag.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://snipettemag.com</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Physics blog (2022)
                    <ul className="list-square list-inside ml-6 mt-1 space-y-1 text-xs">
                      <li>
                        <a href="https://thephysicsfootprint.wordpress.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://thephysicsfootprint.wordpress.com</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Summer intern at Magdrive (2021)
                    <ul className="list-square list-inside ml-6 mt-1 space-y-1 text-xs">
                    <li>
                    <a href="https://magdrive.space" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://magdrive.space</a>                    </li>
                  </ul>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </section>
          {/* Projects Section */}
          <section ref={projectsRef} className="opacity-0">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Ongoing Projects
            </h2>
            
            <div className="space-y-4">
              {featuredWork.map((work, index) => (
                <a
                  key={index}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border card-hover group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {work.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 flex-shrink-0 ml-2" />
                    </div>
                    
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {work.subtitle}
                    </p>
                    
                    <p className="text-foreground leading-relaxed">
                      {work.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Research Section */}
          <section ref={researchRef} className="opacity-0">
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Research
            </h2>
            
            <div className="space-y-4">
              {researchPapers.map((paper, index) => (
                <a
                  key={index}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-border card-hover group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:via-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {paper.title}
                      </h3>
                      <FileText className="w-5 h-5 text-muted-foreground group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300 flex-shrink-0 ml-2" />
                    </div>
                    
                    <p className="text-sm font-medium text-muted-foreground mb-3">
                      {paper.subtitle}
                    </p>
                    
                    <p className="text-foreground leading-relaxed">
                      {paper.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
