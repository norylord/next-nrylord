import {staticData} from "./Static";

export default class RequestService {
    static getData() {
        return staticData
    }

    static getCards() {
        return staticData.cards
    }
}
