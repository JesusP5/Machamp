import pacientes from "./pacientes.js";

const usuarios = [
    {
        id: 1,
        profileImage: "https://plus.unsplash.com/premium_photo-1661578535048-7a30e3a71d25?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RHJ8ZW58MHx8MHx8fDA%3D",
        name: "Juan",
        firstName: "Perez",
        lastName: "Gomez",
        email: "juanp@pamet.com",
        password: "juan123",
        idInstitution: 1,
        pacients: [pacientes[0], pacientes[1], pacientes[2], pacientes[3]],
    },
    {
        id: 2,
        profileImage: "https://lh3.googleusercontent.com/proxy/lFDt8_tOmdrNV2SpT3R-d6ebJ-4wAGD4HbAdUxQlpnu3Xzmwz66E7ysY0UrYiK12RFs5NUwg2dBI1_u6cWP6kl1gUe7A7q_AC4TPDrawBJincI0-nLB5QfRf6PsMfkvBXjzweFATHrNvVdhT",
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
        profileImage: "https://www.imss.gob.mx/sites/all/statics/styles/flexslider_full/public/i2f_news/Foto%201_54.jpg?itok=3I5ukJ3k",
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