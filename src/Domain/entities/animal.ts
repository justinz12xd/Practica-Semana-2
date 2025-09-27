export interface Animal {
    id: number;
    nombre: string;
    especie: string;
    edad: number;
    estado: string;
    vacunas: string[];
    descripcion: string;
    fotos: File[];
    estadoAdopcion: string;
    id_refugio: number;
}
