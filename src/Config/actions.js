export const addUserAction = (user) => {
    return {type:"Add_user", payload:user}
}
export const updateUserAction = (newuser) => {
    return {type:"Update_user", payload:newuser}
}
export const deleteUserAction = (id) => {
    return {type:"Delete_user", payload:id}
}