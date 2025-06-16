import {Box, useTheme} from "@mui/material";
import {getColorByLetter, isLetter} from "../../utils";
import {AminoAcidColor} from "../../constants";
import {useCopyWithNotification} from "../../hooks/useCopyWithNotification";

interface IProps {
    pair1: string;
    pair2: string;
    startIndex: number;
    highlightDiff?: boolean;
}

const AlignedSequencePair = (props: IProps) => {
    const {pair1, pair2, startIndex, highlightDiff } = props;
    const theme = useTheme();
    const {onMouseUp, SnackbarComponent} = useCopyWithNotification();

    const renderPair = (sequence: string, isReference = false) => {
        return sequence.split('').map((char, index) => {
            const absoluteIndex = startIndex + index;
            if (!isLetter(char)) return null;

            const bgColor = getColorByLetter(char);
            const highlightColor = highlightDiff && pair1[index] !== char ? bgColor : AminoAcidColor.Default;

            return (
                <span
                    key={absoluteIndex}
                    style={{
                        color: theme.palette.getContrastText(highlightColor || bgColor),
                        backgroundColor: isReference ? bgColor : highlightColor,
                        padding: '2px 4px',
                        borderRadius: '3px',
                        minWidth: '18px',
                        textAlign: 'center',
                        display: 'inline-block',
                        margin: '0 1px',
                        fontSize: 'clamp(12px, 2.5vw, 16px)'
                    }}
                >
          {char}
        </span>
            );
        });
    };

    return (
            <Box
                sx={{
                    width: 'calc(100% - 32px)%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    mb: 2,
                    boxSizing: 'border-box'
                }}
            >
            <div style={{ display: 'flex', flexWrap: 'wrap' }} onMouseUp={onMouseUp}>
                {renderPair(pair1, true)}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }} onMouseUp={onMouseUp}>
                {renderPair(pair2)}
            </div>
                <SnackbarComponent />
        </Box>
    );
};

export default AlignedSequencePair;
