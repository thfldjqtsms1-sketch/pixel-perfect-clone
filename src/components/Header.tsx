import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const navItems = [
  {
    label: '사업안내',
    items: [
      { label: '사업개요', href: '/planning' },
      { label: '입지환경', href: '/location' },
      { label: '프리미엄', href: '/premium' },
      { label: '오시는 길', href: '/contact' },
    ],
  },
  {
    label: '단지안내',
    items: [
      { label: '단지설계', href: '/complex' },
      { label: '조경', href: '/landscape' },
      { label: '커뮤니티', href: '/community' },
    ],
  },
  {
    label: '평형안내',
    items: [
      { label: '유니트', href: '/units' },
      { label: 'E-모델하우스', href: '/model-house' },
    ],
  },
  {
    label: '분양안내',
    items: [
      { label: '분양일정', href: '/sales' },
      { label: '모집공고', href: '/announcement' },
    ],
  },
  {
    label: '홍보센터',
    items: [
      { label: '홍보영상', href: '/media' },
      { label: '언론보도', href: '/news' },
    ],
  },
  {
    label: '관심고객등록',
    href: '/register',
  },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-display font-bold text-foreground">
              센트럴시티역
            </span>
            <span className="text-xl font-display font-bold text-primary">
              PRIME PARK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className="nav-link py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="nav-link py-2 flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.items && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[160px]">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:031-427-1912" className="flex items-center gap-2 text-primary">
              <Phone className="w-4 h-4" />
              <span className="font-medium">031.427.1912</span>
            </a>
            <Link
              to="/register"
              className="btn-gold text-xs px-6 py-3"
            >
              상담신청
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-6 py-4">
              {navItems.map((item) => (
                <div key={item.label} className="py-2">
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="block py-2 text-foreground font-medium"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full py-2 text-foreground font-medium"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && item.items && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className="block py-2 text-muted-foreground"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <a href="tel:031-427-1912" className="flex items-center gap-2 text-primary py-2">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">031.427.1912</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
