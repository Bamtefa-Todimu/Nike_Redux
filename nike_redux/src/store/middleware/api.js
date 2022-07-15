import * as apiActions from '../api'

const api = ({dispatch}) => next => async action => {
    if(action.type !== apiActions.apiCallBegan.type) return next(action)


    const {url,method,data,onStart,onError,onSuccess} = action.payload

    if(onStart) dispatch({type:onStart})

    // next(action)

    try
    {
        console.log(data)
        var allShoes
        if(method === "GET" || method === "get")
        {
             allShoes = await fetch(url,{
            method:method,
            
        })
        }

        else
        {
             allShoes = await fetch(url,{
            method:method,
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        })
        }
        

        const jsonShoes =await allShoes.json()

        dispatch(apiActions.apiCallSuccess(jsonShoes))

        if(jsonShoes.errorMessage)
        {
            return dispatch({type:onError,payload:{errMessage:jsonShoes.errorMessage,from:onSuccess}})
        }
        dispatch({type:onSuccess,payload:jsonShoes})
    }
    catch(E)
    {
        console.log(E)
        dispatch({type:onError})
    }
}

export default api