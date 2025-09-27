import { Campania } from "../entities/campania";

export interface CampaniaCreator {
    nombre: string;
    tipo_campania: string;
    titulo: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    lugar: string;
    organizador: string;
    estado: string;
}

export interface CampaniaUpdater {
    tipo_campania?: string;
    titulo?: string;
    descripcion?: string;
    fecha_inicio?: Date;
    fecha_fin?: Date;
    lugar?: string;
    organizador?: string;
    estado?: string;
}

export interface ICampania {
    insert(campania: Campania, callback: (err: Error | null, result?: Campania) => void): void;
    getById(id: string) : Promise<Campania | null>;
    update(id: string, data: Partial<Campania>): Promise<Campania | null>;
    delete(id: string): Promise<boolean>;
}