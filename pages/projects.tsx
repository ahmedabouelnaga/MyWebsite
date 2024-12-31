export default function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "A weather forecasting app built with React and the OpenWeatherMap API. Features real-time weather data and a clean UI.",
      image: "/images/weather-app.png", // store in public/images
      link: "https://github.com/YourGitHub/weather-app",
    },
    {
      title: "Task Manager",
      description:
        "A full-stack task manager using Node.js, Express, and MongoDB. Allows users to track daily tasks and progress.",
      image: "/images/task-manager.png",
      link: "https://github.com/YourGitHub/task-manager",
    },
    // ...add more projects!
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-center text-4xl font-bold text-blue-700 mb-10">
        My Projects
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                View on GitHub &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

