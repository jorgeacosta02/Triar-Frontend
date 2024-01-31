import { IUserDataFromDB } from "../../Interfaces/userInterfaces"


export const localStorageSetUserData = (data:IUserDataFromDB) => {

    console.log('data en localStorageSetUserData', data)


    const user = {
        id: data._id,
        firstName : data.firstName,
        lastName : data.lastName,
        dni: data.dni,
        email: data.email,
        active : data.active,
        role : data.role,
    }

    console.log('data en localStorageSetUserData', data)
   
    localStorage.setItem("user", JSON.stringify(user))
}