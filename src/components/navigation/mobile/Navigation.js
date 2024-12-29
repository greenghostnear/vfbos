import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MobileMenuButton } from "./MobileMenuButton";
import { NearSocialLogo } from "../../icons/NearSocialLogo";
import { NotificationWidget } from "../NotificationWidget";
import { SignInButton } from "../SignInButton";
import { StarButton } from "../StarButton";

const StyledNavigation = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
  background-color: ${({ scrolled }) => (scrolled ? 'white' : 'white')};
  transform: ${({ hide }) => (hide ? 'translateY(-100%)' : 'translateY(0)')};
  height: 48px;  // Limit the height of the navbar


  .logo-link {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
  }

  .nav-notification-widget {
    margin: 0;
  }

  .nav-sign-in-btn {
    // Styling for the sign-in button
  }

  .nav-sign-in-btn:hover {
    background: black; /* Change to black on hover */
  }
`;

export function Navigation(props) {
  return (
    <StyledNavigation>
      <MobileMenuButton
        onClick={props.onClickShowMenu}
        currentPage={props.currentPage}
      />
      <Link
        to="/"
        className="logo-link"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <NearSocialLogo />
      </Link>
      {props.signedIn ? (
        <div className="d-flex">
          
          <NotificationWidget
            notificationButtonSrc={props.widgets.notificationButton}
          />
        </div>
      ) : (
        <SignInButton onSignIn={() => props.requestSignIn()} />
      )}
    </StyledNavigation>
  );
}
