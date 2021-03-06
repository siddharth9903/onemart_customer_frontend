import { categoryConstants } from "./constants"
import axios from '../helpers/axios'


export const getAllCategory=()=>{    
    return async(dispatch)=>{
        dispatch({type:categoryConstants.GET_ALL_CATEGORIES_REQUEST})
        const res=await axios.get('/category/getcategory')
        if(res.status===200){
            console.log('in 200')
            const {categoryList}=res.data
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload:{categories:categoryList}
            })
        }else{
            dispatch({
                type:categoryConstants.GET_ALL_CATEGORIES_FAILED
            })
        }

    }
}

