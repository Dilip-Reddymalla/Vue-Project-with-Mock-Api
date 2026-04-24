<template>
  <div class="post">
    Name:
    <input type="text" placeholder="Enter Employee Name" v-model="posts.name" />
    <br /><br />
    salary:
    <input
      type="number"
      placeholder="Enter Employee Salary"
      v-model="posts.salary"
    />
    <br /><br />
    designation:
    <input
      type="text"
      placeholder="Enter Employee designation"
      v-model="posts.designation"
    />
    <br /><br />
    department:
    <input
      type="text"
      placeholder="Enter Employee department"
      v-model="posts.department"
    />
    <br /><br />
    <button @click="postData">Post Data</button>
  </div>
  <div class="result" v-if="employees.length > 0">
    <h3>Inserted Data</h3>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Designation</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.salary }}</td>
          <td>{{ employee.designation }}</td>
          <td>{{ employee.department }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostComp",
  data() {
    return {
      posts: {
        name: null,
        salary: null,
        designation: null,
        department: null,
      },
      employees: [],
    };
  },
  methods: {
    postData(e) {
      axios
        .post("https://69e7502a68208c1debe8a803.mockapi.io/api/employee", {
          name: this.posts.name,
          salary: this.posts.salary,
          designation: this.posts.designation,
          department: this.posts.department,
        })
        .then((res) => {
          this.employees = [res.data];
        })
        .catch((err) => console.log(err));
      e.preventDefault();
    },
  },
};
</script>
