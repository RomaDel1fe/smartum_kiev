"use client";

import { Select } from "@smartum/ui";

export type SelectOption = { label: string; value: string };

type CustomSelectProps = {
  id: string;
  options: SelectOption[];
  placeholder: string;
  value: string;
  onBlur?: () => void;
  onChange: (value: string) => void;
  invalid?: boolean;
  describedBy?: string;
};

export function CustomSelect({ id, options, placeholder, value, onBlur, onChange, invalid, describedBy }: CustomSelectProps) {
  return (
    <div className="custom-select">
      <Select.Root items={options} value={value || null} onValueChange={(nextValue) => onChange(nextValue ?? "")}>
        <Select.Trigger id={id} className="custom-select__trigger" onBlur={onBlur} aria-invalid={invalid} aria-describedby={describedBy}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon className="custom-select__icon" aria-hidden="true">⌄</Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner className="custom-select__positioner" sideOffset={6} align="start">
            <Select.Popup className="custom-select__popup">
              <Select.List>
                {options.map((option) => (
                  <Select.Item className="custom-select__item" value={option.value} key={option.value}>
                    <Select.ItemText>{option.label}</Select.ItemText>
                    <Select.ItemIndicator className="custom-select__indicator">✓</Select.ItemIndicator>
                  </Select.Item>
                ))}
              </Select.List>
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>
      {value && <button className="custom-select__clear" type="button" aria-label="Очистити вибране значення" onClick={() => onChange("")}>×</button>}
    </div>
  );
}
