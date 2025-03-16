import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollDirection, isAtTop } = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== '/') {
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      }
    }
  };

  const navVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hidden: {
      y: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.nav
        initial="visible"
        animate={scrollDirection === 'down' && !isAtTop ? "hidden" : "visible"}
        variants={navVariants}
        className={`${scrolled ? 'bg-background/60 sticky top-[1rem]' : 'bg-white'} backdrop-blur-md z-50 py-4 rounded-[1.7rem] w-[100%]`}
      >
        <div className="w-full px-8 flex items-center">
          <Link href="/" className="text-3xl font-bold">
            <Image src='logo-efika.svg' alt='Logo Efika' width={100} height={100} />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <button onClick={() => scrollToSection('work')} className="nav-link">Work</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="flex px-4 gap-2 items-center py-2 bg-black text-white rounded-lg hover:bg-slate-900 transition-colors"
            >
              Book a Call <Phone size={20} fill='white' strokeWidth={0}/>
            </Link>
          </div>

          <div className="md:hidden ml-auto">
            <button
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <motion.div
            className="fixed md:hidden top-0 right-0 h-screen w-full bg-background/95 backdrop-blur-md"
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                onClick={() => scrollToSection('work')}
                className="text-4xl font-bold hover:text-primary transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-4xl font-bold hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-4xl font-bold hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-4xl font-bold hover:text-primary transition-colors"
              >
                About
              </button>
              <Link
                href="/contact"
                className="text-4xl font-bold hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;