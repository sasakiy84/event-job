<template>
  <main>
    <RouterLink to="/user/new">UserNew</RouterLink>
    <table class="table is-fullwidth">
      <thead>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>bio</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.profile.bio }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<script setup lang="ts">
import useApiClient from "../../composables/useApiClient";
import { getUsersResponseDtoType } from "../../../types/user.type"
import { onBeforeMount, ref } from "vue";
import { RouterLink } from "vue-router";

const users = ref<getUsersResponseDtoType>([]);

const { apiClient } = useApiClient();

onBeforeMount(async () => {
  const { data } = await apiClient.get<getUsersResponseDtoType>("user");
  users.value = data;
  console.log(users.value);
});
</script>
