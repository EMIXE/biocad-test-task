import { useState } from 'react';
import {Alert, Snackbar} from "@mui/material";

export const useCopyWithNotification = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const onMouseUp = async () => {
        const selection = window.getSelection()?.toString() || '';
        const selectionWithoutSpaces = selection.replace(/\s/g, '');
        if (selectionWithoutSpaces && selectionWithoutSpaces.length > 0) {
            try {
                await navigator.clipboard.writeText(selectionWithoutSpaces);
                setOpenSnackbar(true);
            } catch (err) {
                console.error('Ошибка копирования:', err);
            }
        }
    };

    const SnackbarComponent = () => (
        <Snackbar
            open={openSnackbar}
            autoHideDuration={1000}
            onClose={() => setOpenSnackbar(false)}
        >
            <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
                Текст скопирован в буфер обмена!
            </Alert>
        </Snackbar>
    )

    return {onMouseUp, SnackbarComponent};
}