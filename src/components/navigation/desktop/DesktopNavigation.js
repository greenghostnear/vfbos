import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logotype } from "../Logotype";
import { NavigationButton } from "../NavigationButton";
import { ArrowUpRight } from "../../icons/ArrowUpRight";
import { SignInButton } from "../SignInButton";
import { UserDropdown } from "./UserDropdown";
import { NotificationWidget } from "../NotificationWidget";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #161618;
  z-index: 1000;
  padding: 4px 0;
  border-bottom: 1px solid #161618;
  transition: transform 0.3s ease;
  height: 55px;  // Set the height of the navbar

  &.hidden {
    transform: translateY(-100%);
  }

  .container {
    display: flex;
    align-items: center;
    height: 100%; // Ensure the content inside the navbar respects the height

    .navigation-section {
      margin-left: 50px;
      display: flex;

      > div {
        > a {
          margin-right: 20px;
        }
      }
    }

    .user-section {
      margin-left: auto;
      display: flex;
      align-items: center;

      .nav-create-btn {
        margin-left: 10px;
      }

      .nav-sign-in-btn {
        margin-left: 10px;
      }
    }

    .arrow-up-right {
      margin-left: 4px;
    }
  }
`;

export function DesktopNavigation(props) {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide the navbar when scrolling down and scrolled past 100px
        setIsHidden(true);
      } else {
        // Show the navbar when scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <StyledNavigation className={isHidden ? "hidden" : ""}>
      <div className="container">
        <Link
          to="/"
          className="logo-link"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Logotype />
        </Link>
        <div className="navigation-section">
          <NavigationButton route="/">Home</NavigationButton>
          <NavigationButton route="/vfdao.near/widget/App.Index?page=contract&accountId=vflabs.mintbase1.near">VF Labs</NavigationButton>
 <NavigationButton route="/vfdao.near/widget/Charities.Group">Charities</NavigationButton>
             <NavigationButton route="/vfdao.near/widget/Creatives.Group">Creative's Corner</NavigationButton>
 <NavigationButton href={"https://wallet.bitte.ai"}>
            My Bitte Wallet
            <ArrowUpRight />
          </NavigationButton>

        </div>
        <div className="user-section">
         
          {!props.signedIn && (
            <SignInButton onSignIn={() => props.requestSignIn()} />
          )}
          {props.signedIn && (
            <>
              <NotificationWidget
                notificationButtonSrc={props.widgets.notificationButton}
              />
              <UserDropdown {...props} />
            </>
          )}
        </div>
      </div>
    </StyledNavigation>
  );
}
