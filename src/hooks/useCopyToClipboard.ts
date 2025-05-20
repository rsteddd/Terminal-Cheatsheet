import { useState } from 'react';

export const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Скидаємо після 2 секунд
        } catch (err) {
            console.error('Помилка копіювання:', err);
        }
    };

    return { isCopied, copy };
};
