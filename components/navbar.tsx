function Navbar() {
  return (
    <nav className="fixed bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 w-full border-b border-gray-300 md:border-0 z-30">
      <div className="max-w-3xl mx-auto place-items-center flex justify-between py-6 font-normal px-6 lg:px-0">
        <div className="text-md flex justify-center md:inline font-bold text-lg">
          alfahri.
        </div>
        <div className="w-2/4 md:w-1/4 md:mt-0">
          <ul className="text-md flex justify-between">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
