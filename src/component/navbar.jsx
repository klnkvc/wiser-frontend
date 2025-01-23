// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Navbar = () => {
  return (
    <nav className="bg-customBlue text-white w-full h-24 fixed z-50">
      <div className="flex items-center justify-between py-0 px-0 md:px-8">
        
        {/* Logo - Left Side */}
        <div className="flex items-center space-x-2 mr-auto ml-16 mt-4">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="h-[70px] w-[70px]" />
          </NavLink>
        </div>

        {/* Navigation Links - Right Side */}
        <div className="flex items-center space-x-6 gap-8 mr-40 mt-5">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-raleway font-semibold text-xl ${
                isActive ? 'text-white underline font-extrabold' : 'text-fontblue'
              } transition-colors duration-200`
            }
          >
            Beranda
          </NavLink>
          <NavLink 
            to="/konsultasi" 
            className={({ isActive }) => 
              `font-raleway font-semibold text-xl ${
                isActive ? 'text-white underline font-extrabold' : 'text-fontblue'
              } transition-colors duration-200`
            }
          >
            Konsultasi
          </NavLink>

          {/* Edukasi with Dropdown Menu */}
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton
              as={NavLink}
              to="/edukasi"
              className={({ isActive }) => 
                `font-raleway font-semibold text-xl inline-flex items-center justify-between ${
                  isActive ? 'text-white underline font-extrabold' : 'text-fontblue'
                } px-3 py-2 transition-colors duration-200`
              }
            >
              Edukasi
              <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-white" />
            </MenuButton>

            {/* Transition for Dropdown */}
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-conscars2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div className="py-1">
                  {/* Materi */}
                  <MenuItem>
                    {({ active }) => (
                      <NavLink
                        to="/edukasi/materipage"
                        className={({ isActive }) => 
                          `block text-center text-lg font-semibold text-click ${
                            isActive ? 'bg-conscars2' : ''
                          } ${active ? 'bg-gray-100 text-gray-900' : ''} px-4 py-3 transition-colors duration-200 ease-in-out`
                        }
                      >
                        Materi
                      </NavLink>
                    )}
                  </MenuItem>
                  {/* Blog Artikel */}
                  <MenuItem>
                    {({ active }) => (
                      <NavLink
                        to="/edukasi/blogartikel"
                        className={({ isActive }) => 
                          `block text-center text-lg font-semibold text-click ${
                            isActive ? 'bg-conscars2' : ''
                          } ${active ? 'bg-gray-100 text-gray-900' : ''} px-4 py-3 transition-colors duration-200 ease-in-out`
                        }
                      >
                        Blog Artikel
                      </NavLink>
                    )}
                  </MenuItem>
                  {/* Berita */}
                  <MenuItem>
                    {({ active }) => (
                      <NavLink
                        to="/edukasi/berita"
                        className={({ isActive }) => 
                          `block text-center font-semibold text-lg text-click ${
                            isActive ? 'bg-conscars2' : ''
                          } ${active ? 'bg-gray-100 text-gray-900' : ''} px-4 py-3 transition-colors duration-200 ease-in-out`
                        }
                      >
                        Berita
                      </NavLink>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Transition>
          </Menu>

          <NavLink 
            to="/tentang-kami" 
            className={({ isActive }) => 
              `font-raleway font-semibold text-xl ${
                isActive ? 'text-white underline font-extrabold' : 'text-fontblue'
              } transition-colors duration-200`
            }
          >
            Tentang Kami
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
