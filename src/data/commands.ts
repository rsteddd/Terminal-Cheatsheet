import type { CommandCategory } from '../types/types';

export const commands: CommandCategory[] = [
    // ==================== Git ====================
    {
        category: "Git",
        items: [
            {
                command: "git config --global user.name",
                description: "Встановити глобальне ім'я",
                example: "git config --global user.name 'John Doe'",
                details: "Ця команда встановлює ім'я користувача, яке буде використовуватись у всіх ваших git-комітах."
            },
            {
                command: "git remote add",
                description: "Додати віддалений репозиторій",
                example: "git remote add origin https://github.com/user/repo.git",
                details: "Команда додає віддалене джерело, яке потім можна використовувати для push/pull."
            },
            {
                command: "git stash",
                description: "Тимчасово зберегти незакомічені зміни",
                example: "git stash push -m 'Збереження перед оновленням'",
                details: "Зберігає всі зміни в схованку, щоб можна було повернутись до чистого робочого стану."
            },
            {
                command: "git cherry-pick",
                description: "Взяти коміт з іншої гілки",
                example: "git cherry-pick abc1234",
                details: "Додає окремий коміт з іншої гілки в поточну гілку. Корисно при роботі з окремими фіксами."
            },
        ]
    },

    // ==================== macOS ====================
    {
        category: "macOS",
        items: [
            {
                command: "brew install",
                description: "Встановити пакет через Homebrew",
                example: "brew install node",
                details: "Homebrew — це менеджер пакетів для macOS, який дозволяє швидко встановлювати інструменти."
            },
            {
                command: "open .",
                description: "Відкрити поточну папку в Finder",
                example: "open .",
                details: "Ця команда відкриває поточну директорію у Finder — зручно для навігації."
            }
        ]
    },

    // ==================== Linux ====================
    {
        category: "Linux",
        items: [
            {
                command: "sudo apt install",
                description: "Встановити пакет (Debian/Ubuntu)",
                example: "sudo apt install nginx",
                details: "Встановлює зазначений пакет через менеджер apt. Потрібні root-права."
            },
            {
                command: "systemctl status",
                description: "Перевірити статус служби",
                example: "systemctl status nginx",
                details: "Показує стан системної служби. Корисно при налагодженні серверів."
            }
        ]
    },

    // ==================== Windows ====================
    {
        category: "CMD/PowerShell",
        items: [
            {
                command: "winget install",
                description: "Встановити програму (Windows Package Manager)",
                example: "winget install Mozilla.Firefox",
                details: "Команда встановлює програми з репозиторію Windows Package Manager."
            },
            {
                command: "Get-Process",
                description: "Перелік процесів (PowerShell)",
                example: "Get-Process | Where-Object { $_.CPU -gt 10 }",
                details: "Виводить список запущених процесів. Можна фільтрувати за параметрами."
            }
        ]
    },

    // ==================== Docker (Універсальне) ====================
    {
        category: "Docker",
        items: [
            {
                command: "docker exec -it",
                description: "Увійти в контейнер",
                example: "docker exec -it my-container bash",
                details: "Запускає команду всередині запущеного контейнера. Зазвичай використовується для доступу до shell."
            },
            {
                command: "docker-compose up -d",
                description: "Запустити всі сервіси у фоновому режимі",
                example: "docker-compose up -d",
                details: "Запускає всі сервіси, описані у docker-compose.yml, у фоновому режимі."
            },
            {
                command: "docker system prune",
                description: "Очистити всі непотрібні ресурси",
                example: "docker system prune -a",
                details: "Видаляє неактивні контейнери, образи, томи — усе, що більше не використовується."
            },
        ]
    },

    // ==================== Додаткові інструменти ====================
    {
        category: "npm/yarn",
        items: [
            {
                command: "npm audit fix",
                description: "Виправити вразливості",
                example: "npm audit fix --force",
                details: "Аналізує залежності на наявність вразливостей і пропонує автоматичне виправлення."
            }
        ]
    },
    {
        category: "Node.js",
        items: [
            {
                command: "node -v",
                description: "Перевірити версію Node.js",
                example: "node -v",
                details: "Показує встановлену версію Node.js у системі."
            },
            {
                command: "npx create-react-app my-app",
                description: "Швидко створити React-проєкт",
                example: "npx create-react-app my-app",
                details: "Ініціалізує шаблон проєкту React без глобальної установки CRA."
            },
        ],
    },
];
