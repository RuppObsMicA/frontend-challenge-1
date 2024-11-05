import { makeAutoObservable } from 'mobx';

class ClaimsStore {
    claimsData = [];

    constructor() {
        makeAutoObservable(this);
    }

    setClaimsData(data) {
        this.claimsData = data;
    }

}

const store = new ClaimsStore();
export const useStore = () => store;
