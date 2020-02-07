export const updateObject = (oldObject, updatedProperties) => {
    console.log(updatedProperties)
    return {
        ...oldObject,
        ...updatedProperties
    }
}