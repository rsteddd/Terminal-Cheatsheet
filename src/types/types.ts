export type Command = {
    command: string;
    description: string;
    example: string;
    details?: string;
};

export type CommandCategory = {
    category: string;
    items: Command[];
};

export type SelectedCommand = Command & {
    category: string;
};
