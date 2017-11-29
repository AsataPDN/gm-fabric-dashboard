import styled from "styled-components";

const NotificationWrapperStyles = `
> [class^="notifications-"] {
  position: fixed;
  width: $notification-width;
  padding: 0 spacing-scale(0.5) spacing-scale(0.5);
  transition: all 0.2s ease;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  z-index: 9998;
  height: auto;

  &[class*="-t"] {
    top: 0;
    bottom: auto;
  }

  &[class*="-b"] {
    top: auto;
    bottom: 0;
  }

  &[class$="c"] {
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
  }

  &[class$="l"] {
    left: 0;
  }

  &[class$="r"] {
    right: 0;
  }
}`;

export default NotificationWrapperStyles;
