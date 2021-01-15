import Axios from 'axios'

export const getAllData = () => {
    return (dispatch)=> {
        Axios.get('https://randomuser.me/api/?results=28')
        .then((res)=> {
            localStorage.setItem('userdata', JSON.stringify(res.data.results))
            dispatch({type: 'GETDATA', payload: res.data.results})
        }).catch((err)=> console.log(err))
    }
}

export const noReload = (data) => {
    return {
        type: 'GETDATA',
        payload: data
    }
}