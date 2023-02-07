import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className="w-full flex justify-between item-center bg-[#161b22] sm:px-8 px-4 py-4 border-b border-b-[#161b22]">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-28 object-contain "
              style={{
                filter:
                  "invert(100%) sepia(4%) saturate(7469%) hue-rotate(205deg) brightness(104%) contrast(102%)",
              }}
            />
          </Link>
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#0d1117] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
        <footer className="sm:p-8 px-4 py-8 w-full bg-[#0d1117]">
          <p className="mt-2 text-[#8b949e] text-[14px] text-center">
            Made with <span style={{ color: "#e25555" }}>❤️</span> by{" "}
            <a
              href="https://www.linkedin.com/in/saurav-suman-ind/"
              target={"_blank"}
            >
              Saurav Suman.
            </a>
          </p>
        </footer>
      </BrowserRouter>
    </div>
  );
};

export default App;
