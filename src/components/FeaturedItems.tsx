import { Coffee, Croissant, Cake } from "lucide-react";

export function FeaturedItems() {
  const items = [
    {
      icon: <Coffee size={32} />,
      title: "Specialty Coffee",
      description: "Ethically sourced beans, expertly roasted and brewed to perfection."
    },
    {
      icon: <Croissant size={32} />,
      title: "Fresh Pastries",
      description: "Baked daily in-house using traditional recipes and premium ingredients."
    },
    {
      icon: <Cake size={32} />,
      title: "Artisan Desserts",
      description: "Handcrafted desserts that combine classic flavors with modern techniques."
    }
  ];

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Specialties</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our café a favorite destination for coffee enthusiasts and food lovers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-800 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}