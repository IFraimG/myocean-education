import { courseType } from "./../reducers/profile";
import { getTasksActionSuccess, getTasksActionType, getCurrentLessonsType } from "./../actions/profile";
import { put } from "redux-saga/effects";

export function* getTasksWorker(action: getTasksActionType) {
  yield put(getTasksActionSuccess([
      {
        title: "Вводный курс по JavaScript",
        courseID: "terfsdfds",
        author: "Александр Кулагин",
        id: 1,
        type: "homework",
        date: "12 ноября понедельник",
        timeEnd: "через 6 дней",
      },
      {
        title: "ООП на C++",
        author: "Александр Кулагин",
        courseID: "ehrgbvfgrf",
        id: 5,
        type: "hardwork",
        date: "1 ноября вторник",
        timeEnd: "осталось 10 часов",
      },
      {
        title: "Дискретная математика",
        author: "Александр Кулагин",
        courseID: "qqwew",
        id: 5,
        type: "hardwork",
        date: "1 ноября вторник",
        timeEnd: "осталось 3 часа",
      },
    ]));
}

export function* CurrentLessonsWorker(action: getCurrentLessonsType) {
  
  const exampleData: Array<courseType> = [
    {
      title: "Вводный курс по JavaScript",
      courseID: "terfsdfds",
      author: "Александр Кулагин",
      id: 1,
      type: "homework",
      date: "12 ноября понедельник",
      timeEnd: "через 6 дней",
    },
    {
      title: "ООП на C++",
      author: "Александр Кулагин",
      courseID: "ehrgbvfgrf",
      id: 5,
      type: "hardwork",
      date: "1 ноября вторник",
      timeEnd: "осталось 10 часов",
    },
    {
      title: "Дискретная математика",
      author: "Александр Кулагин",
      courseID: "qqwew",
      id: 5,
      type: "hardwork",
      date: "1 ноября вторник",
      timeEnd: "осталось 3 часа",
    },
  ];

  let currentLessons: Array<courseType> = [];
  exampleData.find((item: courseType) => {
    if (item.courseID == action.payload) currentLessons.push(item);
  });
  
  yield put(getTasksActionSuccess(currentLessons));
};
