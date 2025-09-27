import { v4 as uuidv4 } from 'uuid';

export interface Campania {
    id_campania: string;
    tipo_campania: string;
    titulo: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    lugar: string;
    organizador: string;
    estado: string;
}

export function createCampania(
    tipo_campania: string,
    titulo: string,
    descripcion: string,
    fecha_inicio: Date,
    fecha_fin: Date,
    lugar: string,
    organizador: string,
    estado: string
): Campania {
    return {
        id_campania: uuidv4(),
        tipo_campania,
        titulo,
        descripcion,
        fecha_inicio,
        fecha_fin,
        lugar,
        organizador,
        estado
    };
}
