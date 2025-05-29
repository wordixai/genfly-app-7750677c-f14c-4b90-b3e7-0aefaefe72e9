export function Menu() {
  const menuCategories = [
    {
      title: "Coffee & Espresso",
      items: [
        { name: "Espresso", price: "$3.50", description: "Rich and intense single shot" },
        { name: "Cappuccino", price: "$4.75", description: "Espresso with steamed milk and foam" },
        { name: "Pour Over", price: "$5.25", description: "Hand-brewed single origin coffee" },
        { name: "Cold Brew", price: "$5.50", description: "Smooth, 24-hour steeped coffee" }
      ]
    },
    {
      title: "Pastries & Desserts",
      items: [
        { name: "Almond Croissant", price: "$4.50", description: "Buttery croissant filled with almond cream" },
        { name: "Chocolate Tart", price: "$6.25", description: "Dark chocolate ganache in a shortbread crust" },
        { name: "Lemon Cake", price: "$5.75", description: "Moist cake with lemon glaze" },
        { name: "Cinnamon Roll", price: "$4.95", description: "Freshly baked with cream cheese frosting" }
      ]
    },
    {
      title: "Breakfast & Lunch",
      items: [
        { name: "Avocado Toast", price: "$9.50", description: "Sourdough with avocado, radish, and microgreens" },
        { name: "Quiche Lorraine", price: "$8.75", description: "Classic quiche with bacon and Gruyère" },
        { name: "Grain Bowl", price: "$12.50", description: "Quinoa, roasted vegetables, and tahini dressing" },
        { name: "Chicken Panini", price: "$11.25", description: "Grilled chicken with pesto and mozzarella" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Menu</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in our carefully crafted menu, featuring locally sourced ingredients and house-made specialties.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-amber-200 text-amber-800">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-amber-700 font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            * Menu items may contain allergens. Please inform our staff of any dietary restrictions.
          </p>
        </div>
      </div>
    </section>
  );
}