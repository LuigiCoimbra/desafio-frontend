<!-- eslint-disable -->
<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12">
          <b-input-group>
            <b-form-input v-model="text" placeholder="Search..."></b-form-input>
            <b-input-group-append>
              <b-input-group-text>
                <b-icon icon="search" />
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>
        </b-col>
        <b-col cols="1" offset="1">
          <b-button
            class="btn btn-success"
            style="width: 45px; height: 45px; border-radius: 50px"
            @click="dialog = true"
            ><b-icon icon="plus"></b-icon
          ></b-button>
          <b-modal
            size="lg"
            v-model="dialog"
            ref="dialog"
            title="Add"
            @ok="handleOk"
          >
            <b-row class="my-1">
              <b-col cols="3">
                <label for="input-username">Username:</label>
              </b-col>
              <b-col cols="9">
                <b-form-input
                  id="input-username"
                  type="text"
                  size="sm"
                  v-model="newInfo.Username"
                  placeholder="Search..."
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col cols="3">
                <label for="input-fullname">Nome Completo:</label>
              </b-col>
              <b-col cols="9">
                <b-form-input
                  id="input-fullname"
                  type="text"
                  size="sm"
                  v-model="newInfo.Fullname"
                  placeholder="Search..."
                ></b-form-input>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col align-self="center" cols="3">
                <label for="my-list-id">Cargo:</label>
              </b-col>
              <b-col cols="9">
                <b-form-input
                  size="sm"
                  list="my-list-id"
                  v-model="newInfo.Role"
                ></b-form-input>

                <datalist id="my-list-id">
                  <option v-for="(role, i) in roles" :key="i">
                    {{ role }}
                  </option>
                </datalist>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col cols="3">
                <label for="input-date">Data Nascimento:</label>
              </b-col>
              <b-col cols="9">
                <b-form-datepicker
                  id="input-date"
                  size="sm"
                  v-model="newInfo.Date"
                ></b-form-datepicker>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col align-self="center" cols="3">
                <label for="my-list-id1">País</label>
              </b-col>
              <b-col cols="9">
                <b-form-input
                  size="sm"
                  list="my-list-id1"
                  v-model="newInfo.Country"
                ></b-form-input>

                <datalist id="my-list-id1">
                  <option v-for="(country, i) in country_list" :key="i">
                    {{ country }}
                  </option>
                </datalist>
              </b-col>
            </b-row>
            <b-row class="my-1">
              <b-col cols="3">
                <label for="input-date">Ativo:</label>
              </b-col>
              <b-col cols="9">
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="newInfo.Active"
                  name="checkbox-1"
                  value="1"
                  unchecked-value="0"
                ></b-form-checkbox>
              </b-col>
            </b-row>
          </b-modal>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="12">
          <b-card>
            <b-table
              :items="info"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :filter="text"
              responsive="sm"
              striped
              class="text-black bg-white"
            >
              <template v-slot:cell(edit)="row">
                <div>
                  <b-button
                    class="btn btn-success"
                    size="sm"
                    @click="getInfoEdit(row.item.Id)"
                    ><b-icon icon="pencil-square"
                  /></b-button>

                  <b-modal
                    size="lg"
                    v-model="show"
                    ref="modal"
                    title="Edit"
                    @ok="handleOk1"
                  >
                    This is subnet {{ row.item.Id }}
                    <b-row class="my-1">
                      <b-col cols="3">
                        <label for="input-username">Username:</label>
                      </b-col>
                      <b-col cols="9">
                        <b-form-input
                          id="input-username"
                          type="text"
                          size="sm"
                          v-model="userSelecionado[0].Username"
                          placeholder="Search..."
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col cols="3">
                        <label for="input-fullname">Nome Completo:</label>
                      </b-col>
                      <b-col cols="9">
                        <b-form-input
                          id="input-fullname"
                          type="text"
                          size="sm"
                          v-model="userSelecionado[0].Fullname"
                          placeholder="Search..."
                        ></b-form-input>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col align-self="center" cols="3">
                        <label for="my-list-id">Cargo:</label>
                      </b-col>
                      <b-col cols="9">
                        <b-form-input
                          size="sm"
                          list="my-list-id"
                          v-model="userSelecionado[0].Role"
                        ></b-form-input>

                        <datalist id="my-list-id">
                          <option v-for="(role, i) in roles" :key="i">
                            {{ role }}
                          </option>
                        </datalist>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col cols="3">
                        <label for="input-date">Data Nascimento:</label>
                      </b-col>
                      <b-col cols="9">
                        <b-form-datepicker
                          id="input-date"
                          size="sm"
                          v-model="userSelecionado[0].Date"
                        ></b-form-datepicker>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col align-self="center" cols="3">
                        <label for="my-list-id1">País</label>
                      </b-col>
                      <b-col cols="9">
                        <b-form-input
                          size="sm"
                          list="my-list-id1"
                          v-model="userSelecionado[0].Country"
                        ></b-form-input>

                        <datalist id="my-list-id1">
                          <option v-for="(country, i) in country_list" :key="i">
                            {{ country }}
                          </option>
                        </datalist>
                      </b-col>
                    </b-row>
                    <b-row class="my-1">
                      <b-col cols="3">
                        <label for="input-date">Ativo:</label>
                      </b-col>
                      <b-col cols="9">
                        <b-form-checkbox
                          id="checkbox-1"
                          v-model="userSelecionado[0].Active"
                          name="checkbox-1"
                          value="1"
                          unchecked-value="0"
                        ></b-form-checkbox>
                      </b-col>
                    </b-row>
                  </b-modal>
                </div>
              </template>
              <template v-slot:cell(delete)="row">
                <div>
                  <b-button
                    class="btn btn-danger"
                    size="sm"
                    @click="
                      getInfoDelete(row.item.Id);
                      deleteInfo();
                    "
                    ><b-icon icon="trash"
                  /></b-button>
                </div>
              </template>
            </b-table>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ApiRoutes from "@/services/ApiRoutes";

export default {
  name: "HelloWorld",
  data() {
    return {
      show: false,
      idUser: 0,
      dialog: false,
      text: "",
      sortBy: "age",
      sortDesc: false,
      info: [],
      country_list: [
        "Afghanistan",
        "Albania",
        "Algeria",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua &amp; Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bosnia &amp; Herzegovina",
        "Botswana",
        "Brazil",
        "British Virgin Islands",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Cape Verde",
        "Cayman Islands",
        "Chad",
        "Chile",
        "China",
        "Colombia",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote D Ivoire",
        "Croatia",
        "Cruise Ship",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Polynesia",
        "French West Indies",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Greece",
        "Greenland",
        "Grenada",
        "Guam",
        "Guatemala",
        "Guernsey",
        "Guinea",
        "Guinea Bissau",
        "Guyana",
        "Haiti",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jersey",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kuwait",
        "Kyrgyz Republic",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malawi",
        "Malaysia",
        "Maldives",
        "Mali",
        "Malta",
        "Mauritania",
        "Mauritius",
        "Mexico",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montenegro",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Namibia",
        "Nepal",
        "Netherlands",
        "Netherlands Antilles",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Norway",
        "Oman",
        "Pakistan",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "Saint Pierre &amp; Miquelon",
        "Samoa",
        "San Marino",
        "Satellite",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "South Africa",
        "South Korea",
        "Spain",
        "Sri Lanka",
        "St Kitts &amp; Nevis",
        "St Lucia",
        "St Vincent",
        "St. Lucia",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Timor L'Este",
        "Togo",
        "Tonga",
        "Trinidad &amp; Tobago",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Turks &amp; Caicos",
        "Uganda",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "Uruguay",
        "Uzbekistan",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (US)",
        "Yemen",
        "Zambia",
        "Zimbabwe",
      ],
      roles: ["Admin", "Editor", "Usuario"],
      fields: [
        { key: "Id", sortable: false },
        { key: "Username", sortable: true },
        { key: "Fullname", sortable: true },
        { key: "Role", sortable: true },
        { key: "Active", sortable: false },
        { key: "Edit", label: "Edit" },
        { key: "Delete", label: "Delete" },
      ],
      newInfo: {
        Username: "",
        Fullname: "",
        Role: "",
        Active: null,
        Date: "",
        Country: "",
      },
      userSelecionado: [
        {
          Id: 0,
          Username: "",
          Fullname: "",
          Role: "",
          Active: null,
          Date: "",
          Country: "",
        },
      ],
    };
  },
  methods: {
    async getInfo() {
      const response = await ApiRoutes.getInfo();
      console.log(response.data);
      if (response.data.length > 0) {
        this.info = response.data;
      } else {
        alert("Erro ao carregar dados");
      }
      console.log(this.info[0]);
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.addInfo();
    },
    async addInfo() {
      const response = await ApiRoutes.addInfo(this.newInfo);
      console.log(response.data);
      this.dialog = false;
      this.getInfo();
    },
    handleOk1(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.updateInfo();
    },
    async updateInfo() {
      const response = await ApiRoutes.updateInfo(this.userSelecionado[0]);
      console.log(response.data);
      this.show = false;
      this.getInfo();
    },
    async deleteInfo() {
      const response = await ApiRoutes.deleteInfo(this.userSelecionado[0].Id);
      console.log(response);
      this.getInfo();
    },
    getInfoEdit(idUser) {
      this.userSelecionado = this.info.filter((el) => el.Id === idUser);
      this.show = true;
      console.log(this.userSelecionado);
    },
    getInfoDelete(idUser) {
      this.userSelecionado = this.info.filter((el) => el.Id === idUser);
      console.log(this.userSelecionado);
    },
  },
  mounted() {
    this.getInfo();
  },
};
</script>
