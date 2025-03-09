
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Mock data for product highlights
const topProducts = [
  {
    id: "delstar-syn-10w40",
    name: "Delstar Syn 10W40",
    image: "https://images.unsplash.com/photo-1594393694001-c9a812153217?q=80&w=2070",
    description: "Premium synthetic engine oil for passenger cars and light commercial vehicles.",
    category: "Automotive",
  },
  {
    id: "delstar-xp-10w40",
    name: "Delstar XP 10W40",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069",
    description: "High performance semi-synthetic engine oil for heavy-duty diesel engines.",
    category: "Industrial",
  },
  {
    id: "nutec-grease",
    name: "Nutec Grease",
    image: "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?q=80&w=1974",
    description: "Multi-purpose lithium grease for automotive and industrial applications.",
    category: "Construction",
  },
  {
    id: "agristar-15w40",
    name: "Agristar 15W40",
    image: "https://images.unsplash.com/photo-1605457867610-e990b417bace?q=80&w=2070",
    description: "Specialized lubricant formulated for agricultural equipment and machinery.",
    category: "Agricultural",
  },
];

const ProductHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="section-heading">Our Featured Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our premium range of lubricants designed to provide optimal performance and protection for your equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-slusollubes-orange text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  to={`/products/${product.id}`} 
                  className="text-slusollubes-orange font-semibold flex items-center gap-2 group hover:underline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Link to="/products" className="btn-primary inline-flex items-center gap-2">
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
