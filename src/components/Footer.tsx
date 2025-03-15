import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="w-full mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="text-2xl font-bold text-primary">EFIKA</Link>
            <p className="mt-4 text-muted-foreground">
              Creating exceptional digital experiences that inspire and innovate.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/work" className="text-muted-foreground hover:text-primary">Work</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                hello@efika.studio
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                Design City, DC 12345
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary"><Github size={20} /></a>
              <a href="#" className="hover:text-primary"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Efika Creative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;