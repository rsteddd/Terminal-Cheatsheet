import { useState, useEffect } from 'react';
import { Sidebar } from './components /layout/Sidebar';
import { HomePage } from './components /pages/HomePage';
import { CommandCard } from './components /ui/CommandCard';
import { SkeletonLoader } from './components /ui/SkeletonLoader';
import { commands } from './data/commands';
import type { SelectedCommand } from './types/types';

function App() {
    const [selectedCommand, setSelectedCommand] = useState<SelectedCommand | null>(null);
    const [showHome, setShowHome] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (selectedCommand) {
            setIsLoading(true);
            const timer = setTimeout(() => setIsLoading(false), 500);
            return () => clearTimeout(timer);
        }
    }, [selectedCommand]);

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-100">
            {/* Мобільна кнопка меню */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 bg-blue-700 bg-opacity-30 hover:bg-opacity-60 p-2 rounded-lg shadow-lg text-white transition-opacity duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>



            <Sidebar
                commands={commands}
                isMobileOpen={isMobileMenuOpen}
                onSelectCommand={(cmd) => {
                    setSelectedCommand(cmd);
                    setShowHome(false);
                    setIsMobileMenuOpen(false);
                }}
                onShowHome={() => {
                    setShowHome(true);
                    setSelectedCommand(null);
                    setIsMobileMenuOpen(false);
                }}
            />

            <main className="flex-1 p-4 md:p-8 md:ml-64 transition-all duration-300 ease-in-out">
                {isLoading ? (
                    <SkeletonLoader />
                ) : showHome ? (
                    <HomePage />
                ) : (
                    selectedCommand && <CommandCard {...selectedCommand} />
                )}
            </main>
        </div>
    );
}

export default App;
