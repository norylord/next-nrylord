import {useEffect, useState} from "react";
import {CardsContext} from "./Context";
import RequestService from "../../services/cards/RequestService";
import {loadGetInitialProps} from "next/dist/shared/lib/utils";

export const CardsProvider = ({children}) => {

    const [cards, setCards] = useState([]);
    const [test, setTest] = useState(false);

    useEffect(() => {
        const localStorageCardsData = JSON.parse(localStorage.getItem('cards'))
        if (localStorageCardsData) {
            setCards(localStorageCardsData)
        } else {
            localStorage.setItem('cards', JSON.stringify(RequestService.getCards()))
            setCards(JSON.parse(localStorage.getItem('cards')))
        }
    }, [])

    useEffect(() => {
        if (test) {
            if (cards.length === 0) {
                return localStorage.removeItem('cards')
            }
            return localStorage.setItem('cards', JSON.stringify(cards))
        }
        setTest(true)
    }, [cards])

    const cardsActions = {
        addCard: (card) => {
            setCards([...cards, card]);
        },
        removeCard: (removeCard) => {
            setCards(cards.filter(card => card.id !== removeCard))
        }
    }
    return (
        <CardsContext.Provider value={{cards, cardsActions}}>
            {children}
        </CardsContext.Provider>
    )

}

