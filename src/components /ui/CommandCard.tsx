import { motion } from 'framer-motion';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard.ts';
import { FiCopy, FiCheck } from 'react-icons/fi';
import type { SelectedCommand } from '@/types/types.ts';

export const CommandCard = ({ command, description, example, category, details }: SelectedCommand) => {
    const { isCopied, copy } = useCopyToClipboard();

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 p-5 sm:p-6 rounded-2xl border-l-4 border-blue-500 shadow-xl w-full max-w-3xl mx-auto my-20"
        >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div className="flex-1">
                    <span className="text-sm text-gray-400">{category}</span>
                    <h3 className="font-mono text-base sm:text-lg md:text-xl text-blue-400 break-words mt-1">
                        {command}
                    </h3>
                </div>

                <button
                    onClick={() => copy(command)}
                    className="text-gray-400 hover:text-white p-2 rounded-md transition-colors"
                    aria-label="Copy"
                >
                    {isCopied ? (
                        <FiCheck className="text-green-500 text-xl" />
                    ) : (
                        <FiCopy className="text-xl" />
                    )}
                </button>
            </div>

            <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>

            {details && (
                <p className="mt-3 text-sm text-muted-foreground italic text-gray-400 leading-relaxed">
                    💡 {details}
                </p>
            )}

            {example && (
                <div className="mt-4 sm:mt-6">
                    <h4 className="text-sm text-gray-400 font-semibold mb-2">Приклад:</h4>
                    <pre className="bg-gray-900 text-blue-200 p-4 rounded-md overflow-x-auto text-sm font-mono whitespace-pre-wrap">
                        {example}
                    </pre>
                </div>
            )}
        </motion.div>
    );
};
