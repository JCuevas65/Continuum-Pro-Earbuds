/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ExplodedView from "./components/ExplodedView";
import Sustainability from "./components/Sustainability";
import Specs from "./components/Specs";
import Shop from "./components/Shop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 bg-brand overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ExplodedView />
        <Sustainability />
        <Specs />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

