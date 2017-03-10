
let categories = [
    { id: 1, name: "Movies" },
    { id: 2, name: "Books to read" },
    { id: 3, name: "Events to visit" },
    { id: 4, name: "Countries to visit" }
]

let wishes = [
    { id: 1, categoryId: 1, name: "Logan" },
    { id: 2, categoryId: 1, name: "Matrix" },
    { id: 3, categoryId: 1, name: "X-men" },
    { id: 4, categoryId: 1, name: "Matrix - 2" },

    { id: 5, categoryId: 2, name: "Alice in wonderland" },
    { id: 6, categoryId: 2, name: "Harry Potter" },
    { id: 7, categoryId: 2, name: "Kolobok" },
    { id: 8, categoryId: 2, name: "Game of the thrones" },

    { id: 9, categoryId: 3, name: "Rock concert" },
    { id: 10, categoryId: 3, name: "Restaurant" },
    { id: 11, categoryId: 3, name: "New cinema" },
    { id: 12, categoryId: 3, name: "Friend" },

    { id: 13, categoryId: 4, name: "China" },
    { id: 14, categoryId: 4, name: "USA" },
    { id: 15, categoryId: 4, name: "England" },
    { id: 16, categoryId: 4, name: "India" },
    
]


export function getCatrgories (user) {
    return categories;
}

export function getWishesByCategory(categoryId) {
    return wishes.filter(item => item.categoryId === categoryId);
}
