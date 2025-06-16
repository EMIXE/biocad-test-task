import { useMemo } from 'react';
import { Box } from '@mui/material';
import AlignedSequencePair from "../AlignedSequencePair";
import { useWindowSize } from '../../hooks/useWindowSize';

export interface IProps {
    line1: string;
    line2: string;
}

const ColoredTextBlock = (props: IProps) => {
    const { line1, line2 } = props;
    const { width } = useWindowSize();

    const chunkSize = useMemo(() => {
        return Math.floor((width - 32) / (28))
    }, [width])

    const renderSequences = () => {
        const length = Math.max(line1.length, line2.length);
        const chunks = [];

        for (let i = 0; i < length; i += chunkSize) {
            chunks.push({
                pair1: line1.slice(i, i + chunkSize),
                pair2: line2.slice(i, i + chunkSize),
                startIndex: i
            });
        }

        return chunks.map((chunk, index) => (
            <AlignedSequencePair
                key={index}
                pair1={chunk.pair1}
                pair2={chunk.pair2}
                startIndex={chunk.startIndex}
                highlightDiff
            />
        ));
    };

    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                p: 2,
                width: '100%',
            }}
        >
            {renderSequences()}
        </Box>
    );
};

export default ColoredTextBlock;