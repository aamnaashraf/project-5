const testimonials = [
    {
      name: "John Doe",
      feedback: "This blog has transformed my business approach!",
    },
    {
      name: "Jane Smith",
      feedback: "Incredibly helpful insights and tips!",
    },
    {
      name: "Alex Johnson",
      feedback: "A must-read for every entrepreneur.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="bg-gray-300 py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-gray-600 text-5xl font-bold">What Our Readers Say!!</h2>
          <div className="mt-8 space-y-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-pink p-6 rounded-lg shadow-md">
                <p className="italic">"{testimonial.feedback}"</p>
                <p className="text-yellow-600 mt-2 font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;