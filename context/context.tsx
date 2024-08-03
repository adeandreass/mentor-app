"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IOnBoardingContextData {
  truckingNumber: string;
  setTruckingNumber: (value: string) => void;
  teacherProfileId: string;
  setTeacherProfileId: (value: string) => void;
}

const initialData = {
  truckingNumber: "",
  teacherProfileId: "",
  setTruckingNumber: () => {},
  setTeacherProfileId: () => {},
};

const OnBoardingContext = createContext<IOnBoardingContextData>(initialData);

export function OnboardingContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [truckingNumber, setTruckingNumber] = useState("VX5PNQ89KO");
  const [teacherProfileId, setTeacherProfileId] = useState(
    "66acb53d6b3962a11d16309e"
  );

  const contextValues = {
    truckingNumber,
    setTruckingNumber,
    teacherProfileId,
    setTeacherProfileId,
  };

  return (
    <OnBoardingContext.Provider value={contextValues}>
      {children}
    </OnBoardingContext.Provider>
  );
}

export function useOnboardingContext() {
  return useContext(OnBoardingContext);
}

export default OnBoardingContext;
