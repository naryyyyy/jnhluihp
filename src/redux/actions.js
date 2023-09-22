import { types } from "./types";

export function addUserAction(user){
    return async function(dispatch){
        const options={
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify(user)
        }

        const response=await fetch('https://jsonplaceholder.typicode.com/users',options)
    }
}

export function fetchUsersAction(id) {
  return async function(dispatch) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      
      if (!response.ok) {
        throw new Error(`Ошибка при запросе данных пользователя с ID ${id}`);
      }

      const data = await response.json();

      dispatch(getUserInfoAction(data));
    } catch (error) {
      console.error(`Произошла ошибка при получении информации о пользователе: ${error}`);
      }
  };
}

export function getUserInfoAction(user) {
    return {
      type: types.GET_USER_INFO,
      payload: user
    };
  }