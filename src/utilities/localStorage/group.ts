import { storage } from "./storageInstance"
import { createAndSaveNotesToLS } from "./notes"

export interface IGroup {
    id: string
    groupName: string
    bgColor: string
}

export const groupKey = "groups"


/**
 * creates new group and an empty notes array using id as key for the notes and saves in local storage 
 */
export const saveNewGroupToLS = (groupName: string, bgColor: string, id: string) => {
    const data = getGroupsFromLS() || [];

    const newGroup: IGroup = {
        groupName,
        bgColor,
        id
    }

    data.unshift(newGroup)

    storage.set(groupKey, JSON.stringify(data));

    createAndSaveNotesToLS(id);
}

/**
 * 
 * @returns user saved groups and their notes from local storage
 */
export const getGroupsFromLS = (): IGroup[] | null => {
    const data = storage.getString(groupKey);

    if (data === undefined) return null

    return JSON.parse(data);
}


/**
 * returns if a provided groupName doesn't exist in local storage
 */
export const isGroupNameUnique = (groupName: string) => {
    const groups = getGroupsFromLS();

    if (groups === null) return true

    let isUnique = groups.some(g => g.groupName === groupName);

    // if above function returns true then it means a same groupName already exists so not('!') operator is used here
    return !isUnique
}