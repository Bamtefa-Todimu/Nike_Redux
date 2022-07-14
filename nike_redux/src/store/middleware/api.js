import * as apiActions from '../api'

const api = ({dispatch}) => next => async action => {
    if(action.type !== apiActions.apiCallBegan.type) return next(action)


    const {url,method,data,onStart,onError,onSuccess} = action.payload

    if(onStart) dispatch({type:onStart})

    // next(action)

    try
    {
        const allShoes = await fetch(url,{
            method:method,
            data:data,
            headers:{
                "Content-Type":"application/json"
            }
        })

        const jsonShoes =await allShoes.json()

        dispatch(apiActions.apiCallSuccess(jsonShoes))
        dispatch({type:onSuccess,payload:jsonShoes})
    }
    catch(E)
    {
        dispatch({type:onError})
    }
}

export default api