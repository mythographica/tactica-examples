import 'reflect-metadata';
declare const Sentience: new (...args: unknown[]) => import("../.tactica").SentienceInstance;
declare global {
    var aiMemories: {
        rootInstance: InstanceType<typeof Sentience> | null;
        memories: Map<string, {
            id: string;
            instance: InstanceType<typeof aiMemories.rootInstance.Memory>;
            createdAt: string;
        }>;
        count: number;
    };
}
export {};
