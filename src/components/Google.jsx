import React, { useState, useEffect, useRef } from "react";
import Apps from "../../public/apps.svg";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import { Slide, Tooltip } from "@mui/material";
import Avatar from "../../public/img.jpg";
import Search from "../../public/search.png";
import Map from "../../public/google-maps.png";
import Play from "../../public/google-play.png";
import News from "../../public/google-news.png";
import Gmail from "../../public/gmail.png";
import Meet from "../../public/meet.png";
import Contacts from "../../public/contacts.png";
import Drive from "../../public/google-drive.png";
import Photos from "../../public/google-photos.png";
import Translate from "../../public/google-translate.png";
import Calendar from "../../public/google-calendar.png";
import Myads from "../../public/myads.png";
import Shopping from "../../public/shopping.png";
import Finance from "../../public/finance.png";
import Docs from "../../public/google-docs.png";
import Sheets from "../../public/google-sheets.png";
import Slides from "../../public/slides.png";
import Books from "../../public/books.png";
import Blogger from "../../public/blogger.png";
import Keep from "../../public/keeps.png";
import Jamboard from "../../public/jamboard.png";
import Classroom from "../../public/classroom.png";
import Earth from "../../public/earth.png";
import Arts from "../../public/arts.png";
import Ads from "../../public/ads.png";
import One from "../../public/one.png";
import Travel from "../../public/travel.png";
import Forms from "../../public/google-forms.png";
import Chrome from "../../public/webstore.png";
import Passwords from "../../public/password.svg";
import GoogleLogo from "../../public/google.png";
import SearchIcon from "../../public/search-icon.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddingShortcut from "./AddingShortcut";

const Google = () => {
  const [open, setOpen] = useState(false);
  const toggleEvent = () => {
    setOpen(!open);
  };

  return (
    <div ck>
      <header>
        <ul className="absolute right-3 top-3 flex items-center gap-4">
          <li className="text-white">
            <a href="https://mail.google.com">Gmail</a>
          </li>
          <li className="text-white">
            <a href="https://www.google.com/imghp?hl=en&tab=ri&ogbl">Images</a>
          </li>
          <li className="cursor-pointer rounded-full p-2  text-white hover:bg-neutral-700 hover:bg-opacity-40">
            <Tooltip title="Search Labs">
              <a href="https://labs.google.com/search?source=ntp">
                <ScienceOutlinedIcon />
              </a>
            </Tooltip>
          </li>
          <li
            onClick={toggleEvent}
            className="cursor-pointer rounded-full p-2  text-white hover:bg-neutral-700 hover:bg-opacity-40"
          >
            <Tooltip title="Google apps">
              <img src={Apps} alt="Apps Icon" />
            </Tooltip>
          </li>
          <li className="cursor-pointer rounded-full p-1  text-white hover:bg-neutral-700 hover:bg-opacity-40">
            <Tooltip title="Google Account">
              <img
                className="h-8 w-8 rounded-full"
                src={Avatar}
                alt="User Avatar"
              />
            </Tooltip>
          </li>
        </ul>
        {open && (
          <div className="w-[360px]">
            <div className="tab absolute right-5 top-14 h-[500px] overflow-y-scroll rounded-[32px] bg-neutral-800 p-2">
              <div className=" mb-1 rounded-b-md rounded-t-3xl bg-neutral-900 p-5">
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 rounded-full"
                      src={Avatar}
                      alt="Account Img"
                    />
                    <p className="text-center text-white">Account</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Search} alt="Google Icons" />
                    <p className="text-center text-white">Search</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 rounded-full"
                      src={Map}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Maps</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Play} alt="Google Icons" />
                    <p className="text-center text-white">Play</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={News} alt="Google Icons" />
                    <p className="text-center text-white">News</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Gmail} alt="Google Icons" />
                    <p className="text-center text-white">Gmail</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Meet} alt="Google Icons" />
                    <p className="text-center text-white">Meet</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Meet} alt="Google Icons" />
                    <p className="text-center text-white">Chat</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Contacts}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Contacts</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Drive} alt="Google Icons" />
                    <p className="text-center text-white">Drive</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Photos} alt="Google Icons" />
                    <p className="text-center text-white">Photos</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Translate} alt="Google Icons" />
                    <p className="text-center text-white">Translate</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2" src={Calendar} alt="Google Icons" />
                    <p className="text-center text-white">Calendar</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Myads}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">My Ad</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Shopping}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Shopping</p>
                  </div>
                </div>
              </div>
              <div className=" rounded-b-3xl rounded-t-md bg-neutral-900 p-5">
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Finance}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Finance</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Docs}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Docs</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Sheets}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Sheets</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Slides}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Slides</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Books}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Books</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Blogger}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Blogger</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Keep}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Keep</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Jamboard}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Jamboard</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Classroom}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Classroom</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Earth}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Earth</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Arts}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Arts</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2 w-full" src={Ads} alt="Google Icons" />
                    <p className="text-center text-white">Ads</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img className="mb-2 w-full" src={One} alt="Google Icons" />
                    <p className="text-center text-white">One</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Travel}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Travel</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Forms}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Forms</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 w-full"
                      src={Chrome}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Chrome</p>
                  </div>
                  <div className="h-[100px] w-[100px] cursor-pointer rounded-xl px-5 py-2 hover:bg-neutral-700 hover:bg-opacity-40">
                    <img
                      className="mb-2 h-[60px] w-full"
                      src={Passwords}
                      alt="Google Icons"
                    />
                    <p className="text-center text-white">Passwords</p>
                  </div>
                </div>
              </div>
              <div className="my-5 flex justify-center">
                <button className="rounded-3xl border px-4 py-1 font-semibold text-blue-400 hover:bg-slate-800">
                  <a href="https://about.google/products">More from Google</a>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="flex h-screen flex-col items-center justify-center">
        <div className="mb-10">
          <img className="w-[250px]" src={GoogleLogo} alt="Google Logo" />
        </div>
        <div className="mb-4">
          <form className="flex h-12 w-[500px] items-center gap-2 rounded-3xl bg-white px-5">
            <SearchOutlinedIcon className="text-gray-400" />
            <input
              className="w-full text-gray-900 outline-none"
              type="text"
              placeholder="Search Google or type a URL"
            />
          </form>
        </div>
        <AddingShortcut />
      </main>
    </div>
  );
};

export default Google;
