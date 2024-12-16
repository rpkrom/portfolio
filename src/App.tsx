import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <>          
      <div className="min-h-screen text-gray-300 font-sans">
        {/* Main Container use this in above div: bg-gray-900 */}
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Header Section */}
          <div className="col-span-3 text-center mb-8">
            <img
              src="./src/assets/trp.jpg"
              alt="Profile"
              className="rounded-full mx-auto mb-4"
              width="80"
              height="80"
            />
            <h1 className="text-4xl font-bold text-blue-400">Robert Price</h1>
          </div>

        {/* Sidebar - Contact and Tech Stack */}
        <div className="space-y-6">
          {/* Contact Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400 text-left">Connect</h2>
            <div className="space-y-2 text-md">
              <div className="bg-gray-700 p-4 rounded-lg shadow-md text-left transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600">
                <a href="mailto:therobertprice@gmail.com" className="text-gray-400 flex items-center hover:text-blue-400">
                  <i className="fas fa-envelope mr-2"></i>therobertprice@gmail.com
                </a>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg shadow-md text-left transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600">
                <a href="https://www.linkedin.com/in/robert-price-b0b00633/" className="text-gray-400 flex items-center hover:text-blue-400">
                  <i className="fab fa-linkedin mr-2"></i>LinkedIn
                </a>              
              </div>
              <div className="bg-gray-700 p-4 rounded-lg shadow-md text-left transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600 ">
                <a href="https://github.com/rpkrom" className="text-gray-400 flex items-center hover:text-blue-400">
                  <i className="fab fa-github mr-2"></i>GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Tech Stack Card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400 text-left">Tech Stack</h2>
            <div className="grid grid-cols-3 gap-4 text-center text-gray-400">
              {[
                { name: 'C#', icon: 'fas fa-code' },
                { name: '.NET', icon: 'fab fa-windows' },
                { name: 'Azure', icon: 'fas fa-cloud' },
                { name: 'JavaScript', icon: 'fab fa-js' },
                { name: 'Typescript', icon: 'fab fa-js' },
                { name: 'React', icon: 'fab fa-react' },
                { name: 'Angular', icon: 'fab fa-angular' },
                { name: 'Node.js', icon: 'fab fa-node-js' },
                { name: 'HTML5', icon: 'fab fa-html5' },
                { name: 'CSS', icon: 'fab fa-css3-alt' },
                { name: 'Tailwind', icon: 'fas fa-wind' },
                { name: 'SQL', icon: 'fas fa-database' }
              ].map((tech) => (
              <div key={tech.name} className="bg-gray-700 p-2 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-2 hover:bg-gray-600">
                <i className={`${tech.icon} text-blue-400 mb-2`}></i>
                <p>{tech.name}</p>
              </div>
              ))}
            </div>
            </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Professional Summary */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-blue-400 font-semibold mb-4 text-left">
              Professional Summary
            </h2>
            <div className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600">
              <p className="text-gray-300 leading-relaxed">
                With 15 years of dynamic industry experience, including 7 years specializing in software development,
                I have honed my skills in cutting-edge technologies and agile methodologies. 
                My career is marked by a proven track record of delivering innovative, scalable, and high-performance solutions that drive business success.
              </p>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl text-blue-400 font-semibold mb-4 text-left">
              Professional Experience
            </h2>
            <div className="space-y-4">
              {/* Job 1 */}
              <div className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600">
               
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-blue-400 text-left">Software Design Partners, LLC</h3>
                  <div className="text-sm text-green-500 text-right">
                    <p>January 2022 - Present</p>                  
                  </div>
                </div>
                <div className="list-inside mt-2 text-gray-300 text-left">
                  <h4><span className="font-semibold text-gray-200">Software Engineer</span></h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Spearheaded the implementation of robust backend projects using C# and .NET, showcasing expertise in crafting scalable and high-performance solutions</li>
                    <li>Orchestrated seamless Azure deployments, leveraging cloud services to enhance project scalability, reliability, and overall efficiency</li>
                    <li>Executed database management tasks with proficiency in SQL, designing and optimizing database structures to align with project requirements and industry best practices</li>
                    <li>Demonstrated prowess in full-stack development by integrating React on the front end and PHP/C# on the backend, ensuring cohesive and user-centric web applications</li>
                  </ul>
                </div>
              </div>
              {/* Job 2 */}
              <div className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-blue-400 text-left">Gimmal, LLC</h3>
                  <div className="text-sm text-green-500 text-right">
                    <p>March 2017 - January 2022</p>                  
                  </div>
                </div>
                <div className="list-inside mt-2 text-gray-300 text-left">
                  <h4><span className="font-semibold text-gray-200">Developer Consultant | Software Engineer</span></h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Coded and implemented REST Api's for Cloud Web Applications using Razor pages</li>
                    <li>Architect and code ASP.NET Core Angular web application hosted in Docker containers in Microsoft Azure</li>
                    <li>Developed and maintained Enterprise ECM Records Management applications</li>
                    <li>Provided custom solutions for clients specific needs</li>
                    <li>Provide guidance and expertise in regards to records management and industry best practices</li>
                  </ul>
                </div>
              </div>
              {/* Job 3 */}
              <div className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-blue-400 text-left">Biomedical Systems, LLC</h3>
                  <div className="text-sm text-green-500 text-right">
                    <p>May 2015 - March 2017</p>                  
                  </div>
                </div>
                <div className="list-inside mt-2 text-gray-300 text-left">
                  <h4><span className="font-semibold text-gray-200">QA Engineer</span></h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Created and maintained entire R&D Test Suites for department</li>
                    <li>Provided training and guidance for Microsoft Azure DevOps best practices</li>
                    <li>Executed and performed user acceptance testing, smoke testing, functional testing, etc for software development team</li>
                    <li>Collaborated with developers over testing efforts for continuous delivery</li>
                  </ul>
                </div>
              </div>
              {/* Job 4 */}
              <div className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-blue-400 text-left">Panera Bread, LLC</h3>
                  <div className="text-sm text-green-500 text-right">
                    <p>July 2014 - May 2015</p>                  
                  </div>
                </div>
                <div className="list-inside mt-2 text-gray-300 text-left">
                  <h4><span className="font-semibold text-gray-200">QA Engineer</span></h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Provide thorough testing of internal and external financial systems to ensure data integrity</li>
                    <li>Created adhoc queries through Oracle OBIEE for all management and cafes to use</li>
                    <li>Implemented Agile QA process to further improve overall quality of products and projects</li>
                    <li>Collaborated with SQL developers in upgrading antiquated data base servers and created SQL statements to verify data had not been altered</li>
                  </ul>
                </div>
              </div>
              {/* Job 5 */}
              <div className="bg-gray-700 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-x-2 hover:bg-gray-600">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-blue-400 text-left">KnowledgeLake, LLC</h3>
                  <div className="text-sm text-green-500 text-right">
                    <p>April 2010 - May 2015</p>                  
                  </div>
                </div>
                <div className="list-inside mt-2 text-gray-300 text-left">
                  <h4><span className="font-semibold text-gray-200">Software Test Engineer</span></h4>
                  <ul className="list-disc list-inside ml-4">
                    <li>Coding all automated tests for every product development team to be used for daily builds</li>
                    <li>Top level support for all escalated issues submitted by customers</li>
                    <li> Maintaining and creating documentation for the standardizing of environments</li>
                    <li>Creation and running of performance testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default App
