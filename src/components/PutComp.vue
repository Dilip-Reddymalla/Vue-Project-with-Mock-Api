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
            <button class="btn btn-theme btn-sm" @click="editEmp(employee)">
              Edit
            </button>
          </td>
        </tr>
      </tbody>
        </table>
      </div>

      <div id="editModel" class="card theme-card-sub mt-4" v-if="newData.id">
        <div class="card-body">
          <h3 class="h5 mb-3">Edit Employee Details</h3>
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label" for="edit-name">Name</label>
              <input
                id="edit-name"
                type="text"
                class="form-control theme-input"
                placeholder="Enter Employee Name"
                v-model="newData.name"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label" for="edit-salary">Salary</label>
              <input
                id="edit-salary"
                type="number"
                class="form-control theme-input"
                placeholder="Enter Employee Salary"
                v-model="newData.salary"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label" for="edit-designation">Designation</label>
              <input
                id="edit-designation"
                type="text"
                class="form-control theme-input"
                placeholder="Enter Employee Designation"
                v-model="newData.designation"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label" for="edit-department">Department</label>
              <input
                id="edit-department"
                type="text"
                class="form-control theme-input"
                placeholder="Enter Employee Department"
                v-model="newData.department"
              />
            </div>
          </div>
          <button class="btn btn-theme mt-3" @click="UpdateData">
            Update Details
          </button>
        </div>
      </div>
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

      this.$nextTick(() => {
        const element = document.getElementById("editModel");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
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
