import type { CommandCategory } from '../types/types';

export const commands: CommandCategory[] = [
    {
        category: 'Git',
        items: [
            {
                command: 'git config --global user.name',
                description: "Встановити глобальне ім'я",
                example: "git config --global user.name 'John Doe'",
            },
            {
                command: 'git remote add',
                description: 'Додати віддалений репозиторій',
                example: 'git remote add origin https://github.com/user/repo.git',
            },
            {
                command: 'git stash',
                description: "Тимчасово зберегти незакомічені зміни",
                example: "git stash push -m 'Збереження перед оновленням'",
            },
            {
                command: 'git cherry-pick',
                description: 'Взяти коміт з іншої гілки',
                example: 'git cherry-pick abc1234',
            },
            {
                command: 'git log --oneline --graph --all',
                description: 'Графічне відображення історії комітів',
                example: 'git log --oneline --graph --all',
            },
            {
                command: 'git reset --hard',
                description: 'Повернутися до конкретного коміту',
                example: 'git reset --hard abc1234',
            },
            {
                command: 'git clean -fd',
                description: 'Видалити всі незаіндексовані файли та папки',
                example: 'git clean -fd',
            },
            {
                command: 'git diff',
                description: 'Показати різницю між файлами',
                example: 'git diff HEAD',
            },
        ],
    },

    {
        category: 'macOS',
        items: [
            {
                command: 'brew install',
                description: 'Встановити пакет через Homebrew',
                example: 'brew install node',
            },
            {
                command: 'open .',
                description: 'Відкрити поточну папку в Finder',
                example: 'open .',
            },
            {
                command: 'brew services list',
                description: 'Показати всі запущені/зупинені сервіси',
                example: 'brew services list',
            },
            {
                command: 'say "Hello, Vlad"',
                description: 'Озвучити текст системним голосом',
                example: 'say "Hello, Vlad"',
            },
            {
                command: 'killall Finder',
                description: 'Перезапустити Finder',
                example: 'killall Finder',
            },
            {
                command: 'defaults write com.apple.finder AppleShowAllFiles -bool true',
                description: 'Показати приховані файли у Finder',
                example: 'defaults write com.apple.finder AppleShowAllFiles -bool true && killall Finder',
            },
            {
                command: 'pbcopy < ~/.ssh/id_rsa.pub',
                description: 'Скопіювати SSH-ключ у буфер обміну',
                example: 'pbcopy < ~/.ssh/id_rsa.pub',
            },
        ],
    },

    {
        category: 'Linux',
        items: [
            {
                command: 'sudo apt install',
                description: 'Встановити пакет (Debian/Ubuntu)',
                example: 'sudo apt install nginx',
            },
            {
                command: 'systemctl status',
                description: 'Перевірити статус служби',
                example: 'systemctl status nginx',
            },
            {
                command: 'df -h',
                description: 'Показати використання дисків',
                example: 'df -h',
            },
            {
                command: 'top',
                description: 'Відобразити завантаження системи',
                example: 'top',
            },
            {
                command: 'chmod +x script.sh',
                description: 'Зробити скрипт виконуваним',
                example: 'chmod +x script.sh',
            },
            {
                command: 'ps aux | grep node',
                description: 'Знайти процеси Node.js',
                example: 'ps aux | grep node',
            },
            {
                command: 'curl -I https://google.com',
                description: 'Перевірити заголовки відповіді HTTP',
                example: 'curl -I https://google.com',
            },
        ],
    },

    {
        category: 'CMD/PowerShell',
        items: [
            {
                command: 'winget install',
                description: 'Встановити програму (Windows Package Manager)',
                example: 'winget install Mozilla.Firefox',
            },
            {
                command: 'Get-Process',
                description: 'Перелік процесів (PowerShell)',
                example: 'Get-Process | Where-Object { $_.CPU -gt 10 }',
            },
            {
                command: 'ipconfig /all',
                description: 'Інформація про мережу',
                example: 'ipconfig /all',
            },
            {
                command: 'sfc /scannow',
                description: 'Перевірка системних файлів',
                example: 'sfc /scannow',
            },
            {
                command: 'shutdown /r /t 0',
                description: 'Перезавантажити компʼютер негайно',
                example: 'shutdown /r /t 0',
            },
            {
                command: 'choco install git',
                description: 'Встановити програму через Chocolatey',
                example: 'choco install git',
            },
            {
                command: 'taskkill /IM chrome.exe /F',
                description: 'Завершити процес Chrome',
                example: 'taskkill /IM chrome.exe /F',
            },
        ],
    },

    {
        category: 'Docker',
        items: [
            {
                command: 'docker exec -it',
                description: 'Увійти в контейнер',
                example: 'docker exec -it my-container bash',
            },
            {
                command: 'docker-compose up -d',
                description: 'Запустити всі сервіси у фоновому режимі',
                example: 'docker-compose up -d',
            },
            {
                command: 'docker system prune',
                description: 'Очистити всі непотрібні ресурси',
                example: 'docker system prune -a',
            },
            {
                command: 'docker ps -a',
                description: 'Показати всі контейнери',
                example: 'docker ps -a',
            },
            {
                command: 'docker build -t myapp .',
                description: 'Зібрати Docker-образ із Dockerfile',
                example: 'docker build -t myapp .',
            },
            {
                command: 'docker images',
                description: 'Перелік доступних Docker-образів',
                example: 'docker images',
            },
            {
                command: 'docker stop $(docker ps -q)',
                description: 'Зупинити всі запущені контейнери',
                example: 'docker stop $(docker ps -q)',
            },
        ],
    },

    {
        category: 'npm/yarn',
        items: [
            {
                command: 'npm audit fix',
                description: 'Виправити вразливості',
                example: 'npm audit fix --force',
            },
            {
                command: 'npm run dev',
                description: 'Запустити скрипт розробки',
                example: 'npm run dev',
            },
            {
                command: 'yarn add -D tailwindcss',
                description: 'Встановити Tailwind у dev-залежності',
                example: 'yarn add -D tailwindcss',
            },
            {
                command: 'npm i -g typescript',
                description: 'Глобально встановити TypeScript',
                example: 'npm i -g typescript',
            },
            {
                command: 'yarn cache clean',
                description: 'Очистити кеш Yarn',
                example: 'yarn cache clean',
            },
            {
                command: 'npm outdated',
                description: 'Перевірити застарілі пакети',
                example: 'npm outdated',
            },
            {
                command: 'npx eslint . --fix',
                description: 'Автоматично виправити помилки ESLint',
                example: 'npx eslint . --fix',
            },
        ],
    },

    {
        category: 'Node.js',
        items: [
            {
                command: 'node -v',
                description: 'Перевірити версію Node.js',
                example: 'node -v',
            },
            {
                command: 'npx create-react-app my-app',
                description: 'Швидко створити React-проєкт',
                example: 'npx create-react-app my-app',
            },
            {
                command: 'node index.js',
                description: 'Запустити JS-файл через Node',
                example: 'node index.js',
            },
            {
                command: 'npm init -y',
                description: 'Швидко створити package.json',
                example: 'npm init -y',
            },
            {
                command: 'npx tsc --init',
                description: 'Ініціалізувати tsconfig.json',
                example: 'npx tsc --init',
            },
            {
                command: 'node --inspect-brk index.js',
                description: 'Запустити Node з дебаггером',
                example: 'node --inspect-brk index.js',
            },
            {
                command: 'require("fs")',
                description: 'Імпортувати модуль файлової системи',
                example: 'const fs = require("fs");',
            },
        ],
    },
];
