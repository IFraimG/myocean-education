import { HYDRATE } from 'next-redux-wrapper';
import { profileTypes } from "../types"
import { stateProfileType } from '../interfaces/profile';


const stateDefault: stateProfileType = {
  coursesList: [],
  profileData: {
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
      { title: "ООП на C++", author: "Александр Кулагин", courseID: "ehrgbvfgrf"
      },
      { title: "Дискретная математика", author: "Александр Кулагин", courseID: "qqwew"
      }
    ]
  }
};

function profileReducer(state = stateDefault, action: any): stateProfileType {
  switch (action.type) {
    case HYDRATE: return { ...state, ...action.payload.profile }
    case profileTypes.GET_TASKS_SUCCESS: {
      return {...state, coursesList: action.payload }
    }
    default: return {...state}
  }
}

export default profileReducer;