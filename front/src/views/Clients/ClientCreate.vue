<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >

    <base-material-card
      icon="mdi-clipboard-text"
      title="New Client"
      class="px-5 py-3"
    >

      <div class="card main-card mb-3">
        <div class="card-body">
          <form @submit.prevent="submit()">
            <!-- Name -->
            <div class="position-relative row form-group">
              <label for="title"
                     class="col-sm-2 col-form-label">Nome</label>
              <div class="col-sm-10">
                <input
                  id="title"
                  v-model.trim="$v.client.name.$model"
                  aria-label="title"
                  required="required"
                  class="form-control"
                  type="text">
                  <div class="error" v-if="!$v.client.name.required">Informe o name da client</div>
                <div class="error" v-if="!$v.client.name.minLength">O name da client precisa ter ao menos {{$v.client.name.$params.minLength.min}} letras.</div>
              </div>
            </div>
            <!-- Email -->
            <div class="position-relative row form-group">
              <label for="title"
                     class="col-sm-2 col-form-label">Nome</label>
              <div class="col-sm-10">
                <input
                  id="email"
                  v-model.trim="$v.client.email.$model"
                  aria-label="email"
                  required="required"
                  class="form-control"
                  type="text">
                <div class="error" v-if="!$v.client.email.required">Informe o email da cliente</div>
              </div>
            </div>
            <div class="position-relative row form-check">
              <div class="col-sm-10 offset-sm-2">
                <button class="btn btn-secondary">Salvar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </base-material-card>
  </v-container>
</template>


<script>
  import Vue from "vue"
  import { required, minLength, email } from 'vuelidate/lib/validators'
  import {ClientModel} from "@/models/client";
  import Vuelidate from "vuelidate"

  Vue.use(Vuelidate)

  export default {
    name: 'ClientCreate',
    components: {
    },
    data: vm => ({
      client: new ClientModel(),
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      data: '',
      hora: '',
      time: '',
    }),
    mounted() {

    },
    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },
    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      getFormattedDateTime() {
        return this.date + " " + this.time
      },
      submit() {

        this.$v.$touch()

        if (this.$v.$invalid) {

          this.$notify({
            title: 'Erro!',
            text: 'Verifique todos os campos!',
            type: "error"
          })
        } else {
          this.save()
        }
      },
      save() {

        this.client.eventDate = this.getFormattedDateTime()

        this.$store
          .dispatch("client/createClient", this.client)
          .then(() => {

            this.$notify({
              title: 'Sucesso!',
              text: 'A Client foi salva e será revisada pelos administradores.',
              type: 'primary'
            })

          })
          .catch(error => {

            if (error.response && error.response.status == 409) {
              this.$notify(error.existsLimitedUser)
            } else {
              this.$notify(error.createLimitedUser)
            }
          })
          .then(() => {
            this.loadingBtn = false
          })
      }
    },
    validations: {
      client: {
        name: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        },
      }
    }
  };
</script>

<style>
  .v-time-picker-title__time{
    color: black !important;
  }
</style>
