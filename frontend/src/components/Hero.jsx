import React from "react";
import { heroStyles } from "../assets/dummyStyles";
import { SignUpButton, useAuth } from "@clerk/react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  //   const { openSignUp } = useClerk();
  const { isSignedIn } = useAuth();

  const handleSignedInPrimary = () => {
    navigate("/app/dashboard");
  };

  //   const handleSignedOutPrimary = () => {
  //     try {
  //       if (typeof openSignUp === "function") {
  //         openSignUp();
  //       }
  //     } catch (error) {
  //       console.error("Failed to open clerk signup modal:", error);
  //     }
  //   };

  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.bgElement1}></div>
      <div className={heroStyles.bgElement2}></div>
      <div className={heroStyles.bgElement3}></div>

      <div className={heroStyles.gridPattern}></div>
      <div className={heroStyles.container}>
        <div className={heroStyles.grid}>
          <div className={heroStyles.content}>
            <div className={heroStyles.contentInner}>
              <div className={heroStyles.badge}>
                <div className={heroStyles.badgeDot}></div>
                <span className={heroStyles.badgeText}>
                  Next-Gen Billing Engine
                </span>
              </div>

              {/* main heading 2:15 */}
              <h1 className={heroStyles.heading}>
                <span className={heroStyles.headingLine1}>Turn Chaos Into</span>
                <br />
                <span className={heroStyles.headingLine2}>
                  Flawless Invoices
                </span>
                <br />
                <span className={heroStyles.headingLine3}>In One Click</span>
              </h1>
              <p className={heroStyles.description}>
                Stop wrestling with line items.{" "}
                <span className={heroStyles.descriptionHighlight}>
                  Just drop your text or raw notes here
                </span>{" "}
                and let our AI instantly handle math, structure, and extraction
                to ship clean invoices instantly.
              </p>
            </div>

            {/* CTA Btn */}
            <div className={heroStyles.ctaContainer}>
              {isSignedIn ? (
                <button
                  type="button"
                  onClick={handleSignedInPrimary}
                  className={heroStyles.primaryButton}
                >
                  <div className={heroStyles.primaryButtonOverlay}></div>

                  <span className={heroStyles.previewButtonText}>
                    Go to Dashboard
                  </span>
                </button>
              ) : (
                <SignUpButton mode="modal">
                  <button type="button" className={heroStyles.primaryButton}>
                    <div className={heroStyles.primaryButtonOverlay}></div>

                    <span className={heroStyles.previewButtonText}>
                      Claim Your Free Account
                    </span>
                    <svg
                      className={heroStyles.primaryButtonIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </button>
                </SignUpButton>
              )}
              <a href="#features" className={heroStyles.secondaryButton}>
                <span>Explore Features</span>
                <svg
                  className={heroStyles.secondaryButtonIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
            {/* Features Highlights */}
            <div className={heroStyles.featuresGrid}>
              {[
                {
                  icon: "✨",
                  label: "AI Extraction",
                  desc: "Turn messy notes into structured invoices instantly.",
                },
                {
                  icon: "⚡",
                  label: "Instant Generation",
                  desc: "Professional invoices ready in under 10 seconds.",
                },
                {
                  icon: "🔒",
                  label: "Secure & Reliable",
                  desc: "Your invoice data stays private and protected.",
                },
              ].map((feature, index) => (
                <div key={index} className={heroStyles.featureItem}>
                  <div className={heroStyles.featureIcon}>{feature.icon}</div>
                  <div className={heroStyles.featureText}>
                    <div className={heroStyles.featureLabel}>
                      {feature.label}
                    </div>
                    <div className={heroStyles.featureDesc}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Side */}
          <div className={heroStyles.demoColumn}>
            <div className={heroStyles.demoFloating1}></div>
            <div className={heroStyles.demoFloating2}></div>

            <div className={heroStyles.demoContainer}>
              <div className={heroStyles.demoCard}>
                <div className={heroStyles.cardHeader}>
                  <div className="space-y-1">
                    <div className={heroStyles.cardLogoContainer}>
                      <div className={heroStyles.cardLogo}>AI</div>

                      <div>
                        <div className={heroStyles.cardClientName}>
                          JPN Corporation
                        </div>
                        <div className={heroStyles.cardClientGst}>
                          GST: 24AAAPL1234C1ZV
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={heroStyles.cardInvoiceInfo}>
                    <div className={heroStyles.cardInvoiceLabel}> Invoice</div>
                    <div className={heroStyles.cardInvoiceNumber}>
                      #INV-1024
                    </div>

                    <div className={heroStyles.cardStatus}>Paid</div>
                  </div>
                </div>

                <div className={heroStyles.itemsContainer}>
                  {[
                    {
                      description: "Website Design & Development",
                      amount: "₹15,000",
                    },
                    {
                      description: "GST Calculation",
                      amount: "₹0",
                    },
                    {
                      description: "PDF Export & Branding",
                      amount: "₹999",
                    },
                  ].map((item, index) => (
                    <div className={heroStyles.itemRow} key={index}>
                      <div className="flex items-center gap-3">
                        <div className={heroStyles.itemDot}></div>

                        <span className={heroStyles.itemDescription}>
                          {item.description}
                        </span>
                      </div>

                      <span className={heroStyles.itemAmount}>
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
                <div className={heroStyles.calculationContainer}>
                  <div className={heroStyles.calculationRow}>
                    <span className={heroStyles.calculationLabel}>
                      Subtotal
                    </span>
                    <span className={heroStyles.calculationValue}>₹15,999</span>
                  </div>
                  <div className={heroStyles.calculationRow}>
                    <span className={heroStyles.calculationLabel}>
                      GST (18%)
                    </span>
                    <span className={heroStyles.calculationValue}>₹2,880</span>
                  </div>
                  <div className={heroStyles.totalRow}>
                    <span className={heroStyles.totalLabel}>Total Amount</span>
                    <span className={heroStyles.totalValue}>₹18,879</span>
                  </div>
                </div>

                <div className={heroStyles.actionButtons}>
                  <button className={heroStyles.previewButton}>
                    <span className={heroStyles.previewButtonText}>
                      Preview
                    </span>
                  </button>

                  <button className={heroStyles.sendButton}>
                    <span className={heroStyles.sendButtonText}>
                      Send Invoices
                    </span>
                  </button>
                </div>
              </div>

              <div className={heroStyles.aiIndicator}>
  <div className={heroStyles.aiIndicatorContent}>
    <div className={heroStyles.aiIndicatorDot}></div>

    <span className="text-slate-500">Generated by</span>
    <span className={heroStyles.aiIndicatorText}>
      Ledgerly AI • 1.4s
    </span>
  </div>
</div>

              <div className={heroStyles.cornerAccent1}></div>
              <div className={heroStyles.cornerAccent2}></div>
            </div>

            <div className={heroStyles.cardBackground}></div>
          </div>
        </div>
        <div className={heroStyles.scrollIndicator}>
          <div className={heroStyles.scrollContainer}>
            <span className={heroStyles.scrollText}>
              Scroll to explore
            </span>
            <div className={heroStyles.scrollBar}>
              <div className={heroStyles.scrollDot}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
