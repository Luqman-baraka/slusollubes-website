
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Fleet Manager, Transport Co",
    content: "We've been using Slusollubes products across our entire fleet for the past 3 years. The reduction in maintenance costs and improved efficiency has been remarkable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Operations Director, Manufacturing Inc",
    content: "After switching to Slusollubes for our industrial machinery, we've experienced less downtime and longer equipment life. Their technical support team is also exceptional.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Owner, Rodriguez Farms",
    content: "As a farmer, equipment reliability is crucial during harvest season. Slusollubes agricultural lubricants have outperformed every other brand we've tried in the past decade.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Chief Engineer, Construction LLC",
    content: "The extreme conditions our construction equipment faces demand the best lubricants. Slusollubes products have consistently delivered outstanding protection even in harsh environments.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if ('touches' in e) {
      setStartX(e.touches[0].clientX);
    } else {
      setStartX(e.clientX);
    }
  };

  const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - currentX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Auto play functionality
  useEffect(() => {
    autoPlayRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from industry professionals who rely on Slusollubes for their lubricant needs.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto animate-on-scroll">
          <div 
            ref={sliderRef}
            className="overflow-hidden"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="testimonial-card relative">
                    <Quote className="absolute top-6 right-6 text-slusollubes-orange opacity-20" size={48} />
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/4 shrink-0 flex justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover border-2 border-slusollubes-orange"
                        />
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-lg mb-4">{testimonial.content}</p>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-slusollubes-orange hover:bg-slusollubes-orange hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.preventDefault();
              prevSlide();
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-slusollubes-orange hover:bg-slusollubes-orange hover:text-white transition-colors z-10"
            onClick={(e) => {
              e.preventDefault();
              nextSlide();
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-slusollubes-orange" : "w-2 bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
