<template>
  <div class="card theme-card mt-3">
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-hover align-middle theme-table mb-0">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Designation</th>
              <th>Department</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <td>{{ employee.id }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.salary }}</td>
              <td>{{ employee.designation }}</td>
              <td>{{ employee.department }}</td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  @click="deleteData(employee)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DeleteComp",
  data() {
    return {
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
    async deleteData(emp) {
      try {
        let userChoice = confirm(
          "Are you sure you want to delete the employee details",
        );
        if (userChoice) {
          await axios.delete(
            `https://69e7502a68208c1debe8a803.mockapi.io/api/employee/${emp.id}`,
          );
          this.getData();
        }
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
