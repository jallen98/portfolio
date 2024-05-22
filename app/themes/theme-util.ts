export type Theme = 'dark-mode' | 'light-mode';

export const changeTheme = (theme: Theme) => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
}
