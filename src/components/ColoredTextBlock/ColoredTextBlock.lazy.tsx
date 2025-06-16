import { lazy, Suspense } from 'react';
import {IProps} from "./ColoredTextBlock";

const ColoredTextBlock = lazy(() => import('./ColoredTextBlock'));

export const ColoredTextBlockLazy = (props: IProps) => {
    return (
        <Suspense fallback={<div>Загрузка визуализации...</div>}>
            <ColoredTextBlock {...props} />
        </Suspense>
    );
};