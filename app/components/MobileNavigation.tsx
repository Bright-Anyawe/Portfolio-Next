"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHome, 
  FaUser, 
  FaCog, 
  FaProjectDiagram, 
  FaBlog, 
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaChevronDown
} from "react-icons/fa";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  subItems?: { title: string; href: string; }[];
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <FaHome className="w-5 h-5" />
  },
  {
    title: "About",
    href: "/about",
    icon: <FaUser className="w-5 h-5" />
  },
  {
    title: "Services",
    href: "/services",
    icon: <FaCog className="w-5 h-5" />,
    subItems: [
      { title: "Web Development", href: "/services/web-development" },
      { title: "Graphic Design", href: "/services/graphic-design" },
      { title: "Mobile Apps", href: "/services/mobile-apps" },
      { title: "Video Editing", href: "/services/video-editing" },
      { title: "Social Media", href: "/services/social-media" },
      { title: "Digital Marketing", href: "/services/digital-marketing" }
    ]
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <FaProjectDiagram className="w-5 h-5" />
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <FaBlog className="w-5 h-5" />
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <FaEnvelope className="w-5 h-5" />
  }
];

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedItem(null);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-[9999] p-3 rounded-xl bg-gray-800/90 backdrop-blur-sm text-white lg:hidden shadow-lg border border-gray-700/50"
        aria-label="Toggle mobile menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </motion.div>
      </button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9997] bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={toggleMenu}
            />

            {/* Navigation Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 z-[9998] w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-md border-r border-gray-700/50 lg:hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold">
                    AB
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Anyawe Bright</div>
                    <div className="text-gray-400 text-sm">Creative Digital Expert</div>
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-2 px-4">
                  {navItems.map((item) => (
                    <div key={item.title}>
                      {/* Main Nav Item */}
                      <div className="relative">
                        <Link
                          href={item.href}
                          className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-200 ${
                            isActiveRoute(item.href)
                              ? 'bg-gradient-to-r from-red-500/20 to-purple-500/20 text-white border border-red-500/30'
                              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        >
                          {item.icon}
                          <span className="font-medium">{item.title}</span>
                          {item.subItems && (
                            <motion.button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleSubMenu(item.title);
                              }}
                              className="ml-auto p-1"
                              animate={{ rotate: expandedItem === item.title ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FaChevronDown className="w-4 h-4" />
                            </motion.button>
                          )}
                        </Link>
                      </div>

                      {/* Sub Items */}
                      <AnimatePresence>
                        {item.subItems && expandedItem === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden ml-4 mt-2"
                          >
                            <div className="space-y-1 border-l-2 border-gray-700/50 pl-4">
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`block p-3 rounded-lg text-sm transition-all duration-200 ${
                                    isActiveRoute(subItem.href)
                                      ? 'bg-red-500/10 text-red-400 font-medium'
                                      : 'text-gray-400 hover:bg-gray-800/30 hover:text-gray-300'
                                  }`}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-700/50">
                <a
                  href="https://wa.me/2330594172522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-200"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavigation;