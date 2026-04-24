<template>
  <div class="container">
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
  <button @click="getData">Refresh</button>
</template>

<script>
import axios from "axios";

export default {
  name: "GetComp",
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("https://69e7502a68208c1debe8a803.mockapi.io/api/employee")
        .then((res) => {
          this.employees = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
