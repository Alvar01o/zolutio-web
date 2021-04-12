export const state = () => ({
  dashboard: {
    stack: [
      {
        name: 'PHP',
        logo: 'logos/php.svg'
      },
      {
        name: 'NGINX',
        logo: 'logos/nginx.svg'
      },
      {
        name: 'NODEJS',
        logo: 'logos/nodejs.svg'
      },
      {
        name: 'DOCKER',
        logo: 'logos/docker.svg'
      },
      {
        name: 'VUEJS',
        logo: 'logos/vuejs.svg'
      },
      {
        name: 'LINUX',
        logo: 'logos/linux.svg'
      },
      {
        name: 'LARAVEL',
        logo: 'logos/laravel.svg'
      },
      {
        name: 'NUXTJS',
        logo: 'logos/nuxtjs.svg'
      },
      {
        name: 'AWS',
        logo: 'logos/aws.svg'
      },
      {
        name: 'MONGODB',
        logo: 'logos/mongodb.svg'
      },
      {
        name: 'MYSQL',
        logo: 'logos/mysql.svg'
      },
      {
        name: 'BOOTSTRAP',
        logo: 'logos/bootstrap.svg'
      },
      {
        name: 'TAILWINDCSS',
        logo: 'logos/tailwindcss.svg'
      },
      {
        name: 'REDIS',
        logo: 'logos/redis.svg'
      },
      {
        name: 'REACTJS',
        logo: 'logos/reactjs.svg'
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
