const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-2">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <p>Email: aamnaashraf501@gmail.com</p>
            <p>Phone: 03342570180</p>
          </div>
          <div className="mb-2">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a href="https://www.facebook.com/AamnAashraff" className="hover:text-gray-300">Facebook</a>
              <a href="https://www.linkedin.com/in/aamna-ashraf-rajput-552a20280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-gray-300">LinkedIn</a>
            </div>
          </div>
          <div>
            <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
          </div>
          <div className="mt-2">
            <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;