import styled from "styled-components";
import { motion } from "framer-motion";

const rotateKeyFrame = [0, 0, -10, 10, 0];

export const ContentWrapper = styled.div`
  div.notification-container {
    position: relative;
    display: inline-block;
    width: max-content;

    img.notitication-bell {
      height: 2.5rem;
      width: 2.5rem;
    }

    div.notitication-count-info {
      background: #e9414e;
      border-radius: 70%;
      color: white;
      width: 2rem;
      height: 2rem;
      display: grid;
      place-items: center;
      padding: 0.25rem;
      position: absolute;
      left: 1.25rem;
      bottom: 1.25rem;
    }
  }
`;

export const bellIconVariants = {
  hover: {
    rotate: rotateKeyFrame,
    transition: { duration: 0.5 }
  }
};

export const countInfoVariants = {
  initial: { scale: 0, x: -3 },
  hover: {
    scale: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
    rotate: rotateKeyFrame
  }
};

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;
`;

export const InnerBox = styled(motion.div)`
  width: 25rem;
  height: 20rem;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  margin-top: 4rem;
  position: relative;
`;