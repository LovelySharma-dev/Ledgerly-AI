// src/assets/dummyStyles.js
// ─── COLOR SYSTEM ────────────────────────────────────────────────────────────
// Primary:   Obsidian  #0F172A  (backgrounds, sidebar, dark surfaces)
// Brand:     Violet    #6D28D9  (CTAs, active states, brand accent)
// Brand mid: Iris      #7C3AED  (hover states, gradients end)
// Success:   Emerald   #059669  (paid, positive, money states)
// Warning:   Amber     #D97706  (pending, caution)
// Danger:    Rose      #E11D48  (overdue, error)
// Neutral:   Slate     #64748B  (muted text, borders)
// ─────────────────────────────────────────────────────────────────────────────

export const aiInvoiceModalStyles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4",
  backdrop: "absolute inset-0 bg-slate-900/60 backdrop-blur-sm",
  modal:
    "relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 p-6 z-10",
  title:
    "inline-flex items-center gap-2 py-2 pb-4 text-slate-800 transition-all duration-200 font-medium group",
  description: "text-sm text-slate-500 mt-1",
  closeButton: "text-slate-400 hover:text-slate-600 transition-colors",
  label:
    "block text-xs font-medium text-slate-600 mb-2 tracking-wide uppercase",
  textarea:
    "w-full rounded-xl border text-slate-600 border-slate-200 px-3 py-2.5 text-sm resize-vertical focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 bg-slate-50/50",
  error: "mt-3 text-sm text-rose-600 flex items-center gap-1.5",
  actions: "mt-5 flex justify-end gap-3",
  cancelButton:
    "px-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 transition-colors",
  generateButton:
    "px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors disabled:opacity-50",
};

export const businessProfileStyles = {
  // Layout
  pageContainer: "space-y-8 font-[pacifico]",

  // Header
  headerContainer: "text-center lg:text-left",
  headerTitle: "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-slate-500 max-w-3xl",

  // Cards/Sections
  cardContainer:
    "bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5",
  cardHeaderContainer: "flex items-center gap-3 mb-6",
  cardIconContainer: "p-2.5 rounded-xl",
  cardTitle: "text-xl whitespace-nowrap font-semibold text-slate-900",

  // Grid
  gridCols1: "grid grid-cols-1 gap-6",
  gridCols2: "grid grid-cols-1 md:grid-cols-2 gap-6",
  gridCols2Lg: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8",
  gridColSpan2: "md:col-span-2",

  // Form Elements
  label: "block text-sm font-medium text-slate-700 mb-2",
  input:
    "w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-slate-800 placeholder:text-slate-400",
  textarea:
    "w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-slate-800 placeholder:text-slate-400",

  // Upload Areas
  uploadArea:
    "border-2 border-dashed border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-violet-400 hover:bg-violet-50/30 group",
  uploadIconContainer:
    "w-16 h-16 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-violet-100 group-hover:text-violet-500 transition-all duration-300",
  uploadSmallIconContainer:
    "w-12 h-12 mx-auto rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-violet-100 group-hover:text-violet-500 transition-all duration-300",
  uploadTextTitle: "text-sm font-medium text-slate-800",
  uploadTextSubtitle: "text-xs text-slate-400 mt-1",

  // Image Previews
  imagePreviewContainer: "text-center space-y-4",
  logoPreview:
    "w-40 h-32 mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 ring-1 ring-slate-200",
  stampPreview:
    "w-32 h-24 mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 ring-1 ring-slate-200",
  signaturePreview:
    "w-32 h-20 mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 ring-1 ring-slate-200",

  // Buttons
  buttonGroup: "flex flex-wrap gap-2 justify-center sm:gap-3 md:gap-4",
  changeButton:
    "inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-xl bg-violet-50 text-violet-700 hover:bg-violet-100 transition-all duration-200 cursor-pointer font-medium text-sm sm:text-base",
  removeButton:
    "inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 transition-all duration-200 font-medium text-sm sm:text-base",

  // Tax Section
  taxContainer: "bg-violet-50/50 rounded-2xl p-6 border border-violet-100",
  taxInput:
    "w-32 rounded-xl border border-slate-200 px-4 py-3 bg-white focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 font-medium text-center text-slate-800",
  taxHelpText: "text-xs text-slate-500 mt-3",

  // Action Buttons
  actionContainer:
    "bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5",
  actionInnerContainer:
    "flex flex-col sm:flex-row items-center justify-between gap-4",
  actionButtonGroup:
    "flex flex-wrap items-center gap-2 sm:gap-3 justify-center sm:justify-start",
  saveButton:
    "inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-xl bg-violet-600 text-white font-semibold text-sm sm:text-base hover:bg-violet-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed",
  resetButton:
    "inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 font-medium text-sm sm:text-base",

  // Animation
  hoverScale: "group-hover:scale-105 transition-transform duration-300",
};

export const iconColors = {
  business: "bg-violet-100 text-violet-600",
  branding: "bg-emerald-100 text-emerald-600",
  assets: "bg-slate-100 text-slate-600",
};

export const customStyles = {
  inputPlaceholder: "text-slate-400",
  taxPercentage: "text-2xl font-bold text-slate-700",
};

export const aiReminderModalStyles = {
  overlay: "fixed inset-0 z-50 flex items-center justify-center p-4",
  backdrop: "absolute inset-0 bg-slate-900/60 backdrop-blur-sm",
  modal:
    "relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl ring-1 ring-slate-900/10 p-6 z-10",
  title: "text-lg font-semibold text-slate-900",
  description: "text-sm text-slate-500 mt-1",
  closeButton: "text-slate-400 hover:text-slate-600 transition-colors",
  label: "block text-sm font-medium text-slate-700",
  textarea:
    "mt-1 w-full text-slate-600 rounded-xl border border-slate-200 px-3 py-2.5 text-sm bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200",
  error: "mt-3 text-sm text-rose-600",
  previewHeader: "text-sm font-medium text-slate-700",
  previewHelper: "text-xs text-slate-400",
  previewBox:
    "mt-2 bg-slate-50 rounded-xl p-4 min-h-[120px] text-sm whitespace-pre-wrap text-slate-700 border border-slate-200",
  previewPlaceholder: "text-slate-400",
  previewPlaceholderHighlight: "font-medium text-violet-500",
  actions: "mt-5 flex items-center justify-end gap-3",
  resetButton:
    "px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 transition-colors",
  copyButton: "px-3 py-2 rounded-xl border text-sm transition-all duration-200",
  copyButtonEnabled:
    "bg-white border-slate-200 hover:bg-slate-50 text-slate-700",
  copyButtonDisabled:
    "opacity-50 cursor-not-allowed border-slate-200 text-slate-400",
  generateButton:
    "px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors",
};

export const createInvoiceStyles = {
  // Layout
  pageContainer: "space-y-8 font-[pacifico]",
  mainGrid: "grid lg:grid-cols-3 gap-8",
  leftColumn: "lg:col-span-2 space-y-8",
  rightColumn: "space-y-8",

  // Header
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
  headerTitle: "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-slate-500 max-w-3xl",
  headerButtonContainer: "flex items-center gap-3",

  // Cards/Sections
  cardContainer:
    "bg-white/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5 w-full",
  cardSmallContainer:
    "bg-white/90 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-6 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5 w-full",
  cardHeaderContainer:
    "flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6",
  cardHeaderWithButton:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6",
  cardHeaderLeft: "flex items-center gap-2 sm:gap-3",
  cardIconContainer:
    "p-2.5 rounded-xl w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center",
  cardTitle: "text-xl sm:text-2xl font-semibold text-slate-900",
  cardSubtitle: "text-lg sm:text-xl font-semibold text-slate-900 mb-3 sm:mb-4",

  // Grid
  gridCols1: "grid grid-cols-1 gap-6",
  gridCols2: "grid grid-cols-1 md:grid-cols-2 gap-6",
  gridCols3: "grid grid-cols-1 md:grid-cols-3 gap-6",
  gridCols2Lg: "grid grid-cols-1 lg:grid-cols-2 gap-8",
  gridColSpan2: "md:col-span-2",

  // Form Elements
  label: "block text-sm font-medium text-slate-700 mb-2",
  labelWithMargin: "block text-sm font-medium text-slate-700 mb-3",
  input:
    "w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-slate-800 placeholder:text-slate-400",
  inputMedium:
    "w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 font-medium text-slate-800",
  inputCenter:
    "w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-center font-medium text-slate-800",
  textarea:
    "w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-slate-800 placeholder:text-slate-400",
  inputSmall:
    "w-full rounded-xl border text-slate-500 border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-sm",

  // Buttons
  previewButton:
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 font-medium shadow-sm",
  saveButton:
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed",
  saveProfileButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-50 text-violet-700 hover:bg-violet-100 transition-all duration-200 text-sm font-medium",
  addItemButton:
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-dashed border-slate-200 text-slate-500 hover:border-violet-400 hover:text-violet-600 hover:bg-violet-50/30 transition-all duration-200 font-medium w-full justify-center group",

  // Currency & Status
  currencyContainer: "flex gap-3",
  currencyButton:
    "flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 flex-1",
  currencyButtonActive1:
    "border-emerald-500 bg-emerald-50 text-emerald-700 shadow-sm",
  currencyButtonActive2:
    "border-violet-500 bg-violet-50 text-violet-700 shadow-sm",
  currencyButtonInactive:
    "border-slate-200 bg-white text-slate-600 hover:border-slate-300",
  statusContainer: "flex flex-wrap gap-2",
  statusButton:
    "relative overflow-hidden rounded-full transition-all duration-200 ease-out",
  statusButtonActive:
    "ring-2 ring-offset-2 ring-violet-500 transform scale-105",
  statusButtonInactive: "opacity-80 hover:opacity-100 hover:scale-105",
  statusDropdown:
    "mt-2 sm:hidden w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200",
  currencyBadge: "text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-lg",

  // Items table
  itemsTableHeader:
    "hidden lg:grid lg:grid-cols-12 gap-4 mb-4 px-2 text-sm font-medium text-slate-600 items-center min-w-0",
  itemsTableRow:
    "grid grid-cols-6 sm:grid-cols-12 lg:grid-cols-12 gap-4 items-center group hover:bg-violet-50/30 p-3 rounded-xl transition-all duration-200 min-w-0",
  itemsInput:
    "rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 w-full min-w-0 overflow-hidden truncate text-sm sm:text-base text-slate-800",
  itemsNumberInput:
    "rounded-xl border border-slate-200 px-3 py-3 bg-slate-50/50 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-right w-full min-w-0 overflow-x-auto whitespace-nowrap text-sm sm:text-base text-slate-800",
  itemsTotal:
    "text-center font-medium text-slate-900 flex items-center justify-center min-w-0 max-w-full break-words text-left text-sm sm:text-base",
  itemsRemoveButton:
    "flex items-center justify-center p-2 rounded-lg text-rose-500 hover:bg-rose-50 transition-all duration-200 focus:outline-none",
  itemsFieldLabel:
    "block text-xs font-medium text-slate-500 mb-1 uppercase tracking-wide",
  itemsListWrapper: "space-y-4",
  itemRow: "min-w-0",
  itemColDescription:
    "col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-3 min-w-0",
  itemColQuantity:
    "col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-2 min-w-0",
  itemColUnitPrice:
    "col-span-6 sm:col-span-2 md:col-span-2 lg:col-span-3 min-w-0",
  itemColTotal: "col-span-6 sm:col-span-1 md:col-span-1 lg:col-span-3 min-w-0",
  itemColRemove:
    "col-span-6 sm:col-span-1 md:col-span-1 lg:col-span-1 flex justify-center min-w-0",

  // Upload Areas
  uploadArea:
    "border-2 border-dashed border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-violet-400 hover:bg-violet-50/30 group",
  uploadSmallArea:
    "border-2 border-dashed border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-violet-400 hover:bg-violet-50/30 group",
  imagePreviewContainer: "text-center space-y-4",
  logoPreview:
    "w-32 h-24 lg:w-28 lg:h-20 mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 ring-1 ring-slate-200",
  stampPreview:
    "w-24 h-20 mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 ring-1 ring-slate-200",
  signaturePreview:
    "w-24 h-16 mx-auto rounded-xl overflow-hidden flex items-center justify-center bg-slate-50 ring-1 ring-slate-200",
  buttonGroup: "flex lg:flex-col xl:flex-row gap-2 justify-center",
  changeButton:
    "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-violet-50 text-violet-700 hover:bg-violet-100 transition-all duration-200 cursor-pointer text-sm font-medium",
  removeButton:
    "inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 transition-all duration-200 text-sm font-medium",
  uploadIconContainer:
    "w-12 h-12 mx-auto rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-violet-100 group-hover:text-violet-500 transition-all duration-300",
  uploadSmallIconContainer:
    "w-10 h-10 mx-auto rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-violet-100 group-hover:text-violet-500 transition-all duration-300",
  uploadTextTitle: "text-sm font-medium text-slate-800",
  uploadTextSubtitle: "text-xs text-slate-400 mt-1",

  // Summary & Tax
  summaryRow:
    "flex items-center justify-between py-3 border-b border-slate-100",
  summaryLabel: "text-sm font-medium text-slate-600",
  summaryValue: "font-semibold text-slate-900",
  taxRow: "flex items-center justify-between py-2",
  totalRow: "flex items-center justify-between py-3 border-t border-slate-200",
  totalLabel: "text-lg font-bold text-slate-900",
  totalValue: "text-lg font-bold text-violet-700",

  // Animation
  hoverScale: "group-hover:scale-105 transition-transform duration-300",
  iconHover: "group-hover:scale-110 transition-transform",
};

export const createInvoiceIconColors = {
  invoice: "bg-violet-100 text-violet-600",
  billFrom: "bg-emerald-100 text-emerald-600",
  billTo: "bg-slate-100 text-slate-600",
  items: "bg-amber-100 text-amber-700",
};

export const createInvoiceCustomStyles = {
  inputPlaceholder: "text-slate-400",
  currencySymbol: "text-lg font-semibold",
};

export const appShellStyles = {
  // Layout
  root: "min-h-screen bg-slate-50/80",
  layout: "lg:flex",

  // Desktop Sidebar
  sidebar:
    "hidden lg:block bg-[#0F172A] border-r border-white/5 transition-all duration-500 ease-in-out relative",
  sidebarCollapsed: "w-20",
  sidebarExpanded: "w-72",
  sidebarGradient:
    "absolute inset-0 bg-gradient-to-b from-violet-900/10 to-transparent pointer-events-none",
  sidebarContainer:
    "px-4 py-8 h-full flex flex-col justify-between relative z-10",

  // Logo Area
  logoContainer: "mb-10 flex items-center",
  logoContainerCollapsed: "justify-center",
  logoLink: "inline-flex items-center group transition-all duration-300",
  logoImage: "h-16 w-16 object-contain drop-shadow-sm",
  logoTextContainer: "",
  logoText: "font-bold text-2xl text-white tracking-tight",
  logoUnderline:
    "h-0.5 w-0 group-hover:w-full bg-violet-400 transition-all duration-500 mt-1",
  collapseButton:
    "p-2 ml-5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group",

  // Navigation
  nav: "space-y-1",
  sidebarLink:
    "group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out",
  sidebarLinkCollapsed: "justify-center",
  sidebarLinkActive: "bg-violet-600 text-white shadow-lg shadow-violet-500/20",
  sidebarLinkInactive: "text-slate-400 hover:text-white hover:bg-white/8",
  sidebarIcon: "transition-all duration-300",
  sidebarIconActive: "text-white scale-110",
  sidebarIconInactive:
    "text-slate-500 group-hover:text-white group-hover:scale-105",
  sidebarText: "flex-1 transition-all duration-300",
  sidebarActiveIndicator:
    "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse",

  // User Area
  userSection: "mt-auto",
  userDivider: "border-t border-white/8 pt-6",
  userDividerCollapsed: "px-1",
  userDividerExpanded: "px-2",
  logoutButton:
    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 transition-all duration-300 group",
  logoutIcon: "w-5 h-5 group-hover:scale-110 transition-transform",
  collapseSection: "mt-4 flex justify-center",
  collapseButtonInner:
    "flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-xs text-slate-500 hover:text-slate-300",
  collapseButtonCollapsed: "justify-center w-10",

  // Mobile Sidebar
  mobileOverlay: "lg:hidden fixed inset-0 z-50",
  mobileBackdrop:
    "absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity duration-300",
  mobileSidebar:
    "absolute inset-y-0 left-0 w-72 bg-[#0F172A] border-r border-white/5 p-6 overflow-auto transform transition-transform duration-300",
  mobileHeader: "mb-8 flex items-center justify-between",
  mobileLogoLink: "inline-flex items-center",
  mobileLogoImage: "h-10 w-10 object-contain",
  mobileLogoText: "font-bold text-xl ml-3 text-white",
  mobileCloseButton:
    "p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300",
  mobileCloseIcon: "w-5 h-5 text-slate-400",
  mobileNav: "space-y-1",
  mobileNavLink:
    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
  mobileNavLinkActive:
    "bg-violet-600 text-white shadow-lg shadow-violet-500/20",
  mobileNavLinkInactive: "text-slate-400 hover:text-white hover:bg-white/8",
  mobileLogoutSection: "mt-8 border-t border-white/8 pt-6",
  mobileLogoutButton:
    "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-all duration-300",

  // Header
  header:
    "flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-xl border-b border-slate-200/70 sticky top-0 z-40 transition-all duration-300 min-h-20",
  headerScrolled: "shadow-sm shadow-slate-900/5",
  headerNotScrolled: "shadow-none",
  headerTopSection:
    "flex items-center justify-between sm:justify-start w-full sm:w-auto py-3 sm:py-0",
  headerContent: "flex items-center gap-3 sm:gap-6",
  mobileMenuButton:
    "lg:hidden inline-flex items-center justify-center p-2 sm:p-3 rounded-xl border border-slate-200 bg-white/80 hover:bg-white hover:shadow-md transition-all duration-300",
  mobileMenuIcon: "w-5 h-5 text-slate-700",
  desktopCollapseButton:
    "hidden lg:flex items-center justify-center p-2 rounded-xl border border-slate-200 bg-white/80 hover:bg-white hover:shadow-md transition-all duration-300",
  welcomeContainer: "flex flex-col",
  welcomeTitle:
    "text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight",
  welcomeName: "text-violet-600",
  welcomeSubtitle: "text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1",
  mobileUserAvatar: "lg:hidden flex items-center gap-2",
  mobileAvatar:
    "w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center text-white text-xs font-semibold shadow-lg shadow-violet-500/30",

  // Header Actions
  headerActions:
    "flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pb-3 sm:pb-0 border-t border-slate-100 sm:border-t-0 pt-3 sm:pt-0",
  ctaButton:
    "group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-violet-600 text-white font-semibold shadow-lg shadow-violet-500/20 hover:bg-violet-700 active:scale-[0.98] transition-all duration-300 text-sm sm:text-base flex-1 sm:flex-none justify-center",
  ctaIcon: "w-4 h-4 text-white",
  ctaArrow:
    "w-0 group-hover:w-2 group-hover:ml-1 transition-all duration-300 overflow-hidden hidden sm:block",
  userSectionDesktop:
    "lg:flex md:flex items-center gap-4 pl-4 border-l border-slate-200/70",
  userInfo: "hidden sm:block text-right",
  userName: "text-sm font-medium text-slate-900",
  userEmail: "text-xs text-slate-500",
  userAvatarContainer: "relative",
  userAvatar:
    "w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-violet-500/20 hover:scale-105 transition-all duration-300 cursor-pointer group",
  userAvatarBorder:
    "absolute inset-0 rounded-2xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300",
  userStatus:
    "absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-sm",

  // Main Content
  main: "p-4 sm:p-6 lg:p-8",
  mainContainer: "max-w-7xl mx-auto",
};

export const dashboardStyles = {
  // Layout
  pageContainer: "space-y-8 font-[pacifico]",

  // Header
  headerContainer: "text-center lg:text-left",
  headerTitle: "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-slate-500 max-w-2xl mx-auto lg:mx-0",

  // KPI Grid
  kpiGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",

  // Main Content Grid
  mainGrid:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 gap-8",
  sidebarColumn: "xl:col-span-1 space-y-6",
  contentColumn: "xl:col-span-3",

  // Cards
  cardContainer:
    "bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5",
  cardContainerOverflow:
    "bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5 overflow-hidden",

  // Quick Stats Card
  quickStatsCard: "bg-[#0F172A] rounded-2xl p-6 text-white ring-1 ring-white/5",
  quickStatsTitle: "font-semibold text-lg mb-4 text-white",
  quickStatsRow: "flex justify-between items-center",
  quickStatsLabel: "text-slate-400 text-sm",
  quickStatsValue: "font-semibold text-white",

  // Quick Actions
  quickActionsContainer: "space-y-2",
  quickActionButton:
    "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group",
  quickActionIconContainer:
    "p-2 rounded-lg group-hover:scale-110 transition-transform",
  quickActionText: "font-medium text-sm",

  // Quick Action Color Variants
  quickActionBlue: "bg-violet-50 text-violet-700 hover:bg-violet-100",
  quickActionGray: "bg-slate-50 text-slate-700 hover:bg-slate-100",

  // Table Styles
  tableHeader: "px-6 py-5 border-b border-slate-200/70",
  tableHeaderContent:
    "flex flex-col sm:flex-row sm:items-center sm:justify-between",
  tableTitle: "text-lg font-semibold text-slate-900",
  tableSubtitle: "text-sm text-slate-500 mt-1",
  tableActionButton:
    "mt-3 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors duration-200",

  // Table
  tableContainer: "overflow-x-auto",
  table: "w-full",
  tableHead: "bg-slate-50/80 border-b border-slate-200/70",
  tableHeaderCell:
    "px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider",
  tableHeaderCellRight:
    "px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider",
  tableBody: "divide-y divide-slate-100",
  tableRow:
    "hover:bg-violet-50/20 transition-colors duration-150 group cursor-pointer",
  tableCell: "px-6 py-4",

  // Client Avatar
  clientAvatar:
    "w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 font-medium group-hover:scale-110 transition-transform duration-200",
  clientInfo:
    "font-medium text-slate-900 group-hover:text-violet-600 transition-colors",
  clientSubInfo: "text-sm text-slate-500",

  // Amount Cell
  amountCell: "font-medium text-slate-900",

  // Date Cell
  dateCell: "text-sm text-slate-700",

  // Action Button
  actionButton:
    "inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 group/btn",

  // Empty State
  emptyState: "px-6 py-12 text-center",
  emptyStateIcon: "w-12 h-12 mx-auto text-slate-300",
  emptyStateText: "text-slate-500 space-y-2",
  emptyStateMessage: "font-medium",
  emptyStateAction: "text-violet-600 hover:text-violet-700 font-medium",

  // Color variants for quick action icons
  quickActionIconBlue: "bg-violet-100",
  quickActionIconGray: "bg-slate-100",
};

export const invoicesStyles = {
  // Layout
  pageContainer: "space-y-8 font-[pacifico]",

  // Header
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
  headerTitle: "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-slate-500 max-w-3xl",
  headerActions: "flex items-center gap-3",
  aiButton:
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 font-medium shadow-sm group",
  createButton:
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-violet-500/20",

  // Stats Overview
  statsGrid: "grid grid-cols-2 md:grid-cols-4 gap-6",
  statCard:
    "bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5",
  statValue: "text-2xl font-bold text-slate-900",
  statLabel: "text-sm text-slate-500 mt-1",

  // Filters Section
  filtersCard:
    "bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5",
  filtersHeader:
    "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6",
  filtersHeaderLeft: "flex items-center gap-3",
  filtersIconContainer: "p-2.5 rounded-xl bg-violet-100 text-violet-600",
  filtersTitle: "text-xl font-semibold text-slate-900",
  filtersCount: "text-sm text-slate-500",
  filtersCountNumber: "font-bold text-slate-900",

  // Filters Grid
  filtersGrid: "grid grid-cols-1 lg:grid-cols-5 gap-4",
  searchContainer: "lg:col-span-2",
  filterLabel: "block text-sm font-medium text-slate-700 mb-2",
  searchInputContainer: "relative",
  searchIcon:
    "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
  searchInput:
    "w-full rounded-xl border border-slate-200 pl-10 pr-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-slate-800",
  selectInput:
    "w-full rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 text-slate-800",

  // Date Range
  dateRangeContainer: "lg:col-span-2",
  dateRangeFlex: "flex flex-col sm:flex-row sm:items-center gap-3",
  dateInput:
    "w-full sm:flex-1 min-w-0 rounded-xl border border-slate-200 px-4 py-3 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200",
  dateSeparator: "flex items-center justify-center",
  dateSeparatorText: "text-slate-400 text-sm",

  // Filters Footer
  filtersFooter:
    "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 pt-6 border-t border-slate-200/70",
  perPageContainer: "flex items-center gap-3",
  perPageLabel: "text-sm font-medium text-slate-700",
  perPageSelect:
    "rounded-xl border border-slate-200 px-4 py-2 bg-slate-50/50 focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200",
  resetButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium",

  // Table Section
  tableCard:
    "bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5 overflow-hidden",
  tableHeader: "px-6 py-5 border-b border-slate-200/70",
  tableHeaderContent: "flex items-center justify-between",
  tableTitle: "text-lg font-semibold text-slate-900",
  tableSubtitle: "text-sm text-slate-500 mt-1",
  tableSubtitleBold: "font-medium text-slate-900",

  // Table
  tableContainer: "overflow-x-auto",
  table: "w-full",
  tableHead: "bg-slate-50/80 border-b border-slate-200/70",
  tableHeaderCell:
    "cursor-pointer px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider hover:bg-slate-100/50 transition-colors duration-150",
  tableHeaderCellRight:
    "px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider",
  tableBody: "divide-y divide-slate-100",
  tableRow: "hover:bg-violet-50/20 transition-colors duration-150 group",

  // Client Cell
  clientCell: "px-6 py-4",
  clientContainer: "flex items-center gap-4",
  clientAvatar:
    "w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600 font-medium group-hover:scale-110 transition-transform duration-200",
  clientInfo:
    "font-medium text-slate-900 group-hover:text-violet-600 transition-colors",
  clientId: "text-sm text-slate-500 mt-1",
  clientEmail: "text-xs text-slate-400 mt-1 hidden md:block",

  // Amount Cell
  amountCell: "px-6 py-4 font-medium text-slate-900",

  // Status Cell
  statusCell: "px-6 py-4",

  // Date Cell
  dateCell: "px-6 py-4 text-sm text-slate-700",

  // Actions Cell
  actionsCell: "px-6 py-4 text-right",
  actionsContainer: "flex items-center justify-end gap-2",
  viewButton:
    "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-200 group/btn",
  sendButton:
    "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-violet-600 hover:text-violet-700 hover:bg-violet-50 rounded-lg transition-all duration-200 group/btn",
  buttonIcon: "w-4 h-4 group-hover/btn:scale-110 transition-transform",

  // Empty State
  emptyState: "px-6 py-12 text-center",
  emptyStateIconContainer:
    "w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center",
  emptyStateIcon: "w-8 h-8 text-slate-400",
  emptyStateText: "text-slate-500 space-y-3",
  emptyStateTitle: "font-medium text-lg",
  emptyStateMessage: "text-sm max-w-md mx-auto",
  emptyStateAction: "text-violet-600 hover:text-violet-700 font-medium",

  // Pagination
  paginationContainer: "px-6 py-4 bg-slate-50/80 border-t border-slate-200/70",

  // Pagination Component
  pagination:
    "flex items-center justify-between mt-8 pt-6 border-t border-slate-200/70",
  paginationText: "text-sm text-slate-500",
  paginationControls: "flex items-center gap-2",
  paginationButton:
    "flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200",
  paginationNumbers: "flex items-center gap-1",
  paginationNumber:
    "w-10 h-10 rounded-xl text-sm font-medium transition-all duration-200",
  paginationNumberActive:
    "bg-violet-600 text-white shadow-lg shadow-violet-500/20",
  paginationNumberInactive: "text-slate-600 hover:bg-slate-100",
};

export const featuresStyles = {
  section: "relative py-24 bg-slate-50/80 overflow-hidden",
  backgroundBlob1:
    "absolute top-0 left-0 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob",
  backgroundBlob2:
    "absolute top-0 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000",
  backgroundBlob3:
    "absolute -bottom-8 left-20 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000",
  container: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  headerContainer: "text-center max-w-3xl mx-auto mb-20",
  badge:
    "inline-flex items-center px-4 py-2 rounded-full bg-violet-50 border border-violet-100 mb-6",
  badgeDot: "w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse",
  badgeText: "text-sm font-medium text-violet-700",
  title:
    "text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-slate-900 tracking-tight",
  titleGradient: "text-violet-600",
  subtitle:
    "mt-6 text-md md:text-xl lg:text-xl xl:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto",
  featuresGrid:
    "mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 relative",
  featureCard:
    "group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/70 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden ring-1 ring-slate-900/5",
  featureCardGradient:
    "absolute inset-0 bg-violet-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  featureCardBorder:
    "absolute inset-0 rounded-2xl ring-1 ring-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  featureCardContent: "relative flex items-start gap-6",
  featureCardIconContainer:
    "flex-shrink-0 w-10 h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 flex items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-all duration-300",
  featureCardTextContainer: "flex-1",
  featureCardTitle:
    "text-sm whitespace-nowrap md:text-lg lg:text-sm xl:text-xl font-bold text-slate-900 group-hover:text-violet-700 transition-colors duration-300",
  featureCardDescription:
    "mt-3 text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300",
  featureCardCta:
    "mt-4 flex items-center text-violet-500 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300",
  featureCardCtaText: "text-sm font-medium",
  featureCardCtaIcon:
    "w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300",
  bottomCtaContainer: "mt-16 text-center",
  bottomCtaButton:
    "group inline-flex items-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-2xl shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/25 active:scale-[0.98] transition-all duration-300",
  bottomCtaButtonText: "Explore all features",
  bottomCtaButtonIcon:
    "w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300",
};

export const heroStyles = {
  section:
    "relative min-h-screen pb-16 flex items-center justify-center overflow-hidden bg-white",
  bgElement1:
    "absolute top-1/4 -left-10 w-72 h-72 rounded-full blur-3xl opacity-40 bg-violet-200 animate-float-slow",
  bgElement2:
    "absolute bottom-1/4 -right-10 w-96 h-96 rounded-full blur-3xl opacity-30 bg-emerald-200 animate-float-medium",
  bgElement3:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 bg-slate-200 animate-pulse-slow",
  gridPattern:
    "absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]",
  container: "relative max-w-7xl mx-auto px-6 py-24 lg:py-32",
  grid: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
  content: "space-y-8 lg:space-y-10",
  contentInner: "space-y-6",
  badge:
    "inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-violet-50 border border-violet-100",
  badgeDot: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
  badgeText: "text-sm font-medium text-violet-700",
  heading:
    "text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight",
  headingLine1: "text-slate-900",
  headingLine2: "text-violet-600",
  headingLine3: "text-slate-500",
  description: "text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl",
  descriptionHighlight: "font-semibold text-slate-700",
  ctaContainer: "flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6",
  primaryButton:
    "group relative inline-flex items-center justify-center gap-3 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl bg-violet-600 text-white font-semibold shadow-xl shadow-violet-500/25 hover:bg-violet-700 hover:shadow-2xl hover:shadow-violet-500/30 active:scale-[0.98] transition-all duration-300 overflow-hidden",
  primaryButtonOverlay:
    "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  primaryButtonText: "relative",
  primaryButtonIcon:
    "w-5 h-5 relative group-hover:translate-x-1 transition-transform duration-300",
  secondaryButton:
    "group inline-flex items-center justify-center gap-2 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold shadow-sm hover:shadow-md hover:border-slate-300 active:scale-[0.98] transition-all duration-300",
  secondaryButtonIcon:
    "w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 pt-6 lg:pt-8",
  featureItem: "flex items-center gap-3 group",
  featureIcon:
    "w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 group-hover:border-violet-200 group-hover:bg-violet-50 transition-all duration-300",
  featureText: "",
  featureLabel: "font-semibold text-slate-900",
  featureDesc: "text-sm text-slate-500",
  demoColumn: "relative w-full",
  demoFloating1:
    "hidden sm:block absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-violet-100 blur-xl opacity-60 animate-float-slow pointer-events-none",
  demoFloating2:
    "hidden sm:block absolute -bottom-8 -right-8 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl bg-emerald-100 blur-xl opacity-40 animate-float-medium pointer-events-none",
  demoContainer: "relative group w-full",
  demoCard:
    "bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/70 p-4 sm:p-6 md:p-8 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl w-full ring-1 ring-slate-900/5",
  cardHeader:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 border-b border-slate-100 gap-3",
  cardLogoContainer: "flex items-center gap-2 sm:gap-3",
  cardLogo:
    "w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg shadow-violet-500/20",
  cardClient: "flex flex-col",
  cardClientName: "font-bold text-slate-900 text-base sm:text-lg",
  cardClientGst: "text-xs sm:text-sm text-slate-500",
  cardInvoiceInfo: "text-right mt-3 sm:mt-0",
  cardInvoiceLabel:
    "text-xs font-semibold text-slate-500 uppercase tracking-wider",
  cardInvoiceNumber: "font-bold text-slate-900 text-base sm:text-lg",
  cardStatus:
    "text-xs sm:text-sm text-emerald-700 font-medium bg-emerald-50 px-2 py-1 rounded-full mt-1",
  itemsContainer: "py-6 space-y-4",
  itemRow:
    "flex justify-between items-center group/item hover:bg-slate-50/80 p-2 sm:p-3 rounded-lg transition-colors duration-200",
  itemDot:
    "w-2 h-2 sm:w-2 sm:h-2 rounded-full bg-violet-500 group-hover/item:scale-150 transition-transform duration-300",
  itemDescription: "text-slate-700 font-medium text-sm sm:text-base",
  itemAmount: "font-semibold text-slate-900 text-sm sm:text-base",
  calculationContainer: "space-y-3 pt-4 border-t border-slate-100",
  calculationRow: "flex justify-between text-sm sm:text-base",
  calculationLabel: "text-slate-500 text-sm sm:text-base",
  calculationValue: "font-medium text-slate-900 text-sm sm:text-base",
  totalRow:
    "flex justify-between text-lg sm:text-xl font-bold pt-3 border-t border-slate-200",
  totalLabel: "text-slate-900",
  totalValue: "text-violet-600 text-lg sm:text-xl font-bold",
  actionButtons: "flex flex-col sm:flex-row gap-3 pt-6",
  previewButton:
    "flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 group/btn text-sm sm:text-base",
  previewButtonText:
    "group-hover/btn:translate-x-1 transition-transform duration-200 inline-block",
  sendButton:
    "flex-1 px-4 py-3 rounded-xl bg-violet-600 text-white font-medium shadow-lg shadow-violet-500/20 hover:bg-violet-700 active:scale-[0.98] transition-all duration-200 group/btn text-sm sm:text-base",
  sendButtonText:
    "group-hover/btn:translate-x-1 transition-transform duration-200 inline-block",
  aiIndicator:
    "absolute -bottom-6 left-1/2 -translate-x-1/2 xl:translate-y-8 lg:translate-y-8 md:translate-y-3 translate-y-13 bg-white/95 backdrop-blur-xl rounded-2xl px-4 py-2 sm:px-4 sm:py-3 shadow-lg shadow-slate-900/10 border border-slate-200/70 text-sm sm:text-base ring-1 ring-slate-900/5",
  aiIndicatorContent:
    "flex items-center gap-2 text-sm sm:text-base text-slate-600",
  aiIndicatorDot: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse",
  aiIndicatorText: "font-medium text-slate-900 text-sm sm:text-base",
  cornerAccent1:
    "hidden sm:block absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-violet-500 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  cornerAccent2:
    "hidden sm:block absolute -bottom-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-violet-500 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  cardBackground:
    "absolute inset-0 -z-10 bg-violet-50/20 rounded-2xl sm:rounded-3xl blur-xl transform scale-100 sm:scale-105",
  scrollIndicator:
    "absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 translate-y-18 sm:translate-y-20",
  scrollContainer: "flex flex-col items-center pt-10 gap-2 text-slate-400",
  scrollText: "text-sm font-medium",
  scrollBar:
    "w-5 h-8 sm:w-6 sm:h-10 border-2 border-slate-300 rounded-full flex justify-center",
  scrollDot: "w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce",
};

export const invoicePreviewStyles = {
  pageContainer: "min-h-screen p-6 bg-slate-50/80",
  container: "max-w-6xl mx-auto",
  noPrint: "no-print",
  headerContainer:
    "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6",
  headerTitle: "text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight",
  headerSubtitle: "mt-2 text-lg text-slate-500",
  headerInvoiceNumber: "font-semibold text-violet-600",
  headerActions: "flex flex-wrap items-center gap-3",
  sendReminderButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 font-medium",
  editInvoiceButton:
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 font-medium",
  printButton:
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-violet-500/20",
  printArea: "print-preview-container",
  printHeader: "print-preview-header",
  companyInfo: "print-preview-company-info",
  logo: "print-preview-logo",
  invoiceFromLabel:
    "text-xs font-medium text-slate-500 uppercase tracking-wider mb-1",
  companyName: "text-xl font-bold text-slate-900 mb-2",
  companyAddress: "text-sm text-slate-500 print-preview-address mb-1",
  companyContact: "flex flex-wrap gap-4 text-sm text-slate-500",
  invoiceInfo: "print-preview-invoice-info",
  invoiceTitle: "text-2xl font-bold text-slate-900 mb-2",
  invoiceNumber: "text-lg text-slate-500 mb-4",
  invoiceDetails: "space-y-2 text-sm",
  invoiceDetailRow: "flex justify-between gap-6",
  invoiceDetailLabel: "text-slate-500 font-medium",
  invoiceDetailValue: "font-semibold text-slate-900",
  statusPaid: "text-emerald-600",
  statusUnpaid: "text-amber-600",
  statusOverdue: "text-rose-600",
  statusDraft: "text-slate-500",
  section: "print-preview-section",
  flexContainer: "print-preview-flex",
  billToLabel:
    "text-xs font-medium text-slate-500 uppercase tracking-wider mb-2",
  clientName: "font-semibold text-slate-900 text-lg",
  clientDetails: "space-y-1",
  clientText: "text-sm text-slate-500",
  paymentDetailsLabel:
    "text-xs font-medium text-slate-500 uppercase tracking-wider mb-2",
  paymentDetails: "space-y-2 text-sm",
  paymentDetailRow: "flex justify-between",
  paymentDetailLabel: "text-slate-500",
  paymentDetailValue: "font-medium text-slate-900",
  table: "print-preview-table",
  tableHeader: "text-xs font-medium text-slate-500 uppercase tracking-wider",
  tableCell: "font-medium",
  tableCellRight: "text-right",
  tableCellBold: "font-semibold",
  notesLabel: "text-sm font-medium text-slate-700 mb-2",
  notesContent:
    "text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200",
  signatureLabel: "text-sm font-medium text-slate-700 mb-3",
  signatureContainer: "text-center",
  signatureImage: "print-preview-signature mx-auto",
  signatureName: "font-semibold border-t border-slate-200 pt-1",
  signatureTitle: "text-xs text-slate-400 mt-1",
  stampLabel: "text-sm font-medium text-slate-700 mb-3",
  stampContainer: "text-center",
  stampImage: "print-preview-stamp mx-auto",
  placeholderContainer:
    "h-16 flex items-center justify-center text-sm text-slate-400 border border-dashed border-slate-200 rounded-xl",
  totalsContainer: "print-preview-totals",
  totalsRow: "flex justify-between",
  totalsLabel: "text-sm font-medium text-slate-600",
  totalsValue: "text-sm font-medium text-slate-900",
  totalDivider: "border-t border-slate-200 my-2 pt-2",
  totalAmountLabel: "text-lg font-bold text-slate-900",
  totalAmountValue: "text-lg font-bold text-violet-600",
  footer: "print-preview-section border-t border-slate-200 pt-4",
  footerText: "text-center text-sm text-slate-500",
  footerSubText: "text-center text-xs text-slate-400 mt-2",
  emptyStateContainer: "max-w-4xl mx-auto",
  emptyStateCard:
    "bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5 text-center",
  emptyStateIconContainer:
    "w-16 h-16 mx-auto bg-rose-50 rounded-full flex items-center justify-center text-rose-500 mb-4",
  emptyStateIcon: "w-8 h-8",
  emptyStateTitle: "text-xl font-semibold text-slate-900",
  emptyStateMessage: "text-slate-500 mt-2 max-w-md mx-auto",
  emptyStateButton:
    "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-700 transition-all duration-200 shadow-lg shadow-violet-500/20",
};

export const pricingStyles = {
  section: "relative py-24 bg-white overflow-hidden",
  bgElement1:
    "absolute top-0 left-0 w-72 h-72 bg-violet-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob",
  bgElement2:
    "absolute top-0 right-0 w-72 h-72 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000",
  bgElement3:
    "absolute -bottom-8 left-20 w-72 h-72 bg-emerald-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000",
  container: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  headerContainer: "text-center max-w-3xl mx-auto mb-16",
  badge:
    "inline-flex items-center px-4 py-2 rounded-full bg-violet-50 border border-violet-100 mb-6",
  badgeDot: "w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse",
  badgeText: "text-sm font-medium text-violet-700",
  title:
    "text-2xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-slate-900 tracking-tight mb-6",
  titleGradient: "text-violet-600",
  description:
    "text-md md:text-xl lg:text-xl xl:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto mb-8",
  billingToggle:
    "inline-flex items-center bg-slate-100 rounded-2xl p-1.5 border border-slate-200",
  billingButton:
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
  billingButtonActive:
    "bg-white text-violet-700 shadow-sm ring-1 ring-slate-200",
  billingButtonInactive: "text-slate-500 hover:text-slate-700",
  billingBadge:
    "ml-2 text-sm line-clamp-2 md:line-clamp-0 lg:line-clamp-0 xl:line-clamp-0 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full",
  grid: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 lg:gap-6 relative",
  additionalInfo: "mt-16 text-center",
  featuresCard:
    "bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5 max-w-2xl mx-auto",
  featuresTitle: "text-2xl font-bold text-slate-900 mb-4",
  featuresGrid: "grid sm:grid-cols-2 gap-4 text-slate-600",
  featureItem: "flex items-center gap-3",
  featureDot: "w-2 h-2 rounded-full bg-violet-500",
  faqCta: "mt-12 text-center",
  faqText: "text-slate-500 mb-6",
  contactLink:
    "text-violet-600 font-semibold hover:text-violet-700 transition-colors duration-300",
};

export const pricingCardStyles = {
  card: "group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border transition-all duration-500 ease-out hover:-translate-y-2 overflow-hidden",
  cardPopular:
    "border-violet-300 border-2 shadow-2xl shadow-violet-500/10 scale-105 overflow-visible z-10",
  cardRegular:
    "border-slate-200/70 border shadow-sm hover:shadow-xl hover:shadow-slate-900/5 overflow-hidden ring-1 ring-slate-900/5",
  popularBadge: "absolute -top-4 left-1/2 -translate-x-1/2 z-40",
  popularBadgeContent:
    "bg-violet-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg shadow-violet-500/30",
  gradientOverlay:
    "absolute inset-0 bg-violet-50/30 opacity-60 z-0 pointer-events-none rounded-3xl",
  animatedBorder:
    "absolute inset-0 rounded-3xl ring-1 ring-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10",
  content: "relative z-20",
  header: "text-center mb-8",
  title: "text-2xl font-bold",
  titlePopular: "text-slate-900",
  titleRegular: "text-slate-800",
  description: "text-slate-500 mt-2",
  priceContainer: "text-center mb-8",
  priceWrapper: "flex items-baseline justify-center gap-1",
  price: "text-4xl lg:text-5xl font-bold",
  pricePopular: "text-violet-600",
  priceRegular: "text-slate-900",
  period: "text-slate-400 text-lg",
  annualBadge:
    "text-sm text-emerald-700 font-medium bg-emerald-50 px-3 py-1 rounded-full mt-2 inline-block border border-emerald-100",
  featuresList: "space-y-4 mb-8",
  featureItem: "flex items-center gap-3 text-slate-600",
  featureIcon:
    "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
  featureIconPopular: "bg-violet-100 text-violet-600",
  featureIconRegular: "bg-slate-100 text-slate-500",
  featureText: "text-sm lg:text-base",
  ctaButton:
    "w-full py-4 px-6 rounded-3xl font-semibold transition-all cursor-pointer duration-300 group/btn",
  ctaButtonPopular:
    "bg-violet-600 text-white shadow-lg shadow-violet-500/20 hover:bg-violet-700 hover:shadow-xl hover:shadow-violet-500/25 active:scale-[0.98]",
  ctaButtonRegular:
    "bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50",
  ctaButtonText: "inline-block transition-transform duration-300",
  ctaButtonTextPopular: "group-hover/btn:translate-x-1",
  ctaButtonTextRegular: "group-hover/btn:translate-y-0.5",
  cornerAccent1:
    "absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-violet-500 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30",
  cornerAccent2:
    "absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-violet-500 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30",
};

export const authStyles = {
  pageContainer: "min-h-screen bg-slate-50/80 text-slate-800 antialiased",
  authContainer: "flex items-center justify-center py-24 px-6",
  authCard:
    "w-full max-w-md bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/70 p-8 ring-1 ring-slate-900/5",
  authTitle: "text-2xl font-semibold mb-1 text-slate-900",
  authSubtitle: "text-sm text-slate-500 mb-6",
  errorContainer:
    "mb-4 text-sm text-rose-700 bg-rose-50 border border-rose-100 p-3 rounded-xl",
  form: "space-y-4",
  formField: "block text-sm font-medium text-slate-700 mb-2",
  input:
    "w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 bg-slate-50/50 text-slate-800",
  passwordContainer: "relative",
  passwordInput:
    "w-full rounded-xl border border-slate-200 px-3 py-2.5 pr-10 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 bg-slate-50/50 text-slate-800",
  passwordToggle:
    "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
  submitButton:
    "w-full inline-flex justify-center items-center px-4 py-2.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-violet-500/20",
  submitButtonDisabled: "disabled:opacity-50 disabled:cursor-not-allowed",
  footerContainer: "mt-6 text-center text-sm text-slate-500",
  footerLink: "text-violet-600 hover:text-violet-700 font-medium",
  eyeIcon: "w-5 h-5",
  eyeOffIcon: "w-5 h-5",
};

export const navbarStyles = {
  header:
    "fixed w-full z-30 bg-white/90 backdrop-blur-sm border-b border-slate-200/70",
  container: "max-w-7xl mx-auto px-6",
  nav: "flex items-center justify-between h-16",
  logoSection: "flex items-center gap-4",
  logoLink: "inline-flex items-center",
  logoImage: "h-12 w-12 object-contain",
  logoText: "font-semibold text-lg tracking-tight text-slate-900",
  desktopNav: "hidden md:flex items-center space-x-6 ml-6",
  navLink: "text-sm hover:text-violet-600 transition-colors duration-200",
  navLinkInactive:
    "text-slate-600 hover:text-violet-600 transition-colors duration-200",
  authSection: "hidden md:flex items-center gap-4",
  signInButton:
    "text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 px-4 py-2 rounded-xl hover:bg-slate-50",
  signUpButton:
    "group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-violet-600 text-white font-semibold shadow-lg shadow-violet-500/20 hover:bg-violet-700 active:scale-[0.98] transition-all duration-300 overflow-hidden",
  signUpOverlay:
    "absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  signUpText: "relative z-10 flex items-center gap-2",
  signUpIcon:
    "w-4 h-4 relative group-hover:translate-x-1 transition-transform duration-300",
  mobileMenuButton:
    "md:hidden p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300",
  mobileMenuIcon: "relative w-6 h-6",
  mobileMenuLine1:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-slate-700 rounded-full transition-all duration-300",
  mobileMenuLine1Open: "rotate-45 translate-y-0",
  mobileMenuLine1Closed: "-translate-y-1",
  mobileMenuLine2:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-slate-700 rounded-full transition-all duration-300",
  mobileMenuLine2Open: "opacity-0",
  mobileMenuLine2Closed: "opacity-100",
  mobileMenuLine3:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-slate-700 rounded-full transition-all duration-300",
  mobileMenuLine3Open: "-rotate-45 translate-y-0",
  mobileMenuLine3Closed: "translate-y-1",
  mobileMenu:
    "md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-sm",
  mobileMenuContainer: "px-6 py-4 space-y-3",
  mobileNavLink: "block text-slate-700",
  mobileAuthSection: "pt-2",
  mobileSignIn: "block text-slate-700 py-2",
  mobileSignUp:
    "block mt-2 px-4 py-2.5 rounded-xl bg-violet-600 text-white text-center font-medium shadow-lg shadow-violet-500/20",
};

export const kpiCardStyles = {
  cardContainer:
    "group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/70 shadow-sm ring-1 ring-slate-900/5 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-500 ease-out hover:scale-[1.02] hover:border-slate-300/60 overflow-hidden",
  animatedBackground:
    "absolute inset-0 bg-violet-50/0 group-hover:bg-violet-50/30 transition-all duration-500 ease-out",
  cornerAccent:
    "absolute top-0 right-0 w-16 h-16 bg-violet-500/3 rounded-bl-2xl",
  content: "relative z-10",
  headerContainer: "flex items-center justify-between",
  mainContent: "flex-1 min-w-0",
  iconTrendContainer: "flex items-center gap-3 mb-3",
  iconContainer:
    "p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300",
  icon: "w-5 h-5 text-white",
  trendBadge:
    "inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium",
  trendBadgePositive: "text-emerald-700 bg-emerald-50 border-emerald-200",
  trendBadgeNegative: "text-rose-700 bg-rose-50 border-rose-200",
  trendBadgeNeutral: "text-slate-600 bg-slate-50 border-slate-200",
  trendIcon: "w-3 h-3",
  trendIconNegative: "rotate-180",
  textContent: "space-y-2",
  title: "text-sm font-medium text-slate-500 tracking-wide uppercase",
  value: "text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight",
  hint: "text-xs text-slate-400 font-medium flex items-center gap-1",
  hintIcon: "w-3 h-3",
  progressContainer: "mt-4 space-y-2",
  progressLabels: "flex justify-between text-xs text-slate-400",
  progressBar: "w-full bg-slate-100 rounded-full h-1.5 overflow-hidden",
  progressFill: "h-1.5 rounded-full transition-all duration-1000 ease-out",
  iconColors: {
    default: "from-violet-500 to-violet-700",
    revenue: "from-emerald-500 to-emerald-700",
    growth: "from-violet-500 to-violet-600",
    document: "from-slate-600 to-slate-800",
    clock: "from-amber-500 to-amber-600",
  },
  progressWidths: {
    revenue: "75%",
    growth: "85%",
    default: "65%",
  },
};

export const loginStyles = {
  root: "min-h-screen bg-slate-50/80 text-slate-800 antialiased",
  container: "flex items-center justify-center py-24 px-6",
  formContainer:
    "w-full max-w-md bg-white rounded-2xl shadow-lg shadow-slate-900/5 border border-slate-200/70 p-8 ring-1 ring-slate-900/5",
  title: "text-2xl font-semibold mb-1 text-slate-900",
  subtitle: "text-sm text-slate-500 mb-6",
  error:
    "mb-4 text-sm text-rose-700 bg-rose-50 border border-rose-100 p-3 rounded-xl",
  form: "space-y-4",
  formGroup: "",
  label: "block text-sm font-medium text-slate-700 mb-2",
  input:
    "w-full rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 bg-slate-50/50 text-slate-800",
  passwordContainer: "relative",
  passwordInput:
    "w-full rounded-xl border border-slate-200 px-3 py-2.5 pr-10 outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 transition-all duration-200 bg-slate-50/50 text-slate-800",
  passwordToggle:
    "absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-slate-600 focus:outline-none transition-colors",
  passwordIcon: "w-5 h-5",
  formOptions: "flex items-center justify-between text-sm",
  rememberContainer: "inline-flex items-center gap-2",
  rememberCheckbox: "rounded border-slate-200 accent-violet-600",
  rememberText: "text-slate-600",
  forgotPassword: "text-violet-600 hover:text-violet-700 font-medium",
  submitButton:
    "w-full inline-flex justify-center items-center px-4 py-2.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-violet-500/20",
  signupContainer: "mt-6 text-center text-sm text-slate-500",
  signupLink: "text-violet-600 hover:text-violet-700 font-medium",
};

export const footerStyles = {
  footer: "mt-24 border-t border-slate-100 bg-white",
  container:
    "max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-0",
  copyright:
    "text-xs sm:text-sm md:text-sm lg:text-base text-slate-500 text-center md:text-left",
  links:
    "flex flex-col md:flex-row items-center gap-2 md:gap-4 lg:gap-6 mt-2 md:mt-0",
  link: "text-sm md:text-sm lg:text-base text-slate-500 hover:text-violet-600 transition-colors duration-200",
};
