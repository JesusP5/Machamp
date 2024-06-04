import pacientes from "./pacientes.js";
// 1 = Doctor no registrado, 2 = Doctor registrado, 3 = supervisor
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
    typeOfUser: "2",
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
    typeOfUser: "1",
    pacients: [pacientes[0], pacientes[1], pacientes[2]],
  },
  {
    id: 35645654,
    profileImage:
      "https://www.lavanguardia.com/files/image_948_465/files/fp/uploads/2023/03/07/64075a057861c.r_d.1068-561-5101.jpeg",
    name: "Ricardo",
    firstName: "Cortes",
    lastName: "Gonzalez",
    email: "ricky@pamet.com",
    password: "ricky123",
    idInstitution: 1,
    typeOfUser: "3",
    pacients: [pacientes[1], pacientes[3]],
  },
];
export default usuarios;
