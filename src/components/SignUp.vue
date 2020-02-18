<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            class="primary"
            dark
            flat
          >
            <v-toolbar-title>Sign Up Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="First Name"
                v-model="userDetail.firstName"
                prepend-icon="account_circle"
                type="text"
                :rules="firstNameRules"
              />

              <v-text-field
                label="Last Name"
                v-model="userDetail.lastName"
                prepend-icon="account_circle"
                type="text"
                :rules="lastNameRules"
              />
              
              <v-text-field
                label="Email"
                v-model="userDetail.email"
                prepend-icon="contact_mail"
                type="email"
                :rules="emailRules"
              />
              
              <v-text-field
                label="Password"
                v-model="userDetail.password"
                prepend-icon="lock"
                type="password"
              />
              
              <v-text-field
                label="Retype Password"
                v-model="userDetail.retypePassword"
                prepend-icon="lock"
                type="password"
                :rules="retyePasswordRules"
              />
              
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary">Sign Up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const requiredField = val => !!val || 'Field is required';

export default {
  data: function () {
    return {
      userDetail: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        retypePassword: '',
      },
      firstNameRules: [requiredField],
      lastNameRules: [requiredField],
      emailRules: [requiredField, v => /.+@.+\..+/.test(v) || 'Must be valid email'],
      passwordRules: [requiredField],
    }
  },
  computed: {
    retyePasswordRules: function() {
      return [
        requiredField,
        (this.userDetail.password && this.userDetail.password === this.userDetail.retypePassword) || 'Password dosen`t match',
      ]  
    }
  }
}
</script>