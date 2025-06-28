import React from 'react';

const App = () => {
  return (
    <div style={styles.navbar}>
      <ul style={styles.navList}>
        <div style={styles.leftNav}>
          <li style={{ ...styles.navItem, ...styles.activeItem }}>Home</li>
          <li style={styles.navItem}>News</li>
          <li style={styles.navItem}>Contact</li>
        </div>
        <div style={styles.rightNav}>
          <li style={styles.navItem}>About</li>
        </div>
      </ul>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftNav: {
    display: 'flex',
  },
  rightNav: {
    display: 'flex',
  },
  navItem: {
    color: 'white',
    marginRight: '20px',
    cursor: 'pointer',
    padding: '6px 12px',
    borderRadius: '4px',
  },
  activeItem: {
    backgroundColor: 'green',
    color: 'white',
  },
};

export default App;
