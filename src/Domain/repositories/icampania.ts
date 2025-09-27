import { Campania } from "../entities/campania";

export interface ICampaniaRepository {
    create(campania: Omit<Campania, "id_campania">, callback: (err: Error | null, result?: Campania) => void): void;
    update(id: string, data: Partial<Campania>): Promise<Campania>;
    findById(id: string): Promise<Campania | null>;
    findAll(): Promise<Campania[]>;
    delete(id: string): Promise<void>;
}