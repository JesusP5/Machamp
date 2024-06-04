import patients from "./pacientes";
const doctors = [
{
    "name": "Dr. John Smith",
    "First Name": "John",
    "Last Name": "Smith",
    "ID": "123456",
    "Specialization": "Cardiology",
    "Department": "Internal Medicine",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/1.jpg",
},
{
    "name": "Dr. Emily Johnson",
    "First Name": "Emily",
    "Last Name": "Johnson",
    "ID": "789012",
    "Specialization": "Pediatrics",
    "Department": "Pediatric Medicine",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/2.jpg"
},
{
    "name": "Dr. Michael Williams",
    "First Name": "Michael",
    "Last Name": "Williams",
    "ID": "345678",
    "Specialization": "Orthopedics",
    "Department": "Surgical Medicine",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/3.jpg"
},
{
    "name": "Dr. Sophia Brown",
    "First Name": "Sophia",
    "Last Name": "Brown",
    "ID": "901234",
    "Specialization": "Dermatology",
    "Department": "Dermatology",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/4.jpg"
},
{
    "name": "Dr. Daniel Taylor",
    "First Name": "Daniel",
    "Last Name": "Taylor",
    "ID": "567890",
    "Specialization": "Ophthalmology",
    "Department": "Ophthalmology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/5.jpg"
},
{
    "name": "Dr. Olivia Martinez",
    "First Name": "Olivia",
    "Last Name": "Martinez",
    "ID": "123456",
    "Specialization": "Obstetrics and Gynecology",
    "Department": "Women's Health",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/6.jpg"
},
{
    "name": "Dr. James Johnson",
    "First Name": "James",
    "Last Name": "Johnson",
    "ID": "789012",
    "Specialization": "Neurology",
    "Department": "Neurology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/7.jpg"
},
{
    "name": "Dr. Emma Davis",
    "First Name": "Emma",
    "Last Name": "Davis",
    "ID": "345678",
    "Specialization": "Psychiatry",
    "Department": "Psychiatry",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/8.jpg"
},
{
    "name": "Dr. Benjamin Wilson",
    "First Name": "Benjamin",
    "Last Name": "Wilson",
    "ID": "901234",
    "Specialization": "Urology",
    "Department": "Urology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/9.jpg"
},
{
    "name": "Dr. Ava Anderson",
    "First Name": "Ava",
    "Last Name": "Anderson",
    "ID": "567890",
    "Specialization": "Endocrinology",
    "Department": "Endocrinology",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/10.jpg"
},
{
    "name": "Dr. Matthew Thomas",
    "First Name": "Matthew",
    "Last Name": "Thomas",
    "ID": "123456",
    "Specialization": "Gastroenterology",
    "Department": "Gastroenterology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/11.jpg"
},
{
    "name": "Dr. Isabella Martinez",
    "First Name": "Isabella",
    "Last Name": "Martinez",
    "ID": "789012",
    "Specialization": "Oncology",
    "Department": "Cancer Center",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/12.jpg"
},
{
    "name": "Dr. Samuel Clark",
    "First Name": "Samuel",
    "Last Name": "Clark",
    "ID": "345678",
    "Specialization": "Allergy and Immunology",
    "Department": "Allergy and Immunology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/13.jpg"
},
{
    "name": "Dr. Mia Rodriguez",
    "First Name": "Mia",
    "Last Name": "Rodriguez",
    "ID": "901234",
    "Specialization": "Rheumatology",
    "Department": "Rheumatology",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/14.jpg"
},
{
    "name": "Dr. Elijah Lewis",
    "First Name": "Elijah",
    "Last Name": "Lewis",
    "ID": "567890",
    "Specialization": "Nephrology",
    "Department": "Nephrology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/15.jpg"
},
{
    "name": "Dr. Charlotte Wilson",
    "First Name": "Charlotte",
    "Last Name": "Wilson",
    "ID": "123456",
    "Specialization": "Pulmonology",
    "Department": "Respiratory Medicine",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/16.jpg"
},
{
    "name": "Dr. Alexander Garcia",
    "First Name": "Alexander",
    "Last Name": "Garcia",
    "ID": "789012",
    "Specialization": "Hematology",
    "Department": "Hematology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/17.jpg"
},
{
    "name": "Dr. Harper Davis",
    "First Name": "Harper",
    "Last Name": "Davis",
    "ID": "345678",
    "Specialization": "Dentistry",
    "Department": "Dentistry",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/18.jpg"
},
{
    "name": "Dr. Daniel Johnson",
    "First Name": "Daniel",
    "Last Name": "Johnson",
    "ID": "901234",
    "Specialization": "Plastic Surgery",
    "Department": "Plastic Surgery",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/19.jpg"
},
{
    "name": "Dr. Olivia Martinez",
    "First Name": "Olivia",
    "Last Name": "Martinez",
    "ID": "567890",
    "Specialization": "Otolaryngology",
    "Department": "Ear, Nose, and Throat",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/20.jpg"
},
{
    "name": "Dr. Ethan Anderson",
    "First Name": "Ethan",
    "Last Name": "Anderson",
    "ID": "123456",
    "Specialization": "Gynecology",
    "Department": "Women's Health",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/21.jpg"
},
{
    "name": "Dr. Sophia Rodriguez",
    "First Name": "Sophia",
    "Last Name": "Rodriguez",
    "ID": "789012",
    "Specialization": "Neonatology",
    "Department": "Pediatric Medicine",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/22.jpg"
},
{
    "name": "Dr. Benjamin Clark",
    "First Name": "Benjamin",
    "Last Name": "Clark",
    "ID": "345678",
    "Specialization": "Cardiothoracic Surgery",
    "Department": "Surgical Medicine",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/23.jpg"
},
{
    "name": "Dr. Mia Lewis",
    "First Name": "Mia",
    "Last Name": "Lewis",
    "ID": "901234",
    "Specialization": "Oncology",
    "Department": "Cancer Center",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/24.jpg"
},
{
    "name": "Dr. Alexander Thomas",
    "First Name": "Alexander",
    "Last Name": "Thomas",
    "ID": "567890",
    "Specialization": "Dermatology",
    "Department": "Dermatology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/25.jpg"
},
{
    "name": "Dr. Harper Wilson",
    "First Name": "Harper",
    "Last Name": "Wilson",
    "ID": "123456",
    "Specialization": "Orthopedics",
    "Department": "Surgical Medicine",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/26.jpg"
},
{
    "name": "Dr. Ethan Garcia",
    "First Name": "Ethan",
    "Last Name": "Garcia",
    "ID": "789012",
    "Specialization": "Gastroenterology",
    "Department": "Gastroenterology",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/27.jpg"
},
{
    "name": "Dr. Mia Anderson",
    "First Name": "Mia",
    "Last Name": "Anderson",
    "ID": "345678",
    "Specialization": "Neurology",
    "Department": "Neurology",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/28.jpg"
},
{
    "name": "Dr. Samuel Clark",
    "First Name": "Samuel",
    "Last Name": "Clark",
    "ID": "901234",
    "Specialization": "Psychiatry",
    "Department": "Psychiatry",
    "ProfilePicture": "https://randomuser.me/api/portraits/men/29.jpg"
},
{
    "name": "Dr. Ava Martinez",
    "First Name": "Ava",
    "Last Name": "Martinez",
    "ID": "567890",
    "Specialization": "Urology",
    "Department": "Urology",
    "ProfilePicture": "https://randomuser.me/api/portraits/women/30.jpg"
}
]
export default doctors;