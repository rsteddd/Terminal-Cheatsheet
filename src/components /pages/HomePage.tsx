export const HomePage = () => (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4">
        <div className="w-full max-w-3xl py-8 sm:py-12 animate-fadeIn">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-400 text-center">
                Terminal Cheatsheet
            </h1>

            <p className="text-center text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                Шпаргалка для розробників з усіма потрібними командами. Зручно. Швидко. Лаконічно.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-5 sm:p-6 rounded-xl border border-gray-700 shadow-md transition hover:scale-[1.02] hover:shadow-lg duration-200">
                    <h3 className="font-semibold text-blue-400 text-lg mb-2">Команди Git</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Всі основні команди для роботи з Git
                    </p>
                </div>

                <div className="bg-gray-800 p-5 sm:p-6 rounded-xl border border-gray-700 shadow-md transition hover:scale-[1.02] hover:shadow-lg duration-200">
                    <h3 className="font-semibold text-blue-400 text-lg mb-2">Термінал</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Команди Linux / macOS / Windows
                    </p>
                </div>
            </div>
        </div>
    </div>
);
