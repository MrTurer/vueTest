export default {
    state: {
        importChartBar: [],
        exportChartBar: [],
        exportChartCircle: [],
        importChartCircle: [],
        chartBarDownloaded: false,
        chartCircleDownloaded: false,
    },
    getters: {
        importChartBarOption(state) {
            return state.importChartBar
        },
        exportChartBarOption(state) {
            return state.exportChartBar
        },
        barChartsStatus(state) {
            return state.chartBarDownloaded
        },
        circleChartsStatus(state) {
            return state.chartCircleDownloaded
        },
        getImportCircleChartMain(state) {
            return state.importChartCircle
        },
        getExportCircleChartMain(state) {
            return state.exportChartCircle
        }
    },
    mutations: {
        updateChartBar(state, {optionImport, optionExport}) {
            state.importChartBar = optionImport
            state.exportChartBar = optionExport
        },
        updateChartBarStatus(state, status) {
            state.chartBarDownloaded = status
        },
        updateChartCircleStatus(state, status) {
            state.chartCircleDownloaded = status
        },
        updateChartCircle(state, {seriesImport, seriesExport}) {
            state.importChartCircle = seriesImport
            state.exportChartCircle = seriesExport
        },
    },
    actions: {
        getChartBarOption(ctx, {goodsChartActive, id}) {
            console.log(`Поиск по стране с id: ${id}`)
            ctx.commit('updateChartBarStatus', false)

            setTimeout(() => {
                let optionImport
                let optionExport

                if (goodsChartActive && id !== 2) {
                    optionImport = [4400000000, 5500000000, 4100000000, 220000000, 430000000, 2100000000, 330000000, 4500000000, 310000000, 870000000, 6500000000, 350000000]
                    optionExport = [2200000000, 500000000, 9100000000, 120000000, 730000000, 4100000000, 390000000, 4500000000, 310000000, 110000000, 6500000000, 950000000]
                } else if (id === 2) {
                    optionImport = [3300000000, 7500000000, 1100000000, 920000000, 430000000, 7700000000, 130000000, 8500000000, 390000000, 470000000, 2500000000, 850000000]
                    optionExport = [5200000000, 1100000000, 900000000, 20000000, 130000000, 6100000000, 890000000, 1500000000, 410000000, 810000000, 5500000000, 150000000]
                } else {
                    optionImport = [5500000000, 5500000000, 1000000000, 8000000000, 560000000, 7000000000, 330000000, 5500000000, 310000000, 170000000, 3500000000, 320000000]
                    optionExport = [4400000000, 5500000000, 4100000000, 220000000, 430000000, 2100000000, 330000000, 4500000000, 310000000, 870000000, 6500000000, 350000000]
                }
                optionImport = [{
                    data: optionImport
                }]
                optionExport = [{
                    data: optionExport
                }]

                ctx.commit('updateChartBar', {optionImport, optionExport})

                ctx.commit('updateChartBarStatus', true)
            }, 200)
        },
        getCircleChartOption(ctx) {
            ctx.commit('updateChartCircleStatus', false)

            setTimeout(() => {
                const seriesImport = [44, 55, 13, 43, 22,11]
                const seriesExport = [21, 51, 67, 33, 12,56]
                ctx.commit('updateChartCircle', {seriesImport,seriesExport})
                ctx.commit('updateChartCircleStatus', true)
            }, 200)
        }
    }
}