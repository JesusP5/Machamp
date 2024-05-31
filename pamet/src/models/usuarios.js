import pacientes from "./pacientes.js";
// 1 = Doctor no registrado, 2 = Doctor registrado, 3 = Paciente 
const usuarios = [
  {
    id: 13243234,
    profileImage:
      "https://es.familydoctor.org/wp-content/uploads/2018/02/41808433_l-848x566.jpg",
    name: "Juan",
    firstName: "Perez",
    lastName: "Gomez",
    email: "juanp@pamet.com",
    password: "juan123",
    idInstitution: 1,
    typeOfUser: 1,
    pacients: [pacientes[0], pacientes[1], pacientes[2], pacientes[3]],
  },
  {
    id: 24543534,
    profileImage:
      "https://lh3.googleusercontent.com/proxy/lFDt8_tOmdrNV2SpT3R-d6ebJ-4wAGD4HbAdUxQlpnu3Xzmwz66E7ysY0UrYiK12RFs5NUwg2dBI1_u6cWP6kl1gUe7A7q_AC4TPDrawBJincI0-nLB5QfRf6PsMfkvBXjzweFATHrNvVdhT",
    name: "Maria",
    firstName: "Sanchez",
    lastName: "Gutierrez",
    email: "mariaGP@pamet.com",
    password: "maria123",
    idInstitution: 2,
    typeOfUser: 2,
    pacients: [pacientes[0], pacientes[1], pacientes[2]],
  },
  {
    id: 35645654,
    profileImage:
      "https://www.imss.gob.mx/sites/all/statics/styles/flexslider_full/public/i2f_news/Foto%201_54.jpg?itok=3I5ukJ3k",
    name: "Ricardo",
    firstName: "Cortes",
    lastName: "Gonzalez",
    email: "RickyCG@pamet.com",
    password: "ricky123",
    idInstitution: 1,
    typeOfUser: 3,
    pacients: [pacientes[1], pacientes[3]],
  },
];
export default usuarios;
