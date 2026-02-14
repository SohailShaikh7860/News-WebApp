import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <Wrapper>
        <div className="py-12">
          {/* Top section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <span className="text-lg font-bold">NewsHub</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your trusted source for the latest news and stories from around the world.
              </p>
            </div>

            {/* Links */}
            <div>
              <h6 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                Categories
              </h6>
              <ul className="space-y-2.5">
                {['Business', 'Technology', 'Science', 'Health'].map((item) => (
                  <li key={item}>
                    <a className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                Company
              </h6>
              <ul className="space-y-2.5">
                {['About Us', 'Careers', 'Contact', 'Press Kit'].map((item) => (
                  <li key={item}>
                    <a className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
                Legal
              </h6>
              <ul className="space-y-2.5">
                {['Terms of Use', 'Privacy Policy', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} NewsHub. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Twitter/X */}
              <a className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* GitHub */}
              <a className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer">
                <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
