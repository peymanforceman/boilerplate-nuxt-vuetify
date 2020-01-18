<template>
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
          color="primary"
          dark
          flat
        >
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              name="email"
              prepend-icon="mdi-account"
              v-model="form.email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              :rules="passRules"
              required
              v-model="form.password"
            />
            <template v-if="error.length>0">
              <v-alert
                dense
                outlined
                type="error"
              >
                {{ this.error }}
              </v-alert>
            </template>

          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            :disabled="!valid"
            @click="submit"
            color="primary">Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
    export default {
        layout: 'auth',
        data() {
            return {
                error: '',
                valid: true,
                passRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 4) || 'Password must be greater than 4 characters',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                form: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            validate() {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            async submit() {
                this.error = '';
                await this.validate();
                if (this.valid === true) {
                    try {
                        await this.$auth.loginWith('local', {
                            data: this.form
                        })

                        this.$router.push({
                            path: '/'
                        })
                    } catch (e) {
                        this.error = e.response.data
                    }


                }
            }
        }
    }
</script>
