import { Route, Routes } from "react-router-dom";
import ShowItems from "./_02_ShowItems";
import AddNewItem from "./_06_AddNewItem";

function ItemRouters() {
    return ( 
        <Routes>
            <Route path="/items" element={<ShowItems />}></Route> 
            <Route path="/add" element={<AddNewItem />}></Route> 
        </Routes>
     );
}

export default ItemRouters;