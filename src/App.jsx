import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Award,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  User,
  Cpu, 
  Palette,
  Sparkles,
  Send,
  Bot,
  MessageSquare,
  Loader2,
  RefreshCw,
  Zap,
  MousePointer2,
  Search,
  Globe,
  Layers,
  CheckCircle2,
  Star,
  Building2,
  GraduationCap,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Check,
  Facebook,
  Instagram,
  PenTool,
  Languages,
  Monitor,
  Clock,
  Quote,
  MoveRight,
  ArrowLeft,
  Copy,
  Eye,
  MapPin,
  Image as ImageIcon,
  Trophy,
  MessageCircle
} from 'lucide-react';

// --- Global Data & Constants ---

const apiKey = ""; // Runtime environment handles this

const whatsappLink = "https://wa.me/8801966560165";
const instagramLink = "https://www.instagram.com/prodiproy1222/";
const facebookLink = "https://web.facebook.com/prodiproy1222";
const linkedinLink = "https://www.linkedin.com/in/prodip-roy-024648211/";
const upworkLink = "https://www.upwork.com/freelancers/~01a97834a2908979e9";
const fiverrLink = "https://www.fiverr.com/sellers/prodiproy594/";

const fiverrLogo = "https://images.seeklogo.com/logo-png/37/1/fiverr-logo-png_seeklogo-376328.png";
const upworkLogo = "https://cdn.freebiesupply.com/logos/large/2x/upwork-logo-png-transparent.png";

const formAction = "https://formspree.io/f/mojkoygl"; 

const skillsData = [
  { name: 'Email Ecosystem', icon: Mail, items: ['Mailchimp Specialist', 'Mailjet Expert', 'HubSpot CRM', 'MailerLite Designer', 'Klaviyo Flows'] },
  { name: 'Dev & Design', icon: Code, items: ['Figma to HTML', 'MJML / HubL', 'Hand-coded CSS', 'Modular Templates', 'React Integration'] },
  { name: 'Strategic Growth', icon: TrendingUp, items: ['Deliverability Audit', 'Inbox Placement', 'A/B Testing', 'Automation Logic', 'Conversion Opt.'] },
  { name: 'AI Solutions', icon: Cpu, items: ['Workflow Integration', 'AI Scripting', 'API Automation', 'Business Efficiency'] }
];

const projectsData = [
  { 
    id: 'yoga-retreat', 
    title: 'Yoga Marrakech Retreat', 
    category: 'email', 
    description: 'Premium Mailchimp campaign for Yoga w Manasi with mosaic gallery and urgency banners.', 
    image: 'https://mcusercontent.com/fb8c22a3b204be417cc4adea2/images/31aead2b-735d-14f7-bb5e-74012e060ae2.png', 
    tech: ['Mailchimp', 'Campaign', 'Design'],
    code: `<!DOCTYPE html><html><body style="font-family:Arial, sans-serif; background:#F9F7F5; padding:20px;"><div style="max-width:600px; margin:auto; background:#fff; padding:40px; border-radius:8px; border:1px solid #eee;"><h1 style="color:#13bfb1; text-align:center;">Yoga w Manasi</h1><p style="text-align:center;">Join us in Morocco for a transformative experience!</p></div></body></html>`
  },
  { 
    id: 'hubspot-automation', 
    title: 'HubSpot Investor Journey', 
    category: 'automation', 
    description: 'Complex lead nurturing and deal pipeline automation setup for Syndi.fi investors.', 
    image: 'image_c6778b.png', 
    tech: ['HubSpot', 'Automation', 'CRM'],
    code: `<!-- HubSpot Workflow Logic Configuration -->\n<div style="background:#0f172a; color:#38bdf8; padding:30px; border-radius:12px; font-family:monospace;">\n  <strong>TRIGGER:</strong> Form Submission [Institutional Inquiry] <br/>\n  <strong>ACTION:</strong> Create Deal [Pipeline: Syndication] <br/>\n  <strong>DELAY:</strong> 2 Minutes <br/>\n  <strong>ACTION:</strong> Send HubSpot Email [Welcome Series]\n</div>`
  },
  { 
    id: 'lotessa-welcome', 
    title: 'Lotessa Welcome Series', 
    category: 'email', 
    description: 'Multi-stage onboarding HTML template for Lotessa on Mailjet, optimized for user retention.', 
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800', 
    tech: ['Mailjet', 'MJML', 'Onboarding'],
    code: `<!doctype html><html><body style="background-color:#F4F4F4; padding:40px;"><div style="background:#ffffff; padding:40px; text-align:center; border-radius:12px;"><h1 style="color:#2fb4a5; font-family: sans-serif;">Welcome to Lotessa</h1><p style="font-family: sans-serif; color:#555;">Start your journey to better health today.</p></div></body></html>`
  },
  { 
    id: 'arnold-logan', 
    title: 'Arnold Logan Official', 
    category: 'web', 
    description: 'Elite personal branding website with premium UI and Authorship focus.', 
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=1200', 
    tech: ['Web Design', 'UI/UX'],
    url: 'https://arnoldlogan.com/'
  }
];

const testimonialsData = [
  { id: 1, name: "pixonative", location: "Belgium", text: "good work as always. Fast and reliable delivery with great attention to detail.", stars: 5, platform: "Fiverr", category: "Email Design" },
  { id: 2, name: "stehanhuber", location: "Germany", text: "Es war mir ein Vergnügen, mit Prodip R zusammenzuarbeiten, und ich freue mich auf zukünftige Partnerschaften.", stars: 5, platform: "Fiverr", category: "Email Design" },
  { id: 3, name: "jonathanan", location: "Israel", text: "Great seller will purchase your services again. High quality work and professional attitude.", stars: 5, platform: "Fiverr", category: "Email Design" },
  { id: 4, name: "belfast6789", location: "Canada", text: "He was polite, patient and delivered on time.....made the interaction smooth ...highly recommend ...second time I have worked with him.", stars: 5, platform: "Fiverr", category: "Email Design" },
  { id: 5, name: "Paystubs.net", location: "United States", text: "Prodip consistently delivered email templates on time and was reliable throughout our engagement.", stars: 5, platform: "Upwork", category: "Mailchimp Specialist" },
  { id: 6, name: "vmaior", location: "Romania", text: "Great job. We managed to deliver on time and on budget. Prodip was open to feedback.", stars: 5, platform: "Fiverr", category: "Email Design" }
];

// --- Sub-Components ---

const BrandLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-amber-500 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.4)] overflow-hidden group shrink-0 text-white">
      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
      <span className="text-black font-black text-base md:text-xl italic tracking-tighter z-10 font-poppins">PR</span>
      <div className="absolute -bottom-1 -right-1 bg-black p-0.5 rounded-tl-lg">
        <Zap size={10} className="text-amber-500 fill-amber-500" />
      </div>
    </div>
    <div className="flex flex-col leading-none text-left font-poppins text-white">
      <span className="text-sm md:text-lg font-black tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent uppercase">Prodip</span>
      <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-amber-500 uppercase">Expert</span>
    </div>
  </div>
);

const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  return (
    <div className={`relative bg-white/5 overflow-hidden w-full h-48 md:h-64 ${className}`}>
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-500 bg-[#111]">
          <ImageIcon size={32} />
          <span className="text-[8px] uppercase font-black tracking-widest text-center">Image Load Failed</span>
        </div>
      ) : (
        <img 
          src={src} 
          alt={alt} 
          onError={() => setError(true)}
          className="w-full h-full object-cover transition-all duration-700" 
        />
      )}
    </div>
  );
};

const CaseStudyView = ({ project, onBack }) => {
  const [viewMode, setViewMode] = useState('preview'); 
  const [localCode, setLocalCode] = useState(project.code || "");

  useEffect(() => {
    setLocalCode(project.code || "");
    localStorage.setItem('last_project_id', project.id);
  }, [project]);

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = localCode;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 md:pt-32 pb-20 px-4 md:px-6 font-inter animate-in fade-in duration-500">
      <div className="max-w-6xl mx-auto text-left">
        <button onClick={onBack} className="flex items-center gap-2 text-amber-500 font-black uppercase text-[10px] md:text-xs tracking-widest mb-10 hover:text-white transition-colors">
          <ArrowLeft size={16} /> <span>Back to Portfolio</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div className="space-y-4 text-left">
              <div className="flex flex-wrap gap-2 text-left">
                {project.tech.map(t => <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] md:text-[10px] font-black text-amber-500 uppercase tracking-widest">{t}</span>)}
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic font-poppins text-white leading-tight">{project.title}</h2>
              <p className="text-sm md:text-base text-gray-400 font-inter leading-relaxed">{project.description}</p>
            </div>
            <div className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl text-left">
              <h4 className="font-black text-[10px] md:text-xs uppercase text-amber-500 mb-2 md:mb-4 tracking-widest">Interactive Editor</h4>
              <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed">Edit the code below and see the real-time render on the right.</p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="flex p-1 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl w-fit">
              <button onClick={() => setViewMode('preview')} className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'preview' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-500 hover:text-white'}`}>
                <Eye size={14} /> Preview
              </button>
              <button onClick={() => setViewMode('code')} className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === 'code' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-500 hover:text-white'}`}>
                <Code size={14} /> Source Code
              </button>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[400px] md:min-h-[600px] relative">
              {viewMode === 'preview' ? (
                <iframe 
                  title="Live Preview" 
                  srcDoc={localCode || "<html><body style='color:white; font-family:sans-serif; padding:40px; text-align:center;'>Preview unavailable.</body></html>"} 
                  className="w-full h-[400px] md:h-[600px] border-none bg-white" 
                />
              ) : (
                <div className="relative h-[400px] md:h-[600px] flex flex-col">
                  <div className="absolute top-2 md:top-4 right-4 md:right-6 z-10">
                    <button onClick={copyToClipboard} className="p-2 md:p-3 bg-white/10 text-white rounded-lg md:rounded-xl hover:bg-amber-500 hover:text-black transition-all" title="Copy"><Copy size={16} /></button>
                  </div>
                  <textarea
                    value={localCode}
                    onChange={(e) => setLocalCode(e.target.value)}
                    className="flex-1 p-4 md:p-8 bg-black/50 font-mono text-[10px] md:text-sm text-amber-500/90 outline-none resize-none selection:bg-amber-500 selection:text-black"
                    spellCheck="false"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  return (
    <div className="relative max-w-4xl mx-auto px-2 md:px-4 text-left" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonialsData.map((t) => (
            <div key={t.id} className="w-full flex-shrink-0">
              <div className="p-6 md:p-14 bg-[#111] border border-white/5 rounded-2xl md:rounded-[3rem] relative shadow-2xl mx-1 md:mx-2 text-left">
                <Quote className="text-amber-500/10 absolute top-4 md:top-10 right-4 md:right-10" size={32} md:size={64} />
                <div className="flex items-center gap-2 mb-4 md:mb-8">
                  <div className="flex text-amber-500">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} size={12} md:size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[8px] md:text-[10px] font-black uppercase text-gray-500 tracking-[0.2em]">{t.platform}</span>
                </div>
                <p className="text-gray-200 italic text-sm md:text-xl leading-relaxed mb-6 md:mb-10 font-medium">"{t.text}"</p>
                <div className="flex justify-between items-end border-t border-white/5 pt-4 md:pt-8">
                  <div>
                    <h4 className="font-black text-sm md:text-lg uppercase text-white font-poppins tracking-wide">{t.name}</h4>
                    <div className="flex items-center gap-1 text-[9px] md:text-xs text-amber-500/70 font-bold uppercase tracking-widest mt-1">
                      <MapPin size={10} md:size={12} /> {t.location}
                    </div>
                  </div>
                  <span className="text-[7px] md:text-[10px] px-2 md:px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 font-black uppercase tracking-widest">
                    {t.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 bg-white/5 hover:bg-amber-500 hover:text-black rounded-full border border-white/10 transition-all z-10 text-gray-400">
        <ChevronLeft size={24} />
      </button>
      <button onClick={nextSlide} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 bg-white/5 hover:bg-amber-500 hover:text-black rounded-full border border-white/10 transition-all z-10 text-gray-400">
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-10">
        {testimonialsData.map((_, idx) => (
          <button 
            key={idx} 
            onClick={() => setCurrentIndex(idx)}
            className={`h-1 md:h-1.5 transition-all rounded-full ${currentIndex === idx ? 'w-6 md:w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'w-1.5 md:w-2 bg-white/10 hover:bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formStatus, setFormStatus] = useState(null); 
  const [contactMessage, setContactMessage] = useState("");
  const [isPolishing, setIsPolishing] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: "Hello! I'm Prodip's AI Twin. I've helped him complete over 451 orders with a 100% success rate on Upwork and Fiverr. How can I help you scale today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Persistence Logic
  useEffect(() => {
    const savedProjectId = localStorage.getItem('last_project_id');
    const savedPage = localStorage.getItem('last_page');
    if (savedPage === 'case-study' && savedProjectId) {
      const project = projectsData.find(p => p.id === savedProjectId);
      if (project) {
        setSelectedProject(project);
        setCurrentPage('case-study');
      }
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, targetHref) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const id = targetHref.replace('#', '');
    
    if (currentPage !== 'home') {
      setCurrentPage('home');
      localStorage.setItem('last_page', 'home');
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
  };

  const openCaseStudy = (project) => {
    setSelectedProject(project);
    setCurrentPage('case-study');
    localStorage.setItem('last_page', 'case-study');
    localStorage.setItem('last_project_id', project.id);
    window.scrollTo(0, 0);
  };

  const closeCaseStudy = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    localStorage.setItem('last_page', 'home');
    window.scrollTo(0, 0);
  };

  // AI Functionality
  const callGemini = async (prompt, systemInstruction, retries = 0) => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: { parts: [{ text: systemInstruction }] }
        })
      });

      if (!response.ok) {
        if (response.status === 429 && retries < 5) {
          const delay = Math.pow(2, retries) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
          return callGemini(prompt, systemInstruction, retries + 1);
        }
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't process that. Please try again.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Network error. Please check your connection.";
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatInput("");
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const systemPrompt = `You are the AI Twin of Prodip Roy. 
    Expert in Email Marketing, Automation (Mailchimp, HubSpot, Mailjet). 
    Fiverr Level 2 Seller, Upwork Top Rated. 451+ projects completed.
    Respond professionally and helpful in English.`;

    const response = await callGemini(userMsg, systemPrompt);
    setIsTyping(false);
    setChatMessages(prev => [...prev, { role: 'assistant', text: response }]);
  };

  const polishMessage = async () => {
    if (!contactMessage.trim() || isPolishing) return;
    setIsPolishing(true);
    const systemPrompt = "Rewrite this contact message to be more professional, catchy, and premium.";
    const result = await callGemini(contactMessage, systemPrompt);
    setContactMessage(result);
    setIsPolishing(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setContactMessage("");
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  const filteredProjects = activeTab === 'all' ? projectsData : projectsData.filter(p => p.category === activeTab);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'Skills', href: '#skills' },
    { name: 'Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-[#0a0a0a] text-gray-100 min-h-screen selection:bg-amber-500/30 font-inter scroll-smooth">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&family=Inter:wght@400;500;600;700;900&display=swap');
          .font-poppins { font-family: 'Poppins', sans-serif; }
          .font-inter { font-family: 'Inter', sans-serif; }
          body { font-family: 'Inter', sans-serif; background-color: #0a0a0a; }
          h1, h2, h3, h4, .nav-item, button { font-family: 'Poppins', sans-serif; font-weight: 800; }
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Global Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <button onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center text-left">
            <BrandLogo />
          </button>
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-item text-[9px] lg:text-[10px] font-black text-gray-400 hover:text-amber-500 transition-colors uppercase tracking-[0.2em]"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#0a0a0a] z-[60] flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in duration-300">
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)} 
                className="text-xl font-black text-white hover:text-amber-500 transition-colors uppercase tracking-widest font-poppins"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-4 md:right-6 z-[60] flex flex-col gap-3">
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-black/10 group"
        >
          <MessageCircle size={24} md:size={28} className="group-hover:rotate-12 transition-transform" />
        </a>
        {!isChatOpen && (
          <button onClick={() => setIsChatOpen(true)} className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 text-black rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-black/10 group relative">
            <Bot size={24} md:size={28} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full border-2 border-[#0a0a0a]" />
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-4 md:right-6 z-[70] w-[calc(100%-2rem)] sm:w-[350px] md:w-[400px] h-[450px] md:h-[500px] bg-[#111] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 text-left">
          <div className="p-4 bg-amber-500 flex justify-between items-center">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-amber-500"><Bot size={20} md:size={22} /></div>
              <div>
                <h4 className="font-black text-black text-xs md:text-sm uppercase leading-none font-poppins text-left">AI Twin</h4>
                <p className="text-[8px] md:text-[10px] text-black/70 font-black tracking-widest uppercase mt-1 italic text-left">Active</p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-black/70 hover:text-black transition-colors"><X size={20} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0a0a0a] scrollbar-hide text-left">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl md:rounded-2xl text-[12px] md:text-sm leading-relaxed ${msg.role === 'user' ? 'bg-amber-500 text-black rounded-tr-none' : 'bg-white/5 border border-white/10 text-gray-100 rounded-tl-none shadow-xl'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="flex justify-start text-left"><div className="bg-white/5 border border-white/10 p-2 md:p-3 rounded-xl md:rounded-2xl animate-pulse text-amber-500 text-[8px] md:text-[10px] font-black uppercase">Thinking...</div></div>}
            <div ref={chatEndRef} />
          </div>
          <div className="p-3 md:p-4 border-t border-white/5 bg-black/40">
            <div className="relative font-mono flex items-center">
              <input 
                type="text" 
                value={chatInput} 
                onChange={(e) => setChatInput(e.target.value)} 
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} 
                placeholder="Ask me anything..." 
                className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-4 py-2 md:py-3 text-[12px] md:text-sm focus:outline-none focus:border-amber-500/50 pr-10 md:pr-12 font-medium text-white" 
              />
              <button onClick={handleSendMessage} disabled={!chatInput.trim() || isTyping} className="absolute right-2 md:right-3 p-1.5 md:p-2 text-amber-500 disabled:opacity-30"><Send size={16} md:size={18} /></button>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'home' ? (
        <div id="home-wrapper">
          {/* Hero Section */}
          <section id="hero" className="relative pt-32 md:pt-48 pb-16 md:pb-32 overflow-hidden min-h-[90vh] md:min-h-[95vh] flex items-center text-left px-4">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=1600" alt="Workstation" className="w-full h-full object-cover opacity-15 grayscale scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 items-center">
              <div className="text-left order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-500 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-6 font-poppins italic text-left"><ShieldCheck size={12} className="text-blue-400" /> TOP RATED FREELANCER</div>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 md:mb-6 leading-[0.9] tracking-tighter uppercase font-poppins text-white">Scale Your <br /><span className="text-amber-500 not-italic">Impact.</span></h1>
                <p className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8 max-w-xl font-medium font-inter">Elite Marketing Designer & Developer. Specialized in HubSpot automation, Mailchimp campaigns, and conversion logic.</p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="px-5 md:px-8 py-3 md:py-4 bg-amber-500 text-black font-black rounded-lg md:rounded-xl hover:bg-amber-400 transition-all flex items-center gap-2 group uppercase tracking-widest text-[10px] md:text-xs font-black font-poppins">Hire Prodip <ChevronRight size={16} /></a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-5 md:px-8 py-3 md:py-4 bg-white/5 border border-white/10 text-white font-black rounded-lg md:rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 uppercase tracking-widest text-[10px] md:text-xs font-poppins">WhatsApp <MessageCircle size={16} className="text-[#25D366]" /></a>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 mx-auto">
                  <div className="absolute inset-0 rounded-3xl border-2 border-amber-500/30 rotate-6 -z-10" />
                  <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl relative bg-[#111]">
                    <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/a2ef8103ed718368adca4eca8fa1c844-1623160621089/e9456dca-26dd-4911-90f7-2c681e60e3d1.png" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-16 md:py-32 bg-[#0a0a0a] relative border-t border-white/5 text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
              <div className="order-2 md:order-1 text-left">
                <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 italic font-poppins">Discover My Story</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-none mb-6 md:mb-8 font-poppins text-white">Human Creativity <br /><span className="text-amber-500 not-italic">With AI Intel.</span></h2>
                <p className="text-gray-400 font-inter text-sm md:text-lg leading-relaxed">I am **Prodip Roy**, an Elite Marketing Designer and Developer with over 6 years of expertise. I bridge the gap between human strategy and AI efficiency for global businesses.</p>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl md:rounded-[3rem] overflow-hidden border-2 border-white/10 aspect-square group shadow-2xl relative text-left">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" alt="Process" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            </div>
          </section>

          {/* Platforms Section */}
          <section id="platforms" className="py-16 md:py-24 border-t border-white/5 text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-left">
              <div className="text-center mb-12 md:mb-16">
                <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-3 italic font-black font-poppins">Marketplace Presence</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic uppercase underline decoration-amber-500/10 font-black font-poppins text-white">Freelance Success.</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="p-6 md:p-10 bg-[#111] border border-white/5 rounded-2xl md:rounded-[3rem] group hover:border-amber-500/30 transition-all shadow-2xl text-left">
                   <div className="flex justify-between items-start mb-6 md:mb-8 text-left">
                      <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl group-hover:bg-[#14a800]/10 transition-colors">
                        <img src={upworkLogo} alt="Upwork" className="h-6 md:h-8 w-auto max-w-[100px] md:max-w-[120px] object-contain" />
                      </div>
                      <div className="bg-[#14a800] text-white px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest font-poppins flex items-center gap-1.5"><Award size={10} md:size={12} /> Top Rated</div>
                   </div>
                   <h3 className="text-xl md:text-2xl font-black uppercase italic mb-6 md:mb-8 font-poppins leading-none">Upwork Expert</h3>
                   <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 font-mono">
                      <div className="bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl text-left">
                        <p className="text-amber-500 font-black text-xl md:text-2xl font-poppins">179+</p>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Total Hours</p>
                      </div>
                      <div className="bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl text-left">
                        <p className="text-amber-500 font-black text-xl md:text-2xl font-poppins">100%</p>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Job Success</p>
                      </div>
                   </div>
                   <a href={upworkLink} target="_blank" className="block w-full py-4 md:py-5 bg-[#14a800] text-white rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase text-center font-poppins hover:brightness-110 shadow-lg transition-all">View Profile</a>
                </div>
                <div className="p-6 md:p-10 bg-[#111] border border-white/5 rounded-2xl md:rounded-[3rem] group hover:border-amber-500/30 transition-all shadow-2xl text-left">
                   <div className="flex justify-between items-start mb-6 md:mb-8 text-left">
                      <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl group-hover:bg-[#1dbf73]/10 transition-colors">
                        <img src={fiverrLogo} alt="Fiverr" className="h-6 md:h-8 w-auto max-w-[100px] md:max-w-[120px] object-contain" />
                      </div>
                      <div className="bg-white/5 text-amber-500 border border-amber-500/20 px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest font-poppins flex items-center gap-1.5"><Trophy size={10} md:size={12} /> Level 2 Seller</div>
                   </div>
                   <h3 className="text-xl md:text-2xl font-black uppercase italic mb-6 md:mb-8 font-poppins leading-none">Fiverr Specialist</h3>
                   <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8 font-mono">
                      <div className="bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl text-left">
                        <p className="text-amber-500 font-black text-xl md:text-2xl font-poppins">451+</p>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Orders Done</p>
                      </div>
                      <div className="bg-white/5 p-4 md:p-5 rounded-xl md:rounded-2xl text-left">
                        <p className="text-amber-500 font-black text-xl md:text-2xl font-poppins">256+</p>
                        <p className="text-[8px] md:text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Reviews</p>
                      </div>
                   </div>
                   <a href={fiverrLink} target="_blank" className="block w-full py-4 md:py-5 bg-[#1dbf73] text-white rounded-xl md:rounded-2xl text-[10px] md:text-xs font-black uppercase text-center font-poppins hover:brightness-110 shadow-lg transition-all">View Profile</a>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-16 md:py-24 border-t border-white/5 text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
               <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic uppercase underline decoration-amber-500/10 font-black font-poppins mb-10 md:mb-16 text-center text-white">Technical Mastery.</h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {skillsData.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <div key={idx} className="p-6 md:p-8 bg-[#111] border border-white/5 rounded-2xl md:rounded-[2rem] hover:border-amber-500/50 transition-all text-left">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 text-amber-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                          <Icon size={20} md:size={24} />
                        </div>
                        <h3 className="text-lg md:text-xl font-black italic mb-4 md:mb-6 font-poppins text-left text-white">{skill.name}</h3>
                        <ul className="space-y-2">
                          {skill.items.map(item => <li key={item} className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-widest text-left">• {item}</li>)}
                        </ul>
                      </div>
                    );
                  })}
               </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="py-16 md:py-24 border-t border-white/5 text-left">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mb-10 md:mb-16">
                <div className="text-center md:text-left">
                  <p className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-2 md:mb-3 italic font-black font-poppins">Portfolio Showcase</p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tighter italic uppercase underline decoration-amber-500/10 font-black font-poppins text-white">Recent Projects.</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-2 p-1 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl font-poppins font-black">
                  {['all', 'web', 'email', 'automation'].map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 md:px-5 py-2 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black transition-all uppercase tracking-widest ${activeTab === tab ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-500 hover:text-white'}`}>{tab}</button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 font-inter">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="group relative bg-[#111] border border-white/5 rounded-2xl md:rounded-3xl overflow-hidden hover:border-amber-500/30 transition-all flex flex-col shadow-2xl">
                    <div className="h-48 md:h-64 overflow-hidden relative">
                      <SafeImage src={project.image} alt={project.title} className="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent text-left" />
                    </div>
                    <div className="p-5 md:p-6 flex-1 flex flex-col text-left">
                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                        {project.tech.map(t => <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 text-[7px] md:text-[8px] font-black rounded text-gray-400 uppercase tracking-widest">{t}</span>)}
                      </div>
                      <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 italic group-hover:text-amber-500 transition-colors uppercase font-poppins text-white">{project.title}</h3>
                      <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-6 flex-1 leading-relaxed font-inter">{project.description}</p>
                      <button onClick={() => project.category === 'web' ? window.open(project.url, '_blank') : openCaseStudy(project)} className="flex items-center gap-2 text-[9px] md:text-[10px] font-black text-white hover:text-amber-500 transition-all uppercase tracking-widest group/btn italic font-poppins font-black">
                        {project.category === 'web' ? 'View Website' : 'View Case Study'} <MoveRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="py-16 md:py-24 border-t border-white/5 text-left overflow-hidden bg-white/[0.01]">
            <div className="max-w-7xl mx-auto px-4 md:px-6 text-left">
              <div className="text-center mb-12 md:mb-20">
                <p className="text-amber-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-3 md:mb-4 italic font-black font-poppins text-center">World-class Feedback</p>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter italic uppercase underline decoration-amber-500/10 font-black font-poppins text-white text-center">Client Reviews.</h2>
              </div>
              <TestimonialSlider />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 md:py-24 border-t border-white/5 text-left">
             <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black italic uppercase underline decoration-amber-500/10 font-poppins mb-10 md:mb-12 text-center text-white">Scale Your Brand.</h2>
                <form onSubmit={handleFormSubmit} className="space-y-4 md:space-y-6 text-left max-w-2xl mx-auto text-left">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 text-left">
                      <input type="text" name="name" required placeholder="YOUR NAME" className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-amber-500 focus:outline-none transition-all placeholder:text-gray-700 font-bold text-[10px] md:text-xs text-white text-left" />
                      <input type="email" name="email" required placeholder="EMAIL ADDRESS" className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-amber-500 focus:outline-none transition-all placeholder:text-gray-700 font-bold text-[10px] md:text-xs text-white text-left" />
                   </div>
                   <div className="relative text-left">
                      <textarea name="message" required value={contactMessage} onChange={(e) => setContactMessage(e.target.value)} placeholder="PROJECT REQUIREMENTS..." rows="5" className="w-full px-5 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:border-amber-500 focus:outline-none transition-all placeholder:text-gray-700 font-bold text-[10px] md:text-xs font-inter text-white text-left" />
                      <button type="button" onClick={polishMessage} disabled={!contactMessage.trim() || isPolishing} className="absolute bottom-3 md:bottom-4 right-3 md:right-4 px-4 md:px-5 py-2 md:py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-500 border border-amber-500/20 rounded-lg md:rounded-xl text-[8px] md:text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transition-all disabled:opacity-50 italic font-poppins">AI Polish ✨</button>
                   </div>
                   {formStatus === 'success' && <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-xs font-bold uppercase text-center mb-4">Message sent successfully!</div>}
                   {formStatus === 'error' && <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl text-xs font-bold uppercase text-center mb-4">Something went wrong. Please try again.</div>}
                   <button type="submit" disabled={formStatus === 'loading'} className="w-full py-4 md:py-6 bg-amber-500 text-black font-black rounded-xl md:rounded-2xl hover:bg-amber-400 transition-all flex items-center justify-center gap-2 group uppercase tracking-[0.2em] text-[10px] md:text-xs font-poppins text-center">
                     {formStatus === 'loading' ? 'Submitting...' : 'Submit'} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                   </button>
                </form>
             </div>
          </section>
        </div>
      ) : (
        <CaseStudyView project={selectedProject} onBack={closeCaseStudy} />
      )}

      {/* Footer */}
      <footer className="py-12 md:py-16 border-t border-white/5 bg-[#050505] font-poppins text-left">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
          <BrandLogo />
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href={linkedinLink} target="_blank" className="text-gray-500 hover:text-amber-500 transition-all"><Linkedin size={18} md:size={20} /></a>
            <a href={facebookLink} target="_blank" className="text-gray-500 hover:text-amber-500 transition-all"><Facebook size={18} md:size={20} /></a>
            <a href={instagramLink} target="_blank" className="text-gray-500 hover:text-amber-500 transition-all"><Instagram size={18} md:size={20} /></a>
            <a href={whatsappLink} target="_blank" className="text-gray-500 hover:text-amber-500 transition-all"><MessageCircle size={18} md:size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;