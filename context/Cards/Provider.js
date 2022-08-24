import {useEffect, useState} from "react";
import {CardsContext} from "./Context";
import RequestService from "../../services/cards/RequestService";
import {loadGetInitialProps} from "next/dist/shared/lib/utils";

export const CardsProvider = ({children}) => {

    const [cards, setCards] = useState([]);
    const [isMount, setIsMount] = useState(false);

    const [selectedSort, setSelectedSort] = useState('')

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('emptyList')) === true) {

        } else {
            const localStorageCardsData = JSON.parse(localStorage.getItem('cards'))
            if (localStorageCardsData) {
                setCards(localStorageCardsData)
            } else {
                localStorage.setItem('cards', JSON.stringify(RequestService.getCards()))
                setCards(JSON.parse(localStorage.getItem('cards')))
            }
        }

    }, [])

    useEffect(() => {
        if (isMount) {
            if (cards.length === 0) {
                localStorage.setItem('emptyList', JSON.stringify(true))
                return localStorage.setItem('cards', JSON.stringify(''))
            }
            localStorage.setItem('emptyList', JSON.stringify(false))
            return localStorage.setItem('cards', JSON.stringify(cards))
        }
        setIsMount(true)
    }, [cards])

    const cardsActions = {
        addCard: (card) => {
            setCards([...cards, card]);
        },
        removeCard: (removeCard) => {
            setCards(cards.filter(card => card.id !== removeCard))
        },
        sortCards: (sort) => {

            if (sort === 'title') {
                setSelectedSort(sort)
                setCards([...cards].sort((a, b) => a[sort].localeCompare(b[sort])))
            } else if (sort === 'price') {
                setSelectedSort(sort)
                setCards([...cards].sort((a, b) => {
                    return a[sort] - b[sort]
                }))
            } else {
                setSelectedSort(sort)
                setCards([...cards].sort((a, b) => {
                    return a[sort] - b[sort]
                }).reverse())
            }
        }
    }
    return (
        <CardsContext.Provider value={{cards, cardsActions}}>
            {children}
        </CardsContext.Provider>
    )

}

