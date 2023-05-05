import HeroSection from "../libhome/genral/HeroSection";
import Footer from "../libhome/includes/Footer";
import LiveStreaming from "../libhome/genral/LiveStreaming";
import Technology from "../libhome/genral/Technology";
import Engagement from "../libhome/genral/Engagement";
import FreeDemo from "../libhome/genral/FreeDemo";
import MoveAnimations from "../libhome/custom/MoveAnimations";
import Flexible from "../libhome/genral/Flexible";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <LiveStreaming />
      <Technology />
      <Engagement />
      <Flexible />
      <FreeDemo />
      <MoveAnimations />
      <Footer />

    </main>
  )
}
