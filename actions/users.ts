"use server"

import { prismaClient } from "@/lib/db";
import { RegisterInputProps } from "@/types/types";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Resend } from "resend";
import EmailTemplate from "@/components/Emails/email-template";

export async function createUser(formData: RegisterInputProps) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { fullName, email, role, phone, password, plan } = formData;
  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        data: null,
        error: `User with this email ( ${email})  already exists in the Database`,
        status: 409,
      };
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await prismaClient.user.create({
      data: {
        name: fullName,
        email,
        phone,
        password: hashedPassword,
        role,
        plan,
        token: userToken,
      },
    });
    const token = newUser.token;
    const userId = newUser.id;
    const firstName = newUser.name.split(" ")[0];
    const linkText = "Verify your Account ";
    const message =
      "Terima kasih telah mendaftar di LearnMate. Untuk menyelesaikan pendaftaran dan memverifikasi alamat email Anda, silakan masukkan kode verifikasi 6 digit berikut di situs web kami :";
    const sendMail = await resend.emails.send({
      from: "LearnMate <onboarding@resend.dev>",
      to: email,
      subject: "Verifikasi alamat email Anda",
      react: EmailTemplate({ firstName, token, linkText, message }),
    });
    console.log(token);
    console.log(sendMail);
    console.log(newUser);
    return {
      data: newUser,
      error: null,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong",
    };
  }
}

export async function getUserById(id: string) {
  if (id) {
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          id,
        }
      })
      return user
    } catch (error) {
      console.log(error);
    }
  }
}

export async function updateUserById(id: string) {
  if (id) {
    try {
      const updatedUser = await prismaClient.user.update({
        where: {
          id
        },
        data: {
          isVerfied: true,
        },
      });
      return updatedUser;
    } catch (error) {
      console.log(error)
    }
  }
}