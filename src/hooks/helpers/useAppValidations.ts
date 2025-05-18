import { lazy, string, object, number, array, ref, mixed } from "yup";
import { cleanPhoneNumber, extractNumbers } from "@/utils/common";

const useAppValidations = () => {
  const getSelectValidation = () =>
    lazy((output) =>
      typeof output === "object"
        ? output == null
          ? string().required("Majburiy maydon")
          : object().shape({
              label: string().required("Majburiy maydon"),
              value: string().required("Majburiy maydon"),
            })
        : string().required("Majburiy maydon").nullable()
    );

  const getPhoneNumberValidation = () =>
    string()
      .transform((value) =>
        value === undefined ? "" : cleanPhoneNumber(value)
      )
      .required("Majburiy maydon")
      .min(12, "Phone number must be at least 12 characters");

  const getEmailValidation = () =>
    string().email("Yaroqsiz email").required("Majburiy maydon");

  const getNumberValidation = () =>
    number()
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      )
      .required("Majburiy maydon")
      .typeError("Faqat raqam kiritishingiz kerak");
  const getStringValidation = (str?: string) =>
    string()
      .test(
        "not-empty",
        "Majburiy maydon",
        (value) => value !== undefined && value.trim() !== ""
      )
      .required("Majburiy maydon")
      .typeError("Faqat matn kiritishingiz kerak");

  /**
   * Creates a Yup validation schema for files where only the id field is required
   * @param {number} min - Minimum number of files required (default: 0)
   * @param {number} max - Maximum number of files allowed (default: Infinity)
   * @param {boolean} exactlyOne - If true, enforces exactly one file (overrides min/max)
   * @returns {Object} Yup validation schema
   */
  const getFilesValidation = (min = 0, max = Infinity, exactlyOne = false) => {
    const fileSchema = object().shape({
      id: string().required("File ID is required"),
      // Other fields are optional
      companyLogoId: mixed().nullable(),
      createdAt: string().nullable(),
      filename: string().nullable(),
      mimeType: string().nullable(),
      originalName: string().nullable(),
      path: string().nullable(),
      reviewPhotoId: mixed().nullable(),
      size: number().nullable(),
      userId: mixed().nullable(),
    });

    // If exactlyOne is true, set both min and max to 1
    if (exactlyOne) {
      min = 1;
      max = 1;
    }

    return array()
      .of(fileSchema)
      .min(
        min,
        min === 1 ? "One file is required" : `At least ${min} files required`
      )
      .max(
        max,
        max === 1
          ? "Only one file is allowed"
          : `Maximum of ${max} files allowed`
      )
      .required("Files array is required");
  };

  /**
 * Creates a Yup validation schema for URL fields
 * @param {boolean} required - Whether the URL is required (default: true)
 * @param {string} message - Custom error message for required URLs (default: 'URL is required')
 * @param {string} invalidMessage - Custom error message for invalid URLs (default: 'Please enter a valid URL')
 * @returns {Object} Yup validation schema
 */
const getUrlValidation = (
  required = true, 
  message = 'URL is required',
  invalidMessage = 'Please enter a valid URL'
) => {
  // Basic URL validation pattern that doesn't require http/https protocol
  const urlPattern = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/;
  
  let schema = string()
    .matches(urlPattern, invalidMessage);
    
  if (required) {
    schema = schema.required(message);
  } else {
    schema = schema.nullable();
  }
  
  return schema;
};

  return {
    getSelectValidation,
    getNumberValidation,
    getPhoneNumberValidation,
    getEmailValidation,
    getStringValidation,
    getFilesValidation,
    getUrlValidation
  };
};

export default useAppValidations;
