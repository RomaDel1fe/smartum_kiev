"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";
import { CustomSelect, type SelectOption } from "@/components/custom-select";
import { courses } from "@/data/courses";

const trialSchema = z.object({
  parentName: z.string().trim().min(2, "Вкажіть ім’я (щонайменше 2 символи)").max(80, "Ім’я надто довге"),
  phone: z.string().refine(isValidPhoneNumber, "Вкажіть коректний номер телефону"),
  childAge: z.string().refine((value) => value === "" || value === "other" || /^\d+$/.test(value), "Оберіть вік дитини"),
  course: z.string().max(100),
  wishes: z.string().trim().max(600, "Не більше 600 символів"),
});

type TrialFormValues = z.infer<typeof trialSchema>;

function getAgeOptions(courseTitle?: string): SelectOption[] {
  const relevantCourses = courseTitle ? courses.filter((course) => course.title === courseTitle) : courses;
  const ages = new Set<number>();

  relevantCourses.forEach((course) => {
    const numbers = course.age.match(/\d+/g)?.map(Number) ?? [];
    if (numbers.length === 0) return;
    const from = numbers[0]!;
    const to = numbers[1] ?? from;
    for (let age = from; age <= to; age += 1) ages.add(age);
  });

  return [
    ...Array.from(ages).sort((a, b) => a - b).map((age) => ({ value: String(age), label: `${age} ${age === 1 ? "рік" : age >= 2 && age <= 4 ? "роки" : "років"}` })),
    { value: "other", label: "Інший вік" },
  ];
}

export function TrialForm({ courseTitle, onSubmitted }: { courseTitle?: string; onSubmitted?: () => void }) {
  const ageOptions = getAgeOptions(courseTitle);
  const courseOptions = courses.map((course) => ({ value: course.title, label: course.title }));
  const { control, handleSubmit, register, reset, formState: { errors, isSubmitSuccessful } } = useForm<TrialFormValues>({
    resolver: zodResolver(trialSchema),
    defaultValues: { parentName: "", phone: "", childAge: "", course: courseTitle ?? "", wishes: "" },
    mode: "onBlur",
  });

  const submitPlaceholder = handleSubmit(() => {
    // Тут буде виклик API. Поки форма лише перевіряє дані й імітує успішне надсилання.
    onSubmitted?.();
  });

  return (
    <form className="trial-form" onSubmit={submitPlaceholder} noValidate>
      <div className="form-field">
        <label htmlFor="trial-parent-name">Ім’я батька або матері <span aria-hidden="true">*</span></label>
        <input id="trial-parent-name" autoComplete="name" aria-invalid={!!errors.parentName} aria-describedby={errors.parentName ? "trial-parent-name-error" : undefined} {...register("parentName")} />
        {errors.parentName && <span className="form-error" id="trial-parent-name-error">{errors.parentName.message}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="trial-phone">Телефон <span aria-hidden="true">*</span></label>
        <Controller name="phone" control={control} render={({ field }) => (
          <PhoneInput id="trial-phone" international defaultCountry="UA" countryCallingCodeEditable={false} value={field.value || undefined} onChange={(value) => field.onChange(value ?? "")} onBlur={field.onBlur} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "trial-phone-error" : undefined} />
        )} />
        {errors.phone && <span className="form-error" id="trial-phone-error">{errors.phone.message}</span>}
      </div>

      <div className="form-field">
        <label htmlFor="trial-child-age">Вік дитини <span>(необов’язково)</span></label>
        <Controller name="childAge" control={control} render={({ field }) => (
          <CustomSelect id="trial-child-age" options={ageOptions} placeholder="Оберіть вік" value={field.value} onChange={field.onChange} onBlur={field.onBlur} invalid={!!errors.childAge} describedBy={errors.childAge ? "trial-child-age-error" : undefined} />
        )} />
        {errors.childAge && <span className="form-error" id="trial-child-age-error">{errors.childAge.message}</span>}
      </div>

      {courseTitle ? <input type="hidden" {...register("course")} /> : (
        <div className="form-field">
          <label htmlFor="trial-course">Курс <span>(необов’язково)</span></label>
          <Controller name="course" control={control} render={({ field }) => (
            <CustomSelect id="trial-course" options={courseOptions} placeholder="Допоможіть обрати" value={field.value} onChange={field.onChange} onBlur={field.onBlur} />
          )} />
        </div>
      )}

      {courseTitle && <p className="form-course form-wide">Курс: <strong>{courseTitle}</strong></p>}

      <div className="form-field form-wide">
        <label htmlFor="trial-wishes">Побажання <span>(необов’язково)</span></label>
        <textarea id="trial-wishes" placeholder="Розкажіть, що важливо врахувати" aria-invalid={!!errors.wishes} aria-describedby={errors.wishes ? "trial-wishes-error" : undefined} {...register("wishes")} />
        {errors.wishes && <span className="form-error" id="trial-wishes-error">{errors.wishes.message}</span>}
      </div>

      <button className="button button--primary form-wide" type="submit">Надіслати заявку</button>
      {isSubmitSuccessful && <div className="form-success form-wide" role="status">Дані перевірено. Надсилання підключимо згодом.</div>}
      {isSubmitSuccessful && <button className="form-reset form-wide" type="button" onClick={() => reset()}>Заповнити ще раз</button>}
    </form>
  );
}
