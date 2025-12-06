import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaDiscord } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold">辰龙OS</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`hover:text-primary transition-colors ${location.pathname === '/' ? 'text-primary font-medium' : ''}`}>首页</Link>
          <Link to="/enterprise" className={`hover:text-primary transition-colors ${location.pathname === '/enterprise' ? 'text-primary font-medium' : ''}`}>企业方案</Link>
          <Link to="/education" className={`hover:text-primary transition-colors ${location.pathname === '/education' ? 'text-primary font-medium' : ''}`}>高校合作</Link>
          <Link to="/developer" className={`hover:text-primary transition-colors ${location.pathname === '/developer' ? 'text-primary font-medium' : ''}`}>开发者社区</Link>
          <Link to="/docs" className={`hover:text-primary transition-colors ${location.pathname === '/docs' ? 'text-primary font-medium' : ''}`}>技术文档</Link>
          <a href="https://github.com/chenlongos" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
            <FaGithub size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <Link to="/" onClick={closeMenu} className="py-2 hover:text-primary">首页</Link>
            <Link to="/enterprise" onClick={closeMenu} className="py-2 hover:text-primary">企业方案</Link>
            <Link to="/education" onClick={closeMenu} className="py-2 hover:text-primary">高校合作</Link>
            <Link to="/developer" onClick={closeMenu} className="py-2 hover:text-primary">开发者社区</Link>
            <Link to="/docs" onClick={closeMenu} className="py-2 hover:text-primary">技术文档</Link>
            <div className="flex space-x-4 py-2">
              <a href="https://github.com/chenlongos" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <FaGithub size={20} />
              </a>
              <a href="https://discord.gg/chenlongos" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary">
                <FaDiscord size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}