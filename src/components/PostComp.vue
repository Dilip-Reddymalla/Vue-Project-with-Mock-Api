<template>
  <div class="card theme-card mt-3">
    <div class="card-body">
      <h3 class="h5 mb-3">Add Employee</h3>
      <div class="row g-3">
        <div class="col-md-6">
          <label class="form-label" for="post-name">Name</label>
          <input
            id="post-name"
            type="text"
            class="form-control theme-input"
            placeholder="Enter Employee Name"
            v-model="posts.name"
          />
        </div>
        <div class="col-md-6">
          <label class="form-label" for="post-salary">Salary</label>
          <input
            id="post-salary"
            type="number"
            class="form-control theme-input"
            placeholder="Enter Employee Salary"
            v-model="posts.salary"
          />
        </div>
        <div class="col-md-6">
          <label class="form-label" for="post-designation">Designation</label>
          <input
            id="post-designation"
            type="text"
            class="form-control theme-input"
            placeholder="Enter Employee Designation"
            v-model="posts.designation"
          />
        </div>
        <div class="col-md-6">
          <label class="form-label" for="post-department">Department</label>
          <input
            id="post-department"
            type="text"
            class="form-control theme-input"
            placeholder="Enter Employee Department"
            v-model="posts.department"
          />
        </div>
      </div>
      <button class="btn btn-theme mt-3" @click="postData">Post Data</button>
    </div>
  </div>
  <div class="card theme-card mt-3" v-if="employees.length > 0">
    <div class="card-body">
      <h3 class="h5 mb-3">Inserted Data</h3>
      <div class="table-responsive">
        <table class="table table-hover align-middle theme-table mb-0">
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
    </div>
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
