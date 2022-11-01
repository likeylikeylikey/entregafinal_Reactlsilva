import React, { useState } from "react";
import Person from "./Person";

//Mapa entrega-- agregarlo como category y ponerle routing como pestaña de equipo??
const Persons = () => {
    const [persons, setPersons] = useState([
        {
            id: 1,
            name: "Lucas",
            role: "Store Manager",
            img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
            id: 2,
            name: "Matías",
            role: "Community Manager",
            img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },
    {
            id: 3,
            name: "Alejandro",
            role: "Logistics Manager",
            img: "https://bootdey.com/img/Content/avatar/avatar4.png",
    },
]);

    return (
        <div className="row">
            {persons.map((person) => {
                return (
                    <Person
                        key={person.id}
                        name={person.name}
                        img={person.img}
                        role={person.role}
                    />
                );
            })}
        </div>
    );
};

export default Persons;