<template>
    <div class="monto-container">
        <v-card>
            <v-card-text>
                <v-date-picker v-model="fecha" color="primary"></v-date-picker>
                <v-text-field v-model="monto" label="Monto" outlined></v-text-field>
            </v-card-text>
            <v-card-actions class="card-actions-container">
                <v-btn @click="enviarDatos" class="primary">Enviar</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import api from '@services/api';
import { mapActions } from 'vuex';

export default {
    name: 'Monto',
    data() {
        return {
            monto: '',
            fecha: null
        };
    },
    methods: {
        ...mapActions(['updateTransactionData']),
        async enviarDatos() {
            try {
                const response = await api.post('/transaction', {
                    fecha: this.fecha,
                    monto: this.monto
                });

                this.updateTransactionData(response.data);

                this.monto = '';
                this.fecha = null;

            } catch (error) {
                console.error('Error al enviar datos:', error);
            }
        }
    }
};
</script>

<style scoped>

.monto-container{
    display: flex;
    justify-content: center;
}
.card-actions-container {
  display: flex;
  justify-content: flex-end;
}


.v-btn.primary {
  background-color: #1976D2;
  color: white;
}

</style>