import React, { useState, useRef, useEffect, useCallback } from "react";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

import {
  useAuth,
  useUser,
  SignInButton,
  SignUpButton,
  SignOutButton,
} from "@clerk/react";



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useUser();
  const { isSignedIn, getToken } = useAuth();
  const profileRef = useRef(null);
  const navigate = useNavigate()

  const TOKEN_KEY = "token";

  //   for token generation
  const fetchAndStoreToken = useCallback(async (options ={}) => {
    try {
      if (!getToken) {
        return null;
      }

      const token = await getToken(options).catch(() => null);
      if (token) {
        try {
          localStorage.setItem(TOKEN_KEY, token);
          console.log("Token synced successfully",token);
        } catch (error) {
          // ignore any error
        }
      } 
        return token;
      
    } catch (error) {
      return null;
    }
  }, [getToken]);

  // keep token insync with clerk auth state
useEffect(() => {
    let mounted = true;

    (async () => {
      if (isSignedIn) {
        const t = await fetchAndStoreToken({ template: "default" }).catch(
          () => null,
        );
        if (!t && mounted) {
          await fetchAndStoreToken({ forceRefresh: true }).catch(() => null);
        }
      } else {
        try {
          localStorage.removeItem(TOKEN_KEY);
        } catch {}
      }
    })(); // FIX: Added the missing parentheses here to execute the async function block

    return () => {
      mounted = false;
    }; 
  }, [isSignedIn, user, fetchAndStoreToken]);

// after successfull login redirect us to dashboard
useEffect(() => {
    if(isSignedIn){
        const pathname = window.location.pathname || "/"

        if(pathname === "/login" || pathname === "/signup" || pathname.startsWith('/auth') || pathname === "/"){
            navigate("/app/dashboard", {replace:true})
        }
    }
}, [isSignedIn, navigate])
// Close profile popover on outside click
useEffect(() => {
  function onDocClick(e) {
    if (!profileRef.current) return;
    if (!profileRef.current.contains(e.target)) {
      setProfileOpen(false);
    }
  }
  if (profileOpen) {
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
  }
  return () => {
    document.removeEventListener("mousedown", onDocClick);
    document.removeEventListener("touchstart", onDocClick);
  };
}, [profileOpen]);
  return (
    <header className={navbarStyles.header}>
      <div className={navbarStyles.container}>
        <nav className={navbarStyles.nav}>
          {/* Logo Section */}
          <div className={navbarStyles.logoSection}>
            <Link to="/" className={navbarStyles.logoLink}>
              <img src={logo} alt="logo" className={navbarStyles.logoImage} />
              <span className={navbarStyles.logoText}>Ledgerly AI</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className={navbarStyles.desktopNav}>
              <a href="#features" className={navbarStyles.navLink}>
                Features
              </a>
              <a href="#pricing" className={navbarStyles.navLinkInactive}>
                Pricing
              </a>
            </div>
          </div>

          {/* Right Side Actions Wrapper */}
          <div className="flex items-center gap-4">
            {/* Desktop Auth Section */}
            <div className={navbarStyles.authSection}>
              {!isSignedIn ? (
                <div className="flex items-center gap-4">
                  <SignInButton mode="modal">
                    <button className={navbarStyles.signInButton} type="button">
                      Sign In
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className={navbarStyles.signUpButton} type="button">
                      <div className={navbarStyles.signUpOverlay}></div>
                      <span className={navbarStyles.signUpText}>
                        Get Started
                        <svg
                          className={navbarStyles.signUpIcon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </SignUpButton>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link to="/dashboard" className={navbarStyles.navLink}>
                    Dashboard
                  </Link>
                  <span className="text-sm font-medium text-slate-700">
                    Hi, {user?.firstName}
                  </span>
                  <SignOutButton>
                    <button className={navbarStyles.signInButton} type="button">
                      Sign Out
                    </button>
                  </SignOutButton>
                </div>
              )}
            </div>

            {/* Mobile Menu Button - Placed cleanly to stay visible */}
            <button
              onClick={() => setOpen(!open)}
              className={navbarStyles.mobileMenuButton}
              type="button"
              aria-label="Toggle navigation menu"
            >
              <div className={navbarStyles.mobileMenuIcon}>
                <span
                  className={`${navbarStyles.mobileMenuLine1} ${
                    open
                      ? navbarStyles.mobileMenuLine1Open
                      : navbarStyles.mobileMenuLine1Closed
                  }`}
                ></span>
                <span
                  className={`${navbarStyles.mobileMenuLine2} ${
                    open
                      ? navbarStyles.mobileMenuLine2Open
                      : navbarStyles.mobileMenuLine2Closed
                  }`}
                ></span>
                <span
                  className={`${navbarStyles.mobileMenuLine3} ${
                    open
                      ? navbarStyles.mobileMenuLine3Open
                      : navbarStyles.mobileMenuLine3Closed
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Drawer Dropdown */}
      <div
        className={`${open ? "block" : "hidden"} ${navbarStyles.mobileMenu}`}
      >
        <div className={navbarStyles.mobileMenuContainer}>
          <a
            href="#features"
            onClick={() => setOpen(false)}
            className={navbarStyles.mobileNavLink}
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className={navbarStyles.mobileNavLink}
          >
            Pricing
          </a>

          <div className={navbarStyles.mobileAuthSection}>
            {!isSignedIn ? (
              <>
                <SignInButton mode="modal">
                  <button
                    className={`${navbarStyles.mobileSignIn} w-full text-left`}
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Sign In
                  </button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <button
                    className={`${navbarStyles.mobileSignUp} w-full text-center`}
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Get Started
                  </button>
                </SignUpButton>
              </>
            ) : (
              <div className="space-y-3 pt-2">
                <div className="text-sm font-medium text-slate-600">
                  Hi, {user?.firstName || "User"}
                </div>
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="block text-violet-600 font-medium"
                >
                  Dashboard
                </Link>
                <SignOutButton>
                  <button
                    className="block w-full text-left text-red-600 py-2 text-sm font-medium"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
