import { useEffect } from "react";
export default function Projects() {
    const projectData = [
      {
        projectName: "TAVOLA",
        description: "AI powered Restaurant Management System",
        liveUrl: "https://github.com/Sarishatk?tab=repositories",
        screenshot: "/projectImage/tavola.png",
        techStack: [["Typescript"]],
      },
        {
          projectName: "Netflix-clone",
          description:
            "Clone App of Netflix created using React",
          liveUrl: "https://netfix-clonetk.netlify.app/",
          screenshot:"/projectImage/clone.png",
          techStack: [["AngularJS", "NodeJS", "ExpressJS", "MongoDB"]],
        },
        {
          projectName: "Simple intrest calculator",
          description:
            "Calculates the interest earned or paid on a loan,investment,or saving account",
          liveUrl: "https://simple-interest-calculator-tk.netlify.app/",
          screenshot: "/projectImage/simple.png",
          techStack: [["NodeJS", "ExpressJS", "MongoDB", "ReactJS", "Socket.io"]],
        },
        {
          projectName: "Digital clock",
          description:
            "Simple digital clock is created by using HTML5 and JavaScript",
          liveUrl: "https://sarisha-digital-clock.netlify.app/",
          screenshot: "/projectImage/digiclock.png",
          techStack: [["ReactJS", "Firebase"]],
        },
        {
          projectName: "Reataurant menu",
          description: "A restaurant menu is a detailed explanation of a dish,including it's rate",
          liveUrl: "https://nilas-food.netlify.app/",
          screenshot:"/projectImage/food.png",
          techStack: [["ReactJS", "JSON Server"]],
        },
        {
          projectName: "Simple calculator",
          description: "Simple calculator used to perform mathematical operations",
          liveUrl: "tps://euphonious-capybara-2014e7.netlify.app",
          screenshot: "/projectImage/calcu.png",
          techStack: [["ReactJS", "RUST API", "AXIOS"]],
        },
        
        
      ];
  useEffect(() => {
    console.log(projectData);
  }, []);
  return (
    <>
      <p className="fw-bold fs-2 text-center text-light">PROJECTS</p>
      <div className="w-100">
        {projectData.length != 0 ? (
          <div
            className="d-flex"
            style={{
              overflowX: "auto",
              width: "100%",
              margin: "auto",
            }}
          >
            {projectData.map((item:any) => (
              <div
                className="m-2 project-card"
                style={{ width: "300px", flex: "0 0 auto" }}
                key={item.id}
              >
                <div className="card h-100 bg-light">
                  <img
                    src={item.screenshot}
                    className="img-fluid card-img-top"
                    alt={item.projectName}
                  />
                  <div className="card-body">
                    <p className="card-title overflow-hidden fw-bold urbanist">
                      {item.projectName}
                    </p>
                    <p className="card-text urbanist-light" style={{fontSize:'14px'}}>{item.description}</p>
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#ffffff" }}
                    >
                      <button
                        type="button"
                        className="rounded-pill w-100 d-flex justify-content-center align-items-center btn btn-dark"
                      >
                        Visit Site<i className="fi ms-1 fi-bs-arrow-up-right" style={{fontSize:'12px'}}/>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{
              width: "100%",
              height: "250px",
            }}
          >
            <p>Loading Projects For You...</p>
          </div>
        )}
      </div>
    </>
  );
}
