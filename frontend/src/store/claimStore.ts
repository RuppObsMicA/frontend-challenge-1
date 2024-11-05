import { makeAutoObservable } from 'mobx';

class ClaimsStore {
    claimsData = [];

    constructor() {
        makeAutoObservable(this);
    }

    setClaimsData(data: any[]) {
        this.claimsData = data;
    }

    getClaimsData() {
        return this.claimsData;
    }

}

const store = new ClaimsStore();
export const useStore = () => store;
