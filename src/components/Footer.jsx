import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 flex flex-col items-center">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">About This Project</h2>
        <p className="text-center mt-2 max-w-2xl">
          This project is a movie search application using React and the OMDb API. It allows users to search for movies and view detailed information, utilizing Tailwind CSS for styling and animations for a better user experience.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mt-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-medium">Developed By</h3>
          <p>Abusha Ansari</p>
          <p>Anurag Dubey</p>
        </div>
        <div className="flex space-x-8">
          <div className="text-center">
            <h4 className="text-lg font-medium">Abusha Ansari</h4>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://github.com/Abusha-Ansari" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/abusha-ansari-a809b22b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h4 className="text-lg font-medium">Anurag Dubey</h4>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://github.com/knightcoder-369" target="_blank" rel="noopener noreferrer">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/anurag-dubey-a8825a302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
