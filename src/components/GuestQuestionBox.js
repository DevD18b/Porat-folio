
import React, { useState, useEffect } from 'react';
import './GuestQuestionBox.css'; // Import CSS file for styling

function GuestQuestionBox() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [storedQueries, setStoredQueries] = useState([]);

  useEffect(() => {
    const storedQueriesData = localStorage.getItem('storedQueries');
    if (storedQueriesData) {
      setStoredQueries(JSON.parse(storedQueriesData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('storedQueries', JSON.stringify(storedQueries));
  }, [storedQueries]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the submitted query with the user's name
    const newQuery = {
      id: Date.now(),
      name,
      question,
    };
    setStoredQueries((prevQueries) => [...prevQueries, newQuery]);
    // Reset the name and question input fields
    setName('');
    setQuestion('');
  };

  const handleDelete = (id) => {
    setStoredQueries((prevQueries) =>
      prevQueries.filter((query) => query.id !== id)
    );
  };

  return (
    <div style = {{border:"2px solid #b3d8f2"}} className="guest-question-box">
      <h1 className="title">Welcome people to my website</h1>
      <p className="subtitle">If you have any query, please write it below:</p>
      <form className="form" onSubmit={handleSubmit}>
        <label style={{fontSize:"large"}}>
          Name:
          <input
          
            className="input"
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your name"
          />
        </label>
        <label  style={{fontSize:"large"}}>
          Question:
          <textarea
            className="textarea"
            value={question}
            onChange={handleQuestionChange}
            placeholder="Type your question here..."
            rows="4"
            cols="50"
          ></textarea>
        </label>
        <button className="submit-button" type="submit">Submit</button>
      </form>
      <div className="stored-queries">
        <h2 className="queries-title">Stored Queries:</h2>
        <ul className="queries-list">
          {storedQueries.map((storedQuery) => (
            <li key={storedQuery.id} className="query-item">
              <span className="query-name">{storedQuery.name}:</span> {storedQuery.question}
              <button className="delete-button" onClick={() => handleDelete(storedQuery.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GuestQuestionBox;


// import React, { useState, useEffect } from 'react';
// import './GuestQuestionBox.css'; // Import CSS file for styling

// function GuestQuestionBox() {
//   const [name, setName] = useState('');
//   const [question, setQuestion] = useState('');
//   const [storedQueries, setStoredQueries] = useState([]);

//   useEffect(() => {
//     const storedQueriesData = localStorage.getItem('storedQueries');
//     if (storedQueriesData) {
//       setStoredQueries(JSON.parse(storedQueriesData));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('storedQueries', JSON.stringify(storedQueries));
//   }, [storedQueries]);

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleQuestionChange = (e) => {
//     setQuestion(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store the submitted query with the user's name
//     const newQuery = {
//       id: Date.now(),
//       name,
//       question,
//     };
//     setStoredQueries((prevQueries) => [...prevQueries, newQuery]);
//     // Reset the name and question input fields
//     setName('');
//     setQuestion('');
//   };

//   const handleDelete = (id) => {
//     setStoredQueries((prevQueries) =>
//       prevQueries.filter((query) => query.id !== id)
//     );
//   };

//   return (
//     <div className="guest-question-box">
//       <h1>Welcome people to my website</h1>
//       <p>If you have any query, please write it below:</p>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={handleNameChange}
//             placeholder="Your name"
//           />
//         </label>
//         <br />
//         <label>
//           Question:
//           <textarea
//             value={question}
//             onChange={handleQuestionChange}
//             placeholder="Type your question here..."
//             rows="4"
//             cols="50"
//           ></textarea>
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2>Stored Queries:</h2>
//         <ul>
//           {storedQueries.map((storedQuery) => (
//             <li key={storedQuery.id}>
//               <strong>{storedQuery.name}:</strong> {storedQuery.question}
//               <button onClick={() => handleDelete(storedQuery.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default GuestQuestionBox;















