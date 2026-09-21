"use client";

import { Dialog } from "@smartum/ui";
import { createContext, useContext, useState, type ReactNode } from "react";
import { TrialForm } from "@/components/trial-form";

type TrialDialogContextValue = { openTrial: (courseTitle?: string) => void };
const TrialDialogContext = createContext<TrialDialogContextValue | null>(null);

export function TrialDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState<string>();
  const [formKey, setFormKey] = useState(0);

  const openTrial = (selectedCourse?: string) => {
    setCourseTitle(selectedCourse);
    setFormKey((key) => key + 1);
    setOpen(true);
  };

  return (
    <TrialDialogContext value={{ openTrial }}>
      {children}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="trial-dialog__backdrop" />
          <Dialog.Viewport className="trial-dialog__viewport">
            <Dialog.Popup className="trial-dialog__popup">
              <Dialog.Close className="trial-dialog__close" aria-label="Закрити діалог">×</Dialog.Close>
              <Dialog.Title className="trial-dialog__title">Запис на пробне заняття</Dialog.Title>
              <Dialog.Description className="trial-dialog__description">Залиште контакти — ми допоможемо з програмою та розкладом.</Dialog.Description>
              <TrialForm courseTitle={courseTitle} key={formKey} />
            </Dialog.Popup>
          </Dialog.Viewport>
        </Dialog.Portal>
      </Dialog.Root>
    </TrialDialogContext>
  );
}

export function TrialDialogTrigger({ children, className, courseTitle, tabIndex }: { children: ReactNode; className?: string; courseTitle?: string; tabIndex?: number }) {
  const context = useContext(TrialDialogContext);
  if (!context) throw new Error("TrialDialogTrigger must be used inside TrialDialogProvider");
  return <button className={className} type="button" tabIndex={tabIndex} onClick={() => context.openTrial(courseTitle)}>{children}</button>;
}
