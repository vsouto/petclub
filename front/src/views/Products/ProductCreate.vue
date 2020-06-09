<template>
  <div class="home" data-app>
    <div class="app-page-title">
      <div class="page-title-wrapper">
        <div class="page-title-heading">
          <div class="page-title-icon">
            <i class="pe-7s-micro icon-gradient bg-tempting-azure"></i>
          </div>
          <div>
            Divulgar Product
            <div class="page-title-subheading">
              Você pode adicionar a sua product ou de algum artista que gosta
            </div>
          </div>
        </div>
        <div class="page-title-actions">
        </div>
      </div>
    </div>
    <div class="card main-card mb-3">
      <div class="card-header p-3 h-auto d-block">
        <div class="d-block">Informações da Product</div>
      </div>
      <div class="card-body">
        <form @submit.prevent="submit()">
          <!-- Title -->
          <div class="position-relative row form-group">
            <label for="title"
                   class="col-sm-2 col-form-label">Título da Product</label>
            <div class="col-sm-10">
              <input
                id="title"
                v-model.trim="$v.product.title.$model"
                aria-label="title"
                required="required"
                class="form-control"
                type="text">
              <div class="error" v-if="!$v.product.title.required">Informe o título da product</div>
              <div class="error" v-if="!$v.product.title.minLength">O título da product precisa ter ao menos {{$v.product.title.$params.minLength.min}} letras.</div>
            </div>
          </div>
          <!-- Artist -->
          <div class="position-relative row form-group">
            <label for="artist" class="col-sm-2 col-form-label">Artista / Apresentador</label>
            <div class="col-sm-10">
              <v-select
                id="artist"
                v-model.trim="$v.product.artist.$model"
                :items="artists"
                label="Artista"
              ></v-select>
              <div class="error" v-if="!$v.product.artist.required">Informe o artista da product</div>
            </div>
          </div>
          <!-- Category -->
          <div class="position-relative row form-group">
            <label for="categories" class="col-sm-2 col-form-label">Categoria</label>
            <div class="col-sm-10">
              <v-select
                id="categories"
                v-model.trim="$v.product.categories.$model"
                :items="categories"
                label="Categoria"
              ></v-select>
              <div class="error" v-if="!$v.product.categories.required">Informe a categoria da product</div>
            </div>
          </div>
          <!-- Date -->
          <div class="position-relative row form-group">
            <label for="date" class="col-sm-2 col-form-label">
              Data
            </label>
            <div class="col-sm-10">
              <v-menu
                id="date"
                ref="menu1"
                v-model="data"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Data"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="mdi-clock-outline"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title @input="data = false"></v-date-picker>
              </v-menu>
            </div>
          </div>
          <!-- Time -->
          <div class="position-relative row form-group">
            <label for="exampleFile" class="col-sm-2 col-form-label">Horário</label>
            <div class="col-sm-10">
              <v-menu
                ref="menu"
                v-model="hora"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="time"
                    label="Horário"
                    prepend-icon="mdi-clock-outline"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                  v-if="hora"
                  v-model="time"
                  full-width
                  @click:minute="$refs.menu.submit(time)"
                ></v-time-picker>
              </v-menu>
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
  </div>
</template>


<script>

  import { required, minLength, between } from 'vuelidate/lib/validators'
  import {ProductModel} from "../../models/product";

  export default {
    name: 'ProductCreate',
    components: {
    },
    data: vm => ({
      product: new ProductModel(),
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      data: '',
      hora: '',
      time: '',
    }),
    mounted() {

    },
    computed: {
      artists() {
        return this.$store.getters["artist/getArtists"].map(a => {
          return {
            value: a._id,
            text: a.title
        }})
      },
      categories() {
        return ['sertanejo', 'mpb', 'rock', 'games', 'fitness']
      },
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

        this.product.eventDate = this.getFormattedDateTime()

        this.$store
          .dispatch("product/createProduct", this.product)
          .then(() => {

            this.$notify({
              title: 'Sucesso!',
              text: 'A Product foi salva e será revisada pelos administradores.',
              type: 'primary'
            })

          })
          .catch(error => {

            if (error.response && error.response.status == 409) {
              this.$notify(error.existsLimitedProduct)
            } else {
              this.$notify(error.createLimitedProduct)
            }
          })
          .then(() => {
            this.loadingBtn = false
          })
      }
    },
    validations: {
      product: {
        title: {
          required,
          minLength: minLength(5)
        },
        artist: {
          required,
        },
        categories: {
          required,
        }
      },
      data: {
        required,
      }
    }
  };
</script>

<style>
  .v-time-picker-title__time{
    color: black !important;
  }
</style>
