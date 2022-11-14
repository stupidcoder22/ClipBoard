import React, { useState } from "react";

const App = () => {
  const [visible, setvisible] = useState(true);
  const [hidetext, sethidetext] = useState("hidden");
  const [navheight, setnavheight] = useState("mb-0");

  function changeVisible(e) {
    var name = e.target.name;
    setvisible(!visible);
    if (name == "ham") {
      setnavheight("mb-16");
      sethidetext("block");
    } else if ((name = "cross")) {
      setnavheight("mb-0");
      sethidetext("hidden");
    }
  }
  return (
    <div className="antialiased bg-[#FFFFFF] min-h-screen">
      <nav
        className={` mr-4 ${navheight} flex md:flex justify-between mt-7 md:mr-16`}
      >
        <div className="flex items-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/06/09/18/36/logo-1446293__340.png"
            alt=""
            className="logo"
          />
          <h1 className="text-4xl ml-1 text-gray-800 font-semibold">CoPier</h1>
        </div>

        {visible && (
          <img
            src="/images/hamburger.png"
            alt=""
            className={`logo2 md:hidden`}
            onClick={changeVisible}
            name={"ham"}
          />
        )}
        {!visible && (
          <img
            src="/images/cross.png"
            alt=""
            className={`logo2 md:hidden`}
            onClick={changeVisible}
            name={"cross"}
          />
        )}

        {visible && (
          <ul
            className={`${hidetext} text-2xl text-center space-y-5 justify-center md:flex md:flex-row md:justify-end md:space-x-5 md:text-xl md:font-semibold md:mt-0 md:space-y-0`}
          >
            <li className="text-[#51C8B6] hover:text-[#51C8B6]">Home</li>
            <li className="hover:text-[#51C8B6]">Product</li>
            <li className="hover:text-[#51C8B6]">Services</li>
            <li className="hover:text-[#51C8B6]">Help</li>
          </ul>
        )}
      </nav>

      {!visible && (
        <ul
          className={`${hidetext} text-2xl text-center space-y-5 justify-center md:flex md:flex-row md:justify-end md:space-x-5 md:text-xl md:font-semibold md:mt-0 md:space-y-0`}
        >
          <li className="text-[#51C8B6] hover:text-[#51C8B6]">Home</li>
          <li className="hover:text-[#51C8B6]">Product</li>
          <li className="hover:text-[#51C8B6]">Services</li>
          <li className="hover:text-[#51C8B6]">Help</li>
        </ul>
      )}

      <div className="mt-24 w-4/5 m-auto">
        <section className="flex flex-col items-center space-y-6 mb-24">
          <img src="/images/logo.svg" alt="" className="w-1/6 md:w-[110px]" />
          <h1 className="text-4xl text-center text-gray-700 font-semibold">
            A history of everything you copy
          </h1>
          <h1 className="text-center text-xl text-gray-400">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your device
          </h1>
          <div className="w-full flex flex-col space-y-7 md:flex-row md:space-y-0 md:space-x-5 md:justify-center">
            <button className="bg-[#51C8B6] text-white rounded-3xl py-4 text-xl font-semibold md:px-6">
              Download for iOS
            </button>
            <button className="bg-[#818fff] text-white rounded-3xl py-4 text-xl font-semibold md:px-6">
              Download for Mac
            </button>
          </div>
        </section>
        <section className="mb-24">
          <h1 className="mb-6 text-center text-4xl text-gray-700">
            Keep track of your snippets
          </h1>
          <p className="text-center text-xl text-gray-400">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all yoru devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </section>
        <section className="space-y-10 mb-24 md:flex md:space-x-24">
          <img src="/images/image-computer.png" alt="computer" />
          <div className="md:flex-col md:space-y-10">
            <div className="text-center space-y-1  md:text-start">
              <h1 className="text-gray-800 text-2xl font-semibold">
                Quick Search
              </h1>
              <p className="text-gray-400 text-lg">
                Easily search your snippets by content, category, web address,
                application, and more
              </p>
            </div>

            <div className="text-center space-y-1  md:text-start">
              <h1 className="text-gray-800 text-2xl font-semibold">
                iCloud Sync
              </h1>
              <p className="text-gray-400 text-lg">
                Easily search your snippets by content, category, web address,
                application, and more
              </p>
            </div>

            <div className="text-center space-y-1  md:text-start">
              <h1 className="text-gray-800 text-2xl font-semibold">
                Completely History
              </h1>
              <p className="text-gray-400  text-lg">
                Easily search your snippets by content, category, web address,
                application, and more
              </p>
            </div>
          </div>
        </section>
        <section className="mb-24 text-center space-y-6">
          <h1 className="text-3xl text-gray-800 font-semibold">
            Access Clipboard Anywhere
          </h1>
          <p className="text-gray-400 text-lg">
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
        </section>
        <section className="mb-24 md:flex md:justify-center">
          <img
            src="/images/image-devices.png"
            alt="devic"
            className="object-cover"
          />
        </section>
        <section className="text-center mb-24">
          <h1 className="text-4xl text-gray-800 font-semibold mb-7">
            Supercharge your workflow
          </h1>
          <div className="space-y-16">
            <p className="text-gray-400 text-xl">
              We've got the tools to boost your productivity
            </p>
            <div className="">
              <img
                src="/images/icon-blacklist.svg"
                alt=""
                className="flex m-auto mb-10"
              />
              <h1 className="text-3xl text-gray-800 mb-5">Create Blacklists</h1>
              <p className="text-gray-400 text-xl">
                Easily search your snippets by content, category, web address,
                application, and more. text-center
              </p>
            </div>
            <div className="">
              <img
                src="/images/icon-text.svg"
                alt=""
                className="flex m-auto mb-10"
              />
              <h1 className="text-3xl text-gray-800 mb-5">Create Blacklists</h1>
              <p className="text-gray-400 text-xl">
                Easily search your snippets by content, category, web address,
                application, and more. text-center
              </p>
            </div>
            <div className="">
              <img
                src="/images/icon-preview.svg"
                alt=""
                className="flex m-auto mb-10"
              />
              <h1 className="text-3xl text-gray-800 mb-5">Create Blacklists</h1>
              <p className="text-gray-400 text-xl">
                Easily search your snippets by content, category, web address,
                application, and more. text-center
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-16 flex flex-col items-center m-24">
          <img src="/images/logo-google.png" alt="" className="" />
          <img src="/images/logo-hp.png" alt="" />
          <img src="/images/logo-ibm.png" alt="" />
          <img src="/images/logo-microsoft.png" alt="" />
          <img src="/images/logo-vector-graphics.png" alt="" />
        </section>
        <section className="text-center space-y-8 mb-24">
          <h1 className="text-gray-800 text-4xl">
            Clipboard for iOS and MacOS
          </h1>
          <p className="text-gray-400 text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>
          <div className="w-full flex flex-col space-y-7 md:flex-row md:space-y-0 md:space-x-5 md:justify-center">
            <button className="bg-[#51C8B6] text-white rounded-3xl py-4 text-xl font-semibold md:px-6">
              Download for iOS
            </button>
            <button className="bg-[#818fff] text-white rounded-3xl py-4 text-xl font-semibold md:px-6">
              Download for Mac
            </button>
          </div>
        </section>
        <section className="flex flex-col items-center mb-10">
          <img
            src="/images/logo.svg"
            alt=""
            className="w-1/6 mb-6 md:w-[110px]"
          />
          <ul className="text-gray-400 text-center space-y-5 text-lg mb-5">
            <li>FAQs</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Press Kit</li>
            <li>Install Guide</li>
          </ul>
          <div className="flex space-x-10">
            <img src="images/icon-facebook.svg" alt="" />
            <img src="images/icon-instagram.svg" alt="" />
            <img src="images/icon-twitter.svg" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
