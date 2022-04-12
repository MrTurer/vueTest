
export default {
    state: {
        restrictionData: [],
        restrictionDataLoader: true
    },
    getters: {
        getRestrictionProduct(state) {
            return state.restrictionData
        },
        getRestrictionProductLoader(state) {
            return state.restrictionDataLoader
        },
    },
    mutations: {
        updateRestrictionData(state, restrictionData) {
            state.restrictionData = restrictionData
        },
        updateRestrictionDataLoader(state, restrictionDataLoader) {
            state.restrictionDataLoader = restrictionDataLoader
        },
    },
    actions: {
        downloadRestrictionProduct(ctx) {
            ctx.commit('updateRestrictionDataLoader', false)
            setTimeout(() => {
                const restrictionData = [
                    {
                        product: 'Бесшовные трубы',
                        cod: '730411, 730419, 730419, 730422, 730423, 730424, 730429, 730431, 730439, 730451, 730459',
                        type: 'Антидемпинговая',
                        size: 'Для АО «Челябинский трубопрокатный завод» и АО «Первоуральский новотрубный завод» – 24,1% для предприятия группы ТМК – 28,7 %; для остальных российских компаний – 35,8%',
                        duration: 'Срок действия'
                    },
                    {
                        product: 'Феррокремний',
                        cod: '720221,720229',
                        type: 'Антидемпинговая',
                        size: 'Для Братский ферросплавный завод – 17,8 %; для остальных российских компаний – 22,7%',
                        duration: 'Срок действия'
                    },
                    {
                        product: 'Сварные нелегированные трубы',
                        cod: '730630',
                        type: 'Антидемпинговая',
                        size: 'Для предприятий группы ОМК – 10,1%; для предприятий группы ТМК – 16,8 %; для остальных российских компаний – 20,5\n',
                        duration: 'Срок действия'
                    },
                ]
                ctx.commit('updateRestrictionData', restrictionData)
                ctx.commit('updateRestrictionDataLoader', true)
            }, 500)
        },
        downloadRestrictionService(ctx) {
            ctx.commit('updateRestrictionDataLoader', false)
            setTimeout(() => {
                const restrictionData = [
                    {
                        label: 'Автотранспортные услуги',
                        type: 'Антидемпинговая',
                        size: 'Размер пошлины 1',
                        duration: 'Срок действия'
                    },
                    {
                        label: 'Страховые услуги',
                        type: 'Антидемпинговая',
                        size: 'Размер пошлины 2',
                        duration: 'Срок действия'
                    },
                    {
                        label: 'Автотранспортные услуги',
                        type: 'Антидемпинговая',
                        size: 'Размер пошлины 3',
                        duration: 'Срок действия'
                    },
                ]
                ctx.commit('updateRestrictionData', restrictionData)
                ctx.commit('updateRestrictionDataLoader', true)
            }, 500)
        },
        downloadRestrictionMeasure(ctx) {
            ctx.commit('updateRestrictionDataLoader', false)
            setTimeout(() => {
                ctx.commit('updateRestrictionData', ctx.state.restrictionData)
                ctx.commit('updateRestrictionDataLoader', true)
            }, 500)
        },
        downloadRestrictionRisk(ctx) {
            ctx.commit('updateRestrictionDataLoader', false)
            setTimeout(() => {
                ctx.commit('updateRestrictionData', ctx.state.restrictionData)
                ctx.commit('updateRestrictionDataLoader', true)
            }, 500)
        },
    }
}