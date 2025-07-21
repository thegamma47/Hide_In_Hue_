const HeroSection =() =>{
    return(
        <>
        <section className="min-h-[90vh] flex items-center justify-between px-10 py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
  <div className="max-w-xl">
  <span className="text-cyan-400 font-medium tracking-wide bg-slate-800 px-4 py-1 rounded-full text-sm inline-block mb-6">
    🔐 Secure Data Hiding
  </span>

  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
    Hide Data in Plain Sight with <br />
    <span className="bg-gradient-to-r from-cyan-400 to-pink-400 text-transparent bg-clip-text">
      Steganography
    </span>
  </h1>

  <p className="text-slate-300 text-lg mb-8">
    Advanced web-based steganography tools that let you securely embed secret messages and data within images, audio, and text files. Invisible to the naked eye, undetectable by casual inspection.
  </p>

  <div className="flex gap-4">
    <button className="btn bg-gradient-to-r from-cyan-400 to-purple-500 border-0 text-white">
      ▶ Try Demo
    </button>
    <button className="btn btn-outline border-slate-400 text-slate-300 hover:text-white">
      💻 View Source
    </button>
  </div>
</div>


<div className="hidden md:block">
  <div className="w-80 h-80 rounded-xl bg-gradient-to-br from-[#1a1a3b] via-[#2b235a] to-[#332963] flex items-center justify-center relative shadow-lg md:ml-[-40px]">
    <div className="text-6xl text-cyan-400">
      🖼️
    </div>
    <span className="absolute top-3 right-3 text-green-400 text-sm bg-black/60 px-2 py-1 rounded-full">
      🔒
    </span>
    <span className="absolute bottom-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-md shadow-lg">
      🙈 Hidden Message
    </span>
  </div>
</div>


</section>


        </>
    )
}
export default HeroSection;