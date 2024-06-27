<template>
    <v-container fluid>
        <v-row justify="center" align="center" style="height: 100vh;">
            <v-col cols="12" sm="8" md="6">
                <v-card class="elevation-2">
                    <v-card-title class="primary">
                        <v-row align="center">
                            <v-col cols="auto">
                                <span class="headline">Logo</span>
                            </v-col>
                            <v-col>
                                <span class="headline ml-3">Login</span>
                            </v-col>
                        </v-row>
                    </v-card-title>

                    <v-card-text>
                        <v-form @submit.prevent="login" style="padding: 8px 0;">
                            <v-text-field v-model="email" label="Email" outlined dense required
                                type="email"></v-text-field>

                            <v-text-field v-model="password" label="Password" outlined dense required
                                type="password"></v-text-field>

                            <v-btn color="primary" dark block type="submit">Login</v-btn>
                        </v-form>

                        <v-alert v-if="errorMessage" type="error" dismissible>
                            {{ errorMessage }}
                        </v-alert>

                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import api from '@services/api';
import { TokenService } from '@services'
import { router } from '@router';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        };
    },
    methods: {
        ...mapActions(['loginSuccess']), 
        async login() {
            try {
                const response = await api.post('/auth/login', {
                    email: this.email,
                    password: this.password
                });
                console.log(response);
                
                this.loginSuccess({
                    userData: response.data.data,
                    token: response.data.token
                });

                TokenService.setToken(response.data.token);

                router.push('/');

                console.log("asd");

            } catch (error) {
                this.errorMessage = error.message || 'Error during login';
            }
        }
    }
};
</script>

<style scoped>
.primary {
    background-color: #1976D2;
    color: #FFFFFF;
}
</style>