export type CourseTeacher = { name: string; role: string; bio: string; photoUrl?: string };
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
  teachers: [
    {
      name: "Януль Лариса",
      role: "Тренерка",
      bio: "Сучасна, цікава та допитлива тренерка. Вміє мотивувати учня до розвитку, до знання предмета. Створює умови для досягнення бажаних результатів.",
      photoUrl: "/images/teachers/larysa-yanul.jpg",
    },
    {
      name: "Сафонюк Альона",
      role: "Тренерка",
      bio: "Її уроки завжди цікаві, добре продумані, насичені. На уроці створює ігрову атмосферу, що розвиває пізнавальний інтерес і активність учнів.",
      photoUrl: "/images/teachers/alona-safoniuk.jpg",
    },
    {
      name: "Козлова Наталія",
      role: "Тренерка",
      bio: "Працюючи з дітьми кожного дня, ти сам на деякий час перетворюєшся на дитину: радієш успіхам, засмучуєшся невдачам. І це завжди стимулює тримати руку на пульсі, навчатися і розвиватися разом зі своїми учнями!",
      photoUrl: "/images/teachers/nataliia-kozlova.jpg",
    },
    {
      name: "Олійник Анна",
      role: "Тренерка",
      bio: "Я люблю свою роботу за можливість кожного дня бачити дитячі посмішки. Вчителювання — дуже позитивний процес, який дає можливість спостерігати, як від заняття до заняття зростають результати твоїх учнів!",
      photoUrl: "/images/teachers/anna-oliinyk.jpg",
    },
    {
      name: "Ярошенко Тетяна",
      role: "Тренерка",
      bio: "Найбільше в моїй роботі мені подобається бачити зміни, які відбуваються з дітьми, як вони стають більш впевненими в собі і своїх силах: коли від фрази «це взагалі неможливо» переходять до «а я можу ще краще!». Люблю, коли батьки разом з дітьми радіють успіхам, а по завершенню навчання рекомендують наші курси своїм родичам, знайомим і друзям.",
      photoUrl: "/images/teachers/tetiana-yaroshenko.jpg",
    },
  ],
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
