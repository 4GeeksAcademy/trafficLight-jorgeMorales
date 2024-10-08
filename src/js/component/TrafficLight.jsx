import React, { useState } from "react";
import "../../styles/index.css"; // Importamos los estilos

const TrafficLight = () => {
    const [color, setColor] = useState("red"); // Estado para manejar la luz activa
    const [colors, setColors] = useState(["red", "yellow", "green"]); // Estado para almacenar los colores del semáforo

    // Función para alternar entre los colores rojo, amarillo y verde
    const toggleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length; // Alterna entre los colores existentes
        setColor(colors[nextIndex]);
    };

    // Función para agregar el color púrpura al semáforo
    const addPurple = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    };

    return (
        <div className="text-center">
            <div className="semaforo">
                <div
                    className={`light red ${color === "red" ? "on" : ""}`}
                    onClick={() => setColor("red")}
                ></div>
                <div
                    className={`light yellow ${color === "yellow" ? "on" : ""}`}
                    onClick={() => setColor("yellow")}
                ></div>
                <div
                    className={`light green ${color === "green" ? "on" : ""}`}
                    onClick={() => setColor("green")}
                ></div>

                {/* Agregar el color púrpura si está en la lista de colores */}
                {colors.includes("purple") && (
                    <div
                        className={`light purple ${color === "purple" ? "on" : ""}`}
                        onClick={() => setColor("purple")}
                    ></div>
                )}
            </div>

            <button className="btn btn-primary mt-3" onClick={toggleColor}>
                Alternar color
            </button>
            <button className="btn btn-secondary mt-3" onClick={addPurple}>
                Añadir púrpura
            </button>
        </div>
    );
};

export default TrafficLight;
