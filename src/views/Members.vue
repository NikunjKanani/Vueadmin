<template>
<div id="app" class="container">
<h3 class="mt-3">Add User</h3>
  <hr>
<div class="row">
  <div class="col">

    <label>User ID</label>
    <input type="number" class="form-control" v-model="id">
  </div>
    <div class="col">

    <label>User name</label>
    <input type="text" class="form-control" v-model="name">
  </div>
    <div class="col">

    <label>User Email</label>
    <input type="text" class="form-control" v-model="email">
  </div>
  
  </div>
  <button class="btn btn-info mt-2" @click="addUser">Add User</button>
  <hr>
  
  <div class="row">
    <div class="col">
          <table id="user-table" class="display table-bordered nowrap" cellspacing="0" width="100%">
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>User Email</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </table>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Members',
}
</script>