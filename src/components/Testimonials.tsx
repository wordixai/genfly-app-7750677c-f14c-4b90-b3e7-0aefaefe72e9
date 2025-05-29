export function Testimonials() {
  const testimonials = [
    {
      quote: "The best coffee I've had in the city. The atmosphere is perfect for both work and relaxation.",
      author: "Sarah Johnson",
      role: "Regular Customer"
    },
    {
      quote: "Their pastries are incredible - you can taste the quality and care that goes into each one.",
      author: "Michael Chen",
      role: "Food Blogger"
    },
    {
      quote: "I've been coming here for years and the consistency and quality never wavers. A true gem.",
      author: "Olivia Rodriguez",
      role: "Local Resident"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}