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
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
