/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import Contact from './components/Contact';

export default function App() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">
      <Header />
      <Hero />
      <Services />
      <Works />
      <Contact />
    </main>
  );
}
