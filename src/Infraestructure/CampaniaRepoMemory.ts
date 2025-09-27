import { Campania } from "../Domain/entities/campania";
import { ICampania } from "../Domain/repositories/icampania";

export class CampaniaRepoMemory implements ICampania {
    private campanias: Campania[] = [];//nuevas campanias aqui.
}