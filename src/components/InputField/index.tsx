import { Box, TextField, useTheme } from "@mui/material";
import { useCopyWithNotification } from "../../hooks/useCopyWithNotification";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IProps {
    register: UseFormRegisterReturn;
    testId: string;
    isDirty: boolean;
    onInputChange: () => void;
    error?: FieldError;
    placeholder?: string;
}

const Input = (props: IProps) => {
    const { register, error, isDirty, testId, placeholder = 'Введите последовательность' , onInputChange} = props;
    const theme = useTheme();
    const { onMouseUp, SnackbarComponent } = useCopyWithNotification();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        register.onChange(e);
        onInputChange?.();
    };

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: 'calc(100% - 32px)',
                    margin: '0 auto',
                    paddingX: {
                        xs: 0,
                        lg: 2
                    },
                    boxSizing: 'border-box'
                }}
                data-testid={`${testId}-container`}
            >
                <TextField
                    variant="standard"
                    onMouseUp={onMouseUp}
                    placeholder={placeholder}
                    fullWidth
                    {...register}
                    onChange={handleChange}
                    error={isDirty && !!error}
                    helperText={isDirty && error?.message}
                    inputProps={{
                        "data-testid": `${testId}-input`,
                        "aria-label": placeholder,
                    }}
                    InputProps={{
                        sx: {
                            '&:before, &:after': {
                                borderWidth: {
                                    xs: '1px',
                                    md: '2px'
                                },
                                borderColor: theme.palette.divider
                            }
                        },
                    }}
                    sx={{
                        '& .MuiInputBase-root': {
                            fontSize: {
                                xs: '0.875rem',
                                sm: '0.9375rem',
                                md: '1rem'
                            },
                            minHeight: {
                                xs: '56px',
                                md: '64px'
                            }
                        },
                        '& .MuiInput-input': {
                            paddingTop: {
                                xs: '12px',
                                md: '16px'
                            },
                            paddingBottom: {
                                xs: '12px',
                                md: '16px'
                            }
                        },
                        '& .MuiFormHelperText-root': {
                            textAlign: 'center',
                            mx: 'auto',
                            fontSize: {
                                xs: '0.75rem',
                                sm: '0.8125rem'
                            }
                        }
                    }}
                />
            </Box>
            <SnackbarComponent />
        </>
    );
};

export default Input;