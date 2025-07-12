import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Brain, Rocket, Briefcase, Mail, BookOpen, Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home, color: 'from-cyan-500 to-blue-500' },
    { id: 'about', label: 'About Me', icon: User, color: 'from-blue-500 to-purple-500' },
    { id: 'skills', label: 'Skills', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { id: 'projects', label: 'Projects', icon: Rocket, color: 'from-pink-500 to-red-500' },
    { id: 'experience', label: 'Experience', icon: Briefcase, color: 'from-red-500 to-orange-500' },
    { id: 'contact', label: 'Contact', icon: Mail, color: 'from-orange-500 to-yellow-500' },
    { id: 'blog', label: 'Blog', icon: BookOpen, color: 'from-yellow-500 to-green-500' },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-3 bg-black/80 backdrop-blur-sm rounded-modern border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-all duration-300 shadow-modern hover:shadow-modern-lg"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className={`hidden lg:flex fixed left-0 top-0 h-full glass-dark border-r border-cyan-500/30 z-40 transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-72'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between mb-8"
          >
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">Satvik</span>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 rounded-lg hover:bg-cyan-400/10"
            >
              <Menu size={20} />
            </motion.button>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex-1 space-y-3">
            {navItems.map(({ id, label, icon: Icon, color }, index) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSectionChange(id)}
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center p-4 rounded-modern transition-all duration-300 group relative overflow-hidden ${
                  activeSection === id
                    ? `bg-gradient-to-r ${color} text-white shadow-modern-lg`
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {/* Active indicator */}
                {activeSection === id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-r-full"
                  />
                )}

                <div className="relative z-10 flex items-center">
                  <Icon size={22} className="flex-shrink-0" />
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="ml-4 font-medium"
                      >
                        {label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8"
          >
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-modern p-4 border border-cyan-500/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-cyan-300 font-medium">Available</span>
                  </div>
                  <p className="text-xs text-gray-400">Ready for new opportunities</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-40"
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="w-80 h-full glass-dark border-r border-cyan-500/30 p-6"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-white" />
                  </div>
                  <span className="text-white font-bold text-lg">Satvik</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 rounded-lg hover:bg-cyan-400/10"
                >
                  <X size={24} />
                </motion.button>
              </div>
              
              <div className="space-y-3">
                {navItems.map(({ id, label, icon: Icon, color }, index) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      onSectionChange(id);
                      setIsMobileOpen(false);
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center p-4 rounded-modern transition-all duration-300 group relative overflow-hidden ${
                      activeSection === id
                        ? `bg-gradient-to-r ${color} text-white shadow-modern-lg`
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {activeSection === id && (
                      <motion.div
                        layoutId="activeTabMobile"
                        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-400 rounded-r-full"
                      />
                    )}
                    
                    <Icon size={22} className="flex-shrink-0" />
                    <span className="ml-4 font-medium">{label}</span>
                    
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-modern p-4 border border-cyan-500/30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-cyan-300 font-medium">Available</span>
                </div>
                <p className="text-xs text-gray-400">Ready for new opportunities</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;