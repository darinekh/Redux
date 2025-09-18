import React from "react";


// A demo component showcasing multiple modern UI design styles
const ModernStylesDemo = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 py-12 px-4 flex flex-col gap-12">
    {/* Glassmorphism */}
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-white uppercase tracking-widest">Glassmorphism</h2>
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-lg w-full max-w-md text-gray-900">
        <p className="text-lg font-semibold">Effet verre flouté, moderne et élégant.</p>
      </div>
    </section>

    {/* Neumorphism */}
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase tracking-widest">Neumorphism</h2>
      <div className="bg-gray-200 rounded-xl shadow-inner shadow-gray-400 p-6 w-full max-w-md">
        <p className="text-lg font-semibold text-gray-700">Relief doux, effet 3D subtil.</p>
      </div>
    </section>

    {/* Neon / Cyberpunk */}
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-pink-500 uppercase tracking-widest">Neon / Cyberpunk</h2>
      <div className="text-pink-500 font-bold text-3xl shadow-[0_0_10px_rgb(255,0,255)] animate-pulse mb-2">Neon Text</div>
      <button className="px-6 py-2 rounded bg-black text-cyan-400 border border-cyan-500 ring-2 ring-cyan-500/50 shadow-cyan-500/40 shadow-lg hover:bg-cyan-700 hover:text-white transition-all duration-200 font-bold uppercase tracking-wider">Bouton Neon</button>
    </section>

    {/* Minimaliste / Moderne */}
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 uppercase tracking-widest">Minimaliste</h2>
      <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto text-gray-800">
        <p className="text-lg font-semibold">Simplicité, espace blanc, typographie nette.</p>
      </div>
    </section>

    {/* Gradient dynamique */}
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-white uppercase tracking-widest">Gradient Dynamique</h2>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500 text-white p-6 rounded-lg transition-all duration-500 max-w-md w-full cursor-pointer font-semibold text-center">
        Passe la souris ici pour voir le dégradé animé !
      </div>
    </section>

    {/* Dark / Mode sombre */}
    <section className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-white uppercase tracking-widest">Mode Sombre</h2>
      <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <p className="text-lg font-semibold">Contraste fort, style moderne et élégant.</p>
      </div>
    </section>
  </div>
);

export default ModernStylesDemo;
