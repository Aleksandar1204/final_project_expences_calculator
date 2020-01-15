export const getProducts = (data) => {
    return {
        type: 'GET_PRODUCTS',
        payload: data
    }
}
export const saveProductAction = (data) => {
    return {
        type: 'SAVE_PRODUCT',
        payload: data
    }
}

export const getTotalPrice = (price) => {
    return {
        type: "GET_TOTAL_PRICE",
        payload: price
    }
}

export const deleteProduct = (product) => {
    return {
        type: "DELETE_PRODUCT",
        payload: product
    }
}
export const tableUpdated = (tableUpdated) => {
    return {
        type: "TABLE_UPDATED",
        tableUpdated
    }
}

