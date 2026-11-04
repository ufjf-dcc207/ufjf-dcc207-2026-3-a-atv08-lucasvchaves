import type { PacoteType } from "./types";

export type AcaoPacoteExcluir = {
    type: 'excluir',
    id: string
}

export type AcaoPacoteRepetir = {
    type: 'repetir',
    dimensao: string,
    id: string
}

export type AcaoPacoteMudarPeso = {
    type: 'mudarPeso',
    acao: "aumentar" | "reduzir",
    id: string
}

export type AcaoPacote = AcaoPacoteExcluir | AcaoPacoteRepetir | AcaoPacoteMudarPeso;

export default function pacoteReducer(state: Array<PacoteType>, action: AcaoPacote) : Array<PacoteType>{
    switch (action.type) {
        case "excluir":
            return state.filter(p => p.id !== action.id);
        case "repetir":
            if (action.dimensao === "altura") {
                return state.map(p => {
                    if (p.id === action.id) {
                        return {...p, profundidade: p.altura, largura: p.altura};
                    } else return p;
                });
            }
        break;
        case "mudarPeso":
            return state.map(p => {
                    if (p.id === action.id) {
                        if (action.acao === "aumentar") {
                            return {...p, peso: p.peso + 1};
                        }

                        if (action.acao === "reduzir") {
                            return {...p, peso: p.peso - 1};
                        }
                    } else return p;
                });
        break;

        default:
            return state;
    }
}