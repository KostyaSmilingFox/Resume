// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================

var header = {
  name: {
    firstname: 'Kostya',
    lastname: 'Lisynov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'Ukraine, Dnipro',
}
var footer = {
  social: {
    email: {
      text: 'kotDiablo@gmail.com',
      href: 'mailto: kotDiablo@gmail.com',
    },
    phone: {
      text: '+380968912350',
      href: 'tel: +380968912350',
    },
    linkendin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/LisynovKostya',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    header,
    footer,
    page: {
      title: 'Resume',
    },

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
      work on a new project I learn the domain and try to understand the idea of the project. Good team
      player, every colleague is a friend to me.`,
      },
      experience: {
        title: 'Other experience',
        text: ` Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
        tournament position, goals etc), analyzing by simple mathematics models and preparing probability
        for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },
  })
})

router.get('/Skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('Skills', {
    header,
    footer,
    page: {
      title: 'Skill',
    },

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 10,
        },
        {
          name: 'Git',
          point: 5,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 4,
          isTop: false,
        },
        {
          name: 'NPM',
          point: 7,
          isTop: true,
        },
        {
          name: 'React.js',
          point: 0,
          isTop: true,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
    },
  })
})
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    header,
    footer,
    page: {
      title: 'Education',
    },
    main: {
      education: [
        {
          name: 'HTML',
          isEnd: false,
        },
        {
          name: 'Handlebars',
          isEnd: true,
        },
        {
          name: 'VS Code',
          isEnd: false,
        },
        {
          name: 'Git',
          isEnd: true,
        },
      ],
      certificates: [
        {
          name: 'Economics',
          id: '342342',
        },
        {
          name: 'Psychology',
          id: '324476',
        },
        {
          name: 'Java',
          id: '4365436',
        },
      ],
    },
  })
})
router.get('/hobbies', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('hobbies', {
    header,
    footer,
    page: {
      title: 'My hobbies',
    },
    main: {
      hobbies: [
        {
          name: 'Sport',
          isMain: true,
        },
        {
          name: 'Radioelectronics',
          isMain: true,
        },
        {
          name: 'Science articles',
          isMain: false,
        },
      ],
    },
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'My works',
    },
    header,
    footer,
    main: {
      work: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brain.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: '22.03.2023',
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.ua',
              about:
                'Airbnb competition. High-load application for searching apartments',
              stackAmount: 3,
              stack: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awardsAmount: 2,
              awards: [
                {
                  name: 'Background verification - is a features that provides users to prove that they are real persons',
                },
                {
                  name: 'Preparing seo optimization pages. the automated process of getting data of the app from documents',
                },
              ],
            },
          ],
        },
      ],
    },
  })
})
// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
