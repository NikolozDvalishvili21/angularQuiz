import { Injectable } from "@angular/core";

export interface Orders {
    id: number;
    name: string;
    loading: string;
    billable: string;
    efficiency: number;
}

@Injectable({
    providedIn: 'root',
})
export class orderService {
    private orders: Orders[] = [
        {
            id: 1,
            name: "Robert Fox",
            loading: "High",
            billable: "120hrs",
            efficiency: 95
        },
        {
            id: 2,
            name: "Darlene Robertson",
            loading: "Low",
            billable: "210hrs",
            efficiency: 50
        },
        {
            id: 3,
            name: "Theresa Webb",
            loading: "Medium",
            billable: "85hrs",
            efficiency: 75
        }
    ];

    getOrder(): Orders[] {
        return this.orders;
    }
}
