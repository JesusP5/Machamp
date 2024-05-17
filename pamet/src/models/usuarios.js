import pacientes from "./pacientes.js";

const usuarios = [
    {
        id: 1,
        name: "Juan",
        firstName: "Perez",
        lastName: "Gomez",
        email: "juanp@pamet.com",
        password: "juan123",
        idInstitution: 1,
        pacients: [pacientes[0]],
    },
    {
        id: 2,
        name: "Maria",
        firstName: "Sanchez",
        lastName: "Gutierrez",
        email: "mariaGP@pamet.com",
        password: "maria123",
        idInstitution: 2,
        pacients: [pacientes[0],pacientes[1], pacientes[2]],
    },
    {
        id: 3,
        name: "Ricardo",
        firstName: "Cortes",
        lastName: "Gonzalez",
        email: "RickyCG@pamet.com",
        password: "ricky123",
        idInstitution: 1,
        pacients: [pacientes[1], pacientes[3]],
    },
];
export default usuarios;