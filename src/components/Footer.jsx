import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-6 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-500 tracking-tight">
              GLOW<span className="text-white">SUN</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your ultimate destination for premium summer essentials. From sun
              protection to beach style, we’ve got your glow covered.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors text-xl"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors text-xl"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                className="hover:text-orange-500 transition-colors text-xl"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Shop</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/products"
                  className="hover:text-orange-500 transition-colors"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Summer Outfits
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Skincare
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-orange-500 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Rangpur,Bangladesh</span>
              </li>
             
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span>hello@glowsun.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} GlowSun Summer Essentials. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
