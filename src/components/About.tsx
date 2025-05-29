export function About() {
  return (
    <section id="about" className="py-16 bg-amber-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2015, Café Aroma began with a simple mission: to create a space where quality coffee, 
              delicious food, and community could thrive together.
            </p>
            <p className="text-lg mb-4">
              Our founder, Emma Chen, spent years traveling the world's coffee regions, 
              learning from farmers and roasters before bringing her passion back home.
            </p>
            <p className="text-lg">
              Today, we continue to honor those relationships by sourcing ethically, 
              roasting in small batches, and serving with care. Every cup tells a story, 
              and we're proud to share it with you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee beans being roasted" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 mt-8">
              <img 
                src="https://images.unsplash.com/photo-1511081692775-05d0f180a065?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Barista preparing coffee" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 -mt-8">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee shop interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Coffee and pastry" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}