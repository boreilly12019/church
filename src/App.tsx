/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import TopSection from './components/TopSection';
import Mission from './components/Mission';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Giving from './components/Giving';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <TopSection />
        <Mission />
        <Services />
        <Gallery />
        <Giving />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
