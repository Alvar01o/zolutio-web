export const state = () => ({
  theme: {
    NavMenuItems: [
      {
        text: 'Home',
        url: '#'
      },
      {
        text: 'Profile',
        url: '#'
      },
      {
        text: 'Blog',
        url: '#'
      },
      {
        text: 'Reviews',
        url: '#'
      },
    ],
    footer: {
      companyName: 'DevPortfolios',
      year: 2021
    }
  },
  data: {
    cards: [
      { title: 'Experience', content: 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', icon: '' },
      { title: 'Skills', content: 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', icon: '' },
      { title: 'Blog', content: 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', icon: '' },
      { title: 'Projects', content: 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', icon: '' },
      { title: 'Profile', content: 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', icon: '' },
      { title: 'Reviews', content: 'Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.', icon: '' }
    ]
  }

})

export const mutations = {}

export const getters = {
  getNavItems: (state) => {
    return state.theme.NavMenuItems;
  },
  getFooter: (state) => {
    return state.theme.footer;
  },
  getCards: (state) => {
    return state.data.cards;
  }
}
export const actions = {}
