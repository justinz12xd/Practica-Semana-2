
import { Campania, CreadorDeCampania } from "../Domain/entities/campania";

type CampaniaSinId = Omit<Campania, "id_campania">;

const ESTADOS_VALIDOS = ["programada", "en progreso", "finalizada", "cancelada"];

export class CampaniaRepoMemory {
  private items: Campania[] = [];

  constructor() {
    this.semilla();
  }

  private semilla(): void {
    const datos: CampaniaSinId[] = [
      {
        tipo_campania: "Vacunación",
        titulo: "Jornada de Sarampión",
        descripcion: "Vacunación gratuita para niños",
        fecha_inicio: new Date("2025-10-01"),
        fecha_fin: new Date("2025-10-05"),
        lugar: "Centro de Salud",
        organizador: "Municipalidad",
        estado: "programada",
      },
      {
        tipo_campania: "Donación",
        titulo: "Donación de sangre",
        descripcion: "Colecta mensual",
        fecha_inicio: new Date("2025-10-10"),
        fecha_fin: new Date("2025-10-10"),
        lugar: "Hospital Central",
        organizador: "Cruz Roja",
        estado: "programada",
      },
    ];

    this.items.push(...datos.map(CreadorDeCampania));
  }

  crear(data: CampaniaSinId): Campania {
    const nuevo = CreadorDeCampania(data);
    this.items.push(nuevo);
    return nuevo;
  }
}
