import React, { useState, useEffect, useRef } from 'react';
import styles from './navbar.module.css';
import { FaSearch, FaCode, FaBullhorn, FaPencilAlt, FaLaptopCode } from 'react-icons/fa';

// Sample suggestions data - replace with your actual services/products
const suggestions = {
  services: [
    { id: 1, name: 'Web Development', category: 'Service', icon: FaCode },
    { id: 2, name: 'Digital Marketing', category: 'Service', icon: FaBullhorn },
    { id: 3, name: 'Content Writing', category: 'Service', icon: FaPencilAlt },
    { id: 4, name: 'App Development', category: 'Service', icon: FaLaptopCode },
    // Add more services here
  ],
  // Add more categories if needed
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    // Handle clicks outside of search component
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      // Filter suggestions based on search term
      const filtered = suggestions.services.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    setShowSuggestions(false);
    // Handle navigation or other actions here
  };

  return (
    <div className={styles.searchForm} ref={searchRef}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search services..."
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => searchTerm.trim() && setShowSuggestions(true)}
      />
      <button className={styles.searchButton}>
        <FaSearch />
      </button>
      
      <div className={`${styles.searchSuggestions} ${showSuggestions ? styles.active : ''}`}>
        {filteredSuggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className={styles.suggestionItem}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            <span className={styles.suggestionIcon}>
              {<suggestion.icon />}
            </span>
            <span className={styles.suggestionText}>
              {suggestion.name}
            </span>
            <span className={styles.suggestionCategory}>
              {suggestion.category}
            </span>
          </div>
        ))}
        {filteredSuggestions.length === 0 && searchTerm && showSuggestions && (
          <div className={styles.suggestionItem}>
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
