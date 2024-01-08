import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        {/* Add your navigation bar here */}
      </header>
      <main>
        <div className="intro">
          <h1>Welcome to the CodeEditor</h1>
          <p>Get started with real-time code editing and preview.</p>
          <Link to="/editor">
            <button>Go to Editor</button>
          </Link>
        </div>
        {/* Add more sections describing features with images */}
        {/* For example: */}
        <section className="feature">
          <h2>Live Preview</h2>
          <img src="path-to-your-image.jpg" alt="Live Preview Feature" />
          <p>Write code and see the changes instantly in a live preview.</p>
        </section>
        {/* Repeat for other features */}
      </main>
      <footer>
        {/* Add your footer here */}
      </footer>
    </div>
  );
};

export default Home;
