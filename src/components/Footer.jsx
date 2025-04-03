const Footer = () => {
    return (
      <footer className="py-10 text-gray-700 bg-white border-t border-gray-200">
        <div className="grid grid-cols-1 gap-8 px-6 mx-auto max-w-7xl md:grid-cols-4">
          
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">JobBoard</h2>
            <p className="mt-2 text-sm text-gray-600">Find your dream job with ease.</p>
            <p className="mt-2 text-sm text-gray-600">© {new Date().getFullYear()} JobBoard. All rights reserved.</p>
          </div>
  
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-blue-500">Companies</a></li>
              <li><a href="#" className="hover:text-blue-500">Post a Job</a></li>
              <li><a href="#" className="hover:text-blue-500">Career Advice</a></li>
            </ul>
          </div>
  
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Support</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
            </ul>
          </div>
  
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Subscribe to Newsletter</h3>
            <p className="mt-2 text-sm text-gray-600">Stay updated with the latest job postings.</p>
            <div className="flex mt-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="px-4 py-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
  
        {/* Social Media Links */}
        <div className="pt-6 mt-10 text-center border-t border-gray-200">
          <p className="text-sm text-gray-600">Follow us on</p>
          <div className="flex justify-center mt-2 space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-500">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-blue-500">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-blue-500">LinkedIn</a>
            <a href="#" className="text-gray-500 hover:text-blue-500">Instagram</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  