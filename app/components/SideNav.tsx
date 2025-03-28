"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import "../styles/sideNav.css";

const SideNav = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:h-40"
        href="/"
      >
        <div className="brand-name flex align-middle text-white md:w-40 font-extrabold text-3xl tracking-wide md:text-4xl">
          Anyawe B.
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="flex flex-col gap-2 w-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group"
              >
                <motion.div
                  className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blue-500/30 text-blue-300"
                      : "bg-gray-800/50 text-gray-200 hover:bg-blue-500/20 hover:text-blue-300"
                  }`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg"
                      layoutId="activeNav"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
