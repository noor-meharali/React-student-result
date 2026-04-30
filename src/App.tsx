const App = () => {
  const students = [
    { id: 1, name: 'Ali Khan', rollNo: 101, grade: 'A' },
    { id: 2, name: 'Sara Ahmed', rollNo: 102, grade: 'A+' },
    { id: 3, name: 'Usman Tariq', rollNo: 103, grade: 'B' },
    { id: 4, name: 'Fatima Noor', rollNo: 104, grade: 'A' },
    { id: 5, name: 'Bilal Hassan', rollNo: 105, grade: 'B+' },
  ];

  return (
    <div>
      <h1>Student List</h1>
            <th>Roll No</th>
            <th>Name</th>
            <th>Grade</th>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
    </div>
  );
};

export default App;
