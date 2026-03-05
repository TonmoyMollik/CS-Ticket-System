const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8  py-12 ">
      <div className="max-w-[1380px] mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-gray-500 font-extrabold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm text-gray-500">
              Manage customer tickets, track progress, and resolve issues
              quickly with an organized support dashboard.
            </p>
          </div>
          <div>
            <h4 className="text-gray-500 font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Saled</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>Download Apps</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-500 font-semibold mb-2">Social Links</h4>
            <ul className="space-y-1 text-sm text-gray-500">
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>@CS — Ticket System</li>
              <li>support@cst.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-left md:text-center text-gray-500 text-sm mt-8">
        © 2025 CS — Ticket System.
        <br className="block md:hidden" /> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
