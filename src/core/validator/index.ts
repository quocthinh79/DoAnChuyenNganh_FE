import validator from "validator";
import * as z from "zod";

export const ZodError = z.ZodError;

const schemaPassword = z.string().min(6, "Mật khẩu phải có tối thiểu 6 kí tự");
const schemaUsername = z
  .string()
  .min(3, "Tên đăng nhập phải nhiều hơn 3 kí tự")
  .max(20, "Tên đăng nhập không được quá 20 kí tự");
const schemaEmail = z.string().email("Email không đúng định dạng");
const schemaPhoneNumber = z
  .string()
  .refine(
    (arg: string) => validator.isMobilePhone(arg, "vi-VN"),
    "Số điện thoại không hợp lệ"
  );
const schemaName = z.string().refine(validator.isAlpha, "Tên không hợp lệ");

export const schemaLogin = z.object({
  username: schemaUsername,
  password: schemaPassword,
});

export const schemaForgotPassword = z.object({
  username: schemaUsername,
});

export const schemaRegister = z.object({
  username: schemaUsername,
  password: schemaPassword,
  rePassword: schemaPassword,
  email: schemaEmail,
});

export const schemaChangePassword = z.object({
  newPassword: schemaPassword,
});

export const schemaInformationAccount = z.object({
  fullName: schemaName,
  phone: schemaPhoneNumber,
  email: schemaEmail,
});

export const handleSchemaError = (error: any, form: any) => {
  if (error instanceof ZodError) {
    const errorMessages = error.issues;
    errorMessages.map((error: any) => {
      form.setFields([
        {
          name: error.path[0],
          errors: [`${error.message}`],
        },
      ]);
    });
  }
};
