'use client'
import { motion } from 'framer-motion';
import { ArrowRight, FolderArchive, FolderGit2, FolderSync, Check } from 'lucide-react';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import LogoScroll from '../components/LogoScroll';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const PricingCard = ({ title, price, features, isPopular = false }: {
  title: string, price: number, features: string[], isPopular?: boolean
}) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className={`p-8 rounded-2xl border ${
      isPopular ? 'border-primary shadow-lg' : 'border-border'
    }`}
  >
    {isPopular && (
      <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">${price}</span>
      <span className="text-muted-foreground">/month</span>
    </div>
    <ul className="space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <Check className="text-primary" size={20} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full mt-8 py-3 rounded-lg transition-colors ${
      isPopular 
        ? 'bg-primary text-white hover:bg-primary/90' 
        : 'bg-secondary hover:bg-secondary/80'
    }`}>
      Get Started
    </button>
  </motion.div>
);

const Home = () => {
  const [currentWord, setCurrentWord] = useState('Journey');
  
  useEffect(() => {
    const words = ['Journey', 'Experience', 'Story'];
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      setCurrentWord(words[currentIndex]);
    },4000);
    
    return () => clearInterval(interval);
  }, []);
  
  const [currentCharacter, setCurrentCharacter] = useState('character-1.svg');
  
  useEffect(() => {
    let currentIndex = 0;
    
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % 8;
      if (currentIndex === 0) currentIndex = 1;
      setCurrentCharacter(`character-${currentIndex}.svg`);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);


  const projects = [
    {
      title: "Modern E-commerce Platform",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Financial App Interface",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Tech Startup Branding",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const plans = [
    {
      title: "Basic",
      price: 99,
      features: [
        "5 Pages Website",
        "Basic SEO",
        "Mobile Responsive",
        "1 Month Support"
      ]
    },
    {
      title: "Professional",
      price: 199,
      features: [
        "10 Pages Website",
        "Advanced SEO",
        "Mobile Responsive",
        "3 Months Support",
        "Custom Features"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: 399,
      features: [
        "Unlimited Pages",
        "Premium SEO",
        "Mobile Responsive",
        "12 Months Support",
        "Custom Features",
        "Priority Support"
      ]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const characterVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mt-4 space-y-4 px-4"
      >
        {/* Hero Section */}
        <section 
          id="hero" 
          className="flex space-x-4 overflow-hidden"
          style={{ height: 'calc(100vh - 20rem)'}}>
          <div className="relative flex flex-col flex-1 justify-between p-12 bg-[#FF5722] rounded-[2rem] w-full">
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-[7.7rem] font-bold text-white mb-8 leading-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Good{' '}
              <motion.span
                key={currentWord}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {currentWord}
              </motion.span>
              <br />
              <p className='mt-6'>is By Design.</p>
            </motion.h1>
            <img src='hero-decor.svg' className='absolute top-0 right-0'/>
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex bg-white rounded-2xl w-full items-center justify-between px-4 py-4 pr-4"
            >
              <span className="text-[2rem] mr-4">Start your journey with our <b>free discuss facility.</b> </span>
              <button className="bg-black text-[1.2rem] text-white px-6 py-4 rounded-2xl hover:bg-black/90 transition-colors">
                Let&apos;s Talk ⚡
              </button>
            </motion.div>
          </div>

          <motion.div 
            className="flex justify-center items-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={currentCharacter} 
              alt="Character" 
              className="h-full object-contain"
            />
          </motion.div>
        </section>

        {/* Client Logos Section */}
        <div className="w-full mx-auto bg-white rounded-[2rem] overflow-hidden">
          <LogoScroll />
        </div>

        {/* Stats Section */}
        <section className="w-full mx-auto bg-white rounded-[3rem] p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter end={150} label="Happy Clients" />
            <Counter end={200} label="Projects Completed" />
            <Counter end={10} label="Years Experience" />
            <Counter end={15} label="Team Members" />
          </div>
        </section>

        {/* Services Section */}
        <div id="services" className="w-full mx-auto bg-white rounded-[3rem] p-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="folder-card bg-orange-100"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FolderArchive className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-muted-foreground">Custom web applications built with modern technologies.</p>
            </motion.div>

            <motion.div
              className="folder-card bg-orange-50"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FolderGit2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">Beautiful, intuitive interfaces that users love.</p>
            </motion.div>

            <motion.div
              className="folder-card bg-orange-200"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <FolderSync className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Digital Strategy</h3>
              <p className="text-muted-foreground">Strategic planning for digital success.</p>
            </motion.div>
          </div>
        </div>
        
        {/* Service Description Section */}
        <section className="bg-black text-white w-full overflow-hidden rounded-[2.5rem]">
          <motion.div 
            className="p-6 flex flex-col lg:flex-row items-center justify-between space-x-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left side with characters and speech bubble */}
            <motion.div className="relative w-full lg:w-1/3 mb-10 lg:mb-0">
              <motion.div 
                className="relative z-20"
                variants={characterVariants}
              >
                {/* Speech bubble */}
                <motion.div 
                  className="bg-[#FB602E] text-white py-6 rounded-xl mb-8 relative w-fit"
                  variants={itemVariants}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                    Bring your journey further with us!
                  </h2>
                  <div className="absolute -bottom-4 left-16 w-8 h-8 bg-[#FB602E] rotate-45"></div>
                </motion.div>
                
                {/* Characters container */}
                <div className="flex items-end justify-center relative h-80">
                  {/* Character 1 - Thumbs up kid */}
                  {/* <motion.div 
                    className="absolute left-10 bottom-0 w-48 h-48 z-10"
                    variants={characterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                  >
                  </motion.div> */}
                    <img 
                      src="/character-7.svg" 
                      alt="Character giving thumbs up" 
                      className="w-full h-full object-contain"
                      style={{ mixBlendMode: 'color-burn' }}
                    />
                  
                  {/* Character 2 - OK gesture with glasses */}
                  <motion.div 
                    className="absolute left-40 bottom-0 w-48 h-48 z-20"
                    variants={characterVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                  >
                    <img 
                      src="/character-2.svg" 
                      alt="Character making OK gesture" 
                      className="w-full h-full object-contain"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right side with branding content */}
            <motion.div 
              className="flex flex-col space-y-4 bg-white text-black rounded-xl p-8 w-full lg:w-2/3"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500 mr-3"></div>
                <h3 className="text-xl font-bold uppercase tracking-wide">Branding</h3>
                <div className="ml-auto flex">
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                    <span className="transform rotate-180">&rsaquo;</span>
                  </button>
                  <button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
                    &rsaquo;
                  </button>
                </div>
              </div>
              <hr />
              
              <motion.div 
                variants={itemVariants}
                className='flex space-x-24'>
                <h2 className="text-2xl md:text-3xl font-medium mb-6 max-w-96">
                  Create a memorable brand identity with a visual and strategic approach that aligns with your audience and business goals.
                </h2>
                
                <ul className="space-y-4">
                  {["Logo", "Brand Guideline", "Stationary Design", "Marketing Materials", "Packaging Design", "Pitch Deck"]
                    .map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-center text-lg"
                        variants={itemVariants}
                        custom={index}
                      >
                        <span className="text-orange-500 font-bold mr-2">&rsaquo;</span>
                        {item}
                      </motion.li>
                    ))
                  }
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Work Section */}
        <div id="work" className="w-full">
          <div className="mx-auto bg-white rounded-[3rem] p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Selected <span className="text-primary">Work</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group bg-card rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div id="pricing" className="w-full">
          <div className="mx-auto bg-white rounded-[3rem] p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Simple, <span className="text-primary">Transparent</span> Pricing
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Choose the perfect plan for your needs. All plans include our core features.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <PricingCard
                  key={index}
                  {...plan}
                />
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="w-full">
          <div className="mx-auto bg-white rounded-[3rem] p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-16 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              About <span className="text-primary">Us</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-3xl font-bold mb-6">Our Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are a creative digital studio passionate about crafting exceptional digital experiences. 
                  Our team combines innovative design with cutting-edge technology to deliver solutions that 
                  make a lasting impact.
                </p>
              </motion.div>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold mb-6">Our Approach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in the power of collaboration and innovation. Every project begins with a deep 
                  understanding of our clients&apos; needs and goals. We then apply our expertise in design and 
                  technology to create solutions that exceed expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="contact" className="w-full">
          <div className="mx-auto bg-white rounded-[3rem] p-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-center"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let&apos;s create something amazing together. Get in touch with us today.
            </motion.p>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;