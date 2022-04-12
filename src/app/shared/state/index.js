import { createStore } from 'vuex'
import home from '../../modules/Home/state/index'
import marketAccess from '../../modules/MarketsAccess/state/index'
import auth from "@/app/modules/auth/store";

export default createStore({
    state: {
        news: [],
        selectCountries: [],
    },
    getters: {
        allNews(state) {
            return state.news
        },
        getSelectCountries(state) {
            return state.selectCountries
        },
    },
    mutations: {
        updateNews(state, news) {
            state.news = news
        },
        updateCountries(state, countries) {
            state.selectCountries = countries
        },
    },
    actions: {
        getNews(ctx) {
            setTimeout(() => {
                const news = [
                    {title: 'Изобретен новый способ заполнения пяточных трещин', date: '11.12.2022', img: require('../../../assets/img/home/newsSlide1.jpg')},
                    {title: 'Обзор СМИ по внешнеэкономической тематике за период с 22.11.2021 по 28.11.2021', date: '12.07.2022', img: require('../../../assets/img/home/newsSlide4.jpg')},
                    {title: 'Пекин заявил, что встреча глав правительств КНР и РФ нацелена на стабилизацию поставок', date: '12.02.2022', img: require('../../../assets/img/home/newsSlide3.jpg')},
                    {title: 'Представители России и Франции договорились о развитии сотрудничества в сфере инноваций', date: '10.12.2022', img: require('../../../assets/img/home/newsSlide2.jpg')},
                ]
                ctx.commit('updateNews', news)
            }, 200)
        },
        getCountries(ctx) {
            setTimeout(() => {
                const countries = [
                    {label: 'Италия', id: 1, active: true},
                    {label: 'Шумерская империя', id: 2},
                    {label: 'Атлантида', id: 3},
                    {label: 'Эльдорадо', id: 4},
                ]
                ctx.commit('updateCountries', countries)
            }, 300)
        },
    },
    modules: {
        auth,
        home,
        marketAccess,
    }
})