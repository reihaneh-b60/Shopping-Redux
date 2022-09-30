import { useDispatch, useSelector } from "react-redux";
import {add, addUser, clearUsers, remove,showInfo,deletePr} from "../../redux/reducers/dataReducer/dataReducer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { Button } from "bootstrap";

const HomePage = () => {

    const dispatch = useDispatch()
    var dataList = useSelector((state) => state.data.dataList)
    var userList = useSelector((state)=> state.data.userList)
    var referPr = useSelector((state)=>state.data.referPr )

  
    return (
        <div>
            <header  className="w-100  border head_class rounded">
                <div> <h1 className=" pt-3 text-center"> SHOPPING MALL</h1> </div>
            </header>
            <main className="w-100 h-auto d-flex justify-between">
                <div className="container w-25 h-100 border rounded ">
                    <h2 className="text-canter p-3 text-primary">Adding User</h2>
                    <div class="mb-3">
                        <label for="Input1" className="form-label">Enter the Name of User:</label>
                        <input type="text" className="form-control" id="Input1" />
                        <button className="btn btn-primary my-3" onClick={()=>dispatch(addUser({name:document.getElementById("Input1").value}))}> Add </button>
                        <p>{`userlist : ${userList}`}</p>
                        <div className="border border-danger rounded p-2 bg-light">
                            <p className="text-danger float-left m-2">If you want reset the user list click button: </p>
                            <button className="btn btn-danger m-1" onClick={()=> dispatch(clearUsers())}>Clear Users List</button>
                        </div>
                    </div>
                </div>
                <div className="container w-75 h-100 border rounded">
                    <h2 className="p-3 text-primary text-center">List of Products</h2>
                    <div class="container">
                        <div  class="pb-2 mb-4">
                            <label for="por1" class="form-label col-2">product Name</label>
                            <input type="text" id="por1"  class="form-control-sm border-light col-4" />
                        </div>
                        <div class="pb-2 mb-4"> 
                             <label for="por2" class="form-label col-2">Count</label>
                            <input type="text" class="form-control-sm border-light col-4" id="por2"/>
                        </div>
                        <div class="pb-2 mb-4">
                             <label for="por3" class="form-label col-2">Price</label>
                            <input type="text" class="form-control-sm border-light col-4 " id="por3"/>
                        </div>
                        <button class="btn btn-primary ms-3" 
                            onClick={()=> dispatch(add({Prname:document.getElementById("por1").value},
                                                {count:document.getElementById("por2").value},{price:document.getElementById("por3")}))}>Add Product</button>
                        <p className="mt-1">{`List of Product : ${dataList}`}</p>
                    </div> 
                    <div className="border border-danger rounded p-2 d-flex flex-row justify-content-between px-3 bg-light">
                        <div>
                            <p>Enter the Id of product that you want delete:</p>
                            <input type="text" class="form-control-sm border-light col-4 m-3" id="PrId2"/>
                            <button class="btn btn-danger " onClick={()=>dispatch( deletePr({PrId2:document.getElementById("PrId2").value}))}>Delete</button> 
                        </div>
                        <div>
                            <p className="text-danger float-left ">If you want reset the product list click button: </p>
                            <button className="btn btn-danger m-1" onClick={()=> dispatch(remove())}>Clear product List</button>
                        </div>
                    </div>
                    <div>
                        <div>Enter the Product Id:  <input type="text" class="form-control-sm border-light col-4 m-3" id="prId"/></div>
                            <button class="btn btn-success" onClick={()=>dispatch( showInfo({PrId:document.getElementById("prId").value}))}>Show info</button>
                        <div>
                        <p className="border-0 border-bottom p-2">{`The Product Name is: ${referPr}`} </p>
                        </div>    
                    </div>

                </div>
    
            </main>
        </div>
        
    )
}

export default HomePage;