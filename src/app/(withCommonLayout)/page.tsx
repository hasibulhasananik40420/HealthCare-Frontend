import HeroSection from "@/components/ui/HeroSection/HeroSection"
import Specialist from "@/components/ui/HeroSection/Specialist/Specialist"
import TopRatedDoctors from "@/components/ui/TopRatedDoctors/TopRatedDoctors"
import WhyUs from "@/components/ui/WhyUs/WhyUs"

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Specialist/>
      <TopRatedDoctors/>
      <WhyUs/>
    </div>
  )
}

export default HomePage