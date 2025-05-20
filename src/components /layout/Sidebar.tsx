import { FiHome, FiChevronDown, FiChevronRight } from 'react-icons/fi';
import type { CommandCategory, SelectedCommand } from '@/types/types.ts';
import { useState } from 'react';

type SidebarProps = {
    commands: CommandCategory[];
    isMobileOpen: boolean;
    onSelectCommand: (cmd: SelectedCommand) => void;
    onShowHome: () => void;
};

export const Sidebar = ({
                            commands,
                            isMobileOpen,
                            onSelectCommand,
                            onShowHome,
                        }: SidebarProps) => {
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

    const toggleCategory = (category: string) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    return (
        <aside
            className={`
        fixed top-0 left-0 h-full w-64 z-50
        bg-gradient-to-b from-blue-900 via-gray-900 to-gray-800
        p-4 shadow-lg
        overflow-y-auto
        transform
        transition-transform duration-300 ease-in-out
        md:translate-x-0
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
        >
            <button
                onClick={onShowHome}
                className="flex items-center p-2 w-full hover:bg-blue-700 rounded-lg mb-4 text-gray-100 transition-colors"
            >
                <FiHome className="mr-2" />
                <span className="font-semibold">Головна</span>
            </button>

            <nav>
                {commands.map((category) => (
                    <div key={category.category} className="mb-3">
                        <button
                            onClick={() => toggleCategory(category.category)}
                            className="flex items-center w-full p-2 hover:bg-blue-700 rounded-lg transition-colors text-gray-200 font-medium"
                        >
                            {expandedCategories[category.category] ? (
                                <FiChevronDown className="mr-2 text-blue-300" />
                            ) : (
                                <FiChevronRight className="mr-2 text-blue-300" />
                            )}
                            <span>{category.category}</span>
                        </button>

                        {expandedCategories[category.category] && (
                            <ul className="ml-6 mt-1 space-y-1">
                                {category.items.map((item) => (
                                    <li key={item.command}>
                                        <button
                                            onClick={() =>
                                                onSelectCommand({
                                                    category: category.category,
                                                    ...item,
                                                })
                                            }
                                            className="block p-2 text-sm hover:bg-blue-700 rounded-lg text-blue-200 w-full text-left transition-colors"
                                        >
                                            {item.command}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
};
