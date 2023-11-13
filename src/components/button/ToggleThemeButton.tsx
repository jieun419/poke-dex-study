import { useDispatch, useSelector } from "react-redux";
import { EventButton } from "./button.styled";
import { RootState } from "../../store";
import { themeActions } from "../../store/theme-slice";

const ToggleThemeButton = () => {
  const dispatch = useDispatch();
  const themeType = useSelector((state: RootState) => state.themeType.themeMode);

  const onChangeTheme = (theme: string) => {
    localStorage.setItem('THEME', theme)
  }

  const handleToggleTheme = () => {
    if (themeType === 'dark') {
      onChangeTheme('light');
      dispatch(themeActions.lightMode());
    } else {
      onChangeTheme('dark');
      dispatch(themeActions.darkMode());
    }
  }

  return (
    <EventButton onClick={handleToggleTheme}>
      {themeType === 'dark' ? '🌞 Light' : '🌚 Dark'}
    </EventButton>
  );
};

export default ToggleThemeButton;