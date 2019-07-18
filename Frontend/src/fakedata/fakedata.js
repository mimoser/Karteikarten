export const fake = {
    _decks : [
        {
            id: 1,
            name: "Informatik 1",
            owner: "Jane Doe",
            numberOfCards: 30,
            averageRating: 4.5,
    
        },
        {
            id: 2,
            name: "Informatik 2",
            owner: "Jane Doe",
            numberOfCards: 32,
            averageRating: 4.5
        },
        {
            id: 3,
            name: "Programmierung 1",
            owner: "Jane Doe",
            numberOfCards: 33,
            averageRating: 4.5
        },
        {
            id: 4,
            name: "Programmierung 2",
            owner: "Jane Doe",
            numberOfCards: 66,
            averageRating: 4.5
        },
        {
            id: 5,
            name: "Datenbanken",
            owner: "John Doe",
            numberOfCards: 56,
            averageRating: 4.5
        },
        {
            id: 6,
            name: "Nachrichtentechnik",
            owner: "John Doe",
            numberOfCards: 42,
            averageRating: 1
        },
        {
            id: 7,
            name: "Softwareentwicklung",
            owner: "Jane Doe",
            numberOfCards: 87,
            averageRating: 4.5
        },
        {
            id: 8,
            name: "Webentwicklung",
            owner: "Jane Doe",
            numberOfCards: 1000,
            averageRating: 4.5
        },
        {
            id: 9,
            name: "Informatik 1",
            owner: "John Doe",
            numberOfCards: 33,
            averageRating: 4.5
        },
        {
            id: 10,
            name: "Informatik 1",
            owner: "Jane Doe",
            numberOfCards: 56,
            averageRating: 3.5
        },
        {
            id: 11,
            name: "Informatik 1",
            owner: "Jane Doe",
            numberOfCards: 223,
            averageRating: 4.5
        },
        {
            id: 12,
            name: "Informatik 1",
            owner: "Jane Doe",
            numberOfCards: 342,
            averageRating: 3
        },
        {
            id: 13,
            name: "Informatik 1",
            owner: "John Doe",
            numberOfCards: 36,
            averageRating: 4
        },
        {
            id: 14,
            name: "Informatik 1",
            owner: "John Doe",
            numberOfCards: 76,
            averageRating: 5
        },
        {
            id: 15,
            name: "Informatik 1",
            owner: "John Doe",
            numberOfCards: 56,
            averageRating: 1
        },
        {
            id: 16,
            name: "Informatik 1",
            owner: "Jane Doe",
            numberOfCards: 11,
            averageRating: 4.5
        },
        {
            id: 17,
            name: "Informatik 1",
            owner: "Jane Doe",
            numberOfCards: 223,
            averageRating: 4.5
        },
        {
            id: 18,
            name: "Informatik 1",
            owner: "John Doe",
            numberOfCards: 123,
            averageRating: 4.5
        },
        {
            id: 19,
            name: "Informatik 1",
            owner: "John Doe",
            numberOfCards: 9,
            averageRating: 4.5
        },
        {
            id: 20,
            name: "Informatik 1",
            owner: "Jane Doe",
            numberOfCards: 44,
            averageRating: 4.5
        },
        {
            id: 21,
            name: "Informatik 1",
            owner: "Jane Doe",
            numberOfCards: 22,
            averageRating: 4.5
        },
        {
            id: 22,
            name: "Informatik 1",
            owner: "John Doe",
            numberOfCards: 42,
            averageRating: 4.5
        }
    ],

    _deckToHtml: function(deck){
        return `<div><h2>${deck.name}</h2><br/><p>Von ${deck.owner}</p><br/><p>${deck.numberOfCards} Karten</p></div>`;
    },

    fakeData: function(){
        let fd = new Array();
        this._decks.forEach(deck => {
            fd.push({"id":deck.id, "html": this._deckToHtml(deck) })
        });
        return fd;
    }
};