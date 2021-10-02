import "./App.scss";
import airplane from "./img/airplane.png";
import airplaneDelete from "./img/airplane-delete.png";
import FormToDo from "./component/FormToDo";
import { useState, useEffect } from "react";

function App() {
    const [dataList, setDataList] = useState(() => {
        const localData = JSON.parse(localStorage.getItem("dataReactTodoList"));
        if (localData === null) return [];
        return localData;
    });

    const handleSubmit = (data) => {
        const newDataList = [...dataList];
        newDataList.splice(0, 0, data);
        setDataList(newDataList);
        // localStorage.setItem("dataReactTodoList", JSON.stringify(newDataList));
    };
    const handleClickItem = (id) => {
        const newDataList = [...dataList];
        newDataList.splice(id, 1);
        setDataList(newDataList);
    };

    useEffect(() => {
        localStorage.setItem("dataReactTodoList", JSON.stringify(dataList));
    }, [dataList]);

    return (
        <>
            <div className="container">
                <div className="main">
                    <h1 className="title">React To Do List</h1>
                    <FormToDo
                        plane={airplaneDelete}
                        data={dataList}
                        onSubmitForm={handleSubmit}
                        onCickItem={handleClickItem}
                    />
                </div>
            </div>
            <div className="plan-way">
                <div className="container">
                    <img src={airplane} alt="" />
                </div>
            </div>
        </>
    );
}

export default App;
