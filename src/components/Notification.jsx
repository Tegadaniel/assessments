import React from "react";
import { LazyMotion, domAnimation, m as motionLite } from "framer-motion";
import bellImg from "./bell.svg";
import { ContentWrapper, bellIconVariants, countInfoVariants } from "./style";

const Notification = () => {
  return (
    <LazyMotion features={domAnimation}>
      <ContentWrapper as={motionLite.div} features={domAnimation}>
        <motionLite.div
          initial="initial"
          whileHover="hover"
          className="notification-container"
        >
          <motionLite.img
            src={bellImg}
            alt="bell-icon"
            className="notitication-bell"
            variants={bellIconVariants}
          />
          <motionLite.div
            className="notitication-count-info"
            variants={countInfoVariants}
          >
            3
          </motionLite.div>
        </motionLite.div>
      </ContentWrapper>
    </LazyMotion>
  );
};

export default Notification;
