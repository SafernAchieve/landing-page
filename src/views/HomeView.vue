<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-message</v-icon>
      </v-btn>
      <v-btn icon @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer app v-model="drawer">
      <!-- Sidebar content -->
      <v-list>
        <v-list-item link @click="selectedNavItem = 'dashboard'">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="selectedNavItem = 'profile'">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="selectedNavItem = 'settings'">
          <v-list-item-icon>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-content>
      <v-container fluid>
        <!-- Dashboard Content -->
        <div v-if="selectedNavItem === 'dashboard'">
          <!-- Summary Cards -->
          <v-row>
            <v-col cols="12" md="4">
              <v-card class="pa-3">
                <v-card-title>Users</v-card-title>
                <v-card-text class="display-1">{{ userCount }}</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="pa-3">
                <v-card-title>Orders</v-card-title>
                <v-card-text class="display-1">{{ orderCount }}</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="pa-3">
                <v-card-title>Revenue</v-card-title>
                <v-card-text class="display-1">$ {{ revenue }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Charts -->
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-card-title>Sales Analytics</v-card-title>
                <v-card-text>
                  <v-chart type="line" :data="chartData"></v-chart>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Data Table -->
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-card-title>Recent Orders</v-card-title>
                <v-data-table
                  :headers="headers"
                  :items="orders"
                  :search="search"
                  item-key="id"
                >
                  <template v-slot:top>
                    <v-toolbar flat>
                      <v-toolbar-title>Orders</v-toolbar-title>
                      <v-divider class="mx-4" inset vertical></v-divider>
                      <v-spacer></v-spacer>
                      <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                        single-line
                        hide-details
                      ></v-text-field>
                    </v-toolbar>
                  </template>
                </v-data-table>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <!-- Profile Content -->
        <div v-if="selectedNavItem === 'profile'">
          <!-- Profile details and settings -->
          <v-card>
            <v-card-title>Profile</v-card-title>
            <v-card-text>
              <!-- Profile details -->
              <!-- Profile settings -->
            </v-card-text>
          </v-card>
        </div>

        <!-- Settings Content -->
        <div v-if="selectedNavItem === 'settings'">
          <!-- App settings -->
          <v-card>
            <v-card-title>Settings</v-card-title>
            <v-card-text>
              <!-- Application settings -->
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selectedNavItem: 'dashboard',
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Customer', value: 'customer' },
        { text: 'Product', value: 'product' },
        { text: 'Date', value: 'date' },
        { text: 'Total', value: 'total' },
        { text: 'Status', value: 'status' },
      ],
      orders: [
        { id: 1, customer: 'John Doe', product: 'Product A', date: '2024-07-01', total: 100, status: 'Pending' },
        { id: 2, customer: 'Jane Smith', product: 'Product B', date: '2024-07-02', total: 150, status: 'Shipped' },
        // Add more orders as needed
      ],
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: '#f87979',
            data: [40, 20, 30, 50, 35, 45],
          },
        ],
      },
    };
  },
  computed: {
    userCount() {
      // Calculate user count based on data
      return this.orders.length; // Example calculation
    },
    orderCount() {
      // Calculate order count based on data
      return this.orders.length; // Example calculation
    },
    revenue() {
      // Calculate revenue based on data
      return this.orders.reduce((total, order) => total + order.total, 0); // Example calculation
    },
  },
  methods: {
    logout() {
      // Handle logout functionality
    },
  },
};
</script>

<style scoped>
/* Scoped CSS */
</style>
