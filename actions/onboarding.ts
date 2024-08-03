"use server"

import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types/types";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import EmailTemplate from "@/components/Emails/email-template";
import { TeacherProfile } from "@prisma/client";
export async function createTeacherProfile(formData: any) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { dob, firstName, gender, lastName, middleName, page, trackingNumber, userId, } = formData;
  try {
    const newProfile = await prismaClient.teacherProfile.create({
      data: {
        dob, firstName, gender, lastName, middleName, page, trackingNumber, userId,
      },
    });
    console.log(newProfile);
    return {
      data: newProfile,
      status: 201,
      error: null
    }
  } catch (error) {
    console.log(error);
    return {
      data: null,
      status: 500,
      error: "Something went wrong"
    };
  }
}

export async function updateTeacherProfile(id: string | undefined, data: any) {
  if (id) {
    try {
      const updatedProfile = await prismaClient.teacherProfile.update({
        where: {
          id
        },
        data,
      });
      console.log(updatedProfile);
      return {
        data: updatedProfile,
        status: 201,
        error: null
      }
    } catch (error) {
      console.log(error)
      return {
        data: null,
        status: 500,
        error: "Profile was not updated"
      }
    }
  }
}

export async function getApplicationByTrack(trackingNumber: string) {
  if (trackingNumber) {
    try {
      const existingProfile = await prismaClient.teacherProfile.findUnique({
        where: {
          trackingNumber,
        }
      });
      if (!existingProfile) {
        return {
          data: null,
          status: 404,
          error: "Wrong Trucking Number"
        };
      }
      return {
        data: existingProfile,
        status: 200,
        error: null
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        status: 500,
        error: "Something went wrong"
      };
    }
  }
}