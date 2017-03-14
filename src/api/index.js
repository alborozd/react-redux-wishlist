
import { getCatrgories, getWishesByCategory as getWishesMock } from "./mock";


export function getCategories(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                categories: getCatrgories()
            });
        }, 2000);
    });
}


export function getWishesByCategory(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ wishes: getWishesMock(categoryId) });
        }, 2000);
    })
}

export function getCategoryById(categoryId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            categoryId = categoryId - 0;
            let category = getCatrgories().find(item => item.id === categoryId);
            if (!category) reject();
            else {
                category.wishes = []
                category.wishes = getWishesMock(categoryId);

                resolve(category);
            }
        }, 2000);
    })
}