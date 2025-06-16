export const pattern = /^[ARNDCEQGHILKMFPSTWYV-]+$/;

export enum AminoAcidColor {
    Cysteine = '#FFEA00',
    Hydrophobic = '#67E4A6',
    Glycine = '#C4C4C4',
    NegativeCharged = '#FC9CAC',
    PositiveCharged = '#BB99FF',
    Polar = '#80BFFF',
    Default = '#FFFFFF'
}

export enum ValidLetter {
    C = 'C',
    A = 'A',
    I = 'I',
    L = 'L',
    M = 'M',
    F = 'F',
    W = 'W',
    Y = 'Y',
    V = 'V',
    P = 'P',
    G = 'G',
    D = 'D',
    E = 'E',
    K = 'K',
    R = 'R',
    S = 'S',
    T = 'T',
    H = 'H',
    Q = 'Q',
    N = 'N',
    '-' = '-'
}

export const mapColorsOfWords: Record<ValidLetter, AminoAcidColor> = {
    [ValidLetter.C]: AminoAcidColor.Cysteine,
    [ValidLetter.A]: AminoAcidColor.Hydrophobic,
    [ValidLetter.I]: AminoAcidColor.Hydrophobic,
    [ValidLetter.L]: AminoAcidColor.Hydrophobic,
    [ValidLetter.M]: AminoAcidColor.Hydrophobic,
    [ValidLetter.F]: AminoAcidColor.Hydrophobic,
    [ValidLetter.W]: AminoAcidColor.Hydrophobic,
    [ValidLetter.Y]: AminoAcidColor.Hydrophobic,
    [ValidLetter.V]: AminoAcidColor.Hydrophobic,
    [ValidLetter.P]: AminoAcidColor.Hydrophobic,
    [ValidLetter.G]: AminoAcidColor.Glycine,
    [ValidLetter.D]: AminoAcidColor.NegativeCharged,
    [ValidLetter.E]: AminoAcidColor.NegativeCharged,
    [ValidLetter.K]: AminoAcidColor.PositiveCharged,
    [ValidLetter.R]: AminoAcidColor.PositiveCharged,
    [ValidLetter.S]: AminoAcidColor.Polar,
    [ValidLetter.T]: AminoAcidColor.Polar,
    [ValidLetter.H]: AminoAcidColor.Polar,
    [ValidLetter.Q]: AminoAcidColor.Polar,
    [ValidLetter.N]: AminoAcidColor.Polar,
    [ValidLetter["-"]]: AminoAcidColor.Default,
}
