
import { Lightbulb, Shield } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-heading">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-md p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slusollubes-orange/10 mr-4">
                <Shield className="text-slusollubes-orange" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Provide solutions that reduce maintenance cost, environmental damage, and ensure safety to users.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Remain committed to quality and play a leading role in promoting professional use of lubricants.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Provide lubricants at affordable prices while ensuring reasonable returns for shareholders.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Work with a motivated workforce that delivers high-quality service to customers.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Protect the environment by promoting safe lubricants that give maximum protection to equipment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Promote integrity in all our dealings and respect to all our stakeholders.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Continuously train users of lubricants to get the best value from their products.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Develop innovative products that reduce operational costs and environmental impact.</span>
              </li>
              <li className="flex items-start">
                <span className="text-slusollubes-orange mr-2">•</span>
                <span>Promote a safe working environment and handle customer orders expeditiously.</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-md p-8 animate-on-scroll">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slusollubes-orange/10 mr-4">
                <Lightbulb className="text-slusollubes-orange" size={24} />
              </div>
              <h3 className="text-2xl font-bold font-heading">Our Vision</h3>
            </div>
            <div className="flex items-center justify-center h-full">
              <p className="text-xl font-medium text-center text-gray-700 my-12">
                "We want to be a leading lubricants brand in East Africa."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
