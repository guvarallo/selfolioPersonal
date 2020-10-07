import React from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import useDarkMode from 'use-dark-mode';

import Main from './components/Main/index';
import About from './components/About/index';
import Project from './components/Projects/index';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';

import GlobalStyles from './styles/global';
import useWindowDimensions from './useWindowDimensions';

const App: React.FC = () => {
  const { width } = useWindowDimensions();
  const darkMode = useDarkMode(false);

  return (
    <>
      {width <= 800 ? (
        <DarkModeToggle
          className="noSelect"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={50}
          speed={3}
        />
      ) : (
        <DarkModeToggle
          className="noSelect"
          onChange={darkMode.toggle}
          checked={darkMode.value}
          size={80}
          speed={3}
        />
      )}
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
