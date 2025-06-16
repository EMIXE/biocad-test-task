import { Suspense, useState, useEffect } from 'react';
import {Stack, Button, Box, CircularProgress} from "@mui/material";
import {SubmitHandler, useForm} from "react-hook-form";
import {schema, Schema} from "../../types/schema";
import {zodResolver} from "@hookform/resolvers/zod";
import CopyableTextField from "../InputField";
import {ColoredTextBlockLazy} from "../ColoredTextBlock";

export type FormValues = {
    firstSubsequence: string;
    secondSubsequence: string;
}

const MainForm = () => {
    const [isAlign, setIsAlign] = useState(false);

    const {register, watch, handleSubmit, trigger,
        setError,
        clearErrors, formState: { errors, isValid, isDirty }} = useForm<Schema>({
        mode: 'onChange',
        resolver: zodResolver(schema),
        defaultValues: {
            firstSubsequence: '',
            secondSubsequence: '',
        },
    });

    const [firstSeq, secondSeq] = watch(['firstSubsequence', 'secondSubsequence']);

    useEffect(() => {
        if (firstSeq && secondSeq) {
            if (firstSeq.length !== secondSeq.length) {
                setError('secondSubsequence', {
                    type: 'manual',
                    message: 'Длина последовательностей должна совпадать'
                });
            } else {
                clearErrors(['secondSubsequence']);
            }
        }
        trigger();
    }, [firstSeq, secondSeq, trigger, setError, clearErrors]);

    const onSubmit: SubmitHandler<FormValues> = () => {
        setIsAlign(true);
    }

    const onInputChange = () => {
        setIsAlign(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                    spacing={2}
                    sx={{
                        width: '100vw',
                        maxWidth: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: {
                            xs: '16px 8px',
                            sm: 2
                        },
                        boxSizing: 'border-box'
                    }}
                >
                    <CopyableTextField register={register('firstSubsequence')} error={errors.firstSubsequence} testId={'firstSubsequence'} isDirty={isDirty} onInputChange={onInputChange}/>
                    <CopyableTextField register={register('secondSubsequence')} error={errors.secondSubsequence} testId={'secondSubsequence'} isDirty={isDirty} onInputChange={onInputChange}/>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        disabled={!isValid}
                        sx={{
                            maxWidth: {
                                xs: '100%',
                                sm: '400px',
                                md: '500px'
                            },
                            py: 1.5,
                            fontSize: '1rem'
                        }}
                    >
                        Выровнить
                    </Button>
                </Stack>
            </form>
            {isAlign && (
                <Suspense fallback={
                    <Box display="flex" justifyContent="center" my={4}>
                        <CircularProgress />
                    </Box>
                }>
                    <ColoredTextBlockLazy
                        line1={firstSeq}
                        line2={secondSeq}
                    />
                </Suspense>
            )}
        </>

    )
}

export default MainForm;