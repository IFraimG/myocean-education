import { HYDRATE } from 'next-redux-wrapper';
import { profileTypes } from "../types"

type ActionTypes = getTasksActionType;

export type coursesFullType = {
  title: string,
  courseID: string,
  author: string
}
export type courseType = {
  title: string,
  courseID: string,
  author: string,
  id: number | string,
  type: string,
  date: any,
  timeEnd: any
}
export type NewsData = {
  date: string,
  title: string | null,
  description: string,
  id: string,
  links: any
}
export type awardType = {
  title: string,
  date: string,
  src: string
}
export type profileType = {
  courses: Array<coursesFullType>,
  news: Array<NewsData> | null,
  awards: Array<awardType> | null,

}

export interface stateProfileType {
  coursesList: Array<courseType>,
  profile: profileType
};

const stateDefault: stateProfileType = {
  coursesList: [],
  profile: {
    awards: [
      {title: "Прохождение курса JavaScript", date: "3 ноября 2020", src: "/gramota.png"},
      {title: "Прохождение курса WordPress", date: "15 декабря 2019", src: "/gramota.png"},
      {title: "Прохождение курса Формат данных", date: "7 сентября 2018", src: "/gramota.png"},
    ],
    news: [
      { date: "месяц назад", title: "Произведена оплата", description: `
      Lorem ipsum dolor sit <b>amet consectetur adipisicing elit. Asperiores quaerat 
      debitis quae placeat perspiciatis vel nostrum alias, at deserunt rem eius! 
      Aperiam obcaecati eligendi ducimus totam, dolorum suscipit nobis aliquam quis 
      magnam illum at et quibusdam</b> consequatur aut voluptatibus repudiandae impedit 
      fugit facilis architecto necessitatibus ad vero fugiat nulla rerum! Quam rerum 
      magni at commodi! Nam voluptate eaque sed harum!`,
      id: "trdfsadxzz", links: null
      },
      { date: "месяц назад", title: "Получена новая оценка", description: `Вы получили 5 за работу.`,
        id: "trdfsadxzz", links: null
      }
    ],
    courses: [
      { title: "Вводный курс по JavaScript", courseID: "terfsdfds", 
        author: "Александр Кулагин"
      },
      { title: "WordPress", author: "Александр Кулагин", courseID: "ehrgfdsgrf"
      },
      {title: "Вводный курс по TypeScript", courseID: "awfvcxc", author: "Александр Кулагин"
      },
      { title: "Алгоритмика", author: "Александр Кулагин", courseID: "asads"
      },
      { title: "ООП на C++", author: "Александр Кулагин", courseID: "ehrgbvfgrf"
      },
      { title: "Python", author: "Александр Кулагин", courseID: "jkioiu"
      },
      { title: "Дискретная математика", author: "Александр Кулагин", courseID: "qqwew"
      }
    ]
  }
};

function profileReducer(state = stateDefault, action: any): stateProfileType {
  switch (action.type) {
    case HYDRATE: return { ...state, ...action.payload }
    case profileTypes.GET_TASKS: {
      return {...state, coursesList: action.payload }
    }
    default: return {...state}
  }
}

type getTasksActionType = { type: typeof profileTypes.GET_TASKS, payload: Array<courseType>}
export const getTasksAction = (data: Array<courseType>): getTasksActionType => ({type: profileTypes.GET_TASKS, payload: data})

export const getTasksThunk = () => (dispatch: any) => {
  // СДЕЛАТЬ ЗАПРОС
  dispatch(getTasksAction([
    { title: "Вводный курс по JavaScript", courseID: "terfsdfds", 
      author: "Александр Кулагин", id: 1, type: "homework", date: "12 ноября понедельник",
      timeEnd: "через 6 дней"
    },
    { title: "WordPress", author: "Александр Кулагин", courseID: "ehrgfdsgrf", id: 3, type: "classwork",
      date: "7 февраля четверг", timeEnd: "через 6 дней"
    },
    {title: "Вводный курс по TypeScript", courseID: "awfvcxc", author: "Александр Кулагин", id: 2, type: "homework",
      date: "15 ноября вторник", timeEnd: "через 2 дня"
    },
    { title: "Алгоритмика", author: "Александр Кулагин", courseID: "asads", id: 4, type: "vebinar",
      date: "15 ноября суббота", timeEnd: "через 2 недели"
    },
    { title: "ООП на C++", author: "Александр Кулагин", courseID: "ehrgbvfgrf", id: 5, type: "hardwork",
      date: "1 ноября вторник", timeEnd: "осталось 10 часов"
    },
    { title: "Python", author: "Александр Кулагин", courseID: "jkioiu", id: 5, type: "hardwork",
      date: "1 ноября вторник", timeEnd: "через 10 дней"
    },
    { title: "Дискретная математика", author: "Александр Кулагин", courseID: "qqwew", id: 5, type: "hardwork",
      date: "1 ноября вторник", timeEnd: "осталось 3 часа"
    },
  ]))
}
// СДЕЛАТЬ ЗАПРОС
export const getCurrentLessons = (courseID: string) => (dispatch: any) => {
  
  const exampleData: Array<courseType> = [
    { title: "Вводный курс по JavaScript", courseID: "terfsdfds", 
      author: "Александр Кулагин", id: 1, type: "homework", date: "12 ноября понедельник",
      timeEnd: "через 6 дней"
    },
    { title: "Вводный курс по JavaScript", courseID: "terfsdfds", 
      author: "Александр Кулагин", id: 1, type: "homework", date: "14 ноября среда",
      timeEnd: "через 6 дней"
    },
    { title: "Вводный курс по JavaScript", courseID: "terfsdfds", 
      author: "Александр Кулагин", id: 1, type: "homework", date: "27 ноября понедельник",
      timeEnd: "через 11 дней"
    },
    { title: "WordPress", author: "Александр Кулагин", courseID: "ehrgfdsgrf", id: 3, type: "classwork",
      date: "7 февраля четверг", timeEnd: "через 6 дней"
    },
    { title: "WordPress", author: "Александр Кулагин", courseID: "ehrgfdsgrf", id: 3, type: "classwork",
      date: "8 февраля среда", timeEnd: "через 3 дня"
    },
    {title: "Вводный курс по TypeScript", courseID: "awfvcxc", author: "Александр Кулагин", id: 2, type: "homework",
      date: "15 ноября вторник", timeEnd: "через 2 дня"
    },
    { title: "Алгоритмика", author: "Александр Кулагин", courseID: "asads", id: 4, type: "vebinar",
      date: "15 ноября суббота", timeEnd: "через 2 недели"
    },
    { title: "ООП на C++", author: "Александр Кулагин", courseID: "ehrgbvfgrf", id: 5, type: "hardwork",
      date: "1 ноября вторник", timeEnd: "осталось 10 часов"
    },
    { title: "Python", author: "Александр Кулагин", courseID: "jkioiu", id: 5, type: "hardwork",
      date: "1 ноября вторник", timeEnd: "через 10 дней"
    },
    { title: "Дискретная математика", author: "Александр Кулагин", courseID: "qqwew", id: 5, type: "hardwork",
      date: "1 ноября вторник", timeEnd: "осталось 3 часа"
    },
  ]

  let currentLessons: Array<courseType> = []
  exampleData.find((item: courseType) => {
    if (item.courseID == courseID) currentLessons.push(item)
  })
  dispatch(getTasksAction(currentLessons))
}

export default profileReducer;