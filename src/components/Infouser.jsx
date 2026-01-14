import "./Infouser.css";

export default function Infouser() {
    const user = {
        nameTH: "วีรภัทร วิเศษสมบัติ",
        nameENG: "Veerapat Visaidsombat",
        studentid: "653380251-3",
        facultyTH: "คณะวิศวกรรมศาสตร์",
        facultyENG: "Faculty of Engineering",
        departmentTH: "ภาควิชาวิศวกรรมคอมพิวเตอร์",
        departmentENG: "Department of Computer Engineering"
    };
    return (
        <div className="infouser">
            <h1>My Account</h1>
            <p>ชื่อ : {user.nameTH}</p>
            <p>ชื่อ (อังกฤษ) : {user.nameENG}</p>
            <p>รหัสนักศึกษา : {user.studentid}</p>
            <p>คณะ : {user.facultyTH}</p>
            <p>Faculty : {user.facultyENG}</p>
            <p>ภาควิชา : {user.departmentTH}</p>
            <p>Department : {user.departmentENG}</p>
        </div>
    );
}