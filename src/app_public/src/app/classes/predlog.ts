import {UporabnikVsi} from "./uporabnik";

export class Predlog {
    'idPredlogProjekta': string;
    'naslov': string;
    'sporocilo': string;
    'razred': string;
    'jePotrjen': number;
    'idOrganizacija' : string;
    'datum': string;
    'idUporabnik': string;
}

export class PredlogProjekta {
    'predlog': Predlog;
    'ocena': number;
    'avtor': UporabnikVsi;
}


