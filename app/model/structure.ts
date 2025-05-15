export interface ITrainning {
    id: number;
    description: string;
}

export interface IEquipament {
    id: number;
    description: string;
    category: string;
}

export interface IWorker {
    name: string;
    lastName: string;
    employeeId: string;
}

export interface IWorkStation {
    description: string;
    id: number;
    trainnings: ITrainning[] | null;
    equipament: IEquipament[] | null;
    worker: IWorker | null;
    selected: boolean;
}
