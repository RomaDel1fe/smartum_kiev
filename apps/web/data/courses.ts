import { teachers, type Teacher } from "@/data/teachers";

export type CourseTeacher = Teacher;
export type CourseReview = { author: string; text: string; rating: number; childAge?: string };
export type CoursePrice = { title: string; amount: number; currency: "UAH"; period: string; description?: string };
export type LearningFormat = { title: string; description: string; durationMinutes?: number; groupSize?: string };

export type Course = {
  slug: string; title: string; age: string; description: string; result: string[]; symbol: string; color: string; isPublished: boolean;
  information: { eyebrow: string; fullDescription: string; program: string[] };
  teachers: CourseTeacher[]; reviews: CourseReview[]; prices: CoursePrice[]; learningFormats: LearningFormat[];
};

/** Тимчасове джерело контенту до підключення Courses API. Порожні блоки не показуються на сайті. */
export const courses: Course[] = [{
  slug: "mental-arithmetic",
  title: "Ментальна арифметика",
  age: "5–16 років",
  description: "Розвиваємо обидві півкулі мозку через швидкі обчислення.",
  result: ["Концентрація уваги", "Швидкість мислення", "Впевненість у математиці"],
  symbol: "＋",
  color: "#ff7a45",
  isPublished: true,
  information: {
    eyebrow: "Курс для дітей 5–16 років",
    fullDescription: "Діти вчаться виконувати обчислення подумки, тренують увагу, пам’ять і впевненість у власних силах.",
    program: ["Робота з рахівницею абакус", "Перехід до усного рахунку", "Вправи на увагу та швидкість мислення"],
  },
  teachers,
  // Тимчасові відгуки для перевірки відображення секції. Замінити на підтверджені перед публікацією.
  reviews: [
    {
      author: "Олена",
      childAge: "8 років",
      rating: 5,
      text: "Син із задоволенням ходить на заняття й став значно впевненіше рахувати подумки. Особливо подобається, що навчання проходить у формі гри.",
    },
    {
      author: "Марина",
      childAge: "10 років",
      rating: 5,
      text: "Помітили, що донька стала уважнішою та швидше виконує домашні завдання. Тренерка завжди дає зрозумілий зворотний зв’язок після занять.",
    },
  ],
  prices: [
    {
      title: "Індивідуальне навчання",
      amount: 1800,
      currency: "UAH",
      period: "28 днів",
      description: "Заняття з тренером 1 раз на тиждень; доступ до ігрової платформи для тренувань 24/7; супровід та контроль тренера.",
    },
    {
      title: "Групове навчання",
      amount: 1500,
      currency: "UAH",
      period: "28 днів",
      description: "Заняття з тренером 1 раз на тиждень; доступ до ігрової платформи для тренувань 24/7; супровід та контроль тренера.",
    },
  ],
  learningFormats: [{ title: "Заняття у невеликих групах", description: "Регулярна практика та зрозумілий зворотний зв’язок для батьків. Розклад уточнюйте у менеджера академії." }],
}];

export const publishedCourses = courses.filter((course) => course.isPublished);
