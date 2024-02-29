export const getPrefersDark = () => {
    if (window?.matchMedia) {
        // Check if the dark-mode Media-Query matches
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false;
}