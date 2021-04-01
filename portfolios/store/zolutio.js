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
        photo: '',
        position: 'CO-founder',
        skills: [
          'PHP'
        ]
      },
      {
        name: 'C.A.',
        photo: '',
        position: 'CO-founder',
        skills: [
          'Javascript',
          'AWS'
        ]
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
