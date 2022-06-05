<template>
  <p>{{ userData }}</p>

  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input is-success"
        type="text"
        v-model="userData.name"
        placeholder="Text input"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
    <p class="help is-success">This username is available</p>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input
        class="input is-danger"
        type="email"
        v-model="userData.email"
        placeholder="Email input"
      />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
    <p class="help is-danger">This email is invalid</p>
  </div>

  <div class="field">
    <label class="label">Bio</label>
    <div class="control">
      <textarea
        v-model="userData.bio"
        class="textarea"
        placeholder="Textarea"
      ></textarea>
    </div>
  </div>

  <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" @click="submit(userData)">Submit</button>
    </div>
    <div class="control">
      <button class="button is-link is-light">Cancel</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import useApiClient from "../../composables/useApiClient";
const { push } = useRouter();
const { apiClient } = useApiClient();

const userData = ref({
  name: "",
  email: "",
  bio: "",
});

const submit = async ({
  name,
  email,
  bio,
}: {
  name: string;
  email: string;
  bio: string;
}) => {
  const { data } = await apiClient.post("/user", { name, email, bio });
  console.log(data);
  await push("/user/");
};
</script>
