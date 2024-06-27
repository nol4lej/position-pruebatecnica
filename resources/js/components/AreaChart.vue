<template>
    <div class="chartdiv" ref="chartdiv">
        <Loader v-if="loading" />
    </div>
</template>

<script>
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { mapState } from 'vuex';
import api from '@services/api';
import Loader from '@components/Loader.vue';

export default {

    name: 'AreaChart',

    components: {
        Loader
    },

    data() {
        return {
            chartData: [],
            loading: false,
            series: null,
            xAxis: null
        };
    },

    computed: {
        ...mapState({
            transactionData: state => state.transactionData // Mapea el estado Vuex necesario
        })
    },

    async mounted() {
        this.root = am5.Root.new(this.$refs.chartdiv);
        this.root.setThemes([am5themes_Animated.new(this.root)]);

        this.chart = this.root.container.children.push(
            am5xy.XYChart.new(this.root, {
                panY: false,
                layout: this.root.verticalLayout
            })
        );

        // Agregar leyenda
        const legend = this.chart.children.push(am5.Legend.new(this.root, {}));
        legend.data.setAll(this.chart.series.values);

        // Agregar cursor
        this.chart.set("cursor", am5xy.XYCursor.new(this.root, {}));

        await this.loadDataAndSetupChart();
    },

    watch: {
        transactionData(newData) {
            this.updateChartData(newData);
        }
    },

    methods: {
        
        async loadDataAndSetupChart() {
            this.loading = true;
            try {
                const response = await api.get('/transaction');
                this.chartData = response.data.data.map(item => ({
                    ...item,
                    monto: parseFloat(item.monto)
                }));

                this.setupChart();
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.loading = false;
            }
        },
        
        setupChart() {

            // Crear Y-axis
            const yAxis = this.chart.yAxes.push(
                am5xy.ValueAxis.new(this.root, {
                    renderer: am5xy.AxisRendererY.new(this.root, {})
                })
            );

            // Crear X-Axis
            this.xAxis = this.chart.xAxes.push(
                am5xy.CategoryAxis.new(this.root, {
                    renderer: am5xy.AxisRendererX.new(this.root, {}),
                    categoryField: "fecha"
                })
            );
            this.xAxis.data.setAll(this.chartData);

            // Crear series
            this.series = this.chart.series.push(
                am5xy.LineSeries.new(this.root, {
                    name: "Transacciones",
                    xAxis: this.xAxis,
                    yAxis: yAxis,
                    valueYField: "monto",
                    categoryXField: "fecha",
                    locationX: 0
                })
            );

            // Configurar la serie como gráfico de área
            this.series.fillOpacity = 0.5;
            this.series.fill = am5.color("#4CAF50");

            this.series.data.setAll(this.chartData);
        },

        async updateChartData(newData) {
            this.series.data.clear();
            this.xAxis.data.clear();
            await this.loadDataAndSetupChart();
        }

    },
    beforeDestroy() {
        if (this.root) {
            this.root.dispose();
        }
    }
}
</script>

<style scoped>
.chartdiv {
    width: 100%;
    height: 500px;
}
</style>
