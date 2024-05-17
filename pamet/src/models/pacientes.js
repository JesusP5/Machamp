const pacientes = [
    {
        id: 1,
        name: "Alan",
        firstName: "Olvera",
        lastName: "Cristino",
        phone: "442 144 6031",
        dischargeDate: "2021-09-01",
        curp: "OICA960901HQRLLN05",
        medicines: [
            {
                id: 1,
                name: "Paracetamol",
                dose: "1 tableta cada 8 horas",
                startDate: "2021-09-01",
                endDate: "2021-09-10",
            },
            {
                id: 2,
                name: "Ibuprofeno",
                dose: "1 tableta cada 12 horas",
                startDate: "2021-09-01",
                endDate: "2021-09-10",
            },
        ],
        medicalHistory: [
            {
                id: 1,
                date: "2021-09-01",
                diagnostic: "Gripe",
                treatment: "Descanso",
            },
            {
                id: 2,
                date: "2021-09-02",
                diagnostic: "Gripe",
                treatment: "Descanso",
            },
        ],
    },
    {
        id: 2,
        name: "Brenda",
        firstName: "Martínez",
        lastName: "Gómez",
        phone: "555 123 4567",
        dischargeDate: "2022-02-15",
        curp: "MOGB940215MDFLMN09",
        medicines: [
            {
                id: 1,
                name: "Amoxicilina",
                dose: "500 mg cada 8 horas",
                startDate: "2022-02-01",
                endDate: "2022-02-10",
            },
            {
                id: 2,
                name: "Ibuprofeno",
                dose: "200 mg cada 12 horas",
                startDate: "2022-02-01",
                endDate: "2022-02-10",
            },
        ],
        medicalHistory: [
            {
                id: 1,
                date: "2022-02-01",
                diagnostic: "Infección de garganta",
                treatment: "Antibióticos",
            },
            {
                id: 2,
                date: "2022-02-10",
                diagnostic: "Recuperación",
                treatment: "Ninguno",
            },
        ],
    },
    {
        id: 3,
        name: "Carlos",
        firstName: "Hernández",
        lastName: "López",
        phone: "333 987 6543",
        dischargeDate: "2023-03-20",
        curp: "HELC930320HJCLPR03",
        medicines: [
            {
                id: 1,
                name: "Losartan",
                dose: "50 mg una vez al día",
                startDate: "2023-03-01",
                endDate: "2023-03-31",
            },
            {
                id: 2,
                name: "Aspirina",
                dose: "100 mg una vez al día",
                startDate: "2023-03-01",
                endDate: "2023-03-31",
            },
        ],
        medicalHistory: [
            {
                id: 1,
                date: "2023-03-01",
                diagnostic: "Hipertensión",
                treatment: "Medicación",
            },
            {
                id: 2,
                date: "2023-03-20",
                diagnostic: "Controlado",
                treatment: "Seguimiento",
            },
        ],
    },
    {
        id: 4,
        name: "Diana",
        firstName: "Pérez",
        lastName: "Sánchez",
        phone: "222 567 8901",
        dischargeDate: "2024-01-10",
        curp: "PESD920110MDFLRN08",
        medicines: [
            {
                id: 1,
                name: "Metformina",
                dose: "850 mg dos veces al día",
                startDate: "2024-01-01",
                endDate: "2024-01-31",
            },
            {
                id: 2,
                name: "Insulina",
                dose: "10 unidades antes de las comidas",
                startDate: "2024-01-01",
                endDate: "2024-01-31",
            },
        ],
        medicalHistory: [
            {
                id: 1,
                date: "2024-01-01",
                diagnostic: "Diabetes Tipo 2",
                treatment: "Medicación y dieta",
            },
            {
                id: 2,
                date: "2024-01-10",
                diagnostic: "Controlado",
                treatment: "Seguimiento",
            },
        ],
    },
];

export default pacientes;
