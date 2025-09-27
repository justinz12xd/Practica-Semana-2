export class Campania {
    constructor(
        public id_campania: string,
        public tipo_campania: string,
        public titulo: string,
        public descripcion: string,
        public fecha_inicio: Date,
        public fecha_fin: Date,
        public lugar: string,
        public organizador: string,
        public estado: "Activa" | "Inactiva" = "Activa"
    ) {}
}