
import {createSlice} from "@reduxjs/toolkit";
let productId =0
const init = {
    dataList : [],
    userList : [],
    referPr :""
}


const dataReducer = createSlice({
    name: 'dataReducer',
    initialState: init,
    reducers: {
        add: (state , action) => {
            
            state.dataList.push(action.payload.Prname)
                // {productId:productId},{count:action.payload.count},{price:action.payload.price})
            productId = productId +1
          
        },
        remove: (state, action) => {
            state.dataList = []
        },
        deletePr: (state,action) => {
            
            state.dataList.map( (item,index)=> {
                if (item!=null)
                    if (item.toLowerCase().localeCompare(action.payload.PrId2.toLowerCase())== 0) {
                        delete state.dataList[index]
                    } 
            })
        },
        showInfo: (state, action) => {
            state.dataList.forEach((item,index) => {
                if (Number(action.payload.PrId) > state.dataList.length) {
                    state.referPr ='Index isOut of Range'
                } else
                    if (Number(action.payload.PrId)==index) {
                        state.referPr= item
                    }
            })
        },
        addUser: (state,action) => {
            state.userList.push(action.payload.name)
        },
        clearUsers: (state,action) => {
            state.userList =[]
        }

    }
})

export const {add,remove,addUser,clearUsers,showInfo,deletePr} = dataReducer.actions
export default dataReducer.reducer


