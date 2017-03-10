
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
