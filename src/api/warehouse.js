import request from "./api"

export function getInventoriesData() {
    return request({
            url: 'api/warehouse/getInventoriesData',
            method: 'get',
    })
}

export function modifyInventories() {
    return request({
        url: 'api/warehouse/modifyInventories',
        method: 'put',
    })
}

export function uploadWarehouseIn() {
    return request({
        url: 'api/warehouse/uploadWarehouseIn',
        method: 'post',
    })
}

export function uploadWarehouseOut() {
    return request({
        url: 'api/warehouse/uploadWarehouseOut',
        method: 'post',
    })
}
