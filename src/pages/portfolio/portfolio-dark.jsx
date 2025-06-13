import React, { useState, useMemo } from 'react';
import { Search, Filter, ArrowUpDown, Calendar, Tag, ExternalLink, Eye } from 'lucide-react';
import DarkTheme from '../../layouts/Dark';
import Navbar from '../../components/Navbar/navbar';
import Footer2 from '../../components/Footer2/footer2';

const Portfolio = () => {

    const navbarRef = React.useRef(null);
      const logoRef = React.useRef(null);
    
      React.useEffect(() => {
        document.querySelector("body").classList.add("contact-page");
    
        var navbar = navbarRef.current,
          logo = logoRef.current;
        if (window.pageYOffset > 300) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
          } else {
            navbar.classList.remove("nav-scroll");
          }
        });
        return () => {
          document.querySelector("body").classList.remove("contact-page");
        };
      }, [navbarRef]);
  const [projects] = useState([
    {
      id: 1,
      name: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      date: "2024-12-15",
      description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.",
      categories: ["Web Development", "React", "E-Commerce"],
      link: "https://example.com/ecommerce"
    },
    {
      id: 2,
      name: "Mobile Banking App",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      date: "2024-11-20",
      description: "Secure mobile banking application with biometric authentication, transaction tracking, and budget management features.",
      categories: ["Mobile Development", "React Native", "FinTech"],
      link: "https://example.com/banking"
    },
    {
      id: 3,
      name: "AI-Powered Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      date: "2024-10-10",
      description: "Advanced analytics dashboard with machine learning insights, real-time data visualization, and predictive modeling.",
      categories: ["Web Development", "AI/ML", "Data Analytics"],
      link: "https://example.com/analytics"
    },
    {
      id: 4,
      name: "Social Media Management Tool",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      date: "2024-09-05",
      description: "Comprehensive social media management platform with scheduling, analytics, and team collaboration features.",
      categories: ["Web Development", "Social Media", "SaaS"],
      link: "https://example.com/social"
    },
    {
      id: 5,
      name: "Healthcare Management System",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop",
      date: "2024-08-18",
      description: "Digital healthcare platform enabling patient management, appointment scheduling, and telemedicine consultations.",
      categories: ["Web Development", "Healthcare", "React"],
      link: "https://example.com/healthcare"
    },
    {
      id: 6,
      name: "Cryptocurrency Trading Platform",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      date: "2024-07-22",
      description: "Secure cryptocurrency trading platform with real-time market data, advanced charting, and portfolio management.",
      categories: ["Web Development", "FinTech", "Cryptocurrency"],
      link: "https://example.com/crypto"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique categories
  const allCategories = useMemo(() => {
    const categories = new Set();
    projects.forEach(project => {
      project.categories.forEach(category => categories.add(category));
    });
    return Array.from(categories);
  }, [projects]);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.date.includes(searchTerm);
      const matchesCategory = !selectedCategory || project.categories.includes(selectedCategory);
      return matchesSearch && matchesCategory;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.date) - new Date(a.date);
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchTerm, selectedCategory, sortBy]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <DarkTheme mobileappstyle>
<div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
       <Navbar nr={navbarRef} lr={logoRef} />
        <div style={{
            marginTop: '100px',
      minHeight: '100vh',
    //   background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: '#ffffff',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          <h1 className='color-font'>
            Our Portfolio
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover our latest projects and digital innovations that showcase our expertise in web and mobile development.
          </p>
        </div>
      </div>

      {/* Controls */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 2rem 0 2rem'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem'
        }}>
          {/* Search */}
          <div style={{
            position: 'relative',
            minWidth: '300px',
            flex: '1'
          }}>
            <Search style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'rgba(255, 255, 255, 0.5)',
              width: '1.2rem',
              height: '1.2rem'
            }} />
            <input
              type="text"
              placeholder="Search projects by name or date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 3rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                color: '#ffffff',
                fontSize: '1rem',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#00d4ff';
                e.target.style.boxShadow = '0 0 0 2px rgba(0, 212, 255, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Filter and Sort Controls */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                background: showFilters ? 'rgba(0, 212, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              <Filter size={16} />
              Filters
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '0.75rem 1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              <option value="date-desc" style={{ background: '#1a1a2e' }}>Latest First</option>
              <option value="date-asc" style={{ background: '#1a1a2e' }}>Oldest First</option>
              <option value="name-asc" style={{ background: '#1a1a2e' }}>A-Z</option>
              <option value="name-desc" style={{ background: '#1a1a2e' }}>Z-A</option>
            </select>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '0.5rem',
            padding: '1.5rem',
            marginBottom: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{
              margin: '0 0 1rem 0',
              color: '#00d4ff',
              fontSize: '1.1rem'
            }}>
              Filter by Category
            </h3>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}>
              <button
                onClick={() => setSelectedCategory('')}
                style={{
                  padding: '0.5rem 1rem',
                  background: !selectedCategory ? 'rgba(0, 212, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '1.5rem',
                  color: '#ffffff',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
              >
                All Categories
              </button>
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: selectedCategory === category ? 'rgba(0, 212, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '1.5rem',
                    color: '#ffffff',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div style={{
          marginBottom: '2rem',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          Showing {filteredAndSortedProjects.length} of {projects.length} projects
        </div>
      </div>

      {/* Projects Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem 4rem 2rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {filteredAndSortedProjects.map(project => (
            <div
              key={project.id}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              {/* Project Image */}
              <div style={{
                position: 'relative',
                height: '250px',
                overflow: 'hidden'
              }}>
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem'
                }}>
                  <Calendar size={14} />
                  {formatDate(project.date)}
                </div>
              </div>

              {/* Project Content */}
              <div style={{
                padding: '1.5rem'
              }}>
                <h3 style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1.4rem',
                  fontWeight: '600',
                  color: '#00d4ff'
                }}>
                  {project.name}
                </h3>

                <p style={{
                  margin: '0 0 1.5rem 0',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>

                {/* Categories */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.categories.map(category => (
                    <span
                      key={category}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.25rem 0.75rem',
                        background: 'rgba(177, 156, 217, 0.2)',
                        borderRadius: '1rem',
                        fontSize: '0.8rem',
                        color: '#b19cd9',
                        border: '1px solid rgba(177, 156, 217, 0.3)'
                      }}
                    >
                      <Tag size={12} />
                      {category}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: 'linear-gradient(45deg, #00d4ff, #b19cd9)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 10px 20px rgba(0, 212, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <Eye size={16} />
                  View Project
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedProjects.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '4rem 2rem',
            color: 'rgba(255, 255, 255, 0.6)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#00d4ff'
            }}>
              No projects found
            </h3>
            <p>Try adjusting your search terms or filters.</p>
          </div>
        )}
      </div>
    </div>
    <Footer2 hideBGCOLOR />
    </DarkTheme>
   
  );
};

export default Portfolio;