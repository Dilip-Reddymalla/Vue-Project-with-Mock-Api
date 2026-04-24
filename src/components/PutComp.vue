<template>
  <div class="container">
    <table>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Salary</th>
        <th>Designation</th>
        <th>Department</th>
      </tr>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.id }}</td>
        <td>{{ employee.name }}</td>
        <td>{{ employee.salary }}</td>
        <td>{{ employee.designation }}</td>
        <td>{{ employee.department }}</td>
        <button @click="editEmp(employee)">Edit</button>
      </tr>
    </table>
    <div class="editModel" v-if="newData.id">
      <H3>Edit the empoylee details </H3>
      Name:
      <input
        type="text"
        placeholder="Enter Employee Name"
        v-model="this.newData.name"
      />
      <br /><br />
      salary:
      <input
        type="number"
        placeholder="Enter Employee Salary"
        v-model="this.newData.salary"
      />
      <br /><br />
      designation:
      <input
        type="text"
        placeholder="Enter Employee designation"
        v-model="this.newData.designation"
      />
      <br /><br />
      department:
      <input
        type="text"
        placeholder="Enter Employee department"
        v-model="this.newData.department"
      />
      <br /><br />
      <button @click="UpdateData">Update Details</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PutData",
  data() {
    return {
      newData: {
        name: null,
        salary: null,
        designation: null,
        department: null,
      },
      employees: [],
    };
  },
  methods: {
    async getData() {
      await axios
        .get("https://69e7502a68208c1debe8a803.mockapi.io/api/employee")
        .then((res) => {
          this.employees = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editEmp(emp) {
      this.newData.id = emp.id;
      this.newData.name = emp.name;
      this.newData.salary = emp.salary;
      this.newData.designation = emp.designation;
      this.newData.department = emp.department;
    },
    async UpdateData() {
      try {
        await axios.put(
          `https://69e7502a68208c1debe8a803.mockapi.io/api/employee/${this.newData.id}`,
          this.newData,
        );

        this.getData();
        this.newData = {
          id: null,
          name: null,
          salary: null,
          designation: null,
          department: null,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
