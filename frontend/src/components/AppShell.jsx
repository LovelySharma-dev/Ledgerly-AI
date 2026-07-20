import React from "react";
import { appShellStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { NavLink, useNavigate, Link, Outlet } from "react-router-dom";
import { useClerk, useUser } from "@clerk/react";
import { useState, useEffect } from "react";

const AppShell = () => {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { user } = useUser();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return localStorage.getItem("sidebar_collapsed") === "true";
    } catch (error) {
      return false;
    }
  });

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) setCollapsed(false);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sidebar_collapsed", collapsed ? "true" : "false");
    } catch {}
  }, [collapsed]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Header scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // logout
  const logout = async () => {
    try {
      await signOut({ redirectUrl: "/" });
    } catch (error) {
      console.warn("Signout error:", error);
    }
  };

  // togglesidebar
  const toggleSidebar = () => setCollapsed(!collapsed);

  // display name helpers
  const displayName = (() => {
    if (!user) return "User";
    const name = user.fullName || user.firstName || user.username || "";
    return name.trim() || (user.emailAddress || "").split?.("@")?.[0] || "User";
  })();

  const firstName = () => {
    const parts = displayName.split(" ").filter(Boolean);
    return parts.length ? parts[0] : displayName;
  };

  const initials = () => {
    const parts = displayName.split(" ").filter(Boolean);
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (
      parts[0].charAt(0) + parts[parts.length - 1].charAt(0)
    ).toUpperCase();
  };

  // Icons
  const DashboardIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );

  const InvoiceIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );

  const CreateIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );

  const ProfileIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const LogoutIcon = ({ className = "w-5 h-5" }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );

  const CollapseIcon = ({ className = "w-4 h-4", collapsed }) => (
    <svg
      className={`${className} transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
      />
    </svg>
  );

  const SidebarLink = ({ to, icon, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `
        ${appShellStyles.sidebarLink}
        ${collapsed ? appShellStyles.sidebarLinkCollapsed : ""}
        ${isActive ? appShellStyles.sidebarLinkActive : appShellStyles.sidebarLinkInactive}
      `}
      onClick={() => setMobileOpen(false)}
    >
      {({ isActive }) => (
        <>
          <div
            className={`${appShellStyles.sidebarIcon} ${isActive ? appShellStyles.sidebarIconActive : appShellStyles.sidebarIconInactive}`}
          >
            {icon}
          </div>
          {!collapsed && (
            <span className={appShellStyles.sidebarText}>{children}</span>
          )}
          {!collapsed && isActive && (
            <div className={appShellStyles.sidebarActiveIndicator} />
          )}
        </>
      )}
    </NavLink>
  );

  return (
    <div className={appShellStyles.root}>
      <div className={appShellStyles.layout}>
        {/* DESKTOP SIDEBAR */}
        <aside
          className={`${appShellStyles.sidebar} ${collapsed ? appShellStyles.sidebarCollapsed : appShellStyles.sidebarExpanded}`}
        >
          <div className={appShellStyles.sidebarGradient}></div>
          <div className={appShellStyles.sidebarContainer}>
            <div>
              <div
                className={`${appShellStyles.logoContainer} ${collapsed ? appShellStyles.logoContainerCollapsed : ""}`}
              >
                <Link to="/" className={appShellStyles.logoLink}>
                  <div className="flex items-center gap-3 whitespace-nowrap">
                    <div className="relative shrink-0">
                      <img
                        src={logo}
                        alt="logo"
                        className={appShellStyles.logoImage}
                      />
                      <div className="absolute inset-0 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
                    </div>
                    {!collapsed && (
                      <div className={appShellStyles.logoTextContainer}>
                        <span className={appShellStyles.logoText}>
                          Ledgerly AI
                        </span>
                        <div className={appShellStyles.logoUnderline}></div>
                      </div>
                    )}
                  </div>
                </Link>
                {!collapsed && (
                  <button
                    onClick={toggleSidebar}
                    className={appShellStyles.collapseButton}
                  >
                    <CollapseIcon collapsed={collapsed} />
                  </button>
                )}
              </div>

              {/* navigations */}
              <nav className={appShellStyles.nav}>
                <SidebarLink to="/app/dashboard" icon={<DashboardIcon />}>
                  Dashboard
                </SidebarLink>
                <SidebarLink to="/app/invoices" icon={<InvoiceIcon />}>
                  Invoices
                </SidebarLink>
                <SidebarLink to="/app/create-invoice" icon={<CreateIcon />}>
                  Create Invoice
                </SidebarLink>
                <SidebarLink to="/app/business" icon={<ProfileIcon />}>
                  Business Profile
                </SidebarLink>
              </nav>
            </div>

            <div className={appShellStyles.userSection}>
              <div
                className={`${appShellStyles.userDivider} ${collapsed ? appShellStyles.userDividerCollapsed : appShellStyles.userDividerExpanded}`}
              >
                <button
                  onClick={logout}
                  className={appShellStyles.logoutButton}
                >
                  <LogoutIcon className={appShellStyles.logoutIcon} />
                  {!collapsed && <span>Logout</span>}
                </button>

                <div className={appShellStyles.collapseSection}>
                  <button
                    onClick={toggleSidebar}
                    className={`${appShellStyles.collapseButtonInner} ${collapsed ? appShellStyles.collapseButtonCollapsed : ""}`}
                  >
                    {!collapsed && <span>Collapse</span>}
                    <CollapseIcon collapsed={collapsed} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* FIXED: MOBILE VIEW WITH CONTROLLED WRAPPING & PROPER Z-INDEX OVERLAY LAYER */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            {/* Backdrop layer explicitly styled to block leaking styles */}
            <div
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-out mobile container drawer */}
            <div
              className={`${appShellStyles.mobileSidebar} relative z-10 flex flex-col justify-between h-full w-72 p-6 bg-[#0F172A]`}
            >
              <div>
                <div className={appShellStyles.mobileHeader}>
                  {/* FIXED LOGO LAYER BLOCKING LINE WRAPS ON SMALLEST DEVICES */}
                  <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 whitespace-nowrap text-white no-underline"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="w-8 h-8 object-contain shrink-0"
                    />
                    <span className="font-bold text-lg tracking-tight">
                      Ledgerly AI
                    </span>
                  </Link>

                  <button
                    onClick={() => setMobileOpen(false)}
                    className={appShellStyles.mobileCloseButton}
                  >
                    <svg
                      className={appShellStyles.mobileCloseIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* navigations */}
                <nav className={appShellStyles.mobileNav}>
                  <NavLink
                    onClick={() => setMobileOpen(false)}
                    to="/app/dashboard"
                    className={({ isActive }) =>
                      `${appShellStyles.mobileNavLink} ${isActive ? appShellStyles.mobileNavLinkActive : appShellStyles.mobileNavLinkInactive}`
                    }
                  >
                    <DashboardIcon /> <span className="ml-2.5">Dashboard</span>
                  </NavLink>
                  <NavLink
                    onClick={() => setMobileOpen(false)}
                    to="/app/invoices"
                    className={({ isActive }) =>
                      `${appShellStyles.mobileNavLink} ${isActive ? appShellStyles.mobileNavLinkActive : appShellStyles.mobileNavLinkInactive}`
                    }
                  >
                    <InvoiceIcon /> <span className="ml-2.5">Invoices</span>
                  </NavLink>
                  <NavLink
                    onClick={() => setMobileOpen(false)}
                    to="/app/create-invoice"
                    className={({ isActive }) =>
                      `${appShellStyles.mobileNavLink} ${isActive ? appShellStyles.mobileNavLinkActive : appShellStyles.mobileNavLinkInactive}`
                    }
                  >
                    <CreateIcon />{" "}
                    <span className="ml-2.5">Create Invoice</span>
                  </NavLink>
                  <NavLink
                    onClick={() => setMobileOpen(false)}
                    to="/app/business"
                    className={({ isActive }) =>
                      `${appShellStyles.mobileNavLink} ${isActive ? appShellStyles.mobileNavLinkActive : appShellStyles.mobileNavLinkInactive}`
                    }
                  >
                    <ProfileIcon />{" "}
                    <span className="ml-2.5">Business Profile</span>
                  </NavLink>
                </nav>
              </div>

              <div className={appShellStyles.mobileLogoutSection}>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors duration-200"
                >
                  <LogoutIcon />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* UNIFIED RIGHT BODY MAIN WRAPPER ELEMENT PANEL */}
        <div className="flex-1 min-w-0 flex flex-col min-h-screen bg-slate-50">
          {/* HEADER BAR FOR RESPONSIVE DESKTOP AND TABLET FRAMEWORKS */}
          <header
            className={`${appShellStyles.header} ${scrolled ? appShellStyles.headerScrolled : appShellStyles.headerNotScrolled}`}
          >
            <div className={appShellStyles.headerTopSection}>
              <div className={appShellStyles.headerContent}>
                <button
                  onClick={() => setMobileOpen(true)}
                  className={appShellStyles.mobileMenuButton}
                >
                  <svg
                    className={appShellStyles.mobileMenuIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

                {!isMobile && (
                  <button
                    onClick={toggleSidebar}
                    className={appShellStyles.desktopCollapseButton}
                  >
                    <CollapseIcon collapsed={collapsed} />
                  </button>
                )}

                {/* FIXED: WELCOME SUMMARY INTEGRATION NODES */}
                <div className={appShellStyles.welcomeContainer}>
                  <h2
                    className={`${appShellStyles.welcomeTitle} flex items-center flex-wrap gap-x-1`}
                  >
                    Welcome back,{" "}
                    <span className={appShellStyles.welcomeName}>
                      {firstName()}
                    </span>
                  </h2>
                  <p
                    className={`${appShellStyles.welcomeSubtitle} hidden xs:block`}
                  >
                    Craft Professional Invoices in Seconds.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions & Avatar Panels */}
            <div className={appShellStyles.headerActions}>
              
              <button
                onClick={() => navigate("/app/create-invoice")}
                className={appShellStyles.ctaButton}
              >
                <CreateIcon className="w-4 h-4 shrink-0" />
                <span className="hidden xs:inline">Create Invoice</span>
                <span className="xs:hidden">Create</span>
              </button>

              <div className={appShellStyles.userSectionDesktop}>
                <div className={appShellStyles.userInfo}>
                  
                  <div
                    className={`${appShellStyles.userName} truncate max-w-[100px] sm:max-w-[150px]`}
                  >
                    {displayName}
                  </div>
                  
                  <div
                    className={`${appShellStyles.userEmail} hidden md:block truncate max-w-[150px]`}
                  >
                    {user?.primaryEmailAddress?.emailAddress || ""}
                  </div>
                </div>
                <div className={appShellStyles.userAvatarContainer}>
                  <div className={appShellStyles.userAvatar}>
                    {initials()}
                    <div className={appShellStyles.userAvatarBorder} />
                  </div>
                  <div className={appShellStyles.userStatus} />
                </div>
              </div>
            </div>
          </header>

          {/* MAIN WORKSPACE DISPLAY WRAPPER PANEL OUTLET */}
          <main className={appShellStyles.main}>
            <div className={appShellStyles.mainContainer}>
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppShell;
