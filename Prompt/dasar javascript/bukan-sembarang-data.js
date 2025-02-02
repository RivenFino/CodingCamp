const employees = [
    {
      name: 'Fulan',
      email: 'fulan@dicoding.com',
      joinYear: 2020,
    },
  ];
  
  function addEmployee(name, email, joinYear) {
     // @TODO
     // lengkapi fungsi ini agar dapat menambahkan objek employee baru
     //berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
  
    let newEmployees = {
      name: name,
      email: email,
      joinYear: joinYear, 
    }
    employees.push(newEmployees);
  }
  
  addEmployee('Awla', 'Awla@gmail.com', 2025);
  addEmployee('Ridhani', 'Ridhani@gmail.com', 2020);
  
  console.log(employees);