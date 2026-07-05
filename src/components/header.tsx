import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold tracking-wide text-indigo-600"
          >
            Online<span className="text-black">Sell</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute -bottom-2 left-0 h-0.75 w-full rounded-full bg-indigo-600"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Search */}
          <div className="relative hidden w-[320px] lg:block">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-300 py-3 pl-12 pr-5 outline-none transition focus:border-indigo-500"
            />
          </div>

          {/* Right Icons */}
          <div className="hidden items-center gap-5 lg:flex">
            <button className="relative transition hover:scale-110">
              <FiHeart size={24} />

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                2
              </span>
            </button>

            <button className="relative transition hover:scale-110">
              <FiShoppingCart size={24} />

              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
                3
              </span>
            </button>

            <button className="transition hover:scale-110">
              <FiUser size={24} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl lg:hidden"
            >
              <h2 className="mb-8 text-2xl font-bold text-indigo-600">
                ShopHub
              </h2>

              <div className="mb-6">
                <input
                  placeholder="Search..."
                  className="w-full rounded-lg border p-3 outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex flex-col gap-5">
                {navLinks.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-indigo-600"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="mt-10 flex gap-6">
                <FiHeart size={24} />
                <FiShoppingCart size={24} />
                <FiUser size={24} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;