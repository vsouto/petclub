<template>
  <v-container
    id="regular-tables"
    fluid
    tag="section"
  >

    <base-material-card
      icon="mdi-clipboard-text"
      title="Users"
      class="px-5 py-3"
    >

      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        sort-by="eventDate"
        class="elevation-1 users-data-table"
      >
        <!-- Headers -->
        <template v-slot:top>
          <v-toolbar flat>

            <v-toolbar-title></v-toolbar-title>

            <div class="filter-box filter-search-text">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </div>

            <v-spacer></v-spacer>

            <v-btn rounded color="primary" dark>
              <v-icon>mdi-plus</v-icon>
              {{$t('New')}}
            </v-btn>

          </v-toolbar>
        </template>

        <!-- Columns Data -->
        <template v-slot:item.eventDate="{ item }">
          <span>{{new Date(item.eventDate).toLocaleString()}}</span>
        </template>
        <template v-slot:item.artist="{ item }">
          <span>
            {{ item.artist }}
          </span>
        </template>
        <template v-slot:item.categories="{ item }">
          <span
            v-for="category in item.categories"
          >
            <category-chip :category="category"></category-chip>
          </span>
        </template>
        <template v-slot:item.beneficent="{ item }">
          <span>
            <i
              v-if="item.beneficent"
              class="pe-7s-diamond icon-gradient bg-tempting-azure"
            ></i>
          </span>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          Sem users de acordo com os critérios escolhidos
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>

<script>

  export default {
    name: 'UserList',
    components: {
    },
    data () {
      return {
        dialog: false,
        search: '',
        initiated: false
      }
    },
    mounted() {


    },
    computed: {
      users: {
        // getter
        get: function () {

          const storedUsers = this.$store.getters["user/getUsers"]

          if (storedUsers) {
            this.initiated = true
          }

          return storedUsers || []
        }
      },
      headers() {
        return [
          { text: 'User', value: 'name' },
          { text: 'Email',
            sortable: true,
            value: 'email'
          },
          { text: 'Animals',
            sortable: true,
            value: 'animal'
          }
        ]
      },
      isFilterFilterable() {
        return this.initiated
      }
    },
    watch: {
      dialog (val) {
        val || this.close()
      },
      users(val) {
        console.log('users is ', val); //eslint-disable-line
      }
    },
    methods: {
      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      submit () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      /*
      toggleSearch() {
        this.usingSearch = !this.usingSearch
      }*/
    },
  };
</script>

<style>
  .users-data-table{

  }

  .filter-box{
    min-width: 10%;
  }

  .filter-search-text{
    width: 30%;
  }

  .filter-beneficent{
    margin-top: 2%;
    margin-left: 1%;
    margin-right: 1%;
  }

  .filter-checkbox label{
    padding: 4px;
    padding-top: 8px;
  }
</style>
