import {AminoAcidColor, ValidLetter, mapColorsOfWords} from "./constants";

export const getColorByLetter = (letter: ValidLetter): AminoAcidColor => {
    return mapColorsOfWords[letter];
}

export function isLetter(key: string): key is ValidLetter {
    return Object.values(ValidLetter).includes(key as ValidLetter);
}