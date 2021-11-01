export const base64Decode = (encodedString: string): string => {
    return atob(encodedString);
};
