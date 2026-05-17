import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f4f7f6] flex flex-col items-center pt-8 px-6 lg:px-16 font-sans">
      {/* Header */}
      <header className="w-full max-w-6xl mx-auto flex justify-between items-center z-20">
        <h1 className="text-2xl font-playfair font-medium italic text-slate-800">
          Rafi Djaenal
        </h1>
        <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-slate-700 hover:bg-gray-50 transition-colors shadow-sm">
          <Menu size={20} />
        </button>
      </header>

      {/* Main Hero Content */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex flex-col items-center mt-12 z-10">
        
        {/* Large Text */}
        <div className="text-center z-20 flex flex-col items-center gap-2 mb-10 md:mb-0 relative md:-bottom-12">
          <h2 className="text-5xl md:text-[5rem] font-medium tracking-tight text-slate-900 leading-none">
            Hi I&apos;m Rafi
          </h2>
          <h3 className="text-5xl md:text-[5.5rem] font-playfair italic font-medium text-slate-900 leading-none">
            Product Designer
          </h3>
        </div>

        {/* Center Container for Image and Background Blur */}
        <div className="relative flex justify-center w-full max-w-[900px] mt-8 md:mt-0 flex-1 min-h-[400px] md:min-h-[500px]">
          
          {/* Light Blue Blur Background - "biru muda" as requested */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[450px] bg-blue-300 rounded-[50%] blur-[70px] md:blur-[140px] opacity-70 -z-10" />

          {/* User Photo */}
          <div className="relative z-10 h-full flex items-end">
            <Image
              src="/assets/fotoku.png"
              alt="Rafi"
              width={600}
              height={700}
              className="object-contain max-h-[55vh] md:max-h-[65vh] object-bottom drop-shadow-2xl grayscale"
              priority
            />
            {/* Fade at bottom to blend into background */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f7f6] to-transparent z-20" />
          </div>

          {/* Absolute Floating Elements - Desktop */}
          
          {/* 1. Open for work badge (Left Middle) */}
          <div className="hidden md:flex absolute left-[-60px] top-[30%] bg-white/90 backdrop-blur-md border border-white/50 rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] items-center gap-3 animate-in fade-in slide-in-from-left-8 duration-700 delay-150 z-30">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c8ff72]"></span>
            </div>
            <span className="text-sm font-medium text-slate-800">
              Open for freelance & full-time work
            </span>
          </div>

          {/* 2. Text paragraph (Right Middle) */}
          <div className="hidden md:block absolute right-[-40px] top-[35%] max-w-[220px] animate-in fade-in slide-in-from-right-8 duration-700 delay-300 z-30">
            <p className="text-sm font-medium text-slate-800 leading-relaxed">
              I design intuitive digital products that solve real problems and deliver meaningful user experiences.
            </p>
          </div>
          
          {/* 3. Clients (Bottom Left) */}
          <div className="hidden md:flex absolute left-[-40px] bottom-[15%] flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 z-30">
            <div className="flex -space-x-3">
              <img src="https://ui-avatars.com/api/?name=A&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=B&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=C&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            </div>
            <p className="text-xs font-medium text-slate-600 leading-snug max-w-[120px]">
              Trusted by <span className="font-bold text-black">100+ happy clients</span> across industries.
            </p>
          </div>

          {/* 4. Get in Touch button (Bottom Right) */}
          <div className="hidden md:block absolute right-[20px] bottom-[20%] z-30 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
            <button className="group flex items-center gap-3 bg-[#0f0f0f] text-white px-6 py-4 rounded-[2rem] text-sm font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-2xl">
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-white/70 group-hover:text-white" />
              Get in Touch
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Mobile Floating Elements */}
      <div className="w-full md:hidden flex flex-col items-center gap-6 pb-12 z-20 mt-4">
         <div className="bg-white/90 backdrop-blur-md border border-white/50 rounded-full px-5 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#c8ff72]"></span>
            </div>
            <span className="text-sm font-medium text-slate-800">
              Open for freelance & full-time work
            </span>
          </div>

          <p className="text-sm font-medium text-slate-800 leading-relaxed text-center max-w-[280px]">
            I design intuitive digital products that solve real problems and deliver meaningful user experiences.
          </p>

          <div className="flex flex-col items-center gap-3 mt-2">
            <div className="flex -space-x-3">
              <img src="https://ui-avatars.com/api/?name=A&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=B&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
              <img src="https://ui-avatars.com/api/?name=C&background=random" alt="Client" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            </div>
            <p className="text-xs font-medium text-slate-600 leading-tight text-center max-w-[200px]">
              Trusted by <span className="font-bold text-black">100+ happy clients</span> across industries.
            </p>
          </div>

          <button className="mt-4 flex items-center justify-center gap-2 bg-[#0f0f0f] text-white px-6 py-4 rounded-[2rem] text-sm font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-2xl w-full max-w-[280px]">
            <ArrowRight size={18} className="text-white/70" />
            Get in Touch
          </button>
      </div>

    </main>
  );
}
