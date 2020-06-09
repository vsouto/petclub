<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >

    <base-material-card
      icon="mdi-clipboard-text"
      title="New Animal"
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
                  v-model.trim="$v.animal.name.$model"
                  aria-label="title"
                  required="required"
                  class="form-control"
                  type="text">
                  <div class="error" v-if="!$v.animal.name.required">Informe o name da animal</div>
                <div class="error" v-if="!$v.animal.name.minLength">O name da animal precisa ter ao menos {{$v.animal.name.$params.minLength.min}} letras.</div>
              </div>
            </div>
            <!-- Email -->
            <div class="position-relative row form-group">
              <label for="title"
                     class="col-sm-2 col-form-label">Nome</label>
              <div class="col-sm-10">
                <input
                  id="email"
                  v-model.trim="$v.animal.email.$model"
                  aria-label="email"
                  required="required"
                  class="form-control"
                  type="text">
                <div class="error" v-if="!$v.animal.email.required">Informe o email da animale</div>
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
  import {AnimalModel} from "@/models/animal";
  import Vuelidate from "vuelidate"

  Vue.use(Vuelidate)

  export default {
    name: 'AnimalCreate',
    components: {
    },
    data: vm => ({
      animal: new AnimalModel(),
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

        this.animal.eventDate = this.getFormattedDateTime()

        this.$store
          .dispatch("animal/createAnimal", this.animal)
          .then(() => {

            this.$notify({
              title: 'Sucesso!',
              text: 'A Animal foi salva e será revisada pelos administradores.',
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
      animal: {
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
