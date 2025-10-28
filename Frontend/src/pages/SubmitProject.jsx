import React, { useState } from 'react';
import './styles/SubmitProject.css';
// import React { useState } from 'react';
// import './Submitroject.css';

const SubmitProjectForm = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    category: "",
    description: "",
    image: null,
    document: null,
    files: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Project Submitted Successfully!");
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Submit Your Project</h2>
      <p className="form-subtitle">
        Share your innovation and connect with potential clients or investors.
      </p>

      <form onSubmit={handleSubmit} className="project-form">
        {/* Project Details Section */}
        <div className="section">
          <h3>Project Details</h3>
          <input
            type="text"
            name="projectName"
            placeholder="Project Name"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option>Web Development</option>
            <option>AI / ML</option>
            <option>Mobile App</option>
            <option>Blockchain</option>
          </select>
          <textarea
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
        </div>

        {/* Upload Section */}
        <div className="section">
          <h3>Upload Media</h3>
          <div className="file-group">
            <label className="file-label">Project Image</label>
            <input type="file" name="image" onChange={handleChange} />
          </div>
          <div className="file-group">
            <label className="file-label">Project Document</label>
            <input type="file" name="document" onChange={handleChange} />
          </div>
          <div className="file-group">
            <label className="file-label">Project Files</label>
            <input type="file" name="files" onChange={handleChange} />
          </div>
        </div>

        <button type="submit" className="submit-btn">Submit Project</button>
      </form>
    </div>
  );
};

export default SubmitProjectForm;