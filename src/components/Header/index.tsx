import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Wrapper } from "./styles";

interface Props {
  toggleTheme(): void;
}

const Header = ({ toggleTheme }: Props) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Wrapper>
      Hello
      <Switch
        onChange={toggleTheme}
        checked={title === "light"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.accent}
      />
    </Wrapper>
  );
};

export default Header;
