
const founders = [
  {
    name: "Mohamed Baraka",
    title: "Director",
    image: "https://i.pravatar.cc/300?img=68", // Placeholder, replace with actual image
    bio: `Mohamed Baraka joined Caltex Kenya in 1975 as a Chemist at their Mombasa blending plant. After 3 years in the laboratory, he moved to the lubricant technical service department and later served in other marketing positions for fuels such as aviation, consumer, and retail. During his time in Caltex, he spent significant time in the Philippines, Australia, and the U.S.A. for lubricant training.

    In 1986, he became In-Charge of lubricant marketing in East Africa. He also represented Caltex Kenya in brand awareness programs relating to OEMs in Japan. With the support from Caltex head office, he ran massive training programs for lubricant users, including truckers, bus operators, matatu operators, railroads, and industrial lubricants.
    
    It was through this effort that Caltex Delo, and in particular Delo 6200 Oil, became the most popular brand in East Africa. In 1992, he became the General Manager and Director of Caltex Kenya. In 2000, he was assigned as the Country Manager of Caltex Tanzania, a lubricant company he started from scratch and grew into a market leader. He retired from Caltex in 2003 and was appointed Managing Director of Gapco Kenya in 2004. He later became Director of Corporate Affairs, Gapco (E.A.), before retiring from Gapco in 2014.`
  },
  {
    name: "Dilash Bhayani",
    title: "Director",
    image: "https://i.pravatar.cc/300?img=61", // Placeholder, replace with actual image
    bio: `Dilash Bhayani is a BSc (Econ) graduate from the London School of Economics and a qualified Chartered Accountant. He comes from a family background with a wide range of business interests, including property, hotels, hospitality, and pharmaceuticals.
    
    He is a shareholder and director of Europa Healthcare Ltd and Sunpar Pharmaceuticals Ltd, both of which are leading pharmaceutical distributors in Kenya for major multinational brands from Europe and Asia.`
  }
];

const Founders = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center font-heading">
          Our Founders
        </h2>

        <div className="max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row gap-8 mb-16 last:mb-0 bg-white rounded-xl shadow-md p-6 md:p-8 animate-on-scroll ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Founder Image */}
              <div className="md:w-1/3 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slusollubes-orange/20">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Founder Info */}
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold font-heading mb-2">{founder.name}</h3>
                <p className="text-slusollubes-orange font-medium mb-4">{founder.title}</p>
                <div className="text-gray-700 space-y-4 leading-relaxed">
                  {founder.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
