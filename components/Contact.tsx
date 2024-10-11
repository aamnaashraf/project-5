const Subscribe = () => {
    return (
      <section className="bg-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-4">Get in Touch</h2>
        <p className="text-gray-700 text-center mb-8">
            We’d love to hear from you! Whether you have questions, feedback, or just want to connect, feel free to reach out. Your thoughts and insights help us grow and improve.
        </p>
          <h2 className="text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mt-4 max-w-xl mx-auto text-lg">
            Stay updated with the latest business tips, insights, and articles directly in your inbox.
          </p>
          <form className="mt-8 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 py-2 px-4 rounded-r-md hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Subscribe;