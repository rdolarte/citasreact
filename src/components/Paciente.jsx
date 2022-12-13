const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, alta, sintomas, id } = paciente;
  return (
    <div className="mx-5 my-5 bg-white shadow-sm px-5 py-5 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {' '}
          <span className="font-normal normal-case" >{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {' '}
          <span className="font-normal normal-case" >{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Correo Electronico: {' '}
          <span className="font-normal normal-case" >{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {' '}
          <span className="font-normal normal-case" >{alta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> Sintomas: {' '}
          <span className="font-normal normal-case" >{sintomas}</span>
        </p>
        <div className="flex justify-between mt-5">
          <button
            type="button"
            className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>
          <button className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
            onClick={() => eliminarPaciente(id)}
            >
            Eliminar
          </button>
        </div>
      </div>
  )
}

export default Paciente