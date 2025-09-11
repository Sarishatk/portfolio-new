function Skills() {
    const skills = [
        { icon: "fa-react", name: "React", color: "#61DAFB" },
        { icon: "fa-css3", name: "CSS3", color: "#264de4" },
        { icon: "fa-html5", name: "HTML5", color: "#e34c26" },
        { icon: "fa-python", name: "Python", color: "#3776AB" },
        { icon: "fa-js", name: "JavaScript", color: "#f7df1e" },
        { icon: "fa-python", name: "Django", color: "#092E20" },
    ];

    return (
        <div className="p-4 d-flex flex-column justify-content-center h-100 text-center">
            <h2 className="guntertest-font mb-3">🚀 My Skills</h2>
            <hr className="w-25 mx-auto mb-4" />
            
            <div className="row g-4">
                {skills.map((skill, index) => (
                    <div key={index} className="col-6 col-md-4">
                        <div 
                            className="card shadow-lg border-0 rounded-4 p-3 h-100 d-flex align-items-center justify-content-center skill-card"
                            style={{ transition: "0.3s" }}
                        >
                            <i 
                                className={`fa-brands ${skill.icon} fs-1 mb-2`} 
                                style={{ color: skill.color }}
                            ></i>
                            <h5 className="urbanist">{skill.name}</h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
