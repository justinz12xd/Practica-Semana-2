import { Campania } from "../Domain/entities/campania";
import { ICampaniaRepository } from "../Domain/repositories/icampania";
import { v4 as uuidv4 } from "uuid";

export class CampaniaRepoMemory implements ICampaniaRepository {
  private campanias: Campania[] = [];

  create(
    campania: Omit<Campania, "id_campania">,
    callback: (err: Error | null, result?: Campania) => void
  ): void {
    setTimeout(() => {
      try {
        if (!campania.tipo_campania || !campania.descripcion) {
          return callback(new Error("Tipo de campaña y descripción son obligatorios"));
        }

        const nuevaCampania = new Campania(
          uuidv4(),
          campania.tipo_campania,
          campania.titulo,
          campania.descripcion,
          campania.fecha_inicio,
          campania.fecha_fin,
          campania.lugar,
          campania.organizador,
          campania.estado
        );

        this.campanias.push(nuevaCampania);
        callback(null, nuevaCampania);
      } catch (error) {
        callback(error as Error);
      }
    }, 500);
  }

  async update( id: string, data: Partial<Campania>): Promise<Campania> {
    
  }

}


