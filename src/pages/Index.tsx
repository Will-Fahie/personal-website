import { Mail, Linkedin, Instagram, ExternalLink, FileText } from "lucide-react";
import profileImage from "@/assets/william-fahie-profile.png";
import as35Report from "@/assets/research/AS35 report.pdf";
import epqReport from "@/assets/research/EPQ.pdf";
import protoDuneReport from "@/assets/research/ProtoDUNE report.pdf";

const Index = () => {
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
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="mb-6">
            <img 
              src={profileImage} 
              alt="William Fahie"
              className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-border"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            William Fahie
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-xl mx-auto">
            Physics @ Oxford University
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/williamfahie/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors border border-border"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="https://www.instagram.com/will_fahie?igsh=MWlhcTFkZTNhdGMydA%3D%3D&utm_source=qr"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors border border-border"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a 
              href="mailto:williamfahie@outlook.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors border border-border"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </header>

        {/* Two Column Layout: Projects and Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Projects Section */}
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Projects
            </h2>
            
            <div className="space-y-4">
              {featuredWork.map((work, index) => (
                <a
                  key={index}
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card rounded-lg p-6 sm:p-8 border border-border card-hover group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {work.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {work.subtitle}
                  </p>
                  
                  <p className="text-foreground leading-relaxed">
                    {work.description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* Research Section */}
          <section>
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
                  className="block bg-card rounded-lg p-6 sm:p-8 border border-border card-hover group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {paper.title}
                    </h3>
                    <FileText className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 ml-2" />
                  </div>
                  
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {paper.subtitle}
                  </p>
                  
                  <p className="text-foreground leading-relaxed">
                    {paper.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          <p>© 2025 William Fahie. Based in Oxford, UK.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
