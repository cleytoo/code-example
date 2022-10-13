import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.form)`
  height: 24rem;
  width: 28rem;
  display: flex;
  flex-direction: column;

  label + label {
    margin-top: 3.2rem;
  }

  button {
    width: 15rem;
    align-self: center;
    margin-top: 3.8rem;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    margin-top: 1.5rem;
    align-self: center;

    :active {
      color: ${(props) => props.theme.colors.text};
    }
    :hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
