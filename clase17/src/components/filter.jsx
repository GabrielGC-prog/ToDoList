export const Filter = ({ mostrarActivas, setMostrarActivas }) => {
  const handleChecked = () => {
    setMostrarActivas(!mostrarActivas);
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={mostrarActivas}
          onChange={handleChecked}
        />
        Mostrar solo las tareas pendientes
      </label>
    </div>
  );
};
