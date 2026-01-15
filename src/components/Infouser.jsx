import "./Infouser.css";

export default function Infouser() {
    const user = {
        nameTH: "วีรภัทร วิเศษสมบัติ",
        nameENG: "Veerapat Visaidsombat",
        studentid: "653380251-3",
        facultyTH: "วิทยาลัยการคอมพิวเตอร์",
        facultyENG: "College of Computing",
        departmentTH: "วิทยาการคอมพิวเตอร์",
        departmentENG: "Department of Computer Engineering"
    };
    return (
        <div className="infouser">
            <h1>ข้อมูลนักศึกษา</h1>
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