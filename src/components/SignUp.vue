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
                name="firstName"
                prepend-icon="account_circle"
                type="text"
              />

              <v-text-field
                label="Last Name"
                name="lastName"
                prepend-icon="account_circle"
                type="text"
              />
              
              <v-text-field
                label="Email"
                name="emai"
                prepend-icon="contact_mail"
                type="email"
              />
              
              <v-text-field
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
              />
              
              <v-text-field
                label="Retype Password"
                name="retypePassword"
                prepend-icon="lock"
                type="password"
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