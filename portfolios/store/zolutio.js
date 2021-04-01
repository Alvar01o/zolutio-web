export const state = () => ({
  dashboard: {
    stack: [
      {
        name: 'LARAVEL',
        logo: ''
      },
      {
        name: 'NODEJS',
        logo: ''
      },
      {
        name: 'NUXTJS',
        logo: ''
      },
      {
        name: 'VUEJS',
        logo: ''
      },
      {
        name: 'AWS',
        logo: ''
      }
    ],
    team: [
      {
        name: 'Alvaro Mercado',
        photo: 'alvaro.jpg',
        position: 'CO-founder',
        skills: [
          'PHP'
        ],
        twitter: '',
        LinkedIn: 'https://www.linkedin.com/in/alvaro-mercado-6b387a10b/'
      },
      {
        name: 'C.A.',
        photo: '',
        position: 'CO-founder',
        skills: [
          'Javascript',
          'AWS'
        ],
        twitter: '',
        LinkedIn: ''
      }
    ],
    footer: {
      companyName: 'Zolutio.',
      year: 2021
    }
  },
  data: {

  }

})

export const mutations = {

}

export const getters = {
  getStack: (state) => {
    return state.dashboard.stack;
  },
  getTeam: (state) => {
    return state.dashboard.team;
  }
}

export const actions = {}
