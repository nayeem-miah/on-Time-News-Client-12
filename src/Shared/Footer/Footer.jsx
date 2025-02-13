const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex justify-between items-center border-b pb-6 mb-6">
          <div>
            <h5 className="text-3xl font-semibold">OnTimeNews</h5>
            <p className="text-sm mt-2">Your trusted source for daily news updates.</p>
          </div>

          {/* Footer Links */}
          <div className="flex gap-8">
            <div>
              <h6 className="text-lg font-semibold">Quick Links</h6>
              <ul className="mt-2 space-y-2">
                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h6 className="text-lg font-semibold">Follow Us</h6>
              <ul className="mt-2 space-y-2">
                <li><a href="https://facebook.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://linkedin.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} OnTimeNews. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
