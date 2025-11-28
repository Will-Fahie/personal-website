import { Mail, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@/assets/william-fahie-profile.png";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.png";
import gallery6 from "@/assets/gallery-6.png";

const Index = () => {
  const featuredWork = [
    {
      title: "Parrock",
      subtitle: "AI for Social Value & ESG",
      description: "Co-founder. Automating social value commitments for public sector tenders using causal AI.",
      link: "https://www.parrock.uk"
    },
    {
      title: "Oxford University Amateur Boxing Club",
      subtitle: "144th President",
      description: "144th president of the Oxford University Amateur Boxing Club (OUABC).",
      link: "https://ouabc.com"
    },
    {
      title: "Achuar Language Preservation",
      subtitle: "Generative AI for Indigenous Cultures",
      description: "Fieldwork in the Ecuadorian Amazon. Building mobile apps and NLP models to preserve the Achuar language.",
      link: "https://achuar-ingis.com"
    },
    {
      title: "Varsify Media",
      subtitle: "Sports Media Agency",
      description: "Founder. Professional-level promotion for UK university sports.",
      link: "https://varsifymedia.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gallery */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] -z-10">
        <div className="absolute top-10 left-10 w-48 h-48 rounded-lg overflow-hidden rotate-12">
          <img src={gallery1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-40 right-20 w-40 h-40 rounded-lg overflow-hidden -rotate-6">
          <img src={gallery2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-32 left-20 w-56 h-56 rounded-lg overflow-hidden rotate-6">
          <img src={gallery3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/3 right-10 w-44 h-44 rounded-lg overflow-hidden -rotate-12">
          <img src={gallery4} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-20 right-32 w-52 h-52 rounded-lg overflow-hidden rotate-3">
          <img src={gallery5} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-20 left-1/3 w-48 h-48 rounded-lg overflow-hidden -rotate-3">
          <img src={gallery6} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto relative z-10">
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
            Physics @ Oxford University. Founder, Boxer, AI Enthusiast.
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
              href="mailto:williamfahie@outlook.com"
              className="p-3 rounded-full bg-card hover:bg-accent transition-colors border border-border"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </header>

        {/* Featured Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Featured Work
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

        {/* Footer */}
        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          <p>© 2025 William Fahie. Based in Oxford, UK.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
