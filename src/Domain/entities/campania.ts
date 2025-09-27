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

export function CreadorDeCampania(data: Omit<Campania, 'id_campania'>): Campania {
    ValidarDatosCampania(data);
    return {
        id_campania: uuidv4(),
        ...data
    };
}

function ValidarDatosCampania(data: Omit<Campania, 'id_campania'>): void {
    if (!data.tipo_campania?.trim()) throw new Error("Tipo de campaña requerido");
    if (!data.titulo?.trim()) throw new Error("Título requerido");
    if (!data.descripcion?.trim()) throw new Error("Descripción requerida");
    if (!(data.fecha_inicio instanceof Date) || isNaN(data.fecha_inicio.getTime())) throw new Error("Fecha de inicio inválida");
    if (!(data.fecha_fin instanceof Date) || isNaN(data.fecha_fin.getTime())) throw new Error("Fecha de fin inválida");
    if (data.fecha_fin < data.fecha_inicio) throw new Error("Fecha de fin debe ser posterior a fecha de inicio");
    if (!data.lugar?.trim()) throw new Error("Lugar requerido");
    if (!data.organizador?.trim()) throw new Error("Organizador requerido");
    const estadosValidos = ["programada", "en progreso", "finalizada", "cancelada"];
    if (!estadosValidos.includes(data.estado)) throw new Error(`Estado inválido. Valores permitidos: ${estadosValidos.join(", ")}`);
}