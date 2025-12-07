import { Chatbot } from "@/components/chat/Chatbot";
import { Moon, Sun, GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import universityLogo from "@/assets/university-logo.jfif";

const Index = () => {
  const { isDark, toggleTheme } = useTheme();

  const features = [
    { icon: GraduationCap, title: "Admissions", description: "Get instant answers about admission requirements, deadlines, and procedures." },
    { icon: BookOpen, title: "Academics", description: "Learn about programs, courses, grading systems, and academic policies." },
    { icon: Users, title: "Student Services", description: "Find information about hostels, transport, IT support, and more." },
    { icon: Award, title: "Scholarships", description: "Discover available scholarships and financial aid opportunities." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-40 glass-card">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={universityLogo} alt="University of Peshawar" className="w-12 h-12 rounded-full object-cover border-2 border-primary/20" />
            <div>
              <h1 className="font-display text-lg font-bold text-foreground">University of Peshawar</h1>
              <p className="text-xs text-muted-foreground">Since 1950</p>
            </div>
          </div>
          <button onClick={toggleTheme} className="p-2.5 rounded-full bg-muted hover:bg-muted/80 transition-colors">
            {isDark ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
          </button>
        </div>
      </header>

      <section className="relative pt-24 pb-20 hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span></span>
              AI-Powered FAQ Assistant
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">Get Instant Answers to Your <span className="text-primary">University Questions</span></h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Our intelligent chatbot is here to help you 24/7 with admissions, academics, fees, scholarships, and everything about university life.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => (document.querySelector(".chat-bubble") as HTMLButtonElement)?.click()} className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105">
                Start Chatting <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="https://uop.edu.pk" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border border-border rounded-full font-semibold text-foreground hover:bg-muted transition-all duration-300">Visit Official Website</a>
            </div>
          </div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">How Can We Help?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our FAQ chatbot covers all major topics to assist current and prospective students.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} className="glass-card p-6 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-display text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[{ value: "40+", label: "FAQ Topics" }, { value: "24/7", label: "Available" }, { value: "6", label: "Categories" }, { value: "Instant", label: "Responses" }].map((stat) => (
              <div key={stat.label}><div className="font-display text-4xl md:text-5xl font-bold mb-2">{stat.value}</div><div className="text-primary-foreground/70">{stat.label}</div></div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={universityLogo} alt="University of Peshawar" className="w-10 h-10 rounded-full object-cover" />
              <div><p className="font-display font-semibold text-foreground">University of Peshawar</p><p className="text-sm text-muted-foreground">Knowledge, Virtue, and Wisdom</p></div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <a href="https://uop.edu.pk" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Official Website</a>
              <span className="hidden md:inline">•</span>
              <a href="mailto:info@uop.edu.pk" className="hover:text-primary transition-colors">info@uop.edu.pk</a>
              <span className="hidden md:inline">•</span>
              <span>Peshawar, Pakistan</span>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">© {new Date().getFullYear()} University of Peshawar. FAQ Chatbot powered by AI.</div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default Index;
