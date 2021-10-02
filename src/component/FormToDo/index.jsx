import React, { useState } from "react";
import PropTypes from "prop-types";
import "./FormToDo.scss";

FormToDo.propTypes = {
    data: PropTypes.array,
    onSubmitForm: PropTypes.func,
    onCickItem: PropTypes.func,
};

function FormToDo({ data, plane, onSubmitForm, onCickItem }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(value);
        setValue("");
    };

    const handleClick = (id) => {
        onCickItem(id);
    };

    const [value, setValue] = useState("");
    const updateValue = (e) => setValue(e.target.value);

    return (
        <div className="form col-xl-6">
            <form onSubmit={handleSubmit}>
                <div className="control">
                    <input
                        type="text"
                        className="input"
                        value={value}
                        onChange={updateValue}
                    />
                    <button
                        className="btns"
                        value="Submit"
                        onSubmit={handleSubmit}
                    >
                        <i class="fas fa-arrow-circle-right"></i>
                    </button>
                </div>
                <ul className="list">
                    {data.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="item"
                                onClick={() => handleClick(index)}
                            >
                                <img src={plane} alt="" />
                                <i class="fas fa-cloud"></i>
                                {item}
                            </li>
                        );
                    })}
                </ul>
            </form>
        </div>
    );
}

export default FormToDo;
