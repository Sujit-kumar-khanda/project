const Footer = () => {
  return (
    <footer className="w-full bg-gray-900/60 backdrop-blur-xl border-t border-white/10 py-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 text-gray-300 text-sm">
        {/* Left */}
        <p className="mb-2 sm:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-semibold">WeatherX</span>. All
          Rights Reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Terms
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
