import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.6)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Experience the Perfect Brew
          </h1>
          <p className="text-xl mb-8">
            Artisanal coffee, fresh pastries, and a warm atmosphere. 
            Your perfect escape in the heart of the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-6 text-lg">
              View Our Menu
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
              Book a Table
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}