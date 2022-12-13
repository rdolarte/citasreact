import { useState, useEffect } from 'react';
import Error from './Error';
const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    if(Object.keys(paciente).length > 0) {
      console.log(paciente);
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
    }, [paciente]);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar  
    if([nombre, propietario, email, alta, sintomas].includes('')) {
      setError(true);
      return;
    } 
    setError(false);

    const generarId = () => {
      const randon = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36);
      return randon + fecha ;
    };
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      alta, 
      sintomas
    }
    if (paciente.id) {
      // Actualizar
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      // Agregar
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
  }
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-5 px-5 mb-5">
        {error ? <Error>'Todos los campos son obligatorios' </Error> : null}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Propietario de la Mascota
          </label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={e => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Correo Electrónico
          </label>
          <input 
            id="email"
            type="text" 
            placeholder="Correo propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={e => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>
        <input 
          type="submit"
          className="bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value= {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />
      </form>
    </div>
  )
}

export default Formulario