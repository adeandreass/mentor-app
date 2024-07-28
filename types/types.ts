import { UserRole } from "@prisma/client";

export type ServiceProps = { title: string; image: string; slug: string };

export type RegisterInputProps = {
    fullName: string;
    email: string;
    password: string;
    phone: string;
    role: any;
    plan: any;
};

export type LoginInputProps = {
    email: string;
    password: string;
};
export type BioDataFormProps = {
    firstName: string;
    lastName: string;
    middleName?: string;
    dob?: Date;
    gender: string;
    page: string;
}

export type ProfileFormProps = {
    profilePicture?: string;
    bio: string;
    page: string;
    teacherLicense: string;
    teacherLicenseExpiry?: Date;
    yearsOfExperience: number;
}

export type ContactFormProps = {
    email: string;
    phone: string;
    country: string;
    city: string;
    state: string;
    page: string;
}

export type EducationFormProps = {
    educationSchool: string;
    graduationYear: number;
    primarySpecalization: string;
    otherSpecalities: string[];
    boardCertificates: string[];
    page: string;
}

export type PraticeFormProps = {
    schoolName: string;
    schoolAddress: string;
    schoolContactNumber: string;
    schoolEmailAddress: string;
    schollWebsite?: string;
    schoolHoursOfOperation: number;
    servicedOffered: string[];
    insuranceAccepted: string;
    languagesSpoken: string[];
    page: string;
}

export type AdditionalFormProps = {
    educationHistory: string;
    research: string;
    accomplishments: string;
    additionalDocs: string[];
    page: string;
}