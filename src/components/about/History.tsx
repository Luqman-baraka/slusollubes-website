
import { useEffect, useState } from "react";

const milestones = [
  {
    year: 2011,
    title: "Foundation",
    description: "Founded with a focus on reducing lubrication costs."
  },
  {
    year: 2012,
    title: "First Expansion",
    description: "Expanded to Kisumu with a new warehouse."
  },
  {
    year: 2023,
    title: "Today",
    description: "Fifth-largest lubricant supplier in Kenya, serving 150,000 liters monthly."
  }
];

const History = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % milestones.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-heading">
          Our History & Milestones
        </h2>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 h-1 bg-gray-200 top-1/2 transform -translate-y-1/2"></div>
            <div className="flex justify-between relative">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center relative z-10"
                  onClick={() => setActiveIndex(index)}
                >
                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      activeIndex === index 
                        ? "bg-slusollubes-orange text-white scale-125" 
                        : "bg-white text-gray-500 border-2 border-gray-200"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className={`text-lg font-bold mt-4 transition-all duration-300 ${
                    activeIndex === index ? "text-slusollubes-orange" : "text-gray-500"
                  }`}>
                    {milestone.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestone Content */}
          <div className="bg-gray-50 rounded-xl p-8 animate-on-scroll shadow-md">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold font-heading">{milestones[activeIndex].title}</h3>
              <span className="ml-3 text-sm font-medium px-3 py-1 bg-slusollubes-orange/10 text-slusollubes-orange rounded-full">
                {milestones[activeIndex].year}
              </span>
            </div>
            <p className="text-gray-700 text-lg">{milestones[activeIndex].description}</p>
          </div>

          {/* Milestone Navigation */}
          <div className="flex justify-center mt-8">
            {milestones.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full mx-1 transition-all ${
                  activeIndex === index 
                    ? "bg-slusollubes-orange w-6" 
                    : "bg-gray-300"
                }`}
                aria-label={`Go to milestone ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
