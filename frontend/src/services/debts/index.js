import { api } from "../../api";

export function getDebts(query) {
    return api.get('/debts', {
        params: query,
    });
}
