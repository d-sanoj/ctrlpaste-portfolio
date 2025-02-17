import React, { useEffect, useState } from 'react';
import { Github, Mail } from 'lucide-react';

function App() {
  const [text, setText] = useState("CtrlPaste");
  const texts = ["CtrlPaste", "Create", "Connect"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
      setText(texts[(textIndex + 1) % texts.length]);
    }, 3000);

    return () => clearInterval(textInterval);
  }, [textIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .scale-on-scroll, .slide-on-scroll'
      );
      
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight * 0.8 && elementBottom > 0) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-zinc-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-[12rem] font-bold tracking-tight leading-none animate-on-scroll">
            <span className="text-zinc-300">{text}</span>
            <span className="text-zinc-300">.</span>
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-6xl font-bold mb-16 scale-on-scroll">&lt;Projects /&gt;</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CodeSync Pro",
                description: "Real-time collaborative code editor with AI-powered suggestions.",
                tech: ["React", "TypeScript", "Node.js"],
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=600"
              },
              {
                title: "DevFlow",
                description: "Streamline your development workflow with automated CI/CD.",
                tech: ["Python", "Docker", "AWS"],
                image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?auto=format&fit=crop&q=80&w=800&h=600"
              },
              {
                title: "CodeLens",
                description: "AI-powered code analysis and optimization platform.",
                tech: ["TensorFlow", "React", "GraphQL"],
                image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800&h=600"
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className="scale-on-scroll bg-zinc-900 rounded-xl overflow-hidden"
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-zinc-400 mb-4">{project.description}</p>
                  <div className="flex gap-3 flex-wrap">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-4 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-6xl font-bold mb-16 slide-on-scroll">&lt;Contact /&gt;</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="slide-on-scroll delay-200">
              <h3 className="text-3xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-zinc-400 text-lg mb-8">
                Have a project in mind? Want to collaborate? Or just want to say hi?
                I'd love to hear from you.
              </p>
              <div className="space-y-6">
                <a href="mailto:hello@ctrlpaste.com" className="flex items-center gap-4 text-lg text-zinc-300 hover:text-zinc-100 transition-colors">
                  <Mail size={24} />
                  hello@ctrlpaste.com
                </a>
                <a href="https://github.com" className="flex items-center gap-4 text-lg text-zinc-300 hover:text-zinc-100 transition-colors">
                  <Github size={24} />
                  @ctrlpaste
                </a>
              </div>
            </div>
            <div className="slide-on-scroll delay-400">
              <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
                <h3 className="text-2xl font-semibold mb-6">Quick Connect</h3>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 transition-colors"
                    ></textarea>
                  </div>
                  <button className="w-full px-6 py-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-zinc-500 text-sm">
          © 2024 CtrlPaste.com • Empowering Developers Worldwide
        </div>
      </footer>
    </div>
  );
}

export default App;