import { Link } from "react-router-dom";
import { MapPin, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.jpg" 
                alt="Global Science Academy Logo" 
                className="h-10 w-auto" 
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground leading-tight">Global Science</span>
                <span className="text-xs text-muted-foreground">Academy</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Excellence in Science Education for 11th & 12th Grade Students
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-background p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-background p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-background p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-background p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/notes" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Study Material
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses#pcm" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  PCM (Physics, Chemistry, Maths)
                </Link>
              </li>
              <li>
                <Link to="/courses#pcb" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  PCB (Physics, Chemistry, Biology)
                </Link>
              </li>
              <li>
                <Link to="/courses#pcmb" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  PCMB (All Four Subjects)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Behind Bole hospital, Langade Nagar, Ardhapur, 431704</span>
              </li>
              <li className="flex gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Raju Salunke: 9823745311</span>
              </li>
              <li className="flex gap-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Balaji Sawant: 9403745844</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2025 Global Science Academy. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm text-center md:text-right">
            Founded by <span className="font-semibold text-foreground">Prof. Raju Salunke</span> & <span className="font-semibold text-foreground">Prof. Balaji Sawant</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
