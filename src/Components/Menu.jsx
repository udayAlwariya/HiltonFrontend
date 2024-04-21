import { useState } from "react";
export function Menu({Details}){
    let menuArray = Details.menu;
    const initialMenu = menuArray.flatMap((menuItem) => menuItem.items);
    const [menu, setMenu] = useState(initialMenu);
    const [type, setType] = useState("all");
    function clickHandler(type) {
        setType(type);
        let menuObejct = menuArray.filter((value) => value.type == type)[0];
        setMenu(menuObejct.items);
      }
    return (
        <>
         <div className="mt-3">
            <h1 className="text-xl font-semibold">MENU</h1>
            <div className="sm:flex pr-2 sm:pr-0 font-semibold mt-3 sm:space-x-2">
              <h1
                onClick={(e) => {
                  setType("all");
                  setMenu(initialMenu);
                }}
                className={`border hover:bg-gray-200 ${ type=="all" && "bg-slate-300"} cursor-pointer border-black px-3 py-1`}
              >
                ALL
              </h1>
              {Details.menu.map((value) => {
                return (
                  <h1
                    onClick={() => clickHandler(value.type)}
                    className={`border ${(value.type==type) && "bg-slate-300"} cursor-pointer border-black px-3 py-1`}
                  >
                    {value.type.toUpperCase()}
                  </h1>
                );
              })}
            </div>
            <div className="mt-4">
              {menu &&
                menu.map((value,index) => {
                  return (
                    <div key={index} className="flex text-lg space-x-2">
                      <h1>{index+1}.{value.item} -</h1>
                      <h1 className="font-semibold">${value.price}</h1>
                    </div>
                  );
                })}
            </div>
          </div>
        </>
    )
}